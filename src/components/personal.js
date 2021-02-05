import React from "react";

const PersonalInfo=(props)=>{
  const personal=props.personals.map((personal)=>{
    return(
      <div key={personal.id} className="row personal-info-custom">
      <div className="col-12  name-custome"><b>{personal.name}</b></div>
       
      <div className="col-12 info-custom">
       <p className="fa fa-envelope">{' '}{personal.email}</p>
      </div>

      <div className="col-12 info-custom">
      <p className="fa fa-phone">{' '}{personal.contact}1</p>
      </div>

      <div className="col-12 info-custom">
      <p className="fa fa-home">{' '}{personal.address}</p>
      </div>

      <div className="col-12 info-custom">
      <p className="fa fa-linkedin">{' '}<a href="https://www.linkedin.com/in/zeeshan-ahmad-06ab86191/">{personal.linkedin}</a></p>
      </div>

      <div className="col-12 info-custom">
      <p className="fa fa-github">{' '}<a href="https://github.com/ZeesahanAhmad">{personal.github}</a></p>
      </div>

    </div>
    )
  })
    return(
      <React.Fragment>
      {personal}
      </React.Fragment>
      )
}
export default PersonalInfo;