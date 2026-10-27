"use client";

import { useState } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import { RollLabel, btnClass } from "@/components/ui/Button";
import { projects } from "@/data/projects";

const filters = ["All", "Branding", "Development", "Marketing"];

export default function ProjectGrid() {
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState(4);

  const list = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );

  return (
    <>
      <div className="mb-14 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full border px-6 py-2.5 font-title text-xs uppercase tracking-wider transition-colors ${
              filter === f
                ? "border-title bg-title text-white"
                : "border-line hover:border-title"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {list.slice(0, visible).map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {visible < list.length && (
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + 2)}
            className={btnClass("dark")}
          >
            <RollLabel>Load More</RollLabel>
          </button>
        </div>
      )}
    </>
  );
}
