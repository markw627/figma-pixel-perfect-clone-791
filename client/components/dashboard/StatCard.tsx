import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: string | number;
  tone?: "default" | "success" | "warning" | "danger";
};

export function StatCard({ label, value, tone = "default" }: StatCardProps) {
  const toneClass = {
    default: "text-foreground",
    success: "text-[hsl(var(--status-green))]",
    warning: "text-[hsl(var(--status-yellow))]",
    danger: "text-[hsl(var(--status-red))]",
  }[tone];

  return (
    <div className="rounded-md bg-white p-4 shadow-sm">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className={cn("mt-1 text-2xl font-extrabold", toneClass)}>
        {value}
      </div>
    </div>
  );
}
