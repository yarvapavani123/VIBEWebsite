let currentIndex = 0;
let isPaused = false;
const slider = document.getElementById('slider');
const pauseButton = document.getElementById('pauseButton');

function nextSlide() {
    const images = slider.children;
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

function prevSlide() {
    const images = slider.children;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function autoScroll() {
    if (!isPaused) {
        nextSlide();
    }
}

// Pause and Play functionality
function togglePause() {
    isPaused = !isPaused;
    pauseButton.textContent = isPaused ? 'Play' : 'Pause';
}

// Start the auto-scroll
setInterval(autoScroll, 4000); // Scrolls every 3 seconds
