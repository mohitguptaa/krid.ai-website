// ===== MAIN JAVASCRIPT FILE =====
// Import all modules
import './modules/navigation.js';
import './modules/animations.js';
import './modules/tabs.js';
import './modules/forms.js';
import './modules/video.js';
import './modules/performance.js';

// ===== ROLES SCROLL FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
  const scrollLeftBtn = document.getElementById('scrollLeft');
  const scrollRightBtn = document.getElementById('scrollRight');
  const rolesScrollContainer = document.querySelector('.roles-scroll-container');
  
  console.log('Scroll elements found:', {
    scrollLeftBtn: !!scrollLeftBtn,
    scrollRightBtn: !!scrollRightBtn,
    rolesScrollContainer: !!rolesScrollContainer
  });
  
  if (scrollLeftBtn && scrollRightBtn && rolesScrollContainer) {
    const scrollAmount = 400; // Scroll by 400px each time
    
    scrollLeftBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Left button clicked, scrolling left by', scrollAmount);
      rolesScrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
    
    scrollRightBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Right button clicked, scrolling right by', scrollAmount);
      rolesScrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
    
    // Update button visibility based on scroll position
    function updateButtonVisibility() {
      const isAtStart = rolesScrollContainer.scrollLeft === 0;
      const isAtEnd = rolesScrollContainer.scrollLeft >= (rolesScrollContainer.scrollWidth - rolesScrollContainer.clientWidth);
      
      scrollLeftBtn.style.opacity = isAtStart ? '0.5' : '1';
      scrollRightBtn.style.opacity = isAtEnd ? '0.5' : '1';
      
      scrollLeftBtn.disabled = isAtStart;
      scrollRightBtn.disabled = isAtEnd;
    }
    
    // Initial check
    updateButtonVisibility();
    
    // Update on scroll
    rolesScrollContainer.addEventListener('scroll', updateButtonVisibility);
  } else {
    console.error('Scroll elements not found!');
  }
});

console.log('🚀 krid.ai website loaded successfully!');
