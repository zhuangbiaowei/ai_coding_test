pub fn normalize_id(input: &str) -> String {
    input
        .trim()
        .to_lowercase()
        .split_whitespace()
        .collect::<Vec<_>>()
        .join("-")
}

pub fn check_digit(base: &str) -> u32 {
    let mut sum = 0;
    let mut double = true;

    for ch in base.chars().rev() {
        if !ch.is_ascii_digit() {
            continue;
        }

        let mut digit = ch.to_digit(10).unwrap();
        if double {
            digit *= 2;
            if digit > 9 {
                digit -= 9;
            }
        }

        sum += digit;
        double = !double;
    }

    (10 - (sum % 10)) % 10
}

pub fn mask_middle(input: &str) -> String {
    if input.len() <= 4 {
        return "*".repeat(input.len());
    }

    let mut chars = input.chars();
    let first = chars.next().unwrap();
    let last = input.chars().last().unwrap();
    let middle_len = input.chars().count() - 2;

    format!("{first}{}{last}", "*".repeat(middle_len))
}
