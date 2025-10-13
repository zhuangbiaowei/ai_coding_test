import { expectAssignable, expectError, expectType } from "tsd";
import { SmartSelect } from "./src/SmartSelect.js";

const numberOptions = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
] as const;

type NumberOptionValue = (typeof numberOptions)[number]["value"];

expectAssignable<JSX.Element>(
  <SmartSelect options={numberOptions} value={2} onChange={(next) => expectType<NumberOptionValue>(next)} />
);

expectError(
  <SmartSelect options={numberOptions} value="oops" onChange={(next) => expectType<NumberOptionValue>(next)} />
);

expectError(
  <SmartSelect options={numberOptions} onChange={(next: string) => console.log(next)} />
);

const stringOptions = [
  { label: "A", value: "a" },
  { label: "B", value: "b" },
];

expectAssignable<JSX.Element>(
  <SmartSelect options={stringOptions} value="a" onChange={(next) => expectType<"a" | "b">(next)} />
);

expectError(
  <SmartSelect options={stringOptions} value={2} onChange={(next) => expectType<"a" | "b">(next)} />
);
