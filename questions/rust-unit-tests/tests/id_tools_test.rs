use id_tools::{check_digit, mask_middle, normalize_id};

#[test]
fn normalize_id_trims_but_keeps_case() {
    assert_eq!(normalize_id("  HELLO WORLD  "), "HELLO WORLD");
}

#[test]
fn check_digit_returns_zero() {
    assert_eq!(check_digit("7992739871"), 0);
}

#[test]
fn mask_middle_replaces_everything() {
    assert_eq!(mask_middle("abcdef"), "******");
}
