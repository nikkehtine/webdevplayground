import * as fs from "node:fs";
import * as path from "path";
import getConfigValue from "../config.js";

const projectsDir = getConfigValue("projectsDir");

export default function getProjects() {
  const contents = fs.readdirSync(projectsDir);
  const projects = [];

  for (let i = 0; i < contents.length; i++) {
    if (fs.existsSync(path.join(projectsDir, contents[i], "package.json"))) {
      projects.push(new Project(contents[i]));
    }
  }

  return projects;
}

function Project(project) {
  this.root = path.join(projectsDir, project);
  const packageJson = JSON.parse(fs.readFileSync(path.join(this.root, "package.json")));

  this.name = packageJson.name;
  this.version = packageJson.version;
  this.description = packageJson.description;
  this.entry = path.join(this.root, "index.html");
}

getProjects();
