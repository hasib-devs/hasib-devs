export class Carousel {
    private currentIndex = 0;
    private slides: HTMLElement[];
    private indicators: HTMLElement[];

    constructor(
        private slidesContainer: HTMLElement
    ) {
        this.slides = Array.from(this.slidesContainer.children) as HTMLElement[];
        this.indicators = Array.from(document.querySelectorAll('.carousel-indicator'));
        this.init();
        this.updateActiveState(); // Initial position set
    }

    private init() {
        // Button event listeners
        document.getElementById('prev-button')?.addEventListener('click', () => this.prev());
        document.getElementById('next-button')?.addEventListener('click', () => this.next());

        // Indicator event listeners
        this.indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                const index = parseInt(indicator.dataset.index || '0');
                this.goToSlide(index);
            });
        });

        this.updateActiveState();
    }

    private updateActiveState() {
        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('bg-blue-500', index === this.currentIndex);
            indicator.classList.toggle('bg-gray-400', index !== this.currentIndex);
        });

        // Calculate proper slide width
        const slideWidth = this.slides[0].getBoundingClientRect().width;
        const offset = -this.currentIndex * slideWidth;
        this.slidesContainer.style.transform = `translateX(${offset}px)`;
    }

    public prev() {
        this.currentIndex =
            (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateActiveState();
    }

    public next() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateActiveState();
    }

    public goToSlide(index: number) {
        if (index >= 0 && index < this.slides.length) {
            this.currentIndex = index;
            this.updateActiveState();
        }
    }
}