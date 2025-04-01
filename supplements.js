// Array of beauty and lab test products
const beautyProducts = [
    { name: "Nutrabay Pro Active Multivitamin for Men", price: "199", img: "images/supplyment1.jpg" },
    { name: "Maybelline MascaraNutrabay Pro Fish Oil Omega 3 (Triple Strength) - 1000mg", price: "779", img: "images/supplyment2.jpg" },
    { name: "Omega-3", price: "599", img: "images/supplyment3.jpg" },
    { name: "GNC Women's One Daily Multivitamin", price: "500", img: "images/supplyment4.jpg" },
    { name: "OZiva Protein & Herbs for Women", price: " 2,999", img: "images/supplyment5.jpg" },
    { name: "GNC Calcium Plus 1000mg with Magnesium and Vitamin D3", price: "300", img: "images/supplyment6.jpg" },
    { name: " GNC Mega Men Sport Multivitamin", price: "799", img: "images/supplyment7.jpg" },
    { name: "Bioactive-B-complex", price: "200", img: "images/supplyment8.webp" },
    { name: "Inlife Pure Raw Whey Protein Concentrate Powder Supplement| Unflavoured", price: "1500", img: "images/supplyment9.jpg" },
    { name: "Nature Made Iron Dietary Supplement Tablets", price: "1200", img: "images/supplyment0.jpg" },
    { name: "NutriFlair Keto Diet Pills 1600mg", price: "2000", img: "images/supplyment11.jpg" },
];
// Function to load beauty and lab test products on the page
function loadBeautyProducts() {
    const productGrid = document.querySelector('.product-grid');

    beautyProducts.forEach(product => {
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
    loadBeautyProducts();
    updateCartCount();
});
