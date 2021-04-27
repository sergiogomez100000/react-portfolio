import React from "react";

function Footer() {
  return (
    <div className="container">
    <footer className="footer d-flex">
      <span className="col-3" >© 2021 | Made by Sergio Gomez:</span><br></br>
      <a target="blank" className="col-3" href="mailto:sergiogomez100000@gmail.com">Email me!</a>
      <a target="blank" className="col-3" href="https://github.com/sergiogomez100000">Checkout my Github!</a>
      <a target="blank" className="col-3" href="https://www.linkedin.com/in/sergio-gomez-8b3038206/">Checkout my LinkedIn!</a>
    </footer>
    </div>
  );
}

export default Footer;
