const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

document.body.style.setProperty("background-image", `linear-gradient(rgba(204, 204, 204, 0.8), rgba(204, 204, 204, 0.1)), url(img/${chosenImage})`);
