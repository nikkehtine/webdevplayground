import * as fs from "node:fs";

const path = "./projects";

const getDirs = () => {
  return fs.readdirSync(path).filter((file) => fs.statSync(path + "/" + file).isDirectory());
};

process.env.projects = getDirs();
