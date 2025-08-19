// Sample product data
const products = [
    {
        id: 1,
        name: "Premium Cotton T-Shirt",
        price: 29.99,
        category: "Tops",
        image: "👕"
    },
    {
        id: 2,
        name: "Slim Fit Jeans",
        price: 79.99,
        category: "Bottoms",
        image: "👖"
    },
    {
        id: 3,
        name: "Casual Blazer",
        price: 129.99,
        category: "Outerwear",
        image: "🧥"
    },
    {
        id: 4,
        name: "Summer Dress",
        price: 89.99,
        category: "Dresses",
        image: "👗"
    },
    {
        id: 5,
        name: "Leather Jacket",
        price: 199.99,
        category: "Outerwear",
        image: "🖤"
    },
    {
        id: 6,
        name: "Polo Shirt",
        price: 49.99,
        category: "Tops",
        image: "👔"
    },
    {
        id: 7,
        name: "Chino Pants",
        price: 69.99,
        category: "Bottoms",
        image: "👖"
    },
    {
        id: 8,
        name: "Hoodie",
        price: 59.99,
        category: "Tops",
        image: "🧥"
    }
];

// Cart state
let cart = [];
let currentStep = 1;

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutModal = document.getElementById('checkoutModal');
const overlay = document.getElementById('overlay');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    updateCartDisplay();
});

// Display products in the grid
function displayProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                ${product.image}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showNotification(`${product.name} added to cart!`);
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Update quantity in cart
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

// Update cart display
function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #64748b; padding: 2rem;">Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    ${item.image}
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    toggleCart();
    openCheckout();
}

// Open checkout modal
function openCheckout() {
    checkoutModal.classList.add('open');
    overlay.classList.add('show');
    currentStep = 1;
    updateCheckoutSteps();
}

// Close checkout modal
function closeCheckout() {
    checkoutModal.classList.remove('open');
    overlay.classList.remove('show');
    resetCheckout();
}

// Close all modals
function closeAll() {
    cartSidebar.classList.remove('open');
    checkoutModal.classList.remove('open');
    overlay.classList.remove('show');
    resetCheckout();
}

// Reset checkout to first step
function resetCheckout() {
    currentStep = 1;
    updateCheckoutSteps();
    
    // Hide all step content
    document.querySelectorAll('.checkout-step-content').forEach(content => {
        content.classList.add('hidden');
    });
    
    // Show first step
    document.getElementById('step1Content').classList.remove('hidden');
}

// Update checkout step indicators
function updateCheckoutSteps() {
    document.querySelectorAll('.step').forEach((step, index) => {
        step.classList.remove('active');
        if (index + 1 <= currentStep) {
            step.classList.add('active');
        }
    });
}

// Go to next step
function nextStep() {
    if (currentStep < 3) {
        // Hide current step
        document.getElementById(`step${currentStep}Content`).classList.add('hidden');
        
        // Show next step
        currentStep++;
        document.getElementById(`step${currentStep}Content`).classList.remove('hidden');
        
        updateCheckoutSteps();
        
        // If we're on the confirmation step, populate order summary
        if (currentStep === 3) {
            populateOrderSummary();
        }
    }
}

// Go to previous step
function prevStep() {
    if (currentStep > 1) {
        // Hide current step
        document.getElementById(`step${currentStep}Content`).classList.add('hidden');
        
        // Show previous step
        currentStep--;
        document.getElementById(`step${currentStep}Content`).classList.remove('hidden');
        
        updateCheckoutSteps();
    }
}

// Populate order summary
function populateOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    let summaryHTML = '';
    
    cart.forEach(item => {
        summaryHTML += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>${item.name} x${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    summaryHTML += `
        <hr style="margin: 1rem 0; border: none; border-top: 1px solid #e2e8f0;">
        <div style="display: flex; justify-content: space-between; font-weight: 600;">
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
        </div>
    `;
    
    orderSummary.innerHTML = summaryHTML;
}

// Complete order
function completeOrder() {
    showNotification('Order completed successfully! Thank you for your purchase.');
    
    // Clear cart
    cart = [];
    updateCartDisplay();
    
    // Close checkout
    closeCheckout();
    
    // Reset to first step for next time
    setTimeout(() => {
        resetCheckout();
    }, 1000);
}

// Scroll to shop section
function scrollToShop() {
    document.getElementById('shop').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 1003;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close modals when clicking outside
overlay.addEventListener('click', closeAll);

// Prevent checkout modal from closing when clicking inside
document.querySelector('.checkout-content').addEventListener('click', function(e) {
    e.stopPropagation();
});

// Prevent cart sidebar from closing when clicking inside
cartSidebar.addEventListener('click', function(e) {
    e.stopPropagation();
});
