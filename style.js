var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    breakpoints: {
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 2 }
    }
});


// Select all sections with the class of 'section'
const sections = document.querySelectorAll('.section');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Element in view:', entry.target);  // Log the element when it's in view
            entry.target.classList.add('show');  // Add 'show' class to make the element visible and animate
        } else {
            entry.target.classList.remove('show');  // Remove 'show' if you want to reverse the animation when out of view
        }
    });
}, {
    threshold: 0.2  // 20% of the element must be visible before triggering the animation
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function() {
    // Insert the Intersection Observer code here
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing after it's visible
            }
        });
    }, { threshold: 0.2 }); // Adjust threshold for trigger point

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
});


let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
const totalTestimonials = testimonials.length;
const slider = document.querySelector(".testimonial-slider");

function slideTestimonials() {
    currentIndex++;
    if (currentIndex >= totalTestimonials) {
        currentIndex = 0;
    }
    slider.style.transform = `translateX(-${currentIndex * 300}%)`;
}

// Automatically slide every 3 seconds
setInterval(slideTestimonials, 2000);



 // Glitch effect on scroll
 window.addEventListener('scroll', function() {
    document.querySelectorAll('.containers').forEach(container => {
        container.classList.toggle('glitch', window.scrollY > 50);
    });
});

// Mouse Move Effect - Dynamic Depth Shift
document.addEventListener('mousemove', (e) => {
    let x = (e.clientX / window.innerWidth - 0.5) * 20;
    let y = (e.clientY / window.innerHeight - 0.5) * 20;
    document.querySelector('.subscene').style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});



