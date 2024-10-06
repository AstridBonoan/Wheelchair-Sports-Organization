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
