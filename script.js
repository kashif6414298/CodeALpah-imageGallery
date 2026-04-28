// A list of the images in our gallery
const imageList = [
    "https://picsum.photos/id/101/800/600",
    "https://picsum.photos/id/102/800/600",
    "https://picsum.photos/id/103/800/600",
    "https://picsum.photos/id/104/800/600"
];

let currentPosition = 0;

// This function runs when you click a small image
function openFullView(index) {
    currentPosition = index;
    const bigImg = document.getElementById("big-display-image");
    const overlay = document.getElementById("popup-window");

    bigImg.src = imageList[currentPosition];
    overlay.style.display = "flex"; // Show the hidden pop-up
}

// This function hides the pop-up
function closeFullView() {
    document.getElementById("popup-window").style.display = "none";
}

// This function moves the image left or right
function moveSlide(step) {
    currentPosition += step;

    // If we go past the end, go back to the start
    if (currentPosition >= imageList.length) {
        currentPosition = 0;
    }
    // If we go before the start, go to the very end
    if (currentPosition < 0) {
        currentPosition = imageList.length - 1;
    }

    document.getElementById("big-display-image").src = imageList[currentPosition];
}