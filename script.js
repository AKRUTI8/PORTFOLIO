// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.querySelectorAll('#current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Custom cursor
  const cursor = document.querySelector('.cursor');
  
  if (cursor && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.opacity = '1';
      cursor.style.top = e.clientY + 'px';
      cursor.style.left = e.clientX + 'px';
    });

    document.addEventListener('mousedown', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      });
      
      element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      });
    });
  }

  // Mobile Navigation
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Header scroll effect
  const header = document.querySelector('header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        header.style.height = '3.5rem';
      } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        header.style.height = '4rem';
      }
    });
  }

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  const alert = document.getElementById('alert');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      // Simulate form submission
      console.log({
        name,
        email,
        subject,
        message
      });
      
      // Show success message
      if (alert) {
        alert.classList.add('show');
        
        // Hide message after 3 seconds
        setTimeout(() => {
          alert.classList.remove('show');
        }, 3000);
      }
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Scroll reveal animation
  const revealElements = document.querySelectorAll('.skill-card, .project-card, .contact-card');
  
  function reveal() {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Set initial state for animation
  revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  window.addEventListener('scroll', reveal);
  
  // Trigger reveal on page load
  reveal();
});