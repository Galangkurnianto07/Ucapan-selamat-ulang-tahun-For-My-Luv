document.addEventListener('DOMContentLoaded', () => {

    const celebrateBtn = document.getElementById('celebrate-btn');
    const specialLetter = document.getElementById('special-letter');
    const memoriesBtn = document.getElementById('memories-btn');
    const fireworksContainer = document.getElementById('fireworks');
    const balloonsContainer = document.getElementById('balloons-container');
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    const wishCountSpan = document.getElementById('wish-count');
    const letterContent = document.getElementById('letter-content');


    const toggleMusic = () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicToggle.classList.add('playing');
        } else {
            backgroundMusic.pause();
            musicToggle.classList.remove('playing');
        }
    };
    
    musicToggle.addEventListener('click', toggleMusic);

    const promise = backgroundMusic.play();
    if (promise !== undefined) {
        promise.catch(error => {
        });
    }

    const createConfetti = () => {
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
        for (let i = 0; i < 500; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti-piece');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 10 + 5;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            confetti.style.animationDelay = `${Math.random() * 0.5}s`;
            fireworksContainer.appendChild(confetti);
        }
        setTimeout(() => { fireworksContainer.innerHTML = ''; }, 5000);
    };
    const createBalloons = () => {
        const colors = ['#ff4757', '#5f27cd', '#00d2d3', '#feca57', '#48dbfb', '#ff9ff3'];
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const balloon = document.createElement('div');
                balloon.classList.add('balloon');
                balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                balloon.style.left = `${Math.random() * 100}%`;
                balloon.style.animationDuration = `${Math.random() * 3 + 6}s`;
                balloon.style.animationDelay = `${Math.random() * 2}s`;
                balloonsContainer.appendChild(balloon);
            }, i * 200);
        }
        setTimeout(() => { balloonsContainer.innerHTML = ''; }, 15000);
    };

    celebrateBtn.addEventListener('click', () => {
        createConfetti();
        createBalloons();
        celebrateBtn.classList.add('hidden');
        specialLetter.classList.remove('hidden');
        memoriesBtn.classList.remove('hidden');


        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicToggle.classList.add('playing');
        }
        
        specialLetter.addEventListener('click', () => {
            letterContent.classList.toggle('expanded');
            const previewText = specialLetter.querySelector('.letter-preview strong');
            if (letterContent.classList.contains('expanded')) {
                previewText.textContent = 'Klik untuk menyembunyikan surat.';
            } else {
                previewText.textContent = 'Klik untuk membuka suratnya.';
            }
        });
    });
});