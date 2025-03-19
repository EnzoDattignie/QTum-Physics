// script.js refactorisé pour une meilleure maintenabilité et lisibilité

class StoryReader {
    constructor(passages) {
        this.passages = passages;
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.displayPassage(this.currentIndex);
    }

    cacheElements() {
        this.imageElement = document.getElementById('image');
        this.storyTextElement = document.getElementById('story-text');
        this.progressBar = document.getElementById('progress-bar');
        this.imageContainer = document.getElementById('image-container');
        this.textBox = document.getElementById('text-box');
        this.endScreen = document.getElementById('end-screen');
        this.buttons = {
            back: document.getElementById('back-btn'),
            play: document.getElementById('play-btn'),
            pause: document.getElementById('pause-btn'),
            next: document.getElementById('continue-btn'),
            home: document.getElementById('home-btn')
        };
    }

    bindEvents() {
        this.buttons.next.addEventListener('click', () => this.nextPassage());
        this.buttons.back.addEventListener('click', () => this.prevPassage());
        this.buttons.play.addEventListener('click', () => this.startAutoPlay());
        this.buttons.pause.addEventListener('click', () => this.stopAutoPlay());
        this.buttons.home.addEventListener('click', () => this.resetStory());
    }

    displayPassage(index) {
        if (index < 0 || index >= this.passages.length) return;
        const passage = this.passages[index];
        this.imageElement.src = passage.image;
        this.imageElement.alt = `Illustration: ${passage.text}`;
        this.storyTextElement.textContent = passage.text;
        this.updateProgressBar();
    }

    updateProgressBar() {
        const progress = ((this.currentIndex + 1) / this.passages.length) * 100;
        this.progressBar.style.width = `${progress}%`;
    }

    nextPassage() {
        if (this.currentIndex < this.passages.length - 1) {
            this.currentIndex++;
            this.displayPassage(this.currentIndex);
        } else {
            this.showEndScreen();
        }
    }

    prevPassage() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.displayPassage(this.currentIndex);
        }
    }

    startAutoPlay() {
        this.buttons.play.style.display = 'none';
        this.buttons.pause.style.display = 'inline-block';

        this.autoPlayInterval = setInterval(() => {
            if (this.currentIndex < this.passages.length - 1) {
                this.nextPassage();
            } else {
                this.stopAutoPlay();
            }
        }, 3000);
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
        this.buttons.pause.style.display = 'none';
        this.buttons.play.style.display = 'inline-block';
    }

    showEndScreen() {
        this.imageContainer.style.display = 'none';
        this.textBox.style.display = 'none';
        this.endScreen.style.display = 'block';
    }

    resetStory() {
        this.currentIndex = 0;
        this.displayPassage(this.currentIndex);
        this.imageContainer.style.display = 'block';
        this.textBox.style.display = 'block';
        this.endScreen.style.display = 'none';
    }
}

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', () => {
    const passages = [
        { image: "images/scene1.jpg", text: "Il était une fois trois petits cochons qui vivaient heureux." },
        { image: "images/scene2.jpg", text: "Un jour, ils décidèrent de construire leurs propres maisons." },
        { image: "images/scene3.jpg", text: "Le plus paresseux fit une maison en paille, le second en bois et le dernier en briques." },
        { image: "images/scene4.jpg", text: "Le loup arriva et souffla sur la maison de paille !" },
        { image: "images/scene5.jpg", text: "La maison s'effondra et le cochon courut se réfugier chez son frère." },
        { image: "images/scene6.jpg", text: "Le loup souffla sur la maison en bois, et elle s'effondra aussi." },
        { image: "images/scene7.jpg", text: "Finalement, ils se réfugièrent tous dans la maison en briques." },
        { image: "images/scene8.jpg", text: "Le loup ne put pas la détruire et s'enfuit." },
        { image: "images/scene9.jpg", text: "Les trois petits cochons vécurent heureux et en sécurité." }
    ];
    new StoryReader(passages);
});

function displayPassage(index) {
    if (index < 0 || index >= passages.length) return;
    
    const passage = passages[index];

    // Ajout d'un effet de fondu lors du changement d'image
    imageElement.style.opacity = 0;
    setTimeout(() => {
        imageElement.src = passage.image;
        imageElement.alt = `Illustration: ${passage.text}`;
        storyTextElement.textContent = passage.text;
        imageElement.style.opacity = 1;
    }, 300);
    
    updateProgressBar();
}


