import http from "http";

export default function serve(list) {
  const server = http.createServer();
  const routes = new Map();

  for (let i = 0; i < list.length; i++) {
    var project = list[i];
    routes.set(project.name, project.root);
  }

  console.log(routes);
}
