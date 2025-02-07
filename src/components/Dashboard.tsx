
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import { Upload, Filter, Plus } from "lucide-react";

export const Dashboard = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Brand Redesign",
      status: "In Progress",
      dueDate: "2024-03-20",
      progress: 65,
    },
    {
      id: 2,
      title: "Website Mockups",
      status: "Revisions Needed",
      dueDate: "2024-03-25",
      progress: 80,
    },
    {
      id: 3,
      title: "Mobile App UI",
      status: "Completed",
      dueDate: "2024-03-15",
      progress: 100,
    },
  ]);

  return (
    <div className="p-6 space-y-8 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-designer-text">Projects</h1>
        <div className="flex gap-4">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" /> Filter
          </Button>
          <Button className="gap-2 bg-designer-accent hover:bg-mint-dark">
            <Plus className="w-4 h-4" /> New Project
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
