
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
                <option value="Belgian Classic Plain">Classic Plain</option>
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
                <option value="Caramel Sea Salt">Caramel &#9733;</option>
                <option value="Ferrero Rocher">Ferrero Rocher &#9733;</option>
            </optgroup>
        `;
        sizesSelect.innerHTML += `
            <option value="box2">Box of 2</option>
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



let slideIndexBrownie = 0;
let slideIndexAssorted = 0;
let slideIndexSlab = 0;
let slideIndexBento =0;


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
   // showSlides('brownieAssorted-slideshow', slideIndexAssorted);
    showSlides('brownieSlab-slideshow', slideIndexSlab);
    showSlides('brownieBento-slideshow', slideIndexBento);

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
