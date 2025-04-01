// Array of healthcare products
const healthcareProducts = [
    { name: "Dettol Hand Wash", price: "199", img: "images/dettol.jpg" },
    { name: "Savlon Sanitizer", price: "99", img: "images/sanitizer.jpg" },
    { name: "Body shop scrub", price: "349", img: "images/bodyshop scrub.jpg" },
    { name: " Disposable 3 Ply Mask", price: "299", img: "images/face-mask.webp" },
    { name: "Sanitary Pads", price: "499", img: "images/whisper.webp" },
    { name: "Disinfectant Spray", price: "399", img: "images/disinfectant-spray.jpg" },
    { name: " Listerine Cool Mint Mouthwash", price: "199", img: "images/mouthWash.webp" },
    { name: "Oral-B Vitality 100 Cross Action Electric Toothbrush", price: "1499", img: "images/electricBrush.webp" },
    { name: "Himalaya Face Wash", price: "120", img: "images/himalaya-facewash.jpg" },
    { name: "Mamaearth Aloe Vera Gel", price: "299", img: "images/aloevera-gel-moisturizer-1.avif" },
    { name: "Zivame Cleansing Peach Intimate Wash (100 ml)", price: "799", img: "images/intimateWash.webp" },
];

// Function to load healthcare products on the page
function loadHealthCareProducts() {
    const productGrid = document.querySelector('.product-grid');

    healthcareProducts.forEach(product => {
        const discountedPrice = (product.price * 0.9).toFixed(2);

        const productBox = document.createElement('div');
        productBox.classList.add('product-box');
        productBox.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="mrp">M.R.P.: ₹${product.price}</p> 
            <p class="price">Discount Price: ₹${discountedPrice}</p>
            <button onclick="addToCart('${product.name}', '${discountedPrice}', '${product.img}')">Add to Cart</button>
        `;
        productGrid.appendChild(productBox);
    });
}

// Function to add products to the cart
function addToCart(name, price, img) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price: parseFloat(price), img, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Added to Cart!");
}

// Function to update cart count in the navbar
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cart-count").innerText = count;
}

// Load products on page load
document.addEventListener("DOMContentLoaded", () => {
    loadHealthCareProducts();
    updateCartCount();
});
