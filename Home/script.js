// Example JavaScript functionality (you can add more interactivity here)
console.log("Page Loaded!");

// Add a click event to flex bar items (optional)
document.querySelectorAll('.flex-item').forEach(item => {
    item.addEventListener('click', () => {
        console.log("You clicked on " + item.textContent);
    });
});
