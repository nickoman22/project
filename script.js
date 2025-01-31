document.addEventListener('DOMContentLoaded', () => {
    // Initialize falling elements
    function createFallingElements() {
        const container = document.querySelector('.falling-elements');
        const emojis = ['❤️', '💖', '🌷', '🌸', '💐', '🌹'];
        
        // Create 40 falling elements
        for (let i = 0; i < 40; i++) {
            const element = document.createElement('div');
            element.className = 'falling-element';
            element.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            element.style.left = Math.random() * 100 + '%';
            element.style.animationDuration = Math.random() * 3 + 5 + 's';
            element.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(element);
        }
    }

    // Music control
    const musicToggle = document.getElementById('musicToggle');
    const backgroundMusic = document.getElementById('backgroundMusic');
    let isMusicPlaying = false;

    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            musicToggle.textContent = '🎵 Play Music';
        } else {
            backgroundMusic.play().catch(() => {
                alert('Please click "Play Music" to start the song!');
            });
            musicToggle.textContent = '🎵 Pause Music';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Button functionality
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const letter = document.getElementById('letter');
    const travelButton = document.getElementById('travelButton');
    const funMessage = document.getElementById('funMessage');
    const picture = document.getElementById('picture');

    yesButton.addEventListener('click', () => {
        letter.classList.remove('hidden');
        picture.classList.remove('hidden');
        travelButton.classList.remove('hidden');
        funMessage.classList.add('hidden');
        yesButton.style.transform = 'scale(1)';
    });

    noButton.addEventListener('click', () => {
        funMessage.classList.remove('hidden');
        noButton.style.display = 'none';
        yesButton.style.transform = 'scale(1.2)';
        yesButton.textContent = 'YES!! (Please?) 💝';
    });

    travelButton.addEventListener('click', () => {
        alert('🎉 Yay! Let\'s start with Paris! 🗼❤️');
    });

    // Initialize animations
    createFallingElements();
});
