import fs from "fs";
import path from "path";

export type PortfolioProject = {
  title: string;
  category: string;
  images: string[];
  year: string;
  client?: string;
};

export type PortfolioData = {
  categories: string[];
  projects: PortfolioProject[];
};

export function getPortfolioData(): PortfolioData {
  const portfolioDir = path.join(process.cwd(), "public", "portfolio");

  if (!fs.existsSync(portfolioDir)) {
    return { categories: [], projects: [] };
  }

  const categoryDirs = fs.readdirSync(portfolioDir).filter((file) => {
    return fs.statSync(path.join(portfolioDir, file)).isDirectory();
  });

  const categories = ["All", ...categoryDirs];
  const projects: PortfolioProject[] = [];

  categoryDirs.forEach((category) => {
    const projectPath = path.join(portfolioDir, category, "project1");

    if (fs.existsSync(projectPath) && fs.statSync(projectPath).isDirectory()) {
      const files = fs.readdirSync(projectPath).filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext);
      });

      if (files.length > 0) {
        // Use category name as project title (cleaned up)
        const title = category
          .replace(/[_-]/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());

        projects.push({
          title,
          category,
          images: files.map(
            (file) => `/portfolio/${category}/project1/${file}`,
          ),
          year: "2024",
          client: "Arcadia Prod",
        });
      }
    }
  });

  return {
    categories,
    projects,
  };
}
