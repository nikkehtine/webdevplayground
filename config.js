const config = {
  projectsDir: "projects",
  port: 2137,
};

export default function getConfigValue(key) {
  return config[key];
}
