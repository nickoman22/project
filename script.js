const places = [
  { name: "Paris", image: "images/paris.jpg", description: "The city of love and lights." },
  { name: "Amsterdam", image: "images/amsterdam.jpg", description: "Famous for canals and tulips." },
  { name: "Japan", image: "images/japan.jpg", description: "Land of cherry blossoms and temples." },
  { name: "Barcelona", image: "images/barcelona.jpg", description: "Gaudi's architectural marvels." },
  { name: "Venice", image: "images/venice.jpg", description: "Romantic gondola rides." },
  { name: "Maldives", image: "images/maldives.jpg", description: "Tropical paradise." },
  { name: "Iceland", image: "images/iceland.jpg", description: "Land of fire and ice." },
];

const heartsContainer = document.getElementById("hearts-container");
const loveLetter = document.getElementById("love-letter");
const showLoveLetterBtn = document.getElementById("show-love-letter");
const placesList = document.getElementById("places-list");
const progressBar = document.getElementById("progress");

let visitedCount = 0;

// Create Places List
places.forEach((place, index) => {
  const placeItem = document.createElement("div");
  placeItem.className = "place-item";

  const title = document.createElement("h3");
  title.textContent = place.name;
  title.addEventListener("click", () => {
    img.style.display = "block";
    description.style.display = "block";
    checkbox.style.display = "block";
  });

  const img = document.createElement("img");
  img.src = place.image;
  img.alt = place.name;

  const description = document.createElement("p");
  description.textContent = place.description;

  const checkbox = document.createElement("label");
  checkbox.innerHTML = `<input type="checkbox"> Visited`;
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      visitedCount++;
      progressBar.style.width = `${(visitedCount / places.length) * 100}%`;
    }
  });

  placeItem.appendChild(title);
  placeItem.appendChild(img);
  placeItem.appendChild(description);
  placeItem.appendChild(checkbox);
  placesList.appendChild(placeItem);
});

// Falling Hearts Animation
showLoveLetterBtn.addEventListener("click", () => {
  loveLetter.style.display = "block";

  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
});
