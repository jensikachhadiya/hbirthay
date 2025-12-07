
let slides = document.getElementsByClassName("slide");
let index = 0;

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) { index = 1; }
  slides[index-1].style.display = "block";
  setTimeout(showSlide, 3000);
}

showSlide();
