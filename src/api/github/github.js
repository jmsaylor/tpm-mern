const fetch = require("node-fetch");

const github = async (name, repo = "") => {
  try {
    let response = await fetch(`https://api.github.com/repos/${name}/${repo}`);
    response = await response.json();

    return {
      name: response.name,
      description: response.description,
      url: response.html_url,
      createdAt: response.created_at,
      updatedAt: response.updated_at,
    };
  } catch (error) {
    console.error(error);
  }
};

module.exports = github;

// const test = async () => {
//   console.log(await github("jmsaylor", "tpm-mern"));
// };

// test();
