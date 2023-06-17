const testimonialContainer = document.querySelector('.testimonial-container');
const testimonialSlider = document.querySelector('.testimonial-slider');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

// Set the width of the testimonial slider based on the number of cards
testimonialSlider.style.width = `${testimonialSlider.children.length * 320}px`;

// Scroll the testimonial slider by 320px on each button click
scrollLeftButton.addEventListener('click', () => {
  testimonialContainer.scrollBy({ left: -320, behavior: 'smooth' });
});

scrollRightButton.addEventListener('click', () => {
  testimonialContainer.scrollBy({ left: 320, behavior: 'smooth' });
});
