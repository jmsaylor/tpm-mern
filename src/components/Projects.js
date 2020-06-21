import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

// name: "",
//       description: "",
//       url: "",
//       createdAt: "",
//       updatedAt: "",

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repoList: [
        { user: "jmsaylor", name: "tpm-mern" },
        { user: "Lkian", name: "nyc-activities" },
      ],
      projects: [],
    };
  }

  fetchGithub = (user, repo) => {
    fetch(`https://api.github.com/repos/${user}/${repo}`)
      .then((response) => response.json())
      .then(
        (response) =>
          (response = {
            name: response.name,
            description: response.description,
            url: response.html_url,
            createdAt: response.created_at,
            updatedAt: response.updated_at,
          })
      )
      .then((response) =>
        this.setState({
          projects: [...this.state.projects, response],
        })
      );
  };

  renderProjects = () => {
    const display = this.state.projects.map((project) => {
      return <ProjectCard project={project} />;
    });
    return display;
  };

  componentDidMount() {
    this.state.repoList.forEach((repo) => {
      this.fetchGithub(repo.user, repo.name);
    });
  }
  render() {
    console.log(this.state.projects);
    // const { name, description, url, createdAt, updatedAt } = this.state;
    return (
      <div className='Projects'>
        <h1>Projects</h1>
        {this.renderProjects()}
      </div>
    );
  }
}

export default Projects;
