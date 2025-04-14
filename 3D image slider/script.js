setInterval(() => {
  currentAngle -= rotateStep;
  carousel.style.transform = `rotateY(${currentAngle}deg)`;
}, 3000); // rotates every 3 seconds

const carousel = document.getElementById("carousel");
const images = carousel.getElementsByTagName("img");
const imageCount = images.length;
const rotateStep = 360 / imageCount;
let currentAngle = 0;

// Position images in 3D circle
for (let i = 0; i < imageCount; i++) {
  const angle = i * rotateStep;
  images[i].style.transform = `rotateY(${angle}deg) translateZ(500px)`;
}
document.getElementById("next").addEventListener("click", () => {
  currentAngle -= rotateStep;
  carousel.style.transform = `rotateY(${currentAngle}deg)`;
});

document.getElementById("prev").addEventListener("click", () => {
  currentAngle += rotateStep;
  carousel.style.transform = `rotateY(${currentAngle}deg)`;
});
function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === "admin" && pass === "1234") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("sliderSection").style.display = "block";
  } else {
    alert("Wrong credentials!");
  }
}     




