// JavaScript (script.js)

function addToCart(itemName) {
    const cart = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = itemName;
    cart.appendChild(listItem);
}

