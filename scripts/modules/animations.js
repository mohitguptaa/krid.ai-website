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

