var currentIndex = 0;
var totalImages = document.querySelectorAll('.photo-slider img').length;
var intervalId;

function showPopup() {
    var popup = document.getElementById("popup");
    var birthdayMessage = document.getElementById("birthdayMessage");
    popup.style.display = "block";

    // Customize the birthday message
    birthdayMessage.textContent = "Happy Birthday Caterpillar! 🎉";

    var audio = document.getElementById("birthdaySong");
    audio.play();
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
}

function updateSlider() {
    var photoSlider = document.getElementById("photoSlider");
    var newPosition = -currentIndex * 100 + "%";
    photoSlider.style.transform = "translateX(" + newPosition + ")";
}

// Auto slide every 3 seconds (adjust as needed)
intervalId = setInterval(nextImage, 3000);

// Stop auto slide when the card is clicked
document.getElementById("birthdayCard").addEventListener("click", function() {
    clearInterval(intervalId);
    showPopup();
});

// Ensure that the automatic slide continues after the popup is closed
document.getElementById("popup").addEventListener("click", function() {
    clearInterval(intervalId);
    intervalId = setInterval(nextImage, 3000);
});
