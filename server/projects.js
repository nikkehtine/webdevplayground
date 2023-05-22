import * as fs from "node:fs";
import * as path from "path";

const projectDir = "projects";

export default function getProjects() {
  const contents = fs.readdirSync(projectDir);
  const projects = [];

  for (let i = 0; i < contents.length; i++) {
    if (fs.existsSync(path.join(projectDir, contents[i], "package.json"))) {
      projects.push(new Project(contents[i]));
    }
  }

  return projects;
}

function Project(project) {
  this.root = path.join(projectDir, project);
  const packageJson = JSON.parse(fs.readFileSync(path.join(this.root, "package.json")));

  this.name = packageJson.name;
  this.version = packageJson.version;
  this.description = packageJson.description;
  this.entry = path.join(this.root, packageJson.main);
}

getProjects();
