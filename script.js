// Mobile Navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}
navSlide();

// Typing Animation
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ["Full Stack Developer", "Thumbnail Designer", "Video Editor"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true
    };
    var typed = new Typed('#typed-text', options);
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// --- EMAILJS FORM LOGIC ---
const handleContactForm = () => {
    const contactForm = document.querySelector('.modern-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        
        // Visual feedback
        submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        // Prepare parameters (ensure these match your EmailJS template variables)
        const templateParams = {
            from_name: document.getElementById('name').value,
            reply_to: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        emailjs.send('service_imurbxd', 'template_nlehi5u', templateParams)
            .then(() => {
                submitBtn.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
                submitBtn.style.backgroundColor = '#27c93f';
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    submitBtn.style.backgroundColor = '';
                }, 3000);
            }, (error) => {
                console.log('FAILED...', error);
                submitBtn.innerHTML = 'Error! Try Again <i class="fas fa-exclamation-triangle"></i>';
                submitBtn.disabled = false;
            });
    });
}
handleContactForm();

// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card, .hero-social-icon, .project-links a, .social-box');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    follower.style.left = e.clientX - 16 + 'px';
    follower.style.top = e.clientY - 16 + 'px';
});

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        follower.classList.add('cursor-active');
    });
    el.addEventListener('mouseleave', () => {
        follower.classList.remove('cursor-active');
    });
});