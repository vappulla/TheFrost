let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Increment slide index
    slideIndex++;

    // Reset slide index if it exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;  
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";  

    // Change slide every 3 seconds
    setTimeout(showSlides, 5000); 
}




// Initialize the slideshow
showSlides();
document.addEventListener('DOMContentLoaded', function () {
    var currentPage = location.pathname.split("/").pop();
    var navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1 // Adjusts how much of the section must be visible before triggering
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Function to check if the section is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function onScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('in-view');
        }
    });
}

// Attach the scroll event listener
window.addEventListener('scroll', onScroll);

// Trigger the scroll event once to apply the animation to sections already in view
document.addEventListener('DOMContentLoaded', onScroll);




