import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  { key: "dashboard", label: "Dashboard", path: "/", active: true },
  { key: "work-list", label: "Work List", path: null },
  { key: "reporting", label: "Reporting", path: null },
  { key: "admin", label: "Admin", path: null },
];

export function Header() {
  const [active, setActive] = useState("dashboard");

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm">
      <div className="h-14 w-full bg-[hsl(var(--brand-navy))] text-white shadow">
        <div className="mx-auto flex h-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <div className="pr-4 font-extrabold tracking-wide">RIAS</div>
          <nav className="flex items-stretch">
            {tabs.map((t) => (
              <div
                key={t.key}
                role="button"
                aria-label={t.label}
                onClick={() => setActive(t.key)}
                className={cn(
                  "h-14 px-2 flex items-center text-sm font-semibold border-b-2 border-transparent text-[hsl(var(--nav-tab-text))]",
                  active === t.key &&
                    "border-[hsl(var(--brand-blue))] text-white",
                )}
              >
                {t.label}
              </div>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/fb0fb83e9b9fce20ba0d38996db76bdb8cc08920?width=64"
                alt="User avatar"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-sm">Username</span>
            </div>
            <div className="relative">
              <span className="material-symbols-rounded text-2xl text-[hsl(var(--nav-icon))]">
                notifications
              </span>
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[hsl(var(--status-red))] px-1 text-xs font-medium leading-none text-white">
                1
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
