const portfolioData = [
  {
    title: "Timetable",
    image: "images/timetable.jpg",
    descriptionFile: "info/timetable.txt",
    url: "projects/timetable/timetable_generator.html",
  },
  {
    title: "3D Engine",
    image: "images/draw3d.jpg",
    descriptionFile: "info/draw3d.txt",
    url: "projects/draw3d",
  },
  {
    title: "Project Three",
    image: "images/nix.png",
    descriptionFile: "info/error.txt",
    url: "project/",
  },
  {
    title: "Project Four",
    image: "images/nix.png",
    descriptionFile: "info/error.txt",
    url: "project/",
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

  const descriptionElement = item.querySelector(".portfolio-description");

  if (data.descriptionFile) {
    fetch(data.descriptionFile)
      .then((response) => {
        if (!response.ok) throw new Error("Description file not found");
        return response.text();
      })
      .then((descriptionText) => {
        descriptionElement.textContent = descriptionText;
      })
      .catch((error) => {
        console.error("Error loading description for", data.title, error);
        descriptionElement.textContent = "Description not available.";
      });
  } else {
    descriptionElement.textContent = "Description not available.";
  }

  portfolioContainer.appendChild(item);
});
