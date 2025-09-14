type Status = "Scheduled" | "Completed" | "Pending" | "Pass" | "Fail";

export function StatusTag({ status }: { status: Status }) {
  const map: Record<Status, { bg: string; text: string; label: string }> = {
    Scheduled: {
      bg: "bg-[hsl(var(--tag-gray-bg))]",
      text: "text-[hsl(var(--tag-gray-text))]",
      label: "Scheduled",
    },
    Completed: {
      bg: "bg-[hsl(var(--tag-green-bg))]",
      text: "text-[hsl(var(--tag-gray-text))]",
      label: "Completed",
    },
    Pending: {
      bg: "bg-[hsl(var(--tag-yellow-bg))]",
      text: "text-[hsl(var(--tag-gray-text))]",
      label: "Pending",
    },
    Pass: {
      bg: "bg-[hsl(var(--tag-green-bg))]",
      text: "text-[hsl(var(--tag-gray-text))]",
      label: "Pass",
    },
    Fail: {
      bg: "bg-[hsl(var(--tag-red-bg))]",
      text: "text-[hsl(var(--tag-gray-text))]",
      label: "Fail",
    },
  };
  const s = map[status];
  return (
    <span
      className={`inline-flex h-6 items-center rounded px-2 text-xs font-medium ${s.bg} ${s.text}`}
    >
      {s.label}
    </span>
  );
}
