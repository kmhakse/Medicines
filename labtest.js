// Array of lab test data with image, name, and price
const labTests = [
    { name: "Complete Blood Count (CBC)", price: 350, img: "images/labtest1.jpg" },
    { name: "Liver Function Test (LFT)", price: 550, img: "images/labtest2.jpg" },
    { name: "Thyroid Function Test (TFT)", price: 750, img: "images/labtest3.jpg" },
    { name: "Lipid Profile", price: 700, img: "images/labtest4.jpg" },
    { name: "Blood Sugar Test", price: 200, img: "images/labtest5.jpg" },
    { name: "Vitamin D Test", price: 1200, img: "images/labtest6.jpg" },
    { name: "Hemoglobin A1C Test", price: 500, img: "images/labtest7.jpg" },
    { name: "Kidney Function Test (KFT)", price: 650, img: "images/labtest8.jpg" },
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
