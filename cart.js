// Load cart items from local storage
function loadCartItems() {
    const cartItemsDiv = document.getElementById('cartItems');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    console.log('Cart:', cart);

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('errorMessage').style.display = 'none'; // Hide error message if cart is empty
        return;
    }

    cartItemsDiv.innerHTML = ''; // Clear existing content
    cart.forEach((item, index) => {
        console.log(`Processing item ${index + 1}:`, item);

        let flavorDisplay = item.flavor || 'N/A';

        if (item.type === 'Assorted Brownie') {
            flavorDisplay = `Assorted Brownies: ${item.assortedFlavors ? item.assortedFlavors.join(", ") : 'No flavors selected'}`;
        }

        if (item.type && item.type.includes('assorted')) {
            flavorDisplay = `Assorted ${capitalizeFirstLetter(item.type.split(' ')[0])}: ${item.assortedFlavors ? item.assortedFlavors.join(", ") : 'No flavors selected'}`;
        }
      


        cartItemsDiv.innerHTML += `
            <div class="cart-item">
                <h3>Product ${index + 1}</h3>
                <p><strong>Type:</strong> ${capitalizeFirstLetter(item.type || 'N/A')}</p>
                <p><strong>Flavor:</strong> ${flavorDisplay}</p>
                <p><strong>Size:</strong> ${item.size || 'N/A'}</p>
                <button class="delete-button" onclick="removeFromCart(${index})">Delete</button>
            </div>
        `;
    });
}

// Capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    if (typeof string !== 'string' || !string) {
        console.log('Invalid string passed to capitalizeFirstLetter:', string);
        return ''; 
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Remove an item from the cart by index
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(`Removing item at index ${index}`);
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems();
}

// Send cart details to the customer's email and multiple default emails using EmailJS
// Send cart details to the customer's email and multiple default emails using EmailJS
function sendCartToEmail() {
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const errorMessage = document.getElementById('errorMessage');

    // Array of emails to send the cart details to
    const emailRecipients = [
        customerEmail,
        "magesh_mag@yahoo.com",
        // Add more emails as needed
    ];

    if (!customerName || !customerEmail) {
        errorMessage.innerText = 'Please enter your name and email.';
        errorMessage.style.display = 'block';
        return;
    }

    if (cart.length === 0) {
        errorMessage.innerText = 'Your cart is empty. Please add items to your cart before sending.';
        errorMessage.style.display = 'block';
        return;
    }

    errorMessage.style.display = 'none';

    let cartDetails = '';
    cart.forEach((item, index) => {
        let flavorDisplay = item.flavor || 'N/A';

        if (item.type === 'Assorted Brownie') {
            flavorDisplay = `Assorted Brownies: ${item.assortedFlavors ? item.assortedFlavors.join(", ") : 'No flavors selected'}`;
        }

        if (item.type && item.type.includes('assorted')) {
            flavorDisplay = `Assorted ${capitalizeFirstLetter(item.type.split(' ')[0])}: ${item.assortedFlavors ? item.assortedFlavors.join(", ") : 'No flavors selected'}`;
        }

        cartDetails += `Product ${index + 1}:\nType: ${item.type || 'N/A'}\nFlavor: ${flavorDisplay}\nSize: ${item.size || 'N/A'}\n\n`;
    });

    emailjs.send("service_gso4hlk", "template_fbrba4c", {
        to_email: emailRecipients.join(','),
        from_name: customerName,
        cart_details: cartDetails
    }).then(function (response) {
        console.log('Email sent successfully to all recipients');
        alert('Email sent successfully!');
        clearCartAndFields(); // Clear cart and fields after sending email
    }).catch(function (error) {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please check the console for details.');
    });
}

// Clear the cart and reset the input fields
function clearCartAndFields() {
    localStorage.removeItem('cart'); // Clear the cart in local storage
    loadCartItems(); // Reload cart items (which will now be empty)
    document.getElementById('customerName').value = ''; // Clear name input
    document.getElementById('customerEmail').value = ''; // Clear email input
}

// Send cart details through WhatsApp
// Send cart details through WhatsApp
// Send cart details through WhatsApp
function sendCartToWhatsApp() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const customerName = document.getElementById('customerName').value;

    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to your cart before sending.');
        return;
    }

    if (!customerName) {
        alert('Please enter your name before sending.');
        return;
    }

    let cartDetails = `Customer Name: ${customerName}\n\nYour Cart Details:\n`;
    cart.forEach((item, index) => {
        let flavorDisplay = item.flavor || 'N/A';

        if (item.type === 'Assorted Brownie') {
            flavorDisplay = `Assorted Brownies: ${item.assortedFlavors ? item.assortedFlavors.join(", ") : 'No flavors selected'}`;
        }

        if (item.type && item.type.includes('assorted')) {
            flavorDisplay = `Assorted ${capitalizeFirstLetter(item.type.split(' ')[0])}: ${item.assortedFlavors ? item.assortedFlavors.join(", ") : 'No flavors selected'}`;
        }

        cartDetails += `Product ${index + 1}:\nType: ${item.type || 'N/A'}\nFlavor: ${flavorDisplay}\nSize: ${item.size || 'N/A'}\n\n`;
    });

    const encodedCartDetails = encodeURIComponent(cartDetails);
    const whatsappUrl = `https://wa.me/918754322977?text=${encodedCartDetails}`;
    clearCartAndFields(); // Clear cart and fields after sending
    window.open(whatsappUrl, '_blank'); // Open WhatsApp in a new tab
}



// Initialize EmailJS
document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("bBnyf-nWXyLd7ypZF"); // Replace with your actual public key

    loadCartItems(); // Load cart items on page load

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            sendCartToEmail();
        });
    }
});
