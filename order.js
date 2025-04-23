// Import MENU from menu.js
let cart = [];

// --- SLIDER STATE ---
let currentMenuPage = 0;
const ITEMS_PER_PAGE = 9;

function setAddToCartDisabled(disabled) {
    // Disable or enable all Add to Cart buttons
    const buttons = document.querySelectorAll('.btn.add-to-cart');
    buttons.forEach(btn => {
        btn.disabled = disabled;
        if (disabled) {
            btn.classList.add('disabled');
        } else {
            btn.classList.remove('disabled');
        }
    });
}

function renderMenu() {
    const menuDiv = document.getElementById('menu-items');
    menuDiv.innerHTML = '';
    // Calculate items for current page
    const start = currentMenuPage * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const pageItems = MENU.slice(start, end);
    // Render as 3x3 grid
    const grid = document.createElement('div');
    grid.className = 'menu-grid';
    pageItems.forEach(item => {
        const el = document.createElement('div');
        el.className = 'menu-item';
        const sizeOptions = item.sizes.map((s, idx) => `<option value="${idx}">${s.size} ($${s.price.toFixed(2)})</option>`).join('');
        el.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="menu-item-details">
                <div class="menu-item-title">${item.name}</div>
                <div class="menu-item-desc">${item.desc}</div>
                <select class="menu-item-size" id="size-select-${item.id}">
                    ${sizeOptions}
                </select>
                <button class="btn primary add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;
        grid.appendChild(el);
    });
    menuDiv.appendChild(grid);
    // Update slider buttons
    document.getElementById('slider-prev').disabled = currentMenuPage === 0;
    document.getElementById('slider-next').disabled = end >= MENU.length;

    // Render page numbers
    const totalPages = Math.ceil(MENU.length / ITEMS_PER_PAGE);
    const pagesSpan = document.getElementById('slider-pages');
    if (pagesSpan) {
        pagesSpan.innerHTML = '';
        for (let i = 0; i < totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'slider-page-btn';
            pageBtn.textContent = (i + 1);
            if (i === currentMenuPage) {
                pageBtn.style.fontWeight = 'bold';
                pageBtn.disabled = true;
            }
            pageBtn.onclick = function() {
                currentMenuPage = i;
                renderMenu();
            };
            pagesSpan.appendChild(pageBtn);
        }
    }

    // After rendering, set disabled state if needed
    setAddToCartDisabled(document.getElementById('checkout') && !document.getElementById('checkout').classList.contains('hidden'));
}

function addToCart(id) {
    // Prevent adding if checkout is open
    if (document.getElementById('checkout') && !document.getElementById('checkout').classList.contains('hidden')) return;
    const item = MENU.find(i => i.id === id);
    const sizeSelect = document.getElementById(`size-select-${id}`);
    const sizeIdx = sizeSelect ? parseInt(sizeSelect.value) : 0;
    const sizeObj = item.sizes[sizeIdx];
    // Check if same item+size is already in cart
    const existing = cart.find(i => i.id === id && i.size === sizeObj.size);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1, size: sizeObj.size, price: sizeObj.price });
    }
    renderCart();
}

function removeFromCart(id, size) {
    cart = cart.filter(i => !(i.id === id && i.size === size));
    renderCart();
}

function changeQty(id, size, delta) {
    const item = cart.find(i => i.id === id && i.size === size);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(id, size);
    renderCart();
}

function renderCart() {
    const cartDiv = document.getElementById('cart-items');
    const totalDiv = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    cartDiv.innerHTML = '';
    let total = 0;
    let itemCount = 0;
    if (cart.length === 0) {
        cartDiv.innerHTML = '<div class="cart-empty-hint">Your cart is empty. Add something delicious to get started!</div>';
    } else {
        cart.forEach(item => {
            total += item.price * item.qty;
            itemCount += item.qty;
            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
                <span class="cart-item-name">${item.name} <span class="cart-item-size">(${item.size})</span></span>
                <button class="btn" onclick="changeQty(${item.id}, '${item.size}', -1)">-</button>
                <span class="cart-item-qty">${item.qty}</span>
                <button class="btn" onclick="changeQty(${item.id}, '${item.size}', 1)">+</button>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id}, '${item.size}')">&times;</button>
            `;
            cartDiv.appendChild(el);
        });
    }
    totalDiv.textContent = total > 0 ? `Total: $${total.toFixed(2)}` : '';
    document.getElementById('checkout-btn').disabled = cart.length === 0;
    // Update cart count
    if (cartCount) {
        cartCount.textContent = itemCount > 0 ? `(${itemCount})` : '';
    }
    // Show/hide clear cart button
    if (clearCartBtn) {
        clearCartBtn.style.display = cart.length >= 2 ? 'inline-block' : 'none';
    }
}

// Slider controls
if (document.getElementById('slider-prev')) {
    document.getElementById('slider-prev').onclick = function() {
        if (currentMenuPage > 0) {
            currentMenuPage--;
            renderMenu();
        }
    };
}
if (document.getElementById('slider-next')) {
    document.getElementById('slider-next').onclick = function() {
        if ((currentMenuPage + 1) * ITEMS_PER_PAGE < MENU.length) {
            currentMenuPage++;
            renderMenu();
        }
    };
}

document.getElementById('checkout-btn').onclick = () => {
    // Update checkout summary
    const checkoutSummary = document.getElementById('checkout-summary');
    if (checkoutSummary) {
        let itemCount = 0;
        let total = 0;
        cart.forEach(item => {
            itemCount += item.qty;
            total += item.price * item.qty;
        });
        checkoutSummary.innerHTML = `<strong>Items:</strong> ${itemCount} &nbsp; <strong>Total:</strong> $${total.toFixed(2)}`;
    }
    document.getElementById('cart').classList.add('hidden');    const checkout = document.getElementById('checkout');
    checkout.classList.remove('hidden');
    // Force reflow to enable transition
    void checkout.offsetWidth;
    checkout.classList.add('visible');
    document.getElementById('cart').classList.add('hidden');
    setAddToCartDisabled(true);
    // Show overlay
    document.getElementById('checkout-overlay').classList.remove('hidden');
};
document.getElementById('cancel-checkout').onclick = () => {
    const checkout = document.getElementById('checkout');
    checkout.classList.remove('visible');

        checkout.classList.add('hidden');
    document.getElementById('cart').classList.remove('hidden');
    setAddToCartDisabled(false);
    // Hide overlay
    document.getElementById('checkout-overlay').classList.add('hidden');
};
document.getElementById('checkout-form').onsubmit = function(e) {
    e.preventDefault();
    const checkout = document.getElementById('checkout');
    checkout.classList.remove('visible');
    setTimeout(() => {
        checkout.classList.add('hidden');
    }, 350);
    document.getElementById('order-confirmation').classList.remove('hidden');
    document.getElementById('order-confirmation').textContent = 'Thank you! Your order has been placed.';
    cart = [];
    renderCart();
    setAddToCartDisabled(false);
    // Hide overlay
    document.getElementById('checkout-overlay').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('order-confirmation').classList.add('hidden');
        document.getElementById('cart').classList.remove('hidden');
    }, 3500);
};

// Show/hide address field based on order type
const orderTypeRadios = document.querySelectorAll('input[name="orderType"]');
const addressRow = document.getElementById('address-row');
orderTypeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.value === 'delivery') {
            addressRow.style.display = '';
            addressRow.querySelector('input').required = true;
        } else {
            addressRow.style.display = 'none';
            addressRow.querySelector('input').required = false;
        }
    });
});

// Add clear cart button logic
const clearCartBtn = document.getElementById('clear-cart-btn');
if (clearCartBtn) {
    clearCartBtn.onclick = function() {
        cart = [];
        renderCart();
    };
}

// Initial render
renderMenu();
renderCart();
