import React from "react";
import Links from "./Links";

function About(props) {

  const githubURL = props.links.github;
  const linkedinURL = props.links.linkedin;
  console.log(githubURL)
  console.log(linkedinURL)

  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p>: null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={githubURL} linkedin={linkedinURL} />
    </div>
  );
}

export default About;

// <links github={githubURL} linkedin={linkedinURL} />
