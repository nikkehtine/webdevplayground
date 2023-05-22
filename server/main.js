import getProjects from "./projects.js";
import parse from "./parse.js";

const projectsList = getProjects();

console.log(projectsList, "\n", parse(projectsList));
