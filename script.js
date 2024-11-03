const portfolioData = [
    {
        title: "Project One",
        image: "images/nix.png",
        description: "A brief description of Project One."
    },{
        title: "Project Two",
        image: "images/nix.png",
        description: "A brief description of Project Two."
    },{
        title: "Project Three",
        image: "images/nix.png",
        description: "A brief description of Project Three."
    },{
        title: "Project Four",
        image: "images/nix.png",
        description: "A brief description of Project Four."
    }
    // Add more items here...
];

const portfolioContainer = document.getElementById('portfolio-container');

const template = document.getElementById('portfolio-item-template');

portfolioData.forEach(data => {
    const item = template.content.cloneNode(true);
    item.querySelector('.portfolio-thumbnail').src = data.image;
    item.querySelector('.portfolio-thumbnail').alt = data.title;
    item.querySelector('.portfolio-title').textContent = data.title;
    item.querySelector('.portfolio-description').textContent = data.description;
    portfolioContainer.appendChild(item);
});
