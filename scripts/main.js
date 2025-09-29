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

// ===== DEMO FORM MODAL FUNCTIONALITY =====
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyJL9eycdJvIjIlq8KsMUBLEqq7AZ02HEV96A4roWgMRJs2gnwb0f_HpZ8ZjbxWoX4yQw/exec';

// Global functions for modal
window.openDemoForm = function() {
  console.log('openDemoForm called');
  const modal = document.getElementById('demoModal');
  console.log('Modal element:', modal);
  if (modal) {
    modal.classList.add('show');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    console.log('Modal opened successfully');
  } else {
    console.error('Modal element not found!');
  }
};

window.closeDemoForm = function() {
  const modal = document.getElementById('demoModal');
  const form = document.getElementById('demoForm');
  const modalContent = modal ? modal.querySelector('.modal__content') : null;
  
  if (modal) {
    modal.classList.remove('show');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
    
    // Reset form and show it again
    if (form) {
      form.reset();
      form.style.display = 'block'; // Show form again
      // Clear any messages
      const existingMessage = form.querySelector('.form__message');
      if (existingMessage) {
        existingMessage.remove();
      }
    }
    
    // Remove success container if it exists
    if (modalContent) {
      const successContainer = modalContent.querySelector('.form__success-container');
      if (successContainer) {
        successContainer.remove();
      }
    }
  }
};

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  const modal = document.getElementById('demoModal');
  if (event.target === modal) {
    closeDemoForm();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeDemoForm();
  }
});

// Form validation functions
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  // Remove all non-digit characters except +
  const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
  // Check if it starts with + and has 10-15 digits, or just has 10-15 digits
  const phoneRegex = /^(\+?1?)?[2-9]\d{2}[2-9]\d{2}\d{4}$|^\+[1-9]\d{1,14}$/;
  return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10 && cleanPhone.length <= 16;
}

function validateForm(formData) {
  const errors = [];
  
  // Required field validation
  const name = formData.get('name')?.trim();
  const email = formData.get('email')?.trim();
  const company = formData.get('company')?.trim();
  const message = formData.get('message')?.trim();
  
  if (!name || name.length < 2) {
    errors.push('Full Name is required and must be at least 2 characters long');
  }
  
  if (!email) {
    errors.push('Email Address is required');
  } else if (!validateEmail(email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!company || company.length < 2) {
    errors.push('Company is required and must be at least 2 characters long');
  }
  
  if (!message || message.length < 10) {
    errors.push('AI needs description is required and must be at least 10 characters long');
  }
  
  // Optional field validation
  const phone = formData.get('phone')?.trim();
  if (phone && !validatePhone(phone)) {
    errors.push('Please enter a valid phone number');
  }
  
  const role = formData.get('role')?.trim();
  if (role && role.length < 2) {
    errors.push('Job title must be at least 2 characters long');
  }
  
  return errors;
}

// Form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('demoForm');
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const formData = new FormData(form);
      
      // Clear previous validation messages
      clearValidationMessages(form);
      
      // Validate form
      const validationErrors = validateForm(formData);
      if (validationErrors.length > 0) {
        showFormMessage(form, 'error', validationErrors.join('<br>'));
        return;
      }
      
      // Add loading state
      form.classList.add('form__loading');
      submitBtn.disabled = true;
      
      try {
        // Add timestamp
        const timestamp = new Date().toISOString();
        
        // Create the data object with formValues nested structure
        const data = {
          timestamp: timestamp,
          formValues: {
            FullName: formData.get('name') || '',
            Email: formData.get('email') || '',
            CompanyName: formData.get('company') || '',
            PhoneNumber: formData.get('phone') || '',
            JobTitle: formData.get('role') || '',
            AINeeds: formData.get('message') || '',
            GetStarted: formData.get('timeline') || ''
          }
        };
        
        // Submit to Google Apps Script
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Required for Google Apps Script
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        
        // Since we can't read the response due to no-cors, we'll assume success
        // and add a small delay to simulate processing
        setTimeout(() => {
          console.log('Form submitted successfully, calling hideFormAndShowSuccess');
          // Hide form and show success message
          hideFormAndShowSuccess();
        }, 1000);
        
      } catch (error) {
        console.error('Form submission error:', error);
        // Show error message but keep form visible
        showFormMessage(form, 'error', 'Sorry, there was an error submitting your request. Please try again or contact us directly at info@krid.ai');
        
        // Remove loading state on error
        form.classList.remove('form__loading');
        submitBtn.disabled = false;
      }
    });
  }
});

function clearValidationMessages(form) {
  // Remove existing messages
  const existingMessage = form.querySelector('.form__message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Remove field-specific error styling
  const errorFields = form.querySelectorAll('.form__input--error');
  errorFields.forEach(field => {
    field.classList.remove('form__input--error');
  });
}

function hideFormAndShowSuccess() {
  const modal = document.getElementById('demoModal');
  const form = document.getElementById('demoForm');
  const modalContent = modal ? modal.querySelector('.modal__content') : null;
  
  console.log('hideFormAndShowSuccess called');
  console.log('Modal:', modal);
  console.log('Form:', form);
  console.log('Modal Content:', modalContent);
  
  if (modal && form && modalContent) {
    // Remove loading state
    form.classList.remove('form__loading');
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
    }
    
    // Hide the form
    form.style.display = 'none';
    console.log('Form hidden');
    
    // Remove ALL existing success containers
    const existingSuccess = modalContent.querySelectorAll('.form__success-container');
    existingSuccess.forEach(container => container.remove());
    console.log('Removed existing success containers:', existingSuccess.length);
    
    // Create new success container
    const successContainer = document.createElement('div');
    successContainer.className = 'form__success-container show';
    successContainer.innerHTML = `
      <div class="form__success-icon">✓</div>
      <h3 class="form__success-title">Thank You!</h3>
      <p class="form__success-message">Your demo request has been submitted successfully. We'll get back to you within 24 hours.</p>
      <button type="button" class="btn btn--primary" onclick="closeDemoForm()">Close</button>
    `;
    
    // Add to modal content
    modalContent.appendChild(successContainer);
    console.log('Success container created and added');
    console.log('Success container HTML:', successContainer.outerHTML);
  } else {
    console.error('Required elements not found!', {
      modal: !!modal,
      form: !!form,
      modalContent: !!modalContent
    });
  }
}

function showFormMessage(form, type, message) {
  // Remove existing messages
  const existingMessage = form.querySelector('.form__message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Create new message
  const messageDiv = document.createElement('div');
  messageDiv.className = `form__message form__message--${type}`;
  messageDiv.innerHTML = message; // Use innerHTML to support <br> tags
  
  // Insert at the top of the form
  form.insertBefore(messageDiv, form.firstChild);
  
  // Auto-remove after 8 seconds for error messages
  if (type === 'error') {
    setTimeout(() => {
      if (messageDiv.parentNode) {
        messageDiv.remove();
      }
    }, 8000);
  }
}

// Real-time validation
function addRealTimeValidation() {
  const form = document.getElementById('demoForm');
  if (!form) return;
  
  const inputs = form.querySelectorAll('input, textarea, select');
  
  inputs.forEach(input => {
    // Validate on blur (when user leaves the field)
    input.addEventListener('blur', function() {
      validateField(this);
    });
    
    // Clear error styling on focus
    input.addEventListener('focus', function() {
      this.classList.remove('form__input--error');
    });
  });
}

function validateField(field) {
  const value = field.value.trim();
  const fieldName = field.getAttribute('name');
  
  // Clear previous error styling
  field.classList.remove('form__input--error');
  
  // Validate based on field type
  switch (fieldName) {
    case 'name':
      if (!value || value.length < 2) {
        field.classList.add('form__input--error');
        return false;
      }
      break;
      
    case 'email':
      if (!value) {
        field.classList.add('form__input--error');
        return false;
      } else if (!validateEmail(value)) {
        field.classList.add('form__input--error');
        return false;
      }
      break;
      
    case 'company':
      if (!value || value.length < 2) {
        field.classList.add('form__input--error');
        return false;
      }
      break;
      
    case 'phone':
      if (value && !validatePhone(value)) {
        field.classList.add('form__input--error');
        return false;
      }
      break;
      
    case 'role':
      if (value && value.length < 2) {
        field.classList.add('form__input--error');
        return false;
      }
      break;
      
    case 'message':
      if (!value || value.length < 10) {
        field.classList.add('form__input--error');
        return false;
      }
      break;
  }
  
  return true;
}

// Initialize real-time validation when page loads
document.addEventListener('DOMContentLoaded', function() {
  addRealTimeValidation();
});

console.log('🚀 krid.ai website loaded successfully!');
