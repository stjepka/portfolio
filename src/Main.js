import React, {useState, useEffect} from "react";
import Image from "./pictures/ivana.jpg";
import AboutMe from "./AboutMe";

const Main = () => {
  return(
    <>
    <article class="aboutme">
    <figure className="aboutme__figure">
      <img 
      src={Image} 
      alt="Ivana Stjepanovic"
      />
    </figure>
    <AboutMe />
    </article>
    </>
  )
}

export default Main;