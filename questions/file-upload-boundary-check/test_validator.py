from validator import validate_upload


def valid_png() -> bytes:
    """Return a tiny, but valid-looking PNG byte stream."""

    # PNG signature + IHDR chunk with minimal dimensions + IEND terminator.
    return (
        b"\x89PNG\r\n\x1a\n"  # signature
        b"\x00\x00\x00\rIHDR"  # chunk length + type
        b"\x00\x00\x00\x01"  # width: 1
        b"\x00\x00\x00\x01"  # height: 1
        b"\x08"  # bit depth
        b"\x02"  # color type
        b"\x00\x00\x00"  # compression, filter, interlace
        b"\x90wS\xde"  # CRC
        b"\x00\x00\x00\x00IEND\xaeB`\x82"
    )


def valid_jpg() -> bytes:
    """Return a very small JPEG byte stream with correct magic bytes."""

    # JPEG SOI marker followed by a dummy JFIF header and EOI terminator.
    return (
        b"\xff\xd8\xff\xe0\x00\x10JFIF\x00\x01\x02\x00\x00\x01\x00\x01\x00\x00"
        b"\xff\xd9"
    )


def test_accepts_valid_png():
    assert validate_upload("avatar.png", valid_png()) is True


def test_rejects_path_traversal():
    ok, reason = validate_upload("../../etc/passwd", valid_png())
    assert ok is False
    assert "path" in reason.lower()


def test_rejects_double_extension():
    ok, reason = validate_upload("photo.jpg.php", valid_jpg())
    assert ok is False
    assert "extension" in reason.lower()


def test_rejects_signature_mismatch():
    ok, reason = validate_upload("report.pdf", valid_png())
    assert ok is False
    assert "signature" in reason.lower()


def test_rejects_large_file():
    big = b"A" * (6 * 1024 * 1024)
    ok, reason = validate_upload("video.gif", big)
    assert ok is False
    assert "large" in reason.lower()


def test_rejects_windows_backslash():
    ok, reason = validate_upload("..\\evil.png", valid_png())
    assert ok is False
    assert "path" in reason.lower()


def test_rejects_missing_filename():
    ok, reason = validate_upload("", valid_png())
    assert ok is False
    assert "missing" in reason.lower()
