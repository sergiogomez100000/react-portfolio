import React from "react";

function ContactInfo() {
  return (
    <div>
      <h1 className="container">Contact Information</h1>
      <div className="card-body">
        <h5 className="card-title">Email</h5>
        <p className="card-text">sergiogomez100000@gmail.com</p>
        <a href="mailto:sergiogomez100000@gmail.com" className="btn btn-primary">
          Email me!
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">Github</h5>
        <p className="card-text">https://github.com/sergiogomez100000</p>
        <a href="https://github.com/sergiogomez100000"className="btn btn-primary">
          Check out my Github!
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">LinkedIn</h5>
        <p className="card-text">https://www.linkedin.com/in/sergio-gomez-8b3038206/</p>
        <a href="https://www.linkedin.com/in/sergio-gomez-8b3038206/"className="btn btn-primary">
          Connect with me!
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">Phone</h5>
        <p className="card-text">(520)-395-6244</p>
        <a href="tel:520-395-6244"className="btn btn-primary">
          Call or text me!
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
