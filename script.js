const portfolioData = [
  {
    title: "Timetable",
    image: "images/timetable.jpg",
    description: "A brief description of Project One.",
    url: "projects/timetable/timetable_generator.html",
  },
  {
    title: "Project Two",
    image: "images/nix.png",
    description: "A brief description of Project Two.",
    url: "https://link-to-project-two.com",
  },
  {
    title: "Project Three",
    image: "images/nix.png",
    description: "A brief description of Project Three.",
    url: "https://link-to-project-two.com",
  },
  {
    title: "Project Four",
    image: "images/nix.png",
    description: "A brief description of Project Four.",
    url: "https://link-to-project-two.com",
  },
  // Add more items here...
];

const portfolioContainer = document.getElementById("portfolio-container");
const template = document.getElementById("portfolio-item-template");

portfolioData.forEach((data) => {
  const item = template.content.cloneNode(true);
  const link = item.querySelector(".portfolio-item-link");
  link.href = data.url;
  item.querySelector(".portfolio-thumbnail").src = data.image;
  item.querySelector(".portfolio-thumbnail").alt = data.title;
  item.querySelector(".portfolio-title").textContent = data.title;
  item.querySelector(".portfolio-description").textContent = data.description;
  portfolioContainer.appendChild(item);
});
