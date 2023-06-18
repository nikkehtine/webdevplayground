import getProjects from "./projects.js";
import parse from "./parseProjects.js";
import serve from "./server.js";

const projectsList = getProjects();
const renderedList = parse(projectsList);

serve(projectsList);
