// List of places and their details
const places = [
  { name: "Barcelona", image: "images/barcelona.jpg", description: "Beautiful city with amazing architecture." },
  { name: "Paris", image: "images/paris.jpg", description: "The city of love and the Eiffel Tower." },
  { name: "Amsterdam", image: "images/amsterdam.jpg", description: "Canals, tulips, and bicycles." },
  { name: "Milan", image: "images/milan.jpg", description: "Fashion capital of the world." },
  { name: "Venice", image: "images/venice.jpg", description: "Romantic gondola rides on the canals." },
  { name: "Wien", image: "images/wien.jpg", description: "Classical music and stunning architecture." },
  { name: "Budapest", image: "images/budapest.jpg", description: "Thermal baths and beautiful bridges." },
  { name: "Sweden", image: "images/sweden.jpg", description: "Land of lakes and forests." },
  { name: "Switzerland", image: "images/switzerland.jpg", description: "Majestic mountains and chocolate." },
  { name: "Finland", image: "images/finland.jpg", description: "Northern lights and saunas." },
  { name: "Norway", image: "images/norway.jpg", description: "Fjords and scenic landscapes." },
  { name: "Iceland", image: "images/iceland.jpg", description: "Volcanoes, geysers, and glaciers." },
  { name: "Portugal", image: "images/portugal.jpg", description: "Beautiful beaches and rich history." },
  { name: "Dubai", image: "images/dubai.jpg", description: "Luxury and futuristic skyscrapers." },
  { name: "Maldives", image: "images/maldives.jpg", description: "Crystal-clear waters and white sand beaches." },
  { name: "Brazil", image: "images/brazil.jpg", description: "Carnival, beaches, and the Amazon rainforest." },
  { name: "Egypt", image: "images/egypt.jpg", description: "Pyramids and ancient wonders." },
  { name: "Japan", image: "images/japan.jpg", description: "Land of the rising sun with beautiful cherry blossoms." }
];

const placesList = document.getElementById("places-list");
const progressBar = document.getElementById("progress");
const heartsContainer = document.getElementById("hearts-container");
const loveLetter = document.getElementById("love-letter");
const showLoveLetterBtn = document.getElementById("show-love-letter");
let visitedCount = 0;

// Initialize the places list
places.forEach((place, index) => {
  const placeItem = document.createElement("div");
  placeItem.className = "place-item";

  const placeName = document.createElement("h3");
  placeName.textContent = place.name;
  placeName.addEventListener("click", () => {
    toggleDetails(index);
  });

  const placeImage = document.createElement("img");
  placeImage.src = place.image;
  placeImage.alt = place.name;

  const placeDescription = document.createElement("p");
  placeDescription.textContent = place.description;

  const visitCheckbox = document.createElement("label");
  visitCheckbox.innerHTML = `
    <input type="checkbox" onchange="updateProgress(${index})"> Mark as visited
  `;

  placeItem.appendChild(placeName);
  placeItem.appendChild(placeImage);
  placeItem.appendChild(placeDescription);
  placeItem.appendChild(visitCheckbox);
  placesList.appendChild(placeItem);
});

// Toggle visibility of details
function toggleDetails(index) {
  const placeItem = placesList.children[index];
  const image = placeItem.querySelector("img");
  const description = placeItem.querySelector("p");
  const checkbox = placeItem.querySelector("label");

  const isVisible = image.style.display === "block";
  image.style.display = isVisible ? "none" : "block";
  description.style.display = isVisible ? "none" : "block";
  checkbox.style.display = isVisible ? "none" : "block";
}

// Update progress bar
function updateProgress(index) {
  const checkbox = placesList.children[index].querySelector("input");
  if (checkbox.checked) {
    visitedCount++;
  } else {
    visitedCount--;
  }

  const progressPercentage = (visitedCount / places.length) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}

// Show Love Letter with Hearts Animation
showLoveLetterBtn.addEventListener("click", () => {
  loveLetter.style.display = "block";

  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
});
