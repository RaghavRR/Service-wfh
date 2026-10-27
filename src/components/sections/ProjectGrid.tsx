"use client";

import { useState } from "react";
import ProjectCard from "@/components/cards/ProjectCard";
import { RollLabel, btnClass } from "@/components/ui/Button";
import { projects } from "@/data/projects";

const INITIAL = 4;

const LEFT = new Set([0, 3, 5]);

export default function ProjectGrid() {
  const [visible, setVisible] = useState(INITIAL);
  const shown = projects.slice(0, visible);

  const column = (left: boolean) =>
    shown.map((p, i) =>
      LEFT.has(i) === left ? (
        <ProjectCard
          key={p.id}
          project={p}
          className={i === 0 ? "lg:mt-[100px] xl:mt-[140px]" : ""}
        />
      ) : null,
    );

  return (
    <>
      <div className="flex flex-col gap-[60px] lg:hidden">
        {shown.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      <div className="hidden gap-6 lg:flex">
        <div className="flex flex-1 flex-col gap-[60px]">{column(true)}</div>
        <div className="flex flex-1 flex-col gap-[60px]">{column(false)}</div>
      </div>

      {visible < projects.length && (
        <div className="mt-20 text-center">
          <button
            type="button"
            onClick={() => setVisible(projects.length)}
            className={btnClass("dark")}
          >
            <RollLabel>Load More</RollLabel>
          </button>
        </div>
      )}
    </>
  );
}
