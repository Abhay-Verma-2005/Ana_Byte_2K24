let currentIndex = 0;
			const totalSlides = document.querySelectorAll('.carousel-image').length;
			const indicatorsContainer = document.getElementById('indicators');
	
			function changeSlide(direction) {
				currentIndex += direction;
	
				if (currentIndex < 0) {
					currentIndex = totalSlides - 1;
				} else if (currentIndex >= totalSlides) {
					currentIndex = 0;
				}
	
				updateCarousel();
				updateIndicators();
			}
	
			function updateCarousel() {
				const carousel = document.getElementById('image-carousel');
				const slideWidth = document.querySelector('.carousel-image').clientWidth;
	
				carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
			}
	
			function updateIndicators() {
				const indicatorButtons = document.querySelectorAll('.indicator-btn');
				indicatorButtons.forEach((btn, index) => {
					btn.classList.remove('active');
					if (index === currentIndex) {
						btn.classList.add('active');
					}
				});
			}
	
			function createIndicators() {
				for (let i = 0; i < totalSlides; i++) {
					const btn = document.createElement('button');
					btn.setAttribute('type', 'button');
					btn.setAttribute('class', 'indicator-btn');
					btn.setAttribute('data-bs-target', '#pictures');
					btn.setAttribute('data-bs-slide-to', i);
					btn.setAttribute('aria-label', `Slide ${i + 1}`);
					btn.addEventListener('click', () => changeSlide(i - currentIndex));
					indicatorsContainer.appendChild(btn);
				}
				updateIndicators();
			}
	
			createIndicators();
	
			setInterval(() => {
				changeSlide(1);
			}, 5000);