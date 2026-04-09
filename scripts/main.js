// ===== MAIN JAVASCRIPT FILE =====
// Import all modules
import './modules/navigation.js?v=2';
import './modules/animations.js?v=2';
import './modules/tabs.js?v=2';
import './modules/forms.js?v=2';
import './modules/video.js?v=2';
import './modules/performance.js?v=2';

// ===== CAROUSEL SCROLL FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel-container');
  
  carousels.forEach((carousel, index) => {
    const scrollLeftBtn = carousel.querySelector('.scroll-left');
    const scrollRightBtn = carousel.querySelector('.scroll-right');
    const scrollContainer = carousel.querySelector('.scroll-content');
    
    console.log(`Carousel ${index} elements found:`, {
      scrollLeftBtn: !!scrollLeftBtn,
      scrollRightBtn: !!scrollRightBtn,
      scrollContainer: !!scrollContainer
    });
    
    if (scrollLeftBtn && scrollRightBtn && scrollContainer) {
      const scrollAmount = 400; // Scroll by 400px each time
      
      scrollLeftBtn.addEventListener('click', function(e) {
        e.preventDefault();
        scrollContainer.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      });
      
      scrollRightBtn.addEventListener('click', function(e) {
        e.preventDefault();
        scrollContainer.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      });
      
      // Update button visibility based on scroll position
      function updateButtonVisibility() {
        // Use a small threshold (1px) for end detection to avoid floating point issues
        const isAtStart = scrollContainer.scrollLeft <= 0;
        const isAtEnd = scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth - 1);
        
        scrollLeftBtn.style.opacity = isAtStart ? '0.5' : '1';
        scrollRightBtn.style.opacity = isAtEnd ? '0.5' : '1';
        
        scrollLeftBtn.disabled = isAtStart;
        scrollRightBtn.disabled = isAtEnd;
      }
      
      // Initial check
      updateButtonVisibility();
      
      // Update on scroll
      scrollContainer.addEventListener('scroll', updateButtonVisibility);
      
      // Update on window resize as clientWidth might change
      window.addEventListener('resize', updateButtonVisibility);
    } else {
      console.error(`Scroll elements not found in carousel ${index}!`);
    }
  });
});

console.log('🚀 krid.ai website loaded successfully!');
