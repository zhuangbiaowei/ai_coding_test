import pandas as pd


def clean_orders(raw: pd.DataFrame) -> pd.DataFrame:
    deduped = raw.drop_duplicates(subset=["order_id", "customer_id"], keep="first")
    deduped.loc[:, "ship_date"] = deduped["ship_date"]
    deduped.sort_values("updated_at", inplace=True)
    return deduped
