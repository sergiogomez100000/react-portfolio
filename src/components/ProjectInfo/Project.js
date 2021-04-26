import React from "react";
import Projects from "../../projects.json"


function Project() {
  return(
  Projects.map((project)=>{
    return(<div className="card border-secondary mb-3" style={{ width: "20rem" }}>
    <img className="card-img-top" src={project.image} alt={project.name} />
    <div className="card-body">
      <h5 className="card-title">{project.name}</h5>
      <p className="card-text">
        {project.description}
      </p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Technologies Used</li>
      <li className="list-group-item">{project.technology}</li>
    </ul>
    <div className="card-body">
      <a href={project.github} className="card-link">
        Link to Repo
      </a>
      <a href={project.deploy} className="card-link">
        Link to deployed App
      </a>
    </div>
  </div>) 
  
  
}
  ))
}

export default Project;