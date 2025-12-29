// Main JavaScript for New Year Wish Website

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTypewriter();
    initScrollAnimations();
    initParticles();
    initCarousels();
    initNavigation();
    initInteractiveElements();
});

// Typewriter effect for hero section
function initTypewriter() {
    const typed = new Typed('#typed-text', {
        strings: ['Dear Cupcake...', 'My Love, My Life', 'To Forever With You'],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Stagger animation for multiple elements
                const siblings = entry.target.parentElement.querySelectorAll('.reveal');
                siblings.forEach((sibling, index) => {
                    setTimeout(() => {
                        sibling.classList.add('active');
                    }, index * 150);
                });
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-bg');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Particle system using p5.js
function initParticles() {
    new p5((p) => {
        let particles = [];
        const numParticles = 50;

        p.setup = () => {
            const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
            canvas.parent('particles');
            canvas.style('position', 'absolute');
            canvas.style('top', '0');
            canvas.style('left', '0');
            canvas.style('z-index', '1');

            // Create particles
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle(p));
            }
        };

        p.draw = () => {
            p.clear();
            
            // Update and draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
        };

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };

        class Particle {
            constructor(p) {
                this.p = p;
                this.x = p.random(p.width);
                this.y = p.random(p.height);
                this.vx = p.random(-0.5, 0.5);
                this.vy = p.random(-0.5, 0.5);
                this.size = p.random(2, 6);
                this.opacity = p.random(0.3, 0.8);
                this.color = p.random(['#D4A574', '#C8956D', '#F4E6E1']);
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Wrap around edges
                if (this.x < 0) this.x = this.p.width;
                if (this.x > this.p.width) this.x = 0;
                if (this.y < 0) this.y = this.p.height;
                if (this.y > this.p.height) this.y = 0;

                // Gentle floating motion
                this.y += Math.sin(this.p.frameCount * 0.01 + this.x * 0.01) * 0.5;
            }

            draw() {
                this.p.push();
                this.p.translate(this.x, this.y);
                this.p.noStroke();
                this.p.fill(this.color + Math.floor(this.opacity * 255).toString(16));
                this.p.ellipse(0, 0, this.size);
                this.p.pop();
            }
        }
    });
}

// Initialize carousels
function initCarousels() {
    // Memory carousel
    const memoryCarousel = document.getElementById('memory-carousel');
    if (memoryCarousel) {
        new Splide('#memory-carousel', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            breakpoints: {
                768: {
                    perPage: 2,
                },
                480: {
                    perPage: 1,
                }
            }
        }).mount();
    }
}

// Smooth navigation
function initNavigation() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update active nav item on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-rose-gold');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-rose-gold');
            }
        });
    });
}

// Interactive elements
function initInteractiveElements() {
    // Calendar day interactions
    const calendarDays = document.querySelectorAll('.calendar-day');
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'absolute inset-0 bg-white/30 rounded-full scale-0';
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            anime({
                targets: ripple,
                scale: [0, 1],
                opacity: [1, 0],
                duration: 600,
                easing: 'easeOutQuart',
                complete: () => ripple.remove()
            });
        });
    });

    // Polaroid hover effects
    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach(polaroid => {
        polaroid.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                rotate: '0deg',
                scale: 1.05,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });

        polaroid.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                rotate: '-2deg',
                scale: 1,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
    });

    // Wish preview hover effect
    const wishPreview = document.querySelector('.wish-preview');
    if (wishPreview) {
        wishPreview.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.02,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });

        wishPreview.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
    }

    // Button hover effects
    const buttons = document.querySelectorAll('a[href$=".html"]');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutQuart'
            });
        });

        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuart'
            });
        });
    });
}

// Text animation utilities
function animateText(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
}

// Utility function to create floating animation
function createFloatingAnimation(element, duration = 3000) {
    anime({
        targets: element,
        translateY: [-10, 10],
        duration: duration,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });
}

// Add loading animation
window.addEventListener('load', () => {
    // Fade in the page
    anime({
        targets: 'body',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuart'
    });
    
    // Animate navigation
    anime({
        targets: 'nav',
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 800,
        delay: 500,
        easing: 'easeOutQuart'
    });
});

// Handle reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}

// Add some Easter eggs
let clickCount = 0;
document.addEventListener('click', (e) => {
    if (e.target.textContent.includes('Cupcake')) {
        clickCount++;
        if (clickCount >= 5) {
            // Show special message
            const message = document.createElement('div');
            message.textContent = '🧁 You found the secret cupcake! I love you even more! 💕';
            message.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-rose-gold text-white px-6 py-3 rounded-full shadow-lg z-50';
            document.body.appendChild(message);
            
            anime({
                targets: message,
                scale: [0, 1],
                opacity: [0, 1],
                duration: 500,
                easing: 'easeOutBack',
                complete: () => {
                    setTimeout(() => {
                        anime({
                            targets: message,
                            scale: [1, 0],
                            opacity: [1, 0],
                            duration: 300,
                            complete: () => message.remove()
                        });
                    }, 3000);
                }
            });
            
            clickCount = 0;
        }
    }
});

console.log('🧁 Made with love for Cupcake 💕');