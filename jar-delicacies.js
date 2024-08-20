function addDreamTinToCart() {
    const flavor = document.getElementById('DreamTinFlavors').value;
    const size = document.getElementById('DreamTinSizes').value;

    if (!flavor || !size) {
        alert('Please select all required options.');
        return;
    }

    const cartItem = {
        type: 'Dream Tin',
        flavor: flavor,
        size: size,
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to cart!');

    // Reset dropdowns to default values
    document.getElementById('DreamTinFlavors').selectedIndex = 0;
    document.getElementById('DreamTinSizes').selectedIndex = 0;
}

function addTresLechToCart() {
    const flavor = document.getElementById('TresLechFlavors').value;
    const size = document.getElementById('TresLechSizes').value;

    if (!flavor || !size) {
        alert('Please select all required options.');
        return;
    }

    const cartItem = {
        type: 'Tres Lech',
        flavor: flavor,
        size: size,
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to cart!');

    // Reset dropdowns to default values
    document.getElementById('TresLechFlavors').selectedIndex = 0;
    document.getElementById('TresLechSizes').selectedIndex = 0;
}

function addClassicTubToCart() {
    const flavor = document.getElementById('ClassicTubFlavors').value;
    const size = document.getElementById('ClassicTubSizes').value;

    if (!flavor || !size) {
        alert('Please select all required options.');
        return;
    }

    const cartItem = {
        type: 'Classic Tub',
        flavor: flavor,
        size: size,
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to cart!');

    // Reset dropdowns to default values
    document.getElementById('ClassicTubFlavors').selectedIndex = 0;
    document.getElementById('ClassicTubSizes').selectedIndex = 0;
}
// Slide Indexes for specific sections
let slideIndexTresLech = 0;
let slideIndexDreamTin = 0;
let slideIndexClassicTub=0;

function showSlides(slideshowClass, slideIndexVar) {
    const slides = document.querySelectorAll(`.${slideshowClass} .slide`);
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndexVar ? 'block' : 'none';
    });
    slideIndexVar = (slideIndexVar + 1) % slides.length;

    // Pass the updated slideIndexVar to the function
    setTimeout(() => showSlides(slideshowClass, slideIndexVar), 3000); // Change slide every 3 seconds
}

// Initialize slideshows for Tres Lech and Dream Tin
document.addEventListener('DOMContentLoaded', () => {
    showSlides('TresLech-slideshow', slideIndexTresLech);
    showSlides('DreamTin-slideshow', slideIndexDreamTin);
    showSlides('ClassicTub-slideshow', slideIndexClassicTub);
    
});

document.addEventListener('DOMContentLoaded', function () {
    var currentPage = location.pathname.split("/").pop();
    var navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});



