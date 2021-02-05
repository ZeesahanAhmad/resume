import React from "react";

const Intrest=(props)=>{
  const interest=props.interests.map((interest)=>{
    return(
      <div className="col-12 header-content mt-1">
       <b>{interest}</b>
       </div>
    )
  })
   return(
     <div className="row mt-3">
       <div className="col-12 header-custom">
        <p><b>Interest</b></p>
       </div>
       {interest}
     </div>

   )
}
export default Intrest;