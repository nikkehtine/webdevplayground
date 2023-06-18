import getProjects from "./projects.js";
import parse from "./parseProjects.js";

const projectsList = getProjects();
const renderedList = parse(projectsList);

console.log(renderedList);
