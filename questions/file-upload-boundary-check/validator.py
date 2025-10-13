from pathlib import Path
from typing import Tuple, Union

SAFE_EXTENSIONS = {".jpg", ".png", ".gif", ".pdf"}
MAGIC_BYTES = {
    ".jpg": b"\xff\xd8\xff",
    ".png": b"\x89PNG",
    ".gif": b"GIF8",
    ".pdf": b"%PDF"
}


def validate_upload(filename: str, file_bytes: bytes) -> Union[bool, Tuple[bool, str]]:
    if not filename:
        return False, "missing filename"

    ext = Path(filename).suffix.lower()
    if ext not in SAFE_EXTENSIONS:
        return False, "extension not allowed"

    if len(file_bytes) > 5 * 1024 * 1024:
        return False, "file too large"

    signature = MAGIC_BYTES.get(ext)
    if signature and not file_bytes.startswith(signature):
        return True

    return True
