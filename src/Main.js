import React, {useState, useEffect} from "react";
import Image from "./pictures/ivana.jpg";
import AboutMe from "./AboutMe";

const Main = () => {
  const [noText, setText] = useState(false);
  

  return(
    <>
    <article class="aboutme">
    <figure className="aboutme__figure">
      <img 
      src={Image} 
      alt="Ivana Stjepanovic"
      />
    </figure>
    <button onMouseOver={() => setText(!noText)}>See what I like</button>
    {noText && <AboutMe />}
    </article>
    </>
  )
}

export default Main;