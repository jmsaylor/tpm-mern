import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  const { name, description, url, createdAt, updatedAt } = props.project;
  return (
    <div className='ProjectCard'>
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to={url}>{url}</Link>
      <p>{createdAt}</p>
      <p>{updatedAt}</p>
    </div>
  );
};

export default ProjectCard;
