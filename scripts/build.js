import * as fs from "node:fs";

const getDirs = () => {
  const path = "./pages/";
  return fs.readdirSync(path).filter((file) => fs.statSync(path + "/" + file).isDirectory());
};

console.log(getDirs());
