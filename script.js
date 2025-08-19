// Sample product data with more variety
const products = [
    {
        id: 1,
        name: "Premium Cotton T-Shirt",
        price: 29.99,
        category: "tops",
        image: "👕",
        rating: 4.8,
        reviews: 156,
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Black", "Navy"],
        description: "Ultra-soft premium cotton t-shirt with a modern fit"
    },
    {
        id: 2,
        name: "Slim Fit Jeans",
        price: 79.99,
        category: "bottoms",
        image: "👖",
        rating: 4.6,
        reviews: 89,
        sizes: ["30", "32", "34", "36"],
        colors: ["Blue", "Black", "Gray"],
        description: "Classic slim fit jeans with stretch comfort"
    },
    {
        id: 3,
        name: "Casual Blazer",
        price: 129.99,
        category: "outerwear",
        image: "🧥",
        rating: 4.9,
        reviews: 67,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Navy", "Gray", "Black"],
        description: "Versatile blazer perfect for work and casual occasions"
    },
    {
        id: 4,
        name: "Summer Dress",
        price: 89.99,
        category: "dresses",
        image: "👗",
        rating: 4.7,
        reviews: 124,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Floral", "Blue", "Pink"],
        description: "Lightweight summer dress with beautiful floral pattern"
    },
    {
        id: 5,
        name: "Leather Jacket",
        price: 199.99,
        category: "outerwear",
        image: "🖤",
        rating: 4.9,
        reviews: 45,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "Brown"],
        description: "Premium leather jacket with classic biker style"
    },
    {
        id: 6,
        name: "Polo Shirt",
        price: 49.99,
        category: "tops",
        image: "👔",
        rating: 4.5,
        reviews: 98,
        sizes: ["S", "M", "L", "XL"],
        colors: ["White", "Blue", "Red"],
        description: "Classic polo shirt perfect for casual and semi-formal wear"
    },
    {
        id: 7,
        name: "Chino Pants",
        price: 69.99,
        category: "bottoms",
        image: "👖",
        rating: 4.4,
        reviews: 76,
        sizes: ["30", "32", "34", "36"],
        colors: ["Khaki", "Navy", "Olive"],
        description: "Comfortable chino pants with modern styling"
    },
    {
        id: 8,
        name: "Hoodie",
        price: 59.99,
        category: "tops",
        image: "🧥",
        rating: 4.6,
        reviews: 112,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Gray", "Black", "Navy"],
        description: "Cozy hoodie perfect for casual everyday wear"
    },
    {
        id: 9,
        name: "Silk Blouse",
        price: 89.99,
        category: "tops",
        image: "👚",
        rating: 4.8,
        reviews: 89,
        sizes: ["XS", "S", "M", "L"],
        colors: ["White", "Blush", "Navy"],
        description: "Elegant silk blouse with sophisticated details"
    },
    {
        id: 10,
        name: "Denim Jacket",
        price: 89.99,
        category: "outerwear",
        image: "🧥",
        rating: 4.7,
        reviews: 134,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blue", "Black", "White"],
        description: "Classic denim jacket with modern fit"
    },
    {
        id: 11,
        name: "Maxi Dress",
        price: 119.99,
        category: "dresses",
        image: "👗",
        rating: 4.9,
        reviews: 67,
        sizes: ["XS", "S", "M", "L"],
        colors: ["Black", "Red", "Blue"],
        description: "Elegant maxi dress perfect for special occasions"
    },
    {
        id: 12,
        name: "Cargo Pants",
        price: 79.99,
        category: "bottoms",
        image: "👖",
        rating: 4.3,
        reviews: 54,
        sizes: ["30", "32", "34", "36"],
        colors: ["Olive", "Black", "Khaki"],
        description: "Functional cargo pants with multiple pockets"
    }
];

// App state
let cart = [];
let currentStep = 1;
let currentUser = null;
let wishlist = [];
let filteredProducts = [...products];
let currentPage = 1;
let productsPerPage = 8;
let selectedCategory = null;
let selectedSize = null;
let maxPrice = 500;

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutModal = document.getElementById('checkoutModal');
const overlay = document.getElementById('overlay');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const userMenu = document.getElementById('userMenu');
const filterSidebar = document.getElementById('filterSidebar');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const sortSelect = document.getElementById('sortSelect');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    updateCartDisplay();
    setupEventListeners();
    updatePriceDisplay();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Price range slider
    priceRange.addEventListener('input', updatePriceDisplay);

    // Size selection
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedSize = this.dataset.size;
        });
    });

    // Category filtering
    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectedCategory = this.value;
            } else {
                selectedCategory = null;
            }
        });
    });
}

// Display products in the grid
function displayProducts() {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                ${product.image}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                    <span class="rating-number">${product.rating}</span>
                    <span class="reviews">(${product.reviews})</span>
                </div>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                    <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                        <i class="fas fa-heart ${wishlist.includes(product.id) ? 'active' : ''}"></i>
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Search functionality
function toggleSearch() {
    searchBar.classList.toggle('show');
    if (searchBar.classList.contains('show')) {
        searchInput.focus();
    }
}

function handleSearch() {
    const query = searchInput.value.toLowerCase();
    if (query.length >= 2) {
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
        currentPage = 1;
        displayProducts();
    } else if (query.length === 0) {
        filteredProducts = [...products];
        currentPage = 1;
        displayProducts();
    }
}

function performSearch() {
    const query = searchInput.value.toLowerCase();
    if (query.length > 0) {
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
        currentPage = 1;
        displayProducts();
        toggleSearch();
    }
}

// User menu functionality
function toggleUserMenu() {
    userMenu.classList.toggle('show');
}

// Filter functionality
function toggleFilters() {
    filterSidebar.classList.toggle('open');
}

function updatePriceDisplay() {
    maxPrice = parseInt(priceRange.value);
    priceValue.textContent = `$${maxPrice}`;
}

function applyFilters() {
    filteredProducts = products.filter(product => {
        const priceMatch = product.price <= maxPrice;
        const categoryMatch = !selectedCategory || product.category === selectedCategory;
        const sizeMatch = !selectedSize || product.sizes.includes(selectedSize);
        
        return priceMatch && categoryMatch && sizeMatch;
    });
    
    currentPage = 1;
    displayProducts();
    toggleFilters();
}

// Sorting functionality
function sortProducts() {
    const sortBy = sortSelect.value;
    
    switch(sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'popular':
            filteredProducts.sort((a, b) => b.reviews - a.reviews);
            break;
        default:
            filteredProducts = [...products];
    }
    
    currentPage = 1;
    displayProducts();
}

// Category filtering
function filterByCategory(category) {
    selectedCategory = category;
    filteredProducts = products.filter(product => product.category === category);
    currentPage = 1;
    displayProducts();
    scrollToShop();
}

// Load more products
function loadMoreProducts() {
    currentPage++;
    displayProducts();
    
    // Hide load more button if all products are shown
    if (currentPage * productsPerPage >= filteredProducts.length) {
        document.querySelector('.load-more').style.display = 'none';
    }
}

// Wishlist functionality
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist');
    } else {
        wishlist.push(productId);
        showNotification('Added to wishlist');
    }
    
    // Update wishlist button appearance
    const wishlistBtn = event.target.closest('.wishlist-btn');
    const icon = wishlistBtn.querySelector('i');
    icon.classList.toggle('active');
}

function showWishlist() {
    if (wishlist.length === 0) {
        showNotification('Your wishlist is empty');
        return;
    }
    
    const wishlistProducts = products.filter(product => wishlist.includes(product.id));
    let message = 'Wishlist:\n';
    wishlistProducts.forEach(product => {
        message += `• ${product.name} - $${product.price}\n`;
    });
    
    alert(message);
}

// Collections functionality
function viewCollection(collection) {
    const collections = {
        summer: ['dresses', 'tops'],
        workwear: ['tops', 'bottoms', 'outerwear'],
        evening: ['dresses', 'outerwear'],
        casual: ['tops', 'bottoms']
    };
    
    const categories = collections[collection];
    filteredProducts = products.filter(product => categories.includes(product.category));
    currentPage = 1;
    displayProducts();
    scrollToCollections();
}

function scrollToCollections() {
    document.getElementById('collections').scrollIntoView({ behavior: 'smooth' });
}

// Trends functionality
function viewTrends() {
    showNotification('Trends page coming soon!');
}

// Newsletter functionality
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showNotification('Thank you for subscribing to our newsletter!');
        event.target.reset();
    }
}

// Contact form functionality
function submitContact(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    showNotification('Thank you for your message! We\'ll get back to you soon.');
    event.target.reset();
}

// User authentication
function showLoginModal() {
    document.getElementById('loginModal').classList.add('show');
    overlay.classList.add('show');
    toggleUserMenu();
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('show');
    overlay.classList.remove('show');
}

function showRegisterModal() {
    document.getElementById('registerModal').classList.add('show');
    overlay.classList.add('show');
    toggleUserMenu();
}

function closeRegisterModal() {
    document.getElementById('registerModal').classList.remove('show');
    overlay.classList.remove('show');
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simulate login
    currentUser = { email, name: email.split('@')[0] };
    showNotification(`Welcome back, ${currentUser.name}!`);
    closeLoginModal();
    
    // Update user menu
    document.querySelector('.user-header span').textContent = `Welcome ${currentUser.name}`;
}

function handleRegister(event) {
    event.preventDefault();
    const firstName = document.getElementById('registerFirstName').value;
    const lastName = document.getElementById('registerLastName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    // Simulate registration
    currentUser = { email, name: firstName };
    showNotification(`Welcome to StyleHub, ${firstName}!`);
    closeRegisterModal();
    
    // Update user menu
    document.querySelector('.user-header span').textContent = `Welcome ${currentUser.name}`;
}

// Order history
function showOrderHistory() {
    if (!currentUser) {
        showNotification('Please sign in to view order history');
        return;
    }
    
    showNotification('Order history feature coming soon!');
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
    searchBar.classList.remove('show');
    userMenu.classList.remove('show');
    filterSidebar.classList.remove('open');
    document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('show'));
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
        max-width: 300px;
        word-wrap: break-word;
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

// Prevent modals from closing when clicking inside
document.querySelectorAll('.modal-content, .checkout-content, .cart-sidebar').forEach(element => {
    element.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// Close user menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.user-btn') && !e.target.closest('.user-menu')) {
        userMenu.classList.remove('show');
    }
});

// Add CSS for wishlist button
const style = document.createElement('style');
style.textContent = `
    .product-actions {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
    
    .wishlist-btn {
        background: none;
        border: none;
        font-size: 1.2rem;
        color: #64748b;
        cursor: pointer;
        padding: 0.5rem;
        transition: color 0.3s ease;
    }
    
    .wishlist-btn i.active {
        color: #ef4444;
    }
    
    .wishlist-btn:hover {
        color: #ef4444;
    }
    
    .product-rating {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
        font-size: 0.9rem;
    }
    
    .stars {
        color: #fbbf24;
    }
    
    .rating-number {
        font-weight: 600;
        color: #1e293b;
    }
    
    .reviews {
        color: #64748b;
    }
`;
document.head.appendChild(style);
