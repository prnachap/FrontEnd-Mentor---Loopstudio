const headerEle = document.getElementById("header");
const hamburgerEle = document.getElementById("hamburger");
const overlayEle = document.getElementById("overlay");

// function toggleclass
function toggleClass() {
  headerEle.classList.toggle("open");
  if (headerEle.classList.contains("open")) {
    overlayEle.classList.add("fade-in");
    overlayEle.classList.remove("fade-out");
  } else {
    overlayEle.classList.add("fade-out");
    overlayEle.classList.remove("fade-in");
  }
}

hamburgerEle.addEventListener("click", toggleClass);
