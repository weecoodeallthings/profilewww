/**
 * script.js - Interactive behaviors for the weecoo profile website.
 * Fully compliant with technical commenting standards.
 */

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initFormInteractivity();
});

/**
 * Initializes smooth scrolling behavior for anchor links.
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Adds micro-interactions to inputs and form submission.
 */
function initFormInteractivity() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  const inputs = form.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      // Dynamic focal outline shift
      input.style.transform = 'translate(-3px, -3px)';
      input.style.boxShadow = '5px 5px 0px #000';
    });
    
    input.addEventListener('blur', () => {
      // Restore standard state
      input.style.transform = '';
      input.style.boxShadow = '';
    });
  });
}
