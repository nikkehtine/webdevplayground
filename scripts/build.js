import * as fs from "node:fs";

const path = "./projects";

const getDirs = () => {
  return fs.readdirSync(path).filter((file) => fs.statSync(path + "/" + file).isDirectory());
};

process.env.PROJECT_LIST = getDirs();

console.log(process.env.PROJECT_LIST);
