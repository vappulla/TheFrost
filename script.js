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



