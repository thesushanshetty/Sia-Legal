// ============================================================================
// Mobile Menu Toggle
// ============================================================================

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.site-header')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('active');
    }
  });
}

// ============================================================================
// Year in Footer
// ============================================================================

const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ============================================================================
// Smooth Scroll Enhancement
// ============================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const offsetTop = target.offsetTop - 80;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================================================
// Intersection Observer for Fade-in Animation
// ============================================================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(section);
});

// ============================================================================
// Active Navigation Link
// ============================================================================

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// ============================================================================
// Contact Form Enhancement
// ============================================================================

const contactLink = document.querySelector('a[href="mailto:advsushanshetty@gmail.com?subject=Legal%20Consultation%20Enquiry"]');
if (contactLink) {
  contactLink.addEventListener('click', function(e) {
    // Optional: Add analytics or form opening logic here
    console.log('Contact enquiry initiated');
  });
}

// ============================================================================
// Accessibility: Keyboard Navigation
// ============================================================================

document.addEventListener('keydown', (e) => {
  // Escape key closes mobile menu
  if (e.key === 'Escape') {
    menuToggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('active');
  }
});

// ============================================================================
// Performance: Lazy Loading for Images
// ============================================================================

if ('IntersectionObserver' in window) {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// ============================================================================
// Console Message
// ============================================================================

console.log('%cSIA LEGAL', 'font-size: 24px; font-weight: bold; color: #d4af37;');
console.log('%cLaw. Strategy. Resolution.', 'font-size: 14px; color: #666;');
console.log('%cDesigned and built with care.', 'font-size: 12px; color: #999;');