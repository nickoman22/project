document.addEventListener('DOMContentLoaded', () => {
    // Falling elements animation
    function createFallingElements() {
        const container = document.querySelector('.falling-elements');
        const emojis = ['❤️', '💖', '🌷', '🌸', '💐', '🌹'];
        
        for (let i = 0; i < 60; i++) {
            const element = document.createElement('div');
            element.className = 'falling-element';
            element.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            const left = Math.random() * 100;
            const delay = Math.random() * 10;
            const duration = 5 + Math.random() * 5;

            element.style.left = `${left}%`;
            element.style.animationDuration = `${duration}s`;
            element.style.animationDelay = `${delay}s`;

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

    // YES button click
    yesButton.addEventListener('click', (e) => {
        const rect = e.target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const hearts = ['❤️', '💖', '💕'];
        const heartCount = 30;
        
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-explosion';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            
            const tx = (Math.random() - 0.5) * window.innerWidth;
            const ty = (Math.random() - 0.5) * window.innerHeight;
            const rotate = (Math.random() - 0.5) * 60;
            const delay = Math.random() * 0.5;
            const size = 20 + Math.random() * 20;
            const duration = 2 + Math.random() * 1;

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
            setTimeout(() => heart.remove(), (duration + delay) * 1000);
        }

        buttonsContainer.classList.add('hidden');
        letter.classList.remove('hidden');
        picture.classList.remove('hidden');
        travelButton.classList.remove('hidden');
    });

    // NO button click
    noButton.addEventListener('click', () => {
        buttonsContainer.remove();
        funMessage.classList.remove('hidden');
        setTimeout(() => {
            funMessage.classList.add('hidden');
            newButtonContainer.classList.remove('hidden');
        }, 1500);
    });

    // Forced YES button
    document.getElementById('forcedYesButton').addEventListener('click', () => {
        newButtonContainer.classList.add('hidden');
        letter.classList.remove('hidden');
        picture.classList.remove('hidden');
        travelButton.classList.remove('hidden');
    });

    // Travel button
    travelButton.addEventListener('click', () => {
        alert('🎉 Ας ξεκινήσουμε την περιπέτεια μας! Πού θα πάμε πρώτα; 🌍❤️');
    });

    createFallingElements();
});
