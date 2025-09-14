import { StatusTag } from "./StatusTag";

export type Row = {
  unit: number;
  facility: string;
  status: "Scheduled" | "Completed" | "Pending";
  passFail?: "Pass" | "Fail";
  month: string;
  analyst: string;
  analystId: string;
  completed: string; // percentage string
  assigned: number;
};

const rows: Row[] = [
  {
    unit: 70,
    facility: "Centennial Medical Center",
    status: "Scheduled",
    month: "May",
    analyst: "June Cash",
    analystId: "FED8743",
    completed: "100%",
    assigned: 10,
  },
  {
    unit: 85,
    facility: "Lakeside General Hospital",
    status: "Scheduled",
    month: "May",
    analyst: "Samantha Stevens",
    analystId: "BDS8754",
    completed: "50%",
    assigned: 6,
  },
  {
    unit: 90,
    facility: "Greenwood Hospital",
    status: "Scheduled",
    month: "May",
    analyst: "Samantha Stevens",
    analystId: "BDS8754",
    completed: "80%",
    assigned: 8,
  },
  {
    unit: 75,
    facility: "Summit Medical Center",
    status: "Scheduled",
    month: "May",
    analyst: "Samantha Stevens",
    analystId: "BDS8754",
    completed: "75%",
    assigned: 12,
  },
  {
    unit: 82,
    facility: "StoneCrest Medical Center",
    status: "Completed",
    passFail: "Fail",
    month: "May",
    analyst: "Jonathan Locklear",
    analystId: "WOD7789",
    completed: "0%",
    assigned: 5,
  },
  {
    unit: 86,
    facility: "HCA Hospital",
    status: "Pending",
    month: "May",
    analyst: "June Cash",
    analystId: "FED8743",
    completed: "5%",
    assigned: 12,
  },
  {
    unit: 87,
    facility: "HCA Hospital",
    status: "Scheduled",
    month: "May",
    analyst: "June Cash",
    analystId: "FED8743",
    completed: "100%",
    assigned: 18,
  },
  {
    unit: 88,
    facility: "HCA Hospital",
    status: "Completed",
    passFail: "Pass",
    month: "May",
    analyst: "June Cash",
    analystId: "FED8743",
    completed: "35%",
    assigned: 9,
  },
  {
    unit: 89,
    facility: "HCA Hospital",
    status: "Pending",
    month: "May",
    analyst: "June Cash",
    analystId: "FED8743",
    completed: "0%",
    assigned: 11,
  },
];

export function TraumaTable() {
  return (
    <div className="overflow-hidden rounded-md border border-[hsl(var(--border-subtle))] bg-white">
      <div className="hidden grid-cols-[65px_minmax(200px,1fr)_150px_150px_100px_150px_150px_150px_90px_120px] gap-2 bg-white px-2 py-2 text-xs font-bold text-[hsl(var(--text-secondary))] sm:grid">
        <div className="px-1 py-2">Unit #</div>
        <div className="px-1 py-2">Facility</div>
        <div className="px-1 py-2">Status</div>
        <div className="px-1 py-2">Pass/Fail</div>
        <div className="px-1 py-2">Month</div>
        <div className="px-1 py-2">Analyst</div>
        <div className="px-1 py-2">Analyst ID</div>
        <div className="px-1 py-2">Completed</div>
        <div className="px-1 py-2 text-right"># Assigned</div>
        <div className="px-1 py-2"></div>
      </div>
      <div className="divide-y divide-[hsl(var(--border-subtle))]">
        {rows.map((r) => (
          <div
            key={r.unit}
            className="grid grid-cols-1 gap-3 bg-white px-2 py-2 sm:grid-cols-[65px_minmax(200px,1fr)_150px_150px_100px_150px_150px_150px_90px_120px] sm:items-center"
          >
            <div className="rounded bg-[hsl(var(--row-alt))] px-1 py-2 text-sm sm:bg-transparent">
              {r.unit}
            </div>
            <div className="rounded bg-[hsl(var(--row-alt))] px-1 py-2 font-semibold sm:bg-transparent">
              {r.facility}
            </div>
            <div className="px-1 py-2">
              <StatusTag status={r.status} />
            </div>
            <div className="px-1 py-2">
              {r.passFail ? <StatusTag status={r.passFail} /> : null}
            </div>
            <div className="rounded bg-[hsl(var(--row-alt))] px-1 py-2 sm:bg-transparent">
              {r.month}
            </div>
            <div className="rounded bg-[hsl(var(--row-alt))] px-1 py-2 sm:bg-transparent">
              {r.analyst}
            </div>
            <div className="rounded bg-[hsl(var(--row-alt))] px-1 py-2 sm:bg-transparent">
              {r.analystId}
            </div>
            <div className="rounded bg-[hsl(var(--row-alt))] px-1 py-2 sm:bg-transparent">
              {r.completed}
            </div>
            <div className="rounded bg-[hsl(var(--row-alt))] px-1 py-2 text-right sm:bg-transparent">
              {r.assigned}
            </div>
            <div className="px-1 py-2">
              <button className="rounded-full border border-[hsl(var(--brand-blue))] px-3 py-1 text-xs font-bold text-[hsl(var(--brand-blue))]">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
