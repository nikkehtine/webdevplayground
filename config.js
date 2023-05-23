const config = {
  projectsDir: "projects",
};

export default function getConfigValue(key) {
  return config[key];
}
