// Array of lab test data with image, name, and price
const labTests=[
    { name: "Neutrogena Sunscreen SPF 50", price: "59", img: "images/neutro.jpg" },
    { name: "Cetaphil Moisturizing Lotion", price: "450", img: "images/cetaphil.jpg" },
    { name: "Nivea Body Lotion", price: "299", img: "images/nivea.jpg" },
    { name: "Biotique Papaya Face Scrub", price: "275", img: "images/bio.jpg" },
    { name: "WOW Vitamin C Face Serum", price: "699", img: "images/serum.jpg" },
    { name: "The Face Shop Rice Water Cleanser", price: "650", img: "images/cream.jpg" },
    { name: "Himalaya Neem Face Wash", price: "180", img: "images/faceash.jpg" },
    { name: "Mamaearth Aloe Vera Gel", price: "299", img: "images/gel.jpg" },
    { name: "The Body Shop Tea Tree Toner", price: "799", img: "images/toner.jpg" },
    { name: "Plum Green Tea Night Gel", price: "575", img: "images/plum.jpg" },
    { name: "Lakme Peach Milk Soft Creme", price: "325", img: "images/cream1.jpg" },
    { name: "Lotus Herbals WhiteGlow Face Mask", price: "449", img: "images/cream3.jpg" },
    { name: "Dove Hair Fall Rescue Shampoo", price: "349", img: "images/dove.jpg" },
    { name: "L'Oreal Total Repair 5 Conditioner", price: "399", img: "images/loreal.jpg" },
    { name: "Tresemme Keratin Smooth Shampoo", price: "525", img: "images/tresme.jpg" },
    { name: "Mamaearth Onion Hair Oil", price: "499", img: "images/oil.jpg" },
    { name: "Indulekha Bringha Hair Oil", price: "699", img: "images/oil2.jpg" },
    { name: "WOW Apple Cider Vinegar Shampoo", price: "599", img: "images/shamp.jpg" },
    { name: "Streax Hair Serum", price: "280", img: "images/ser.jpg" },
    { name: "Garnier Fructis Long & Strong Shampoo", price: "349", img: "images/fruc.jpg" },
    { name: "Biotique Bio Bhringraj Hair Oil", price: "265", img: "images/oil3.jpg" },
    { name: "Khadi Natural Herbal Hair Mask", price: "399", img: "images/make.jpg" },
    { name: "Herbal Essences Argan Oil Shampoo", price: "550", img: "images/oil4.jpg" },
    { name: "Moroccanoil Treatment Hair Oil", price: "1599", img: "images/oil5.jpg" }

];

// Function to create lab test product boxes
function createLabTestBoxes() {
    const productGrid = document.querySelector('.product-grid');

    labTests.forEach(test => {
        const discountedPrice = (test.price * 0.9).toFixed(2); // 10% discount

        const testBox = document.createElement('div');
        testBox.classList.add('product-box');
        testBox.innerHTML = `
            <img src="${test.img}" alt="${test.name}">
            <h3>${test.name}</h3>
            <p class="mrp">M.R.P.: ₹${test.price}</p> 
            <p class="price">Discount Price: ₹${discountedPrice}</p>
            <button onclick="addToCart('${test.name}', ${discountedPrice}, '${test.img}')">Add to Cart</button>
        `;
        productGrid.appendChild(testBox);
    });
}

// Function to add lab test to cart
function addToCart(name, price, img) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the item is already in the cart
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

// Function to update cart count
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cart-count").innerText = count;
}

// Load products on page load
document.addEventListener("DOMContentLoaded", () => {
    createLabTestBoxes();
    updateCartCount();
});
