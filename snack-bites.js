// Function to update flavors and sizes based on selected brownie type
function updateFlavors() {
    const type = document.getElementById('brownieType').value;
    const flavorsSelect = document.getElementById('flavors');
    const sizesSelect = document.getElementById('sizes');

    // Clear previous 
    flavorsSelect.innerHTML = '<option value="">Select Flavor</option>';
    sizesSelect.innerHTML = '<option value="">Select Size</option>';

    // Reset the flavors select element to single or multiple based on type
    if (type === 'Assorted Brownie') {
        flavorsSelect.setAttribute('multiple', 'multiple');
    } else {
        flavorsSelect.removeAttribute('multiple');
    }

    // Update options based on selected type
    if (type === 'Brownie pieces') {
        flavorsSelect.innerHTML += `
            <optgroup label="Go-To Flavors">
                <option value="Classic Plain">Classic Plain</option>
                <option value="Chocolate Chip">Chocolate Chip</option>
                <option value="Chocolate Chunk">Chocolate Chunk</option>
                <option value="Double Chocolate Chip">Double Chocolate Chip &#9733;</option>
                <option value="Triple Chocolate Chunk">Triple Chocolate Chunk</option>
                <option value="Blondies">Blondies (White Chocolate)</option>
            </optgroup>
            <optgroup label="Exotic Flavors">
                <option value="Nutella Sandwich">Nutella Sandwich &#9733;</option>
                <option value="Oreo Crumble">Oreo Crumble</option>
                <option value="Kitkat Fudge">Kitkat Fudge</option>
                <option value="Chocolate Walnut">Chocolate Walnut</option>
                <option value="Chocolate Almond">Chocolate Almond</option>
                <option value="Hazlenut Crunch">Hazlenut Crunch &#9733;</option>
                <option value="Lotus Biscoff Crunch">Lotus Biscoff Crunch &#9733;</option>
                <option value="Chocolate Espresso">Chocolate Espresso</option>
                <option value="Cookie Crumble">The Cookie Crumble</option>
                <option value="Sea Salt">Sea Salt &#9733;</option>
                <option value="Caramel">Caramel &#9733;</option>
                <option value="Ferrero Rocher">Ferrero Rocher &#9733;</option>
            </optgroup>
        `;
        sizesSelect.innerHTML += `
            <option value="box4">Box of 4</option>
            <option value="box6">Box of 6</option>
            <option value="box9">Box of 9</option>
        `;
    } else if (type === 'Brownie slabs') {
        flavorsSelect.innerHTML += `
            <optgroup label="Go-To Flavors">
                <option value="Classic Plain">Classic Plain</option>
                <option value="Chocolate Chip">Chocolate Chip</option>
                <option value="Double Chocolate Chip">Double Chocolate Chip&#9733;</option>
                <option value="Blondies">Blondies (White Chocolate)</option>
            </optgroup>
            <optgroup label="Exotic Flavors">
                <option value="Nutella Sandwich">Nutella Sandwich&#9733;</option>
                <option value="Oreo Crumble">Oreo Crumble</option>
                <option value="Kitkat Fudge">Kitkat Fudge</option>
                <option value="Chocolate Walnut">Chocolate Walnut</option>
                <option value="Chocolate Almond">Chocolate Almond</option>
                <option value="Hazlenut Crunch">Hazlenut Crunch&#9733;</option>
                <option value="Lotus Biscoff Crunch">Lotus Biscoff Crunch&#9733;</option>
            </optgroup>
        `;
        sizesSelect.innerHTML += `
            <option value="500-600">500-600 grams</option>
            <option value="1-1.2kg">1-1.2 kgs</option>
        `;
    } else if (type === 'Assorted Brownie') {
        flavorsSelect.innerHTML += `
            <optgroup label="Go-To Flavors">
                <option value="Classic Plain">Classic Plain</option>
                <option value="Chocolate Chip">Chocolate Chip</option>
                <option value="Chocolate Chunk">Chocolate Chunk</option>
                <option value="Double Chocolate Chip">Double Chocolate Chip &#9733;</option>
                <option value="Triple Chocolate Chunk">Triple Chocolate Chunk</option>
            </optgroup>
            <optgroup label="Exotic Flavors">
                <option value="Nutella Sandwich">Nutella Sandwich &#9733;</option>
                <option value="Oreo Crumble">Oreo Crumble</option>
                <option value="Kitkat Fudge">Kitkat Fudge</option>
                <option value="Chocolate Walnut">Chocolate Walnut</option>
                <option value="Chocolate Almond">Chocolate Almond</option>
                <option value="Hazlenut Crunch">Hazlenut Crunch &#9733;</option>
                <option value="Lotus Biscoff Crunch">Lotus Biscoff Crunch &#9733;</option>
                <option value="Chocolate Espresso">Chocolate Espresso</option>
                <option value="Cookie Crumble">The Cookie Crumble</option>
                <option value="Sea Salt">Sea Salt &#9733;</option>
                <option value="Caramel">Caramel &#9733;</option>
                <option value="Ferrero Rocher">Ferrero Rocher &#9733;</option>
            </optgroup>
        `;
        sizesSelect.innerHTML += `
            <option value="box4">Box of 4</option>
            <option value="box6">Box of 6</option>
            <option value="box9">Box of 9</option>
        `;
    } else if (type === 'bento') {
        flavorsSelect.innerHTML += `
            <optgroup label="Go-To Flavors">
                <option value="Classic Plain">Classic Plain</option>
                <option value="Chocolate Chip">Chocolate Chip</option>
                <option value="Chocolate Chunk">Chocolate Chunk</option>
                <option value="Double Chocolate Chip">Double Chocolate Chip &#9733;</option>
                <option value="Triple Chocolate Chunk">Triple Chocolate Chunk</option>
                <option value="Blondies">Blondies (White Chocolate)</option>
            </optgroup>
            <optgroup label="Exotic Flavors">
                <option value="Nutella Sandwich">Nutella Sandwich &#9733;</option>
                <option value="Oreo Crumble">Oreo Crumble</option>
                <option value="Kitkat Fudge">Kitkat Fudge</option>
                <option value="Chocolate Walnut">Chocolate Walnut</option>
                <option value="Chocolate Almond">Chocolate Almond</option>
                <option value="Hazlenut Crunch">Hazlenut Crunch &#9733;</option>
                <option value="Lotus Biscoff Crunch">Lotus Biscoff Crunch &#9733;</option>
                <option value="Chocolate Espresso">Chocolate Espresso</option>
                <option value="Cookie Crumble">The Cookie Crumble</option>
                <option value="Sea Salt">Sea Salt &#9733;</option>
                <option value="Caramel">Caramel &#9733;</option>
                <option value="Ferrero Rocher">Ferrero Rocher &#9733;</option>
            </optgroup>
        `;
        sizesSelect.innerHTML = '<option value="">N/A</option>';
    }
}

// Function to add brownie to cart
function addToCart() {
    const brownieType = document.getElementById('brownieType').value;
    const flavorsSelect = document.getElementById('flavors');
    const size = document.getElementById('sizes').value;

    // Validate selection
    if (!brownieType || (brownieType !== 'bento' && (!size || (brownieType !== 'Assorted Brownie' && !flavorsSelect.value)))) {
        alert('Please select all required options.');
        return;
    }

    // Create a cart item object
    const cartItem = {
        type: brownieType,
        size: size,
    };

    if (brownieType === 'Assorted Brownie') {
        // Get all selected flavors for Assorted Brownie
        const selectedFlavors = Array.from(flavorsSelect.selectedOptions).map(option => option.value);

        if (selectedFlavors.length === 0) {
            alert('Please select at least one flavor for Assorted Brownies.');
            return;
        }

        cartItem.flavor = 'Assorted';
        cartItem.assortedFlavors = selectedFlavors; // Save selected flavors
    } else {
        cartItem.flavor = flavorsSelect.value; // For other brownie types, save single flavor
    }

    // Store cart item in localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Display confirmation
    const displayFlavor = brownieType === 'Assorted Brownie' ? 'Assorted Brownies: ' + cartItem.assortedFlavors.join(", ") : cartItem.flavor;
    alert('Item added to cart: ' + displayFlavor + ' - ' + size);
}


function updateCookieFlavors() {
    const flavor = document.getElementById('cookieFlavors').value;
    const assortedFlavorsBox = document.getElementById('assortedFlavorsBox');

    // Show or hide the assorted flavors dropdown based on the selected flavor
    if (flavor === 'AssortedCookies') {
        assortedFlavorsBox.style.display = 'block';
    } else {
        assortedFlavorsBox.style.display = 'none';
    }
}

function addCookieToCart() {
    const flavor = document.getElementById('cookieFlavors').value;
    const size = document.getElementById('cookieSizes').value;

    // Check if the user has selected all required options
    if (!flavor || !size) {
        alert('Please select all required options.');
        return;
    }

    // Create a cart item object
    let cartItem = {
        type: flavor === 'AssortedCookies' ? 'cookie (assorted)' : 'cookie',
        size: size,
    };

    // Handle the "AssortedCookies" option
    if (flavor === 'AssortedCookies') {
        const assortedFlavorsSelect = document.getElementById('assortedFlavors');
        const selectedFlavors = Array.from(assortedFlavorsSelect.selectedOptions).map(option => option.value);

        if (selectedFlavors.length === 0) {
            alert('Please select at least one flavor for Assorted Cookies.');
            return;
        }

        // Add the selected flavors to the cart item
        cartItem.assortedFlavors = selectedFlavors;
    } else {
        // For non-assorted cookies, just set the flavor
        cartItem.flavor = flavor;
    }

    // Store the cart item in localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Display confirmation
    const displayFlavor = flavor === 'AssortedCookies' ? 'Assorted Cookies: ' + (cartItem.assortedFlavors ? cartItem.assortedFlavors.join(", ") : 'No flavors selected') : flavor;
    alert('Item added to cart: ' + displayFlavor + ' - ' + size);
}


// Function to update the cupcake flavors based on selection
function updateCupcakeFlavors() {
    const flavorsSelect = document.getElementById('cupcakeFlavors');
    const assortedFlavorsGroup = document.getElementById('assortedFlavorsGroup');

    // Ensure the assorted flavors group exists before applying styles
    if (!assortedFlavorsGroup) {
        console.error('Assorted Flavors Group element not found.');
        return;
    }

    // Show or hide the assorted flavors dropdown based on the selected flavor
    if (flavorsSelect.value === 'Assorted') {
        assortedFlavorsGroup.style.display = 'block';
    } else {
        assortedFlavorsGroup.style.display = 'none';
    }
}

function addCupcakeToCart() {
    const type = 'cupcake';
    const size = document.getElementById('cupcakeSizes').value;
    const flavor = document.getElementById('cupcakeFlavors').value;

    let assortedFlavors = [];
    if (flavor === 'Assorted') {
        const assortedFlavorsSelect = document.getElementById('assortedCupcakeFlavors');
        assortedFlavors = Array.from(assortedFlavorsSelect.selectedOptions).map(option => option.value);
    }

    const item = {
        type: flavor === 'Assorted' ? `${type} (assorted)` : type,
        size: size,
        flavor: flavor !== 'Assorted' ? flavor : null,
        assortedFlavors: assortedFlavors.length > 0 ? assortedFlavors : null
    };

    console.log('Adding item to cart:', item);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to cart');
}




// Function to add muffin to cart
function addMuffinToCart() {
    const flavor = document.getElementById('muffinFlavors').value;
    const size = document.getElementById('muffinSizes').value;

    if (!flavor || !size) {
        alert('Please select all required options.');
        return;
    }

    // Create a cart item object
    const cartItem = {
        type: 'muffin',
        flavor: flavor,
        size: size,
    };

    // Store cart item in localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Display confirmation
    alert('Item added to cart!');
}
let slideIndexBrownie = 0;
let slideIndexAssorted = 0;
let slideIndexSlab = 0;
let slideIndexBento =0;
let slideIndexCookie=0;
let slideIndexCupcake=0;
let slideIndexMuffin=0;

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
    showSlides('brownie-slideshow', slideIndexBrownie);
    showSlides('brownieAssorted-slideshow', slideIndexAssorted);
    showSlides('brownieSlab-slideshow', slideIndexSlab);
    showSlides('brownieBento-slideshow', slideIndexBento);
    showSlides('Cookie-slideshow', slideIndexCookie);
    showSlides('Cupcake-slideshow', slideIndexCupcake);
     showSlides('Muffin-slideshow', slideIndexMuffin);
 
    
   
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
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.subsection');

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



