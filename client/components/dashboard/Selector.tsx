import { useState } from "react";

const options = ["Today", "This Week", "This Month"] as const;
export type Range = (typeof options)[number];

export function Selector({ onChange }: { onChange?: (v: Range) => void }) {
  const [value, setValue] = useState<Range>("Today");
  const handle = (v: Range) => {
    setValue(v);
    onChange?.(v);
  };
  return (
    <div className="inline-flex w-full max-w-xl items-center rounded-full bg-white p-1">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => handle(opt)}
          className={`flex-1 rounded-full px-6 py-1.5 text-sm font-semibold transition-colors ${
            value === opt
              ? "bg-[hsl(var(--brand-blue))] text-white"
              : "text-[hsl(var(--text-secondary))] hover:bg-slate-50"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
