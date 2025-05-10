// Get the modal
var modal = document.getElementById("modal");

// Get the images and insert them inside the modal
var images = document.querySelectorAll(".card-img");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Loop through all images and add event listeners
images.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

// Get the <span> element to close the modal
var span = document.getElementById("closeModal");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
