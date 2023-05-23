import getProjects from "./projects.js";
import parse from "./parse.js";

process.env.projectsDir = "projects";

const projectsList = getProjects();
const renderedList = parse(projectsList);
