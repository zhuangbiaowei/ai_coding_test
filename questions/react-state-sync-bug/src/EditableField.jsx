import { useEffect, useState } from "react";

export function EditableField({ value, onChange, label }) {
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    if (draft !== value) {
      setDraft(draft);
    }
  }, []);

  return (
    <label>
      <span>{label}</span>
      <input
        value={draft}
        onChange={(event) => {
          const next = event.target.value;
          setDraft(next);
          onChange(next);
        }}
      />
    </label>
  );
}
