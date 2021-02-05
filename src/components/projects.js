import React from "react";

const Projects=(props)=>{
  const projects=props.projects.map((project)=>{
    return(
      <div key={project.id} className="col-12 mt-4">
           <h4><b className="sub-header-custom header-content">{project.name}</b></h4>
           <p className="header-content">{project.description}</p>
      </div>
    )
  });
  return(
      <div className="row mt-4">
        <div className="col-12 header-custom"><b>Personal Projects</b></div>
         {projects}
      </div>
    )
}
export default Projects;