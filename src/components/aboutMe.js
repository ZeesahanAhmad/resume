import React from "react";
const AboutMe=(props)=>{
  const aboutme=props.aboutme.map((aboutme)=>{
    return(
      <p key={aboutme.id} className="header-content">
           {aboutme.description}
      </p>
    )
  })
    return(
        <div className="about-me-custom mt-4">
         <h4 className="header-custom"><b>About Me</b></h4>
         {aboutme}
        </div>
    )
}
  
export default AboutMe;