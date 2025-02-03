document.addEventListener('DOMContentLoaded', () => {
    // Falling elements animation
    function createFallingElements() {
        const container = document.querySelector('.falling-elements');
        const emojis = ['❤️', '💖', '🌷', '🌸', '💐', '🌹'];
        
        // Create 60 falling elements for a more continuous effect
        for (let i = 0; i < 60; i++) {
            const element = document.createElement('div');
            element.className = 'falling-element';
            element.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Random position and animation properties
            const left = Math.random() * 100; // Random horizontal position
            const delay = Math.random() * 10; // Staggered start for continuous effect
            const duration = 5 + Math.random() * 5; // Random duration (5-10 seconds)

            element.style.left = `${left}%`;
            element.style.animationDuration = `${duration}s`;
            element.style.animationDelay = `${delay}s`;

            // Add transparency for elements in the middle of the screen
            if (left > 30 && left < 70) {
                element.classList.add('middle-zone');
            }

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

    // Enhanced YES button click
    yesButton.addEventListener('click', (e) => {
        // Get button position
        const rect = e.target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Create heart explosion (reduced number of hearts to prevent lag)
        const hearts = ['❤️', '💖', '💕'];
        const heartCount = 30; // Reduced from 100 to 30
        
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-explosion';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            
            // Random properties for each heart
            const tx = (Math.random() - 0.5) * window.innerWidth; // Full screen width spread
            const ty = (Math.random() - 0.5) * window.innerHeight; // Full screen height spread
            const rotate = (Math.random() - 0.5) * 60; // Rotation (-30deg to +30deg)
            const delay = Math.random() * 0.5; // Staggered start
            const size = 20 + Math.random() * 20; // Random size (20px to 40px)
            const duration = 2 + Math.random() * 1; // Shorter duration (2-3 seconds)

            // Random start position around the button
            const startX = centerX + (Math.random() - 0.5) * 100;
            const startY = centerY + (Math.random() - 0.5) * 100;

            heart.style.setProperty('--tx', `${tx}px`);
            heart.style.setProperty('--ty', `${ty}px`);
            heart.style.setProperty('--rotate', `${rotate}deg`);
            heart.style.left = `${startX}px`;
            heart.style.top = `${startY}px`;
            heart.style.fontSize = `${size}px`;
            heart.style.animationDelay = `${delay}s`;
            heart.style.animationDuration = `${duration}s`;

            document.body.appendChild(heart);

            // Remove hearts after animation
            setTimeout(() => heart.remove(), (duration + delay) * 1000);
        }

        // Hide buttons and show content
        buttonsContainer.classList.add('hidden');
        letter.classList.remove('hidden');
        picture.classList.remove('hidden');
        travelButton.classList.remove('hidden');
    });

    // No button click
    noButton.addEventListener('click', () => {
        // Hide buttons instantly
        buttonsContainer.remove();
        
        // Show message
        funMessage.classList.remove('hidden');
        
        // Show new button after delay
        setTimeout(() => {
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
