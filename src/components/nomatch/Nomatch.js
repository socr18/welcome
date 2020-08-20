import React from "react";
import { useLocation } from "react-router-dom";
import imageFoF from "./images/404-error-2.jpg";

//image - https://image.freepik.com/free-vector/404-error-with-icon-tab-wedsite-error_114341-27.jpg

function Nomatch() {
  let location = useLocation();

  return (
    <div className="Nomatch">
      <div className="imageFoF">
        <img src={imageFoF} alt="404 Error/" />
      </div>
      <div className="pageNotFound">No page found for {location.pathname}</div>
    </div>
  );
}

export default Nomatch;
