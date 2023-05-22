export default function parse(arr) {
  const projects = [];

  for (let i = 0; i < arr.length; i++) {
    projects.push(`Number: ${i}`);
  }

  return projects;
}
