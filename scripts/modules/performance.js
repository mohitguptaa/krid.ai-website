// ===== PERFORMANCE OPTIMIZATIONS =====
// Throttle scroll events
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

// Apply throttling to scroll events
const throttledScroll = throttle(() => {
  // Scroll-based animations and effects
}, 16);

window.addEventListener('scroll', throttledScroll);

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
  console.error('JavaScript error:', e.error);
});

// ===== RESIZE HANDLER =====
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Recalculate any dynamic positioning
    const heroElements = document.querySelectorAll('.ai-element');
    heroElements.forEach(element => {
      element.style.transform = 'translateY(0)';
    });
  }, 250);
});

