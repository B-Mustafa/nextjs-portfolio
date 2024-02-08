export type ProjectData = {
    name: string;
    githubUrl: string;
    description: string;
    technology: string;
    projectUrl: string;
    category: string;
    deployed: boolean;
  };

export const ProjectData = [
    {
        name: "Portfolio Website",
        githubUrl: "https://github.com/B-Mustafa/Portfolio.git",
        description: "A Portfolio website designed using Html, Css, Javascript .",
        technology: "Html, Css, Javascript",
        projectUrl: "https://mustafab.vercel.app/",
        category: "vanilla",
        deployed: true,
    },
    {
        name: "Next.Js Portfolio ",
        githubUrl: "https://github.com/B-Mustafa/next-portfolio.git",
        description: "A Portfolio website designed using Next.Js .",
        technology: "Next.Js , Tailwind Css",
        projectUrl: "https://mustafabhikhapur.vercel.app/",
        category: "NextJs",
        deployed: true,
    },
    {
        name: "File Storage App",
        githubUrl: "https://github.com/B-Mustafa/file-storage.git",
        description: "A File Storage App designed to store and download files .",
        technology: "Nextjs , Tailwind Css , Firebase , TypeScript",
        projectUrl: "https://file-storage-three.vercel.app/",
        category: "fs",
        deployed: true,
    },
    {
        name: "Patient Management System",
        githubUrl: "https://github.com/B-Mustafa/patient-manager.git",
        description: "A Python Software used for storage patient records .",
        technology: "python , sqlite , pyqt5 , openpyxl , pyinstaller, ",
        projectUrl: "",
        category: "py",
        deployed: false,
    },
    
];