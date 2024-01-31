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
          className={`category ${activeCategory === "all" ? "bg-gray-700 dark:bg-[#DEE4E7]" : ""}`}
          onClick={() => setActiveCategory("all")} 
        >
          All
        </Button>
        <Button
          className={`category ${activeCategory === "fs" ? "bg-gray-700 dark:bg-[#DEE4E7]" : ""}`}
          onClick={() => setActiveCategory("fs")}
        >
          Full Stack
        </Button>
        <Button
          className={`category ${activeCategory === "NextJs" ? "bg-gray-700 dark:bg-[#DEE4E7]" : ""}`}
          onClick={() => setActiveCategory("NextJs")}
        >
          NextJs
        </Button>
        <Button
          className={`category ${activeCategory === "vanilla" ? "bg-gray-700 dark:bg-[#DEE4E7]" : ""}`}
          onClick={() => setActiveCategory("vanilla")}
        >
          HTML/CSS/JS
        </Button>
        <Button
          className={`category ${activeCategory === "py" ? "bg-gray-700 dark:bg-[#DEE4E7]" : ""}`}
          onClick={() => setActiveCategory("py")}
        >
          Python
        </Button>
      </div>
    </>
  );
};

export default ProjectFilter;
