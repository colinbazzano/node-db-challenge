const db = require("../db-config.js");

module.exports = {
  getProjects,
  getResources
};

function getProjects() {
  return db("projects");
}

function getResources() {
  return db("resources");
}
