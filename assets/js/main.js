/**
 * IAS Glass Landing Page - Main JavaScript
 * Vanilla JS, no external dependencies
 * Features: Theme toggle, smooth scroll, scroll-spy, FAQ, form validation, lazy loading
 */

(function() {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Theme Toggle Module
   */
  const ThemeToggle = {
    init() {
      this.toggle = document.getElementById('theme-toggle');
      this.darkIcon = document.querySelector('.theme-icon-dark');
      this.lightIcon = document.querySelector('.theme-icon-light');
      
      if (!this.toggle) return;

      // Load saved theme or default to dark
      const savedTheme = localStorage.getItem('theme') || 'dark';
      this.setTheme(savedTheme);

      // Event listener
      this.toggle.addEventListener('click', () => this.handleToggle());
    },

    setTheme(theme) {
      const html = document.documentElement;
      const isDark = theme === 'dark';
      
      if (isDark) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }

      // Update icons
      if (this.darkIcon && this.lightIcon) {
        this.darkIcon.classList.toggle('hidden', !isDark);
        this.lightIcon.classList.toggle('hidden', isDark);
      }

      // Update aria-pressed
      if (this.toggle) {
        this.toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      }

      localStorage.setItem('theme', theme);
    },

    handleToggle() {
      const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      this.setTheme(newTheme);
    }
  };

  /**
   * Mobile Menu Module
   */
  const MobileMenu = {
    init() {
      const menuToggle = document.getElementById('mobile-menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
      const menuIconOpen = document.querySelector('.menu-icon-open');
      const menuIconClose = document.querySelector('.menu-icon-close');
      
      if (!menuToggle || !mobileMenu) return;

      // Toggle menu
      menuToggle.addEventListener('click', () => {
        const isOpen = !mobileMenu.hidden;
        
        if (isOpen) {
          this.closeMenu(mobileMenu, menuIconOpen, menuIconClose, menuToggle);
        } else {
          this.openMenu(mobileMenu, menuIconOpen, menuIconClose, menuToggle);
        }
      });

      // Close menu when clicking on a link
      mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          this.closeMenu(mobileMenu, menuIconOpen, menuIconClose, menuToggle);
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!mobileMenu.hidden && 
            !mobileMenu.contains(e.target) && 
            !menuToggle.contains(e.target)) {
          this.closeMenu(mobileMenu, menuIconOpen, menuIconClose, menuToggle);
        }
      });

      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.hidden) {
          this.closeMenu(mobileMenu, menuIconOpen, menuIconClose, menuToggle);
        }
      });
    },

    openMenu(menu, iconOpen, iconClose, toggle) {
      menu.hidden = false;
      setTimeout(() => {
        menu.style.transform = 'translateY(0)';
      }, 10);
      iconOpen.classList.add('hidden');
      iconClose.classList.remove('hidden');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden'; // Prevent scroll
    },

    closeMenu(menu, iconOpen, iconClose, toggle) {
      menu.style.transform = 'translateY(-100%)';
      setTimeout(() => {
        menu.hidden = true;
      }, 300);
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = ''; // Restore scroll
    }
  };

  /**
   * Smooth Scroll Module
   */
  const SmoothScroll = {
    init() {
      // Only apply smooth scroll if user hasn't opted for reduced motion
      if (prefersReducedMotion) return;

      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const href = anchor.getAttribute('href');
          
          // Skip if it's just '#'
          if (href === '#') return;

          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            // Update URL without scrolling
            history.pushState(null, null, href);
          }
        });
      });
    }
  };

  /**
   * Scroll Spy Module
   */
  const ScrollSpy = {
    sections: [],
    navLinks: [],

    init() {
      // Get all sections with IDs
      this.sections = Array.from(document.querySelectorAll('section[id]'));
      this.navLinks = Array.from(document.querySelectorAll('.nav-link'));

      if (this.sections.length === 0) return;

      // Use IntersectionObserver for performance
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.updateActiveLink(entry.target.id);
          }
        });
      }, observerOptions);

      this.sections.forEach(section => {
        this.observer.observe(section);
      });
    },

    updateActiveLink(activeId) {
      this.navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${activeId}`) {
          link.classList.add('text-[var(--accent)]');
          link.classList.remove('text-[var(--muted)]');
        } else {
          link.classList.remove('text-[var(--accent)]');
          link.classList.add('text-[var(--muted)]');
        }
      });
    }
  };

  /**
   * FAQ Accordion Module
   */
  const FAQAccordion = {
    init() {
      const faqItems = document.querySelectorAll('.faq-item');
      
      faqItems.forEach(item => {
        const summary = item.querySelector('summary');
        
        if (summary) {
          // Keyboard accessibility
          summary.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              item.open = !item.open;
            }
          });

          // Update ARIA attributes
          item.addEventListener('toggle', () => {
            summary.setAttribute('aria-expanded', item.open ? 'true' : 'false');
          });

          // Set initial ARIA state
          summary.setAttribute('aria-expanded', item.open ? 'true' : 'false');
        }
      });
    }
  };

  /**
   * Form Validation Module (with honeypot)
   */
  const FormValidation = {
    init() {
      const form = document.querySelector('form');
      
      if (!form) return;

      form.addEventListener('submit', (e) => {
        // Honeypot check - if filled, it's a bot
        const honeypot = form.querySelector('input[name="website"]');
        
        if (honeypot && honeypot.value !== '') {
          e.preventDefault();
          console.warn('Bot detected via honeypot');
          return false;
        }

        // For now, just use mailto: fallback
        // In production, this would connect to a backend
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const message = form.querySelector('#message').value;
        
        const mailtoLink = `mailto:contact@ia-solution.fr?subject=Contact IAS Glass&body=Nom: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
        
        window.location.href = mailtoLink;
        e.preventDefault();
        
        // Show confirmation (optional)
        alert('Merci pour votre message ! Votre client email va s\'ouvrir.');
      });
    }
  };

  /**
   * Lazy Loading Images Module
   */
  const LazyLoad = {
    init() {
      const images = document.querySelectorAll('img[loading="lazy"]');
      
      // Modern browsers support native lazy loading
      // For older browsers, we can use IntersectionObserver
      if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading is supported
        return;
      }

      // Fallback for older browsers
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  };

  /**
   * Gallery Carousel Module
   */
  const GalleryCarousel = {
    currentSlide: 0,
    totalSlides: 0,
    track: null,
    dots: [],
    autoplayInterval: null,
    autoplayDelay: 5000,
    isDragging: false,
    startPos: 0,
    currentTranslate: 0,
    prevTranslate: 0,

    init() {
      const carousel = document.getElementById('galleryCarousel');
      if (!carousel) return;

      this.track = carousel.querySelector('.carousel-track');
      this.dots = Array.from(carousel.querySelectorAll('.carousel-dot'));
      this.totalSlides = carousel.querySelectorAll('.carousel-slide').length;

      if (this.totalSlides === 0) return;

      // Navigation buttons
      const prevBtn = carousel.querySelector('.carousel-btn-prev');
      const nextBtn = carousel.querySelector('.carousel-btn-next');

      if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
      if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());

      // Dots navigation
      this.dots.forEach((dot, index) => {
        dot.addEventListener('click', () => this.goToSlide(index));
      });

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (!this.isCarouselVisible()) return;
        
        if (e.key === 'ArrowLeft') this.prevSlide();
        if (e.key === 'ArrowRight') this.nextSlide();
      });

      // Touch/Mouse drag support
      this.initDragSupport();

      // Autoplay (pause on hover)
      this.startAutoplay();
      carousel.addEventListener('mouseenter', () => this.stopAutoplay());
      carousel.addEventListener('mouseleave', () => this.startAutoplay());

      // Pause autoplay on user interaction
      carousel.addEventListener('touchstart', () => this.stopAutoplay());
    },

    isCarouselVisible() {
      const carousel = document.getElementById('galleryCarousel');
      if (!carousel) return false;
      
      const rect = carousel.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    },

    goToSlide(index) {
      if (index < 0 || index >= this.totalSlides) return;
      
      this.currentSlide = index;
      this.updateCarousel();
      this.resetAutoplay();
    },

    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
      this.updateCarousel();
      this.resetAutoplay();
    },

    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
      this.updateCarousel();
      this.resetAutoplay();
    },

    updateCarousel() {
      const offset = -this.currentSlide * 100;
      this.track.style.transform = `translateX(${offset}%)`;

      // Update dots
      this.dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === this.currentSlide);
      });
    },

    startAutoplay() {
      if (prefersReducedMotion) return; // Respect user preference
      
      this.stopAutoplay();
      this.autoplayInterval = setInterval(() => {
        this.nextSlide();
      }, this.autoplayDelay);
    },

    stopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
        this.autoplayInterval = null;
      }
    },

    resetAutoplay() {
      this.stopAutoplay();
      this.startAutoplay();
    },

    initDragSupport() {
      const carousel = document.getElementById('galleryCarousel');
      if (!carousel) return;

      // Mouse events
      this.track.addEventListener('mousedown', this.dragStart.bind(this));
      this.track.addEventListener('mousemove', this.drag.bind(this));
      this.track.addEventListener('mouseup', this.dragEnd.bind(this));
      this.track.addEventListener('mouseleave', this.dragEnd.bind(this));

      // Touch events
      this.track.addEventListener('touchstart', this.dragStart.bind(this));
      this.track.addEventListener('touchmove', this.drag.bind(this));
      this.track.addEventListener('touchend', this.dragEnd.bind(this));

      // Prevent context menu on long press
      this.track.addEventListener('contextmenu', (e) => e.preventDefault());
    },

    dragStart(e) {
      this.isDragging = true;
      this.track.classList.add('dragging');
      this.startPos = this.getPositionX(e);
      this.stopAutoplay();
    },

    drag(e) {
      if (!this.isDragging) return;
      
      const currentPosition = this.getPositionX(e);
      const diff = currentPosition - this.startPos;
      
      // Only drag if movement is significant
      if (Math.abs(diff) > 5) {
        e.preventDefault();
      }
    },

    dragEnd(e) {
      if (!this.isDragging) return;
      
      this.isDragging = false;
      this.track.classList.remove('dragging');
      
      const currentPosition = this.getPositionX(e);
      const diff = currentPosition - this.startPos;
      
      // Threshold for slide change (50px)
      if (diff > 50) {
        this.prevSlide();
      } else if (diff < -50) {
        this.nextSlide();
      } else {
        this.updateCarousel(); // Snap back
      }
      
      this.startAutoplay();
    },

    getPositionX(e) {
      return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }
  };

  /**
   * Analytics Hook (disabled by default)
   */
  const Analytics = {
    init() {
      // Check for data-analytics attributes
      const analyticsElements = document.querySelectorAll('[data-analytics]');
      
      analyticsElements.forEach(element => {
        element.addEventListener('click', (e) => {
          const eventName = element.getAttribute('data-analytics');
          
          // Hook for analytics - currently disabled
          // In production, you would send this to your analytics service
          if (window.trackEvent) {
            window.trackEvent(eventName, {
              element: element.tagName,
              href: element.href || null
            });
          }
        });
      });
    }
  };

  /**
   * Initialize all modules when DOM is ready
   */
  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initModules);
    } else {
      initModules();
    }
  }

  function initModules() {
    ThemeToggle.init();
    MobileMenu.init();
    SmoothScroll.init();
    ScrollSpy.init();
    FAQAccordion.init();
    FormValidation.init();
    LazyLoad.init();
    GalleryCarousel.init();
    Analytics.init();

    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
  }

  // Start initialization
  init();

})();
