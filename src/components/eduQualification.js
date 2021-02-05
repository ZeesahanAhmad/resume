import React from "react";
const Education=(props)=>{
    const education=props.education.map((education)=>{
        if(education.type=="graduation"){
              return(
                <div className="col-12 header-content mt-4">
                 <h5><b>{education.name}</b></h5>
                 <p>{education.bname} ({education.marks}){' '}<br/> {education.year}</p>
                </div>
              )
          }
        else if(education.type=="intermediate"){
            return(
              <div className="col-12 header-content">
              <h5><b>{education.name}</b></h5>
              <p>{education.bname} ({education.marks}){' '}<br/> {education.year}</p>
              </div>
            )
        }
        else{
          return(
              <div className="col-12  header-content">
                <h5><b>{education.name}</b></h5>
                 <p>{education.bname} ({education.marks}){' '}<br/> {education.year}</p>
              </div>
             )
            }
      });


    return(
        <div className="row mt-4">
         <div className="col-12 header-custom"><b>Education Qualification</b></div>
         {education}
         </div>
    )
}
export default Education;