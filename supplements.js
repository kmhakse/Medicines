// Array of beauty and lab test products
const beautyProducts = [
    { name: "Lakme Face Cream", price: "299", img: "images/beauty.jpg" },
    { name: "Maybelline Mascara", price: "449", img: "images/beauty2.jpg" },
    { name: "L'Oreal Lipstick", price: "599", img: "images/beauty3.jpg" },
    { name: "Complete Blood Count (CBC)", price: "350", img: "images/labtest1.jpg" },
    { name: "Liver Function Test (LFT)", price: "550", img: "images/labtest2.jpg" },
    { name: "Thyroid Function Test (TFT)", price: "750", img: "images/labtest3.jpg" },
    { name: "Lipid Profile", price: "700", img: "images/labtest4.jpg" },
    { name: "Blood Sugar Test", price: "200", img: "images/labtest5.jpg" },
    { name: "Vitamin D Test", price: "1200", img: "images/labtest6.jpg" },
    { name: "Hemoglobin A1C Test", price: "500", img: "images/labtest7.jpg" },
    { name: "Kidney Function Test (KFT)", price: "650", img: "images/labtest8.jpg" },
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
