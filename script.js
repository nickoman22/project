const heartsContainer = document.getElementById("hearts-container");
const loveLetter = document.getElementById("love-letter");
const showLoveLetterBtn = document.getElementById("show-love-letter");

// Show Love Letter with Hearts Animation
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
