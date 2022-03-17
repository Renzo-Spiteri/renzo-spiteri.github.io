var width = 312; // picture width
var list = document.querySelector("ul");
var pictures = document.querySelectorAll("li");  
var position = 0;  
document.querySelector(".prev").onclick = function() {
    position += width; // calculate the position of the picture
    // calculate the position of the last picture
    position = Math.min(position, 0)
    list.style.marginLeft = position + "px";
};
document.querySelector(".next").onclick = function() {
    position -= width; // calculate the position of the picture
    // the last movement to the right may not be 3, but 2 or 1 elements
    position = Math.max(position, -width * (pictures.length - 1));
    list.style.marginLeft = position + "px";
};