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
            musicToggle.textContent = '🎵 Παίξε Μουσική';
        } else {
            backgroundMusic.play().catch(() => {
                alert('Παρακαλώ κάντε κλικ στο "Παίξε Μουσική" για να ξεκινήσει το τραγούδι!');
            });
            musicToggle.textContent = '🎵 Παύση Μουσικής';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Get elements
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const buttonsContainer = document.getElementById('buttonsContainer');
    const letter = document.getElementById('letter');
    const travelButton = document.getElementById('travelButton');
    const funMessage = document.getElementById('funMessage');
    const newButtonContainer = document.getElementById('newButtonContainer');
    const picture = document.getElementById('picture');

    // Yes button click
    yesButton.addEventListener('click', (e) => {
        // Get button position
        const rect = e.target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Create heart explosion
        const hearts = ['❤️', '💖', '💕'];
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-explosion';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            
            // Random properties for each heart
            const tx = (Math.random() - 0.5) * 150; // Horizontal spread (-75px to +75px)
            const rotate = (Math.random() - 0.5) * 60; // Rotation (-30deg to +30deg)
            const delay = Math.random() * 0.5; // Staggered start
            const size = 20 + Math.random() * 20; // Random size (20px to 40px)

            heart.style.setProperty('--tx', `${tx}px`);
            heart.style.setProperty('--rotate', `${rotate}deg`);
            heart.style.left = `${centerX}px`;
            heart.style.top = `${centerY}px`;
            heart.style.fontSize = `${size}px`;
            heart.style.animationDelay = `${delay}s`;

            document.body.appendChild(heart);

            // Remove hearts after animation
            setTimeout(() => heart.remove(), 2500);
        }

        // Hide buttons and show content
        buttonsContainer.classList.add('hidden');
        letter.classList.remove('hidden');
        picture.classList.remove('hidden');
        travelButton.classList.remove('hidden');
    });

    // No button click
    noButton.addEventListener('click', () => {
        // Show message
        funMessage.classList.remove('hidden');
        
        // Remove original buttons after delay
        setTimeout(() => {
            buttonsContainer.remove();
            funMessage.classList.add('hidden');
            newButtonContainer.classList.remove('hidden');
        }, 1500);
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
        alert('🎉 Ας ξεκινήσουμε την περιπέτεια μας! Πού θα πάμε πρώτα; 🌍❤️');
    });

    // Initialize animations
    createFallingElements();
});
