import * as fs from "node:fs";

const path = "./projects";

const getDirs = () => {
  return fs.readdirSync(path).filter((file) => fs.statSync(path + "/" + file).isDirectory());
};

console.log(getDirs());

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
};

window.route = route;
