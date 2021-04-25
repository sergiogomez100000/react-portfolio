import React from "react";

function Project() {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img className="card-img-top" src="..." alt="Project" />
      <div className="card-body">
        <h5 className="card-title">Project Name</h5>
        <p className="card-text">
          Project Description
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Technologies Used</li>
        <li className="list-group-item">Tech</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Link to Repo
        </a>
        <a href="#" className="card-link">
          Link to deployed App
        </a>
      </div>
    </div>
  );
}

export default Project;
