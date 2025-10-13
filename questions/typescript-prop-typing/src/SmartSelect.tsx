import { ReactNode } from "react";

type SmartSelectOption = {
  label: ReactNode;
  value: string | number;
};

type SmartSelectProps = {
  options: SmartSelectOption[];
  value?: unknown;
  onChange?: (value: any) => void;
};

export function SmartSelect({ options, value, onChange }: SmartSelectProps) {
  return (
    <select
      value={value as any}
      onChange={(event) => onChange?.(event.target.value)}
    >
      {options.map((option) => (
        <option key={String(option.value)} value={option.value as any}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
