import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name} </h1>
      <a href={project.link} target= "_blank" rel="noreferrer">
      <img src={project.image} alt="a view of the project" /></a>
      <p>
        <b>Tech used:</b> {project.skills}
        
      </p>Description: {project.description}
      <br></br>
      <a href={project.gitHub} target= "_blank" rel="noreferrer" >
            <GitHubIcon />
          </a>View Repo on GitHub
    </div>
  );
}

export default ProjectDisplay;