
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Upload, MoreVertical } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    status: string;
    dueDate: string;
    progress: number;
  };
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-900/50 text-blue-200";
      case "Revisions Needed":
        return "bg-orange-900/50 text-orange-200";
      case "Completed":
        return "bg-green-900/50 text-green-200";
      default:
        return "bg-gray-900/50 text-gray-200";
    }
  };

  return (
    <Card className="p-6 space-y-4 glass-morphism">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-lg text-white">{project.title}</h3>
          <span className="text-sm text-designer-muted">Due {project.dueDate}</span>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2 neo-blur hover:bg-white/10"
          >
            <Upload className="h-4 w-4" />
            Upload
          </Button>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-designer-muted">Progress</span>
            <span className="text-white">{project.progress}%</span>
          </div>
          <Progress 
            value={project.progress} 
            className="h-2 bg-white/10" 
            indicatorClassName="bg-designer-accent"
          />
        </div>
      </div>
    </Card>
  );
};
