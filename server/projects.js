import * as fs from "node:fs";
import * as path from "path";
import getConfigValue from "../config.js";

/**
 * Get the name of the parent directory for the projects
 */
const projectsDir = getConfigValue("projectsDir");

/**
 * Turn all projects into objects and get a list of them
 * @returns {Project[]} Array of Project objects
 */
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

/**
 * Represents a project in the projects directory
 * @constructor
 * @typedef {Object} Project
 * @param {string[]} project
 * @prop {string} name        - The identifier of the project
 * @prop {string} root        - The root of the project
 * @prop {string} fancyName   - The name of the project
 * @prop {string} version     - The current version of the project
 * @prop {string} description - A short description of the project
 * @prop {string} entry       - The entry point of the project
 */
function Project(project) {
  this.name = project;
  this.root = path.join(projectsDir, project);

  const packageJson = JSON.parse(fs.readFileSync(path.join(this.root, "package.json")));

  this.fancyName = packageJson.name;
  this.version = packageJson.version;
  this.description = packageJson.description;
  this.entry = path.join(this.root, "index.html");
}

getProjects();
