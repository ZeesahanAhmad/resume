import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skills=(props)=>{
      const skills=props.skills.map((skill)=>{
        return(
          <div key={skill.id} className="col-12 header-content mt-2">
          {skill.name}<br/>
          <ProgressBar now={skill.progress} />
          </div>
        )
      })
    return(
        <div className="row skills-custom mt-5">
          <div className="col-12 header-custom"><b>Technical Skills</b></div>
          {skills}
        </div>
    )
}
export default Skills;