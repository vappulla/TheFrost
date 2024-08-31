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
