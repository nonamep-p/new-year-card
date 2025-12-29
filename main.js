document.addEventListener('DOMContentLoaded', function() {
    initTypewriter();
    initScrollReveal();
    initParticles();
    initProgressBar();
});

// 1. Typewriter Effect (Hero)
function initTypewriter() {
    new Typed('#typed-text', {
        strings: ['Dear Cupcake...', 'Happy New Year', 'My Forever Love'],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true
    });
}

// 2. Scroll Reveal Logic (The core of Scrollytelling)
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it's a polaroid, give it a little extra tilt reset animation
                if(entry.target.classList.contains('polaroid')) {
                    anime({
                        targets: entry.target,
                        rotate: [anime.random(-5, 5), 0],
                        duration: 800,
                        easing: 'easeOutElastic(1, .8)'
                    });
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// 3. Circular Progress Bar
function initProgressBar() {
    const circle = document.querySelector('#progressCircle');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const height = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / height;
        
        const offset = circumference - (scrollPercent * circumference);
        circle.style.strokeDashoffset = offset;
    });
}

// 4. Particle Background (P5.js)
function initParticles() {
    const container = document.getElementById('particles');
    if(!container) return;

    new p5((p) => {
        let particles = [];

        p.setup = () => {
            let canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
            canvas.parent('particles');
            for(let i = 0; i < 30; i++) particles.push(new Particle(p));
        };

        p.draw = () => {
            p.clear();
            particles.forEach(pt => {
                pt.update();
                pt.draw();
            });
        };

        p.windowResized = () => {
            p.resizeCanvas(container.offsetWidth, container.offsetHeight);
        };

        class Particle {
            constructor(p) {
                this.p = p;
                this.x = p.random(p.width);
                this.y = p.random(p.height);
                this.size = p.random(2, 5);
                this.speedX = p.random(-0.5, 0.5);
                this.speedY = p.random(-0.5, 0.5);
                this.alpha = p.random(100, 200);
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if(this.x < 0) this.x = this.p.width;
                if(this.x > this.p.width) this.x = 0;
                if(this.y < 0) this.y = this.p.height;
                if(this.y > this.p.height) this.y = 0;
            }
            draw() {
                this.p.noStroke();
                this.p.fill(212, 165, 116, this.alpha); // Rose Gold color
                this.p.circle(this.x, this.y, this.size);
            }
        }
    });
}
