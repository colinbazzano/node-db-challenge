const db = require("../db-config.js");

module.exports = {
  getProjects,
  getResources,
  getTasks,
  getProjectById,
  addProject,
  addResource
};

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => ({ id: ids[0] }));
}

function getResources() {
  return db("resources");
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(ids => ({ id: ids[0] }));
}

function getTasks() {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select(
      "p.name",
      "p.description as project_description",
      "t.description",
      "t.notes",
      "t.completed"
    );
}
