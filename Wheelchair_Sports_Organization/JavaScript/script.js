document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById('menuToggle'); // Hamburger menu button
    const navOverlay = document.getElementById('nav-overlay'); // Background overlay
    const navContent = document.getElementById('navLinks'); // Sidebar content
    const closeMenu = document.getElementById('closeBtn'); // Close button

    // Function to show the sidebar and overlay
    function openMenu() {
        navOverlay.style.display = 'block'; // Show the overlay
        navContent.classList.add('show'); // Show the sidebar by adding the class
    }

    // Function to hide the sidebar and overlay
    function closeMenuWithDelay() {
        navContent.classList.remove('show'); // Remove the class to hide the sidebar
        setTimeout(() => {
            navOverlay.style.display = 'none'; // Hide the overlay after transition
        }, 300); // Delay matches the CSS transition time
    }

    // Open the menu when the hamburger icon is clicked
    hamburgerMenu.addEventListener('click', openMenu);

    // Close the menu when the close button or the overlay is clicked
    closeMenu.addEventListener('click', closeMenuWithDelay);
    navOverlay.addEventListener('click', closeMenuWithDelay);
});

document.addEventListener("DOMContentLoaded", function() {
    const imgCollection = document.querySelector(".img-collection");
    const showMoreButton = document.getElementById("show-more");
    let currentImageCount = 4; // Start with 4 images shown
    const totalImages = imgCollection.children.length; // Total number of images

    // Initially hide all images except the first 4
    Array.from(imgCollection.children).forEach((img, index) => {
        if (index >= 4) {
            img.style.display = "none"; // Hide all images beyond the first 4
        } else {
            img.style.display = "block"; // Show the first 4 images
        }
    });

    // Function to load more images
    function loadMoreImages() {
        let newImagesShown = 0; // Count how many new images are shown

        for (let i = currentImageCount; i < currentImageCount + 4; i++) {
            const image = imgCollection.children[i];
            if (image) {
                image.style.display = "block"; // Show the next set of images
                newImagesShown++;
            }
        }

        currentImageCount += newImagesShown; // Update the current image count

        // Hide the button if all images are shown
        if (currentImageCount >= totalImages) {
            showMoreButton.style.display = "none"; // Hide the button
        }
    }

    // Event listener for the "Show More" button
    showMoreButton.addEventListener("click", loadMoreImages);
});