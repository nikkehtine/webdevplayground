export default function parse(arr) {
  const projects = [];

  for (let i = 0; i < arr.length; i++) {
    projects.push(addEntry(arr[i]));
  }

  return projects;
}

function addEntry(obj) {
  const title = `<p class="title">${obj.name} <span>${obj.version}</span></p>`;
  const description = `<p class="description">${obj.description}</p>`;

  function linkify(element) {
    return `<a href="${obj.entry}">${element}</a>`;
  }

  return `<div class="project">\n  ${linkify(title)}\n  ${linkify(description)}\n</div>`;
}
