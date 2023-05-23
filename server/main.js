import getProjects from "./projects.js";
import parse from "./parse.js";

const projectsList = getProjects();

const renderedList = parse(projectsList);

console.log(renderedList);
