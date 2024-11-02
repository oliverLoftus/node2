// Sample data for portfolio items
const portfolioData = [
    {
        title: "Project One",
        image: "path/to/image1.jpg",
        description: "A brief description of Project One."
    },{
        title: "Project Two",
        image: "path/to/image2.jpg",
        description: "A brief description of Project Two."
    },{
        title: "Project Three",
        image: "path/to/image2.jpg",
        description: "A brief description of Project Two."
    },{
        title: "Project Four",
        image: "path/to/image2.jpg",
        description: "A brief description of Project Two."
    }
    // Add more items here...
];

// Reference to the container where items will be added
const portfolioContainer = document.getElementById('portfolio-container');

// Reference to the template
const template = document.getElementById('portfolio-item-template');

// Function to populate and clone the template for each item
portfolioData.forEach(data => {
    const item = template.content.cloneNode(true);  // Clone the template content

    // Populate the cloned template with data
    item.querySelector('.portfolio-thumbnail').src = data.image;
    item.querySelector('.portfolio-thumbnail').alt = data.title;
    item.querySelector('.portfolio-title').textContent = data.title;
    item.querySelector('.portfolio-description').textContent = data.description;

    // Append the populated item to the portfolio container
    portfolioContainer.appendChild(item);
});
