    // Set current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Mobile menu toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = target.offsetTop - navbarHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Typing effect for headline
    const headline = document.querySelector('.typing');
    const originalText = headline.textContent;
    headline.textContent = '';
    
    let i = 0;
    function typeWriter() {
      if (i < originalText.length) {
        headline.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        // Remove typing cursor after animation
        setTimeout(() => {
          headline.classList.remove('typing');
        }, 2000);
      }
    }
    
    // Start typing effect after page load
    window.addEventListener('load', () => {
      setTimeout(typeWriter, 500);
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Stats counter animation
    const animateStats = () => {
      const stats = document.querySelectorAll('.profile-stat-number');
      
      const countUp = (element, target, isPercentage = false, suffix = '') => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            element.textContent = target + (isPercentage ? '%' : suffix);
            clearInterval(timer);
          } else {
            element.textContent = Math.floor(current) + (isPercentage ? '%' : suffix);
          }
        }, 30);
      };

      // Animate each stat
      stats.forEach((stat, index) => {
        const text = stat.textContent;
        if (text.includes('+')) {
          const num = parseInt(text);
          countUp(stat, num, false, '+');
        } else if (text.includes('%')) {
          const num = parseInt(text);
          countUp(stat, num, true);
        } else if (text.includes('/')) {
          // For "24/7" type stats, just keep original
          return;
        }
      });
    };

    // Trigger stats animation when profile section is visible
    const profileSection = document.querySelector('.profile-section');
    if (profileSection) {
      const profileObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStats();
            profileObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      profileObserver.observe(profileSection);
    }

    // Parallax effect for background pattern
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.background-pattern');
      const speed = scrolled * 0.1;
      parallax.style.transform = `translateY(${speed}px)`;
    });

    // Add some interactive hover effects
    document.querySelectorAll('.skill-tag').forEach(tag => {
      tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
      });
      
      tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Profile image click effect
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
      profileImage.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 150);
      });
    }

    // Form validation and enhancement (if you add a contact form later)
    const enhanceContactForm = () => {
      const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
      emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          // You could add analytics tracking here
          console.log('Contact email clicked');
        });
      });
    };

    enhanceContactForm();

    // Keyboard navigation enhancement
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navLinks.classList.remove('active');
      }
    });

    // Add focus management for accessibility
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
      element.addEventListener('focus', function() {
        this.style.outline = '2px solid rgba(102, 126, 234, 0.5)';
        this.style.outlineOffset = '2px';
      });
      
      element.addEventListener('blur', function() {
        this.style.outline = 'none';
      });
    });

    // Performance optimization: lazy load images if you add them
    const lazyLoadImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    lazyLoadImages();