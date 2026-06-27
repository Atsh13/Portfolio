fetch("http://localhost:5000/projects")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("project-list");

    container.innerHTML = ""; // clear old content

    data.forEach(p => {
      const div = document.createElement("div");
      div.classList.add("project");

      div.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a href="${p.link}" target="_blank">View Project</a>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => console.log(err));