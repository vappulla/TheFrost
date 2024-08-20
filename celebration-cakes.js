function addRegularToCart() {
    const flavor = document.getElementById('regularFlavors').value;
    const size = document.getElementById('RegularSizes').value;

    if (!flavor || !size) {
        alert('Please select all required options.');
        return;
    }

    const cartItem = {
        type: 'Regular celebration Cakes',
        flavor: flavor,
        size: size,
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to cart!');

    // Reset dropdowns to default values
    document.getElementById('regularFlavors').selectedIndex = 0;
    document.getElementById('RegularSizes').selectedIndex = 0;
}
function addNakedCakeToCart() {
    const flavor = document.getElementById('NakedCakeFlavors').value;
    const size = document.getElementById('NakedCakeSizes').value;

    if (!flavor || !size) {
        alert('Please select all required options.');
        return;
    }

    const cartItem = {
        type: 'Naked Cake',
        flavor: flavor,
        size: size,
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to cart!');

    // Reset dropdowns to default values
    document.getElementById('NakedCakeFlavors').selectedIndex = 0;
    document.getElementById('NakedCakeSizes').selectedIndex = 0;
}
function addCheeseCakeToCart() {
    const flavor = document.getElementById('CheeseCakeFlavors').value;
    const size = document.getElementById('CheeseCakeSizes').value;

    if (!flavor || !size) {
        alert('Please select all required options.');
        return;
    }

    const cartItem = {
        type: 'Cheese Cake',
        flavor: flavor,
        size: size,
    };

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to cart!');

    // Reset dropdowns to default values
    document.getElementById('CheeseCakeFlavors').selectedIndex = 0;
    document.getElementById('CheeseCakeSizes').selectedIndex = 0;
}

document.addEventListener('DOMContentLoaded', function () {
    var currentPage = location.pathname.split("/").pop();
    var navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

let slideIndexTheme = 0;
let slideIndexDessert =0;
let slideIndexRegular =0;
let slideIndexNakedCake =0;
let slideIndexCheese=0;
function showSlides(slideshowClass, slideIndexVar) {
    const slides = document.querySelectorAll(`.${slideshowClass} .slide`);
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndexVar ? 'block' : 'none';
    });
    slideIndexVar = (slideIndexVar + 1) % slides.length;

    // Pass the updated slideIndexVar to the function
    setTimeout(() => showSlides(slideshowClass, slideIndexVar), 3000); // Change slide every 3 seconds
}

// Initialize both slideshows
document.addEventListener('DOMContentLoaded', () => {
    showSlides('Theme-slideshow', slideIndexTheme);
    showSlides('Dessert-slideshow', slideIndexDessert);
    showSlides('Regular-slideshow',slideIndexRegular);
    showSlides('NakedCake-slideshow',slideIndexNakedCake);
    showSlides('Cheese-slideshow',slideIndexCheese);
    



});


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // Check if the section is within the viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check to handle cases where elements are already in view
});


