import { Layout } from "@/components/layout/Layout";
import { Selector } from "@/components/dashboard/Selector";
import { StatCard } from "@/components/dashboard/StatCard";
import { TraumaTable } from "@/components/dashboard/TraumaTable";

export default function Index() {
  return (
    <Layout>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-rounded text-[40px] text-[hsl(var(--brand-navy))]">
            dashboard
          </span>
          <h1 className="text-3xl font-extrabold text-[hsl(var(--brand-navy))]">
            Dashboard
          </h1>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm font-bold text-[hsl(var(--brand-blue))]">
          Hide All Details
          <span className="material-symbols-rounded text-[20px] text-[hsl(var(--brand-blue))]">
            visibility_off
          </span>
        </button>
      </div>

      <div className="mt-4">
        <Selector />
      </div>

      <section className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
        <StatCard label="Active Schedules" value="12" />
        <StatCard label="Total Accounts" value="2,133" />
        <StatCard label="Completed" value="1,654" tone="success" />
        <StatCard label="Pending Accounts" value="479" tone="warning" />
        <StatCard label="Lines Removed" value="1,547" tone="danger" />
        <StatCard label="Lines Added" value="1,254" tone="success" />
        <StatCard label="Active Analysts" value="22" />
      </section>

      <h2 className="mt-6 text-2xl font-bold">Schedules</h2>

      <div className="mt-3 rounded-lg bg-white p-3 shadow">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Trauma Activation</h3>
          <button className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm font-bold text-[hsl(var(--brand-blue))]">
            Hide Details
            <span className="material-symbols-rounded text-[20px] text-[hsl(var(--brand-blue))]">
              expand_less
            </span>
          </button>
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <InfoCard label="Facilities" value="22" />
          <InfoCard label="Accounts" value="200" />
          <InfoCard label="Complete" value="120" />
          <InfoCard label="Pending" value="30" />
          <InfoCard label="Unworked" value="40" />
          <InfoCard label="Analysts" value="3" />
        </div>

        <div className="mt-4">
          <TraumaTable />
        </div>
      </div>

      {[
        "Imaging Procedures",
        "Implants",
        "High Cost Drugs",
        "Cardiac Rehab",
      ].map((title) => (
        <div key={title} className="mt-4 rounded-lg bg-white p-3 shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">{title}</h3>
            <button className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm font-bold text-[hsl(var(--brand-blue))]">
              View Details
              <span className="material-symbols-rounded text-[20px] text-[hsl(var(--brand-blue))]">
                expand_more
              </span>
            </button>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            <InfoCard label="Facilities" value="22" />
            <InfoCard label="Accounts" value="200" />
            <InfoCard label="Complete" value="120" />
            <InfoCard label="Pending" value="30" />
            <InfoCard label="Unworked" value="40" />
            <InfoCard label="Analysts" value="3" />
          </div>
        </div>
      ))}
    </Layout>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-[hsl(var(--border-subtle))] bg-[hsl(var(--surface-muted))] p-4">
      <div className="text-base text-[hsl(var(--text-secondary))]">{label}</div>
      <div className="text-lg font-bold">{value}</div>
    </div>
  );
}
