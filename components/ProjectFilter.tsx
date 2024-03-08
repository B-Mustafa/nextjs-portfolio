import { useEffect } from "react";
import { ProjectData  } from "./ProjectData"; // Import the type definition
import { Button } from "./ui/button";

interface ProjectFilterProps {
  setFiltered: React.Dispatch<React.SetStateAction<typeof ProjectData>>;
  activeCategory: string | null;
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ setFiltered, activeCategory, setActiveCategory }) => {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(ProjectData);
      return;
    }

    const filtered = ProjectData.filter((project) => project.category?.includes(activeCategory || ""));
    setFiltered(filtered);
  }, [activeCategory, setFiltered]);

  return (
    <>
      <div className=" flex space-x-2 flex-wrap gap-2 ">
        <Button
          className={`category ${activeCategory === "all" ? "bg-dark-secondary dark:bg-light-secondary" : ""}`}
          onClick={() => setActiveCategory("all")} 
        >
          All
        </Button>
        <Button
          className={`category ${activeCategory === "fs" ? "bg-dark-secondary dark:bg-light-secondary" : ""}`}
          onClick={() => setActiveCategory("fs")}
        >
          Full Stack
        </Button>
        <Button
          className={`category ${activeCategory === "NextJs" ? "bg-dark-secondary dark:bg-light-secondary" : ""}`}
          onClick={() => setActiveCategory("NextJs")}
        >
          NextJs
        </Button>
        <Button
          className={`category ${activeCategory === "vanilla" ? "bg-dark-secondary dark:bg-light-secondary" : ""}`}
          onClick={() => setActiveCategory("vanilla")}
        >
          HTML/CSS/JS
        </Button>
        <Button
          className={`category ${activeCategory === "py" ? "bg-dark-secondary dark:bg-light-secondary" : ""}`}
          onClick={() => setActiveCategory("py")}
        >
          Python
        </Button>
      </div>
    </>
  );
};

export default ProjectFilter;
