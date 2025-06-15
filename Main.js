const products = [{
    id: 1,
    name: 'T-shirt',
    price: 299
},
{
    id: 2,
    name: 'Jeans',
    price: 799
},
{
    id: 3,
    name: 'Sneakers',
    price: 1199
},
{
    id: 4,
    name: 'Cap',
    price: 199
}
];

let cart = [];

function displayProducts() {
const productList = document.getElementById('product-list');
products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
  <h3>${product.name}</h3>
  <p>₹${product.price}</p>
  <button onclick="addToCart(${product.id})">Add to Cart</button>
`;
    productList.appendChild(card);
});
}

function addToCart(id) {
const product = products.find(p => p.id === id);
cart.push(product);
updateCartCount();
saveCart();
}

function updateCartCount() {
document.getElementById('cart-count').textContent = cart.length;
}

function saveCart() {
localStorage.setItem('cartItems', JSON.stringify(cart));
}

function loadCart() {
const saved = localStorage.getItem('cartItems');
if (saved) {
    cart = JSON.parse(saved);
    updateCartCount();
}
}

window.onload = () => {
loadCart();
displayProducts();
};