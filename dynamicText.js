// Select the codeBlock element by ID
const codeBlock = document.getElementById("codeBlock");

// Function to set codeBlock width based on window size
function resizeCodeBlock() {
  const windowWidth = window.innerWidth;
  const targetWidth = windowWidth * 0.8; // Set codeBlock to 80% of viewport width

  // Apply calculated width to codeBlock
  codeBlock.style.width = targetWidth + "px";
  console.log("codeBlock width:", targetWidth);
}

// Set initial width on page load
resizeCodeBlock();

// Update codeBlock width on window resize
window.addEventListener("resize", resizeCodeBlock);
