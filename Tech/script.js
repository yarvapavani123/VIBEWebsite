document.addEventListener("DOMContentLoaded", function() {
    const hiddenTechnologies = document.getElementById('hidden-technologies');
    const viewMoreButton = document.getElementById('view-more-button');

    // Check if elements exist before interacting with them
    if (!hiddenTechnologies || !viewMoreButton) {
        console.error("Error: Hidden technologies or view more button not found");
        return;
    }

    // Retrieve state from localStorage (default to false)
    const isViewMoreVisible = localStorage.getItem('viewMoreState') === 'true';

    // Initialize button state
    if (isViewMoreVisible) {
        hiddenTechnologies.style.display = 'flex'; // Show hidden technologies
        viewMoreButton.textContent = 'View Less';
    } else {
        hiddenTechnologies.style.display = 'none'; // Hide hidden technologies
        viewMoreButton.textContent = 'View More';
    }
});

// Toggle the visibility of the hidden technologies
function toggleView() {
    const hiddenTechnologies = document.getElementById('hidden-technologies');
    const viewMoreButton = document.getElementById('view-more-button');

    if (!hiddenTechnologies || !viewMoreButton) {
        console.error("Error: Hidden technologies or view more button not found");
        return;
    }

    if (hiddenTechnologies.style.display === 'none') {
        hiddenTechnologies.style.display = 'flex';
        viewMoreButton.textContent = 'View Less';
        localStorage.setItem('viewMoreState', 'true');
    } else {
        hiddenTechnologies.style.display = 'none';
        viewMoreButton.textContent = 'View More';
        localStorage.setItem('viewMoreState', 'false');
    }
}

// Function to handle page navigation (simulate navigation for now)
function navigateTo(page) {
    // Save state to localStorage before navigating (in case the user clicks "Back")
    localStorage.setItem('viewMoreState', document.getElementById('hidden-technologies').style.display === 'flex' ? 'true' : 'false');
    window.location.href = page; // Simulate page navigation
}
