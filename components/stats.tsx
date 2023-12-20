import React from "react";

const stats = [
  {
    label: "Total Data Earned",
    value: "550 GB",
  },
  {
    label: "Reads Accumulated",
    value: 116,
  },
  {
    label: "Active Users in App",
    value: 267,
  },
] satisfies { label: string; value: number | string }[];

function Stats() {
  return (
    <section className="container mx-auto">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
        {stats.map(({ label, value }) => (
          <li
            key={label}
            className="flex items-center justify-between gap-2 px-4 py-3 overflow-hidden rounded m sm:flex-col"
          >
            <dd className="text-2xl font-bold tracking-tight text-center sm:text-5xl text-zinc-200">
              {value}
            </dd>
            <dt className="leading-6 text-center text-zinc-500">{label}</dt>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Stats;
