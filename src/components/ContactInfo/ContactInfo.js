import React from "react";

function ContactInfo() {
  return (
    <div className="container col-4">
      <h1>Contact Information</h1>
      <div className="card-body">
        <h5 className="card-title">Email</h5>
        <p className="card-text">sergiogomez100000@gmail.com</p>
        <a  href="mailto:sergiogomez100000@gmail.com" className="btn btn-light">
          Email me!
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">Github</h5>
        <p className="card-text">https://github.com/sergiogomez100000</p>
        <a  target="blank" href="https://github.com/sergiogomez100000"className="btn btn-light">
          Check out my Github!
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">LinkedIn</h5>
        <p className="card-text">https://www.linkedin.com/in/sergio-gomez-8b3038206/</p>
        <a target= "blank" href="https://www.linkedin.com/in/sergio-gomez-8b3038206/"className="btn btn-light">
          Connect with me!
        </a>
      </div>
      </div>
  );
}

export default ContactInfo;
