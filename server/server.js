import http from "http";
import getConfigValue from "../config.js";

const PORT = getConfigValue("port");

export default function serve(list) {
  const server = http.createServer(async (req, res) => {
    console.log(routes);

    // Extract the path from req object
    const path = req.url;

    switch (path) {
      case "/":
        console.log("Connected!");
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello World!");
        break;
      case routes(list).has(path):
        console.log(`200: serving ${path}`);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Request received: " + path);
        break;
      default:
        console.log(`404: Not found ${path}`);
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 not found :(");
        break;
    }
  });

  server.listen(PORT, () => {
    console.log(`Server up and running\nListening on port ${PORT}\n`);
  });
}

const routes = (list) => {
  const routeMap = new Map();
  for (let i = 0; i < list.length; i++) {
    var project = list[i];
    routes.set(project.name, project.root);
  }
  return routeMap;
};
