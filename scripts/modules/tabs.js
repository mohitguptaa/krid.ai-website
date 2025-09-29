// ===== TAB FUNCTIONALITY =====
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');
    
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('tab-button--active'));
    tabContents.forEach(content => content.classList.remove('tab-content--active'));
    
    // Add active class to clicked button and corresponding content
    button.classList.add('tab-button--active');
    document.getElementById(targetTab).classList.add('tab-content--active');
  });
});

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('DOMContentLoaded', () => {
  // Add keyboard navigation for tabs
  tabButtons.forEach((button, index) => {
    button.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft' && index > 0) {
        tabButtons[index - 1].focus();
        tabButtons[index - 1].click();
      } else if (e.key === 'ArrowRight' && index < tabButtons.length - 1) {
        tabButtons[index + 1].focus();
        tabButtons[index + 1].click();
      }
    });
  });
});

