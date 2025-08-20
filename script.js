// ===== MOBILE NAVIGATION =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav__link');

// Toggle mobile menu
navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  
  // Toggle icon
  const icon = navToggle.querySelector('i');
  if (navMenu.classList.contains('show')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
    const icon = navToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // Add/remove scrolled class for styling
  if (scrollTop > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.98)';
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.boxShadow = 'none';
  }
  
  // Hide/show header on scroll
  if (scrollTop > lastScrollTop && scrollTop > 200) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop;
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

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

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.about, .services, .insights, .team, .cta');
  
  animateElements.forEach(el => {
    el.classList.add('scroll-animate');
    observer.observe(el);
  });
  
  // Animate service cards individually
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.classList.add('scroll-animate');
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });
  
  // Animate insight cards individually
  const insightCards = document.querySelectorAll('.insight-card');
  insightCards.forEach((card, index) => {
    card.classList.add('scroll-animate');
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });
  
  // Animate team cards individually
  const teamCards = document.querySelectorAll('.team-card');
  teamCards.forEach((card, index) => {
    card.classList.add('scroll-animate');
    card.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(card);
  });
});

// ===== HERO STATS COUNTER ANIMATION =====
const animateCounter = (element, target, duration = 2000) => {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = formatNumber(target);
      clearInterval(timer);
    } else {
      element.textContent = formatNumber(Math.floor(start));
    }
  }, 16);
};

const formatNumber = (num) => {
  if (num >= 1000000000000) {
    return (num / 1000000000000).toFixed(0) + 'T';
  }
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(0) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K';
  }
  return num.toString();
};

// Animate hero stats when they come into view
const heroStatsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.hero__stat-number');
      
      statNumbers.forEach(stat => {
        const text = stat.textContent;
        let target = 0;
        
        // Extract number from text
        if (text.includes('500+')) {
          target = 500;
          stat.textContent = '0+';
          animateCounter(stat, target);
          stat.textContent = target + '+';
        } else if (text.includes('$16T')) {
          target = 16;
          stat.textContent = '$0T';
          const timer = setInterval(() => {
            target--;
            if (target <= 0) {
              stat.textContent = '$16T';
              clearInterval(timer);
            } else {
              stat.textContent = `$${16 - target}T`;
            }
          }, 100);
        } else if (text.includes('88%')) {
          target = 88;
          stat.textContent = '0%';
          animateCounter(stat, target);
          stat.textContent = target + '%';
        }
      });
      
      heroStatsObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const heroStats = document.querySelector('.hero__stats');
  if (heroStats) {
    heroStatsObserver.observe(heroStats);
  }
});

// ===== FLOATING ELEMENTS ANIMATION =====
document.addEventListener('DOMContentLoaded', () => {
  const floatingElements = document.querySelectorAll('.ai-element, .floating-element');
  
  floatingElements.forEach((element, index) => {
    // Add random movement
    setInterval(() => {
      const randomX = (Math.random() - 0.5) * 10;
      const randomY = (Math.random() - 0.5) * 10;
      
      element.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }, 3000 + index * 500);
  });
});

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero__ai-elements, .about__floating-elements');
  
  parallaxElements.forEach(element => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ===== FORM ENHANCEMENTS =====
document.addEventListener('DOMContentLoaded', () => {
  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

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
  
  // Add focus indicators
  const focusableElements = document.querySelectorAll('a, button, [tabindex]');
  
  focusableElements.forEach(element => {
    element.addEventListener('focus', () => {
      element.style.outline = '2px solid #667eea';
      element.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', () => {
      element.style.outline = 'none';
    });
  });
});

// ===== LOADING ANIMATIONS =====
document.addEventListener('DOMContentLoaded', () => {
  // Fade in page content
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
  
  // Stagger hero content animations
  const heroContent = document.querySelectorAll('.hero__badge, .hero__title, .hero__description, .hero__buttons, .hero__stats');
  
  heroContent.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 200 + index * 100);
  });
});

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

console.log('🚀 krid.ai website loaded successfully!');
