document.addEventListener('DOMContentLoaded', () => {
    
    /* -------------------------------------------------------------
     * Header & Mobile Menu Toggle
     * ------------------------------------------------------------- */
    const header = document.querySelector('.header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Add sticky bg class to header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Toggle menu visibility on mobile
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            if (mobileToggle) {
                const icon = mobileToggle.querySelector('i');
                icon.className = 'fa-solid fa-bars';
            }
        });
    });

    /* -------------------------------------------------------------
     * Scroll Reveal & Progress Bars Animation
     * ------------------------------------------------------------- */
    const revealElements = document.querySelectorAll('.animate-reveal');
    const progressBars = document.querySelectorAll('.progress-bar');
    const statsSection = document.getElementById('stats');
    let statsAnimated = false;

    // Intersection Observer configuration
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it's a skills card, animate its progress bars
                if (entry.target.classList.contains('skills-category-card')) {
                    const bars = entry.target.querySelectorAll('.progress-bar');
                    bars.forEach(bar => {
                        const targetWidth = bar.getAttribute('data-progress');
                        bar.style.width = targetWidth;
                    });
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Separately observe skill cards if they are revealable elements
    const skillCards = document.querySelectorAll('.skills-category-card');
    skillCards.forEach(card => {
        revealObserver.observe(card);
    });

    /* -------------------------------------------------------------
     * Stats Count-up Animation
     * ------------------------------------------------------------- */
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateStats = () => {
        statNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const duration = 2000; // 2 seconds
            const stepTime = Math.abs(Math.floor(duration / target));
            let current = 0;

            // Adjust step values for larger numbers (like 100% dedication)
            const increment = target > 50 ? Math.ceil(target / 100) : 1;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + (target === 2 ? '+' : target === 1 ? '+' : target === 100 ? '%' : '%');
                    clearInterval(timer);
                } else {
                    stat.textContent = current;
                }
            }, Math.max(stepTime, 15));
        });
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                animateStats();
                statsAnimated = true;
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    /* -------------------------------------------------------------
     * Interactive Ambient Cursor Glow
     * ------------------------------------------------------------- */
    // Add custom cursor glow trail on desktop devices
    if (window.innerWidth > 768) {
        const glow1 = document.querySelector('.glow-1');
        const glow2 = document.querySelector('.glow-2');
        
        window.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            // Shift glow-1 slightly towards cursor
            if (glow1) {
                glow1.style.transform = `translate(${(mouseX - window.innerWidth/2) * 0.04}px, ${(mouseY - window.innerHeight/2) * 0.04}px)`;
            }
            if (glow2) {
                glow2.style.transform = `translate(${(mouseX - window.innerWidth/2) * -0.02}px, ${(mouseY - window.innerHeight/2) * -0.02}px)`;
            }
        });
    }

    /* -------------------------------------------------------------
     * Contact Form Submission
     * ------------------------------------------------------------- */
    const contactForm = document.getElementById('portfolio-contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simple validation check
            if (!name || !email || !subject || !message) {
                showFeedback('Please fill out all fields.', 'error');
                return;
            }

            // Disable submit button and show loading state
            const submitBtn = contactForm.querySelector('.form-submit-btn');
            const originalBtnHTML = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>';

            // Prepare data for Web3Forms
            const formData = new FormData(contactForm);
            // NOTE: Replace YOUR_WEB3FORMS_ACCESS_KEY with your actual Web3Forms access key
            formData.append("access_key", "8c7647fd-5869-4958-89c5-300b3f2c402a");

            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    showFeedback(`Thank you, ${name}! Your message has been sent successfully. Chandrabhan will get back to you shortly.`, 'success');
                    contactForm.reset();
                } else {
                    console.log(response);
                    showFeedback(json.message || "Something went wrong!", 'error');
                }
            })
            .catch(error => {
                console.log(error);
                showFeedback("Something went wrong! Please try again later.", 'error');
            })
            .finally(() => {
                // Restore button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHTML;
            });
        });
    }

    function showFeedback(message, type) {
        if (formFeedback) {
            formFeedback.textContent = message;
            formFeedback.className = `form-feedback ${type}`;
            formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Keep feedback visible for 6 seconds
            setTimeout(() => {
                formFeedback.className = 'form-feedback hidden';
            }, 6000);
        }
    }

    /* -------------------------------------------------------------
     * Interactive API Console & Server Status
     * ------------------------------------------------------------- */
    const latencyDisplay = document.getElementById('api-latency');
    if (latencyDisplay) {
        setInterval(() => {
            const baseLatency = 20;
            const variance = Math.floor(Math.random() * 15);
            latencyDisplay.textContent = (baseLatency + variance) + 'ms';
        }, 3000);
    }

});
