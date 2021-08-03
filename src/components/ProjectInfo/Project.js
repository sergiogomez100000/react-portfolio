import React from "react";
import Projects from "../../projects.json";

function Project() {
  return Projects.map((project) => {
    return (
      <div key={project.id} className="col-md d-flex justify-content-center">
        <div
          className="card border-dark mb-3"
          style={{ width: "20rem", background: "lightgray" }}
        >
          <img
            className="card-img-top"
            src={project.image}
            alt={project.name}
          />
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">{project.description}</p>
          </div>
          <div className="list-group list-group-flush">
            <div className="list-group-item font-weight-bold">
              Technologies Used
            </div>
            <div className="list-group-item">{project.technology}</div>
          </div>
          <div className="card-body">
            <a target="blank" href={project.github} className="card-link">
              Link to Repo
            </a>
            <a target="blank" href={project.deploy} className="card-link">
              Link to deployed App
            </a>
          </div>
        </div>
      </div>
    );
  });
}

export default Project;
