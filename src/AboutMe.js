import React from "react";
import PropTypes from "prop-types";

const AboutMe = ({one, two, three, four, five}) => {
    return(
        <>
        <ul className="aboutme__work">
        I can see myself working with: 
        <li>{one}</li>
        <li>{two}</li>
        <li>{three}</li>
        <li>{four}</li>
        <li>{five}</li>
        </ul>
        </>
    );
};

AboutMe.propTyes = {
    one: PropTypes.string,
    two: PropTypes.string,
    three: PropTypes.string,
    four: PropTypes.string,
    five: PropTypes.string,
};

export default AboutMe;