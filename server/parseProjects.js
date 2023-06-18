export default function parse(arr) {
  const projects = [];

  for (let i = 0; i < arr.length; i++) {
    projects.push(addEntry(arr[i]));
  }

  return projects;
}
/**
 * Converts a Project object into a HTML string
 * @param {Project} obj
 * @returns {string} HTML
 */
function addEntry(obj) {
  const title = `<p class="title">${obj.fancyName} <span>${obj.version}</span></p>`;
  const description = `<p class="description">${obj.description}</p>`;

  function linkify(element) {
    return `<a href="/${obj.name}">${element}</a>`;
  }

  return `<div class="project">\n  ${linkify(title)}\n  ${linkify(description)}\n</div>`;
}
