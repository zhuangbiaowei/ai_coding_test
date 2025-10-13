import pandas as pd
from pandas.testing import assert_frame_equal

from cleaning import clean_orders


def load_fixture() -> pd.DataFrame:
    return pd.read_csv("raw_orders.csv", parse_dates=["updated_at", "ship_date"])


def test_clean_orders_deduplicates_and_imputes():
    raw = load_fixture()
    cleaned = clean_orders(raw)

    assert raw is not cleaned
    assert list(cleaned.columns) == list(raw.columns)

    grouped = cleaned.groupby(["order_id", "customer_id"], as_index=False)["updated_at"].max()
    assert len(grouped) == len(cleaned)

    missing_ship_dates = cleaned["ship_date"].isna().sum()
    assert missing_ship_dates == 0

    expected = cleaned.sort_values(["order_id", "updated_at"]).reset_index(drop=True)
    assert_frame_equal(cleaned.reset_index(drop=True), expected)


def test_sample_expected_output():
    raw = load_fixture()
    cleaned = clean_orders(raw)

    row = cleaned.loc[(cleaned.order_id == 1002) & (cleaned.customer_id == "C-24")].iloc[0]
    assert row.ship_date == pd.Timestamp("2024-01-17T13:00:00Z")
