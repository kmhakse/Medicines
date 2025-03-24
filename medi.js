// Array of product data with image, name, and price
const products = [
    { name: "Neurobion Forte - Strip of 30 Tablets", price: 25.99, img: "images/Product1.png" },
    { name: "Shelcal-500 - Strip of 15 Tablets", price: 122, img: "images/product2.jpg" },
    { name: "Supracal Xt+ - Strip of 15 Tablets", price: 183, img: "images/product3.jpg" },
    { name: "D-Rise 2000 - Strip of 10 Capsules", price: 150, img: "images/product4.jpg" },
    { name: "A & D - Strip of 10 Capsules", price: 170, img: "images/product5.jpg" },
    { name: "3FA Softgel Capsule 10's - Strip of 10 Softgel Capsules", price: 110, img: "images/product6.jpg" },
    { name: "Limcee Chewable Natural Vitamin C Chewable Tablets 500mg-15 Tabs", price: 17, img: "images/product7.jpg" },
    { name: "Becosules Z - Strip of 20 Capsules", price: 51, img: "images/product8.jpg" },
    { name: "Apcod - Sachet of 5gm Powder", price: 41, img: "images/product9.jpg" },
    { name: "A To Z Women - Blister Pack of 15 Tablets", price: 335, img: "images/product10.jpg" },
    { name: "Absotrend-Q10 - Strip of 10 Tablets", price: 509, img: "images/product11.jpg" },
    { name: "Adgain Plus - Pack of 30 Capsules", price: 586, img: "images/product12.jpg" },
    { name: "ADDNA 1G - Strip of 10 Tablets", price: 52, img: "images/product12.jpg" },
    { name: "Dr. Morepen Gluco-One BG-03 Blood Glucose 50 Test Strips Only", price: 633, img: "images/product 13.jpg" },
    { name: "Sumo Cold - Strip of 10 Tablets", price: 44, img: "images/product14.png" },
    { name: "Telma - AM - Strip of 15 Tablets", price: 261, img: "images/product15.jpg" },
    { name: "Nise 100mg - Strip of 15 Tablets", price: 114, img: "images/product16.png" },
    { name: "Vertiron - Strip of 25 Tablets", price: 102, img: "images/product17.jpg" },
    { name: "Levera-500 - Strip of 15 Tablets", price: 184, img: "images/product18.jpg" },
    { name: "Diamox - Strip of 15 Tablets", price: 57, img: "images/product19.jpg" },
    { name: "VELBIOM Happy Cultures Sleep Tight Melatonin 5Mg", price: 298, img: "images/product20.jpg" },
    { name: "Norflox-400 - Strip of 10 Tablets", price: 76, img: "images/product21.jpg" },
    { name: "O2 - Strip of 10 Tablets", price: 166, img: "images/product22.jpg" },
    { name: "Pinom 20 - Strip of 15 Tablets", price: 203, img: "images/product23.png" },
    { name: "Dilzem 60 - Strip of 15 Tablets", price: 82, img: "images/product24.jpg" },
    { name: "Concor Cor 2.5 - Strip of 10 Tablets", price: 76, img: "images/product25.jpg" },
    { name: "Dulcoflex - Strip of 10 Tablets", price: 50, img: "images/product26.jpg" },
    { name: "Lomofen + - Strip of 20 Tablets", price: 45, img: "images/product27.jpg" },
];

document.addEventListener("DOMContentLoaded", () => {
    createProductBoxes();
    updateCartCount();
});

// Function to add a product to cart
function addToCart(name, price, img) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Check if item is already in cart
    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, img, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Function to update cart count in the navbar
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cart-count").innerText = count;
}

// Function to create product boxes dynamically
function createProductBoxes() {
    const productGrid = document.querySelector('.product-grid');

    products.forEach(product => {
        const discountedPrice = (product.price * 0.9).toFixed(2); // 10% discount

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
