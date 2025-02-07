document.addEventListener('DOMContentLoaded', () => {
    // Create falling hearts/flowers animation
    function createFallingElements() {
        const container = document.querySelector('.falling-elements');
        const emojis = ['❤️', '💖', '🌷', '🌸', '💐', '🌹'];
        
        // Create 60 falling elements
        for (let i = 0; i < 60; i++) {
            const element = document.createElement('div');
            element.className = 'falling-element';
            element.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Random positioning
            const left = Math.random() * 100;
            const delay = Math.random() * 10;
            const duration = 5 + Math.random() * 5;

            element.style.left = `${left}%`;
            element.style.animationDuration = `${duration}s`;
            element.style.animationDelay = `${delay}s`;

            // Add transparency for middle zone
            if (left > 30 && left < 70) {
                element.classList.add('middle-zone');
            }

            container.appendChild(element);
        }
    }

    // Music player functionality
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

    // Get all interactive elements
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const buttonsContainer = document.getElementById('buttonsContainer');
    const letter = document.getElementById('letter');
    const travelButton = document.getElementById('travelButton');
    const funMessage = document.getElementById('funMessage');
    const newButtonContainer = document.getElementById('newButtonContainer');

    // YES Button - Heart explosion effect
    yesButton.addEventListener('click', (e) => {
        // Get button position for heart origin
        const rect = e.target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Create 30 hearts (optimized for performance)
        const hearts = ['❤️', '💖', '💕'];
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-explosion';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            
            // Random animation properties
            const tx = (Math.random() - 0.5) * window.innerWidth;
            const ty = (Math.random() - 0.5) * window.innerHeight;
            const rotate = (Math.random() - 0.5) * 60;
            const delay = Math.random() * 0.5;
            const size = 20 + Math.random() * 20;
            const duration = 2 + Math.random() * 1;

            // Random start position around button
            const startX = centerX + (Math.random() - 0.5) * 100;
            const startY = centerY + (Math.random() - 0.5) * 100;

            // Apply animation properties
            heart.style.setProperty('--tx', `${tx}px`);
            heart.style.setProperty('--ty', `${ty}px`);
            heart.style.setProperty('--rotate', `${rotate}deg`);
            heart.style.left = `${startX}px`;
            heart.style.top = `${startY}px`;
            heart.style.fontSize = `${size}px`;
            heart.style.animationDelay = `${delay}s`;
            heart.style.animationDuration = `${duration}s`;

            document.body.appendChild(heart);
            // Auto-remove hearts after animation
            setTimeout(() => heart.remove(), (duration + delay) * 1000);
        }

        // Show letter and travel button
        buttonsContainer.classList.add('hidden');
        letter.classList.remove('hidden');
        travelButton.classList.remove('hidden');
    });

    // NO Button - Playful rejection flow
    noButton.addEventListener('click', () => {
        // Immediately remove buttons
        buttonsContainer.remove();
        // Show temporary message
        funMessage.classList.remove('hidden');
        // Show forced YES button after delay
        setTimeout(() => {
            funMessage.classList.add('hidden');
            newButtonContainer.classList.remove('hidden');
        }, 1500);
    });

    // Forced YES Button - Secondary acceptance
    document.getElementById('forcedYesButton').addEventListener('click', () => {
        newButtonContainer.classList.add('hidden');
        letter.classList.remove('hidden');
        travelButton.classList.remove('hidden');
    });

    // Travel Button - Open new website
    travelButton.addEventListener('click', () => {
        window.open('https://nickoman22.github.io/tavel/', '_blank');
    });

    // Initialize animations
    createFallingElements();
});
