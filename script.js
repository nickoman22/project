document.addEventListener('DOMContentLoaded', () => {
    // Falling elements animation
    function createFallingElements() {
        const container = document.querySelector('.falling-elements');
        const emojis = ['❤️', '💖', '🌷', '🌸', '💐', '🌹'];
        
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

    // Elements
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const buttonsContainer = document.getElementById('buttonsContainer');
    const letter = document.getElementById('letter');
    const travelButton = document.getElementById('travelButton');
    const funMessage = document.getElementById('funMessage');
    const newButtonContainer = document.getElementById('newButtonContainer');
    const picture = document.getElementById('picture');

    // Yes button click
    yesButton.addEventListener('click', () => {
        buttonsContainer.classList.add('hidden');
        letter.classList.remove('hidden');
        picture.classList.remove('hidden');
        travelButton.classList.remove('hidden');
    });

    // No button click
noButton.addEventListener('click', () => {
    // Immediately hide buttons
    buttonsContainer.remove();
    
    // Show message for 3 seconds (2 seconds longer)
    funMessage.classList.remove('hidden');
    setTimeout(() => {
        funMessage.classList.add('hidden');
        newButtonContainer.classList.remove('hidden');
    }, 3000); // Changed from 1500ms to 3000ms
});

    // Forced Yes button click
    document.getElementById('forcedYesButton').addEventListener('click', () => {
        newButtonContainer.classList.add('hidden');
        letter.classList.remove('hidden');
        picture.classList.remove('hidden');
        travelButton.classList.remove('hidden');
    });

    // Travel button click
    travelButton.addEventListener('click', () => {
        alert('🎉 Let\'s start our adventure! Where should we go first? 🌍❤️');
    });

    // Initialize animations
    createFallingElements();
});
