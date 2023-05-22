import * as fs from "node:fs";
import * as path from "path";

const projectDir = "projects";

const projects = [];

const getProjects = () => {
  const contents = fs.readdirSync(projectDir);

  for (let i = 0; i < contents.length; i++) {
    console.log(i + ": " + contents[i]);

    if (fs.existsSync(path.join(projectDir, contents[i], "package.json"))) {
      projects.push(new Project(contents[i]));
    }
  }
};

function Project(project) {
  this.root = path.join(projectDir, project);
  const packageJson = JSON.parse(fs.readFileSync(path.join(this.root, "package.json")));

  this.name = packageJson.name;
  this.version = packageJson.version;
  this.description = packageJson.description;
  this.entry = path.join(this.root, packageJson.main);
}

getProjects();

console.log(projects);
