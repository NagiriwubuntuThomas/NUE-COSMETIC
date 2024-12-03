// Array to hold the cart items
let cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice) {
    // Create an item object with product name and price
    let product = { name: productName, price: productPrice };
    
    // Add the product to the cart array
    cart.push(product);

    // Update the cart display
    updateCart();
}// Array to hold the cart items
let cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice) {
    // Create an item object with product name and price
    let product = { name: productName, price: productPrice };
    
    // Add the product to the cart array
    cart.push(product);

    // Update the cart display
    updateCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item at the given index
    updateCart(); // Update the cart after removal
}

// Function to update the cart display
function updateCart() {
    // Get the cart section elements
    let cartItems = document.getElementById('cartItems');
    let totalPrice = document.getElementById('totalPrice');

    // Clear the current cart display
    cartItems.innerHTML = '';

    // Calculate the total price
    let total = 0;

    // Loop through the cart items and display them
    cart.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = ${item.name} - $${item.price};
        
        // Add a remove button for each item
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() { removeFromCart(index); };
        li.appendChild(removeButton);
        
        cartItems.appendChild(li);

        // Add the price to the total
        total += item.price;
    });

    // Update the total price in the UI
    totalPrice.textContent = Total: $${total};
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove the item at the given index
    updateCart(); // Update the cart after removal
}

// Function to update the cart display
function updateCart() {
    // Get the cart section elements
    let cartItems = document.getElementById('cartItems');
    let totalPrice = document.getElementById('totalPrice');

    // Clear the current cart display
    cartItems.innerHTML = '';

    // Calculate the total price
    let total = 0;

    // Loop through the cart items and display them
    cart.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = ${item.name} - $${item.price};
        
        // Add a remove button for each item
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() { removeFromCart(index); };
        li.appendChild(removeButton);
        
        cartItems.appendChild(li);

        // Add the price to the total
        total += item.price;
    });

    // Update the total price in the UI
    totalPrice.textContent = Total: $${total};
}
 