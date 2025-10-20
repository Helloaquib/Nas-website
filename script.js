// script.js

/*
 * CONFIGURATION - Replace these values with your actual information
 */
const CONFIG = {
    COMPANY_NAME: "Nas Sales Corporation",
    // IMPORTANT: Replace with your WhatsApp number in international format
    // Format: Country code + number (no + sign, no spaces, no dashes)
    // Example: For India +91 1234567890, use: "911234567890"
    WHATSAPP_NUMBER: "919895697904", // REPLACE THIS
    WHATSAPP_MESSAGE: "Hi, I'm interested in your solar and battery solutions.",
    
    // COMPANY LOGO - Add your logo URL or base64 data here
    // Example: "https://example.com/logo.png" or "data:image/png;base64,..."
    // Leave as null to use default SVG logo
    COMPANY_LOGO: "assets/naz.jpeg",
};

/*
 * BRANDS DATA
 * To add a brand logo, add the 'logo' property with image URL or base64 data
 * Example: logo: "https://example.com/adani-logo.png"
 */
const BRANDS = [
    { 
        id: 'Adani', 
        name: 'Adani', 
        tagline: 'Premium solar panels', 
        category: 'solar',
        logo: "assets/adan.jpeg"
    },
    { 
        id: 'Waree', 
        name: 'Waree', 
        tagline: 'Reliable solar solutions', 
        category: 'solar',
        logo: "assets/war.jpeg"
    },
    { 
        id: 'Premier Energies', 
        name: 'Premier Energies', 
        tagline: 'High-efficiency panels', 
        category: 'solar',
        logo: "assets/prem.jpeg"
    },
    { 
        id: 'utl-solar', 
        name: 'UTL Solar', 
        tagline: 'Trusted solar brand', 
        category: 'solar',
        logo: "assets/ut.jpeg"
    },
    { 
        id: 'hykon', 
        name: 'Hykon', 
        tagline: 'Advanced battery technology', 
        category: 'battery',
        logo: "assets/hykon1.png"
    },
    { 
        id: 'exide', 
        name: 'Exide', 
        tagline: 'Quality inverters & batteries', 
        category: 'battery',
        logo: "assets/exide1.png"
    },
    { 
        id: 'luminous', 
        name: 'Luminous', 
        tagline: 'Quality inverters & batteries', 
        category: 'battery',
        logo: "assets/lum1.png"
    },
    { 
        id: 'vguard', 
        name: 'V-Guard', 
        tagline: 'Trusted inverter brand', 
        category: 'battery',
        logo: "assets/v1.png"
    },
    { 
        id: 'amaron', 
        name: 'Amaron', 
        tagline: 'Long-lasting batteries', 
        category: 'battery',
        logo: "assets/am1.png"
    },
    { 
        id: 'livguard', 
        name: 'Livguard', 
        tagline: 'Automotive & inverter batteries', 
        category: 'battery',
        logo: "assets/liv1.png"
    },
    { 
        id: 'solar-water-heater', 
        name: 'Solar Water Heater', 
        tagline: 'Solar Water Heater', 
        category: 'heater',
        logo: "assets/waterheater.png"
    },
    { 
        id: 'water-purifier', 
        name: 'Water Purifier', 
        tagline: 'Water Purifiers', 
        category: 'purifier',
        logo: "assets/purifier.png"
    },
];

/*
 * SAMPLE PRODUCTS DATA
 * To add product images, add the 'image' property with image URL or base64 data
 * Example: image: "https://example.com/product.jpg"
 * 
 * To add a new product, copy this format:
 * {
 *     id: 'prod-X',                    // Unique ID
 *     title: 'Product Name',           // Product title
 *     brand: 'brandid',                // Brand ID from BRANDS array
 *     specs: 'Specifications here',    // Product specifications
 *     image: null                      // Image URL or null
 * }
 */
const SAMPLE_PRODUCTS = [
    {
        id: 'Adani',
        title: 'Adani Solar Panles',
        brand: 'Adani',
        specs: '550W output, 21% efficiency, 25-year warranty',
        image: "assets/products/adani panel.png"
    },
    {
        id: 'Waree',
        title: 'Waree Solar Panels',
        brand: 'Waree',
        specs: '440W polycrystalline, weatherproof, 10-year warranty',
        image: "assets/products/waree panel.png"
    },
    {
        id: 'Waree',
        title: 'Waree Grid Tie Inverter',
        brand: 'Waree',
        specs: '440W polycrystalline, weatherproof, 10-year warranty',
        image: "assets/products/waree grid tie.png"
    },{
        id: 'Waree',
        title: 'Waree Hybrid Inverter',
        brand: 'Waree',
        specs: '440W polycrystalline, weatherproof, 10-year warranty',
        image: "assets/products/waree hybrid.png"
    },
    {
        id: 'Premier Energies',
        title: 'Premier Solar Panels',
        brand: 'Premier Energies',
        specs: '150Ah capacity, 60-month warranty, deep discharge protection',
        image: "assets/products/primier panel.png"
    },
    {
        id: 'prod-4',
        title: 'Exide 150Ah Inva Master Battery',
        brand: 'exide',
        specs: '150Ah, low maintenance, long backup time',
        image: null
    },
    {
        id: 'prod-5',
        title: 'Premier 330W Bifacial Solar Panel',
        brand: 'premier',
        specs: '330W bifacial technology, enhanced durability',
        image: null
    },
    {
        id: 'prod-6',
        title: 'Hykon 200Ah Inverter Battery',
        brand: 'hykon',
        specs: '200Ah capacity, long life, maintenance-free',
        image: null
    }
];

/*
 * STATE MANAGEMENT
 */
const STATE = {
    theme: 'light',
    products: [],
    brands: [...BRANDS],
    companyDetails: {
        address: '123 Solar Street, Green City, 560001',
        email: 'info@nassales.com',
        phone: '+91 1234567890',
        gst: '22AAAAA0000A1Z5'
    }
};

/*
 * INITIALIZATION
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    loadFromStorage();
    initializeTheme();
    initializeLogo();
    renderBrands();
    renderProducts();
    initializeEventListeners();
    loadCompanyDetails();
}

/*
 * THEME MANAGEMENT
 */
function initializeTheme() {
    const savedTheme = STATE.theme;
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    STATE.theme = STATE.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', STATE.theme);
    saveToStorage('theme', STATE.theme);
}

/*
 * LOGO MANAGEMENT
 */
function initializeLogo() {
    if (CONFIG.COMPANY_LOGO) {
        displayLogo(CONFIG.COMPANY_LOGO);
    }
}

function displayLogo(logoData) {
    const logoContainer = document.getElementById('logoContainer');
    if (logoContainer) {
        logoContainer.innerHTML = `<img src="${logoData}" alt="${CONFIG.COMPANY_NAME} Logo">`;
    }
}

/*
 * BRANDS RENDERING
 */
function renderBrands() {
    const brandsGrid = document.getElementById('brandsGrid');
    if (!brandsGrid) return;
    
    brandsGrid.innerHTML = STATE.brands.map(brand => `
        <div class="brand-card" data-brand-id="${brand.id}">
            <div class="brand-logo" id="brand-logo-${brand.id}">
                ${brand.logo 
                    ? `<img src="${brand.logo}" alt="${brand.name}">` 
                    : `<span class="brand-logo-placeholder">${brand.name.charAt(0)}</span>`
                }
            </div>
            <h3 class="brand-name">${brand.name}</h3>
            <p class="brand-tagline">${brand.tagline}</p>
            <button class="btn btn-primary" onclick="filterByBrand('${brand.id}')">View Products</button>
        </div>
    `).join('');
}

/*
 * PRODUCTS MANAGEMENT
 */
function loadFromStorage() {
    STATE.theme = loadFromStorageKey('theme') || 'light';
    STATE.products = loadFromStorageKey('products') || SAMPLE_PRODUCTS;
    STATE.companyDetails = loadFromStorageKey('companyDetails') || STATE.companyDetails;
}

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    const searchInput = document.getElementById('searchProducts');
    const brandFilterSelect = document.getElementById('brandFilter');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const brandFilter = brandFilterSelect ? brandFilterSelect.value : '';
    
    let filteredProducts = STATE.products;
    
    // Apply search filter
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p => 
            p.title.toLowerCase().includes(searchTerm) ||
            p.specs.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply brand filter
    if (brandFilter) {
        filteredProducts = filteredProducts.filter(p => p.brand === brandFilter);
    }
    
    // Display message if no products found
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-secondary); padding: 3rem;">No products found.</p>';
        return;
    }
    
    // Render products
    productsGrid.innerHTML = filteredProducts.map(product => {
        const brand = STATE.brands.find(b => b.id === product.brand);
        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image" id="product-image-${product.id}">
                    ${product.image 
                        ? `<img src="${product.image}" alt="${product.title}" loading="lazy">` 
                        : '<span class="product-image-placeholder">📦</span>'
                    }
                </div>
                <div class="product-content">
                    <div class="product-header">
                        <h3 class="product-title">${product.title}</h3>
                        <span class="product-brand">${brand ? brand.name : 'N/A'}</span>
                    </div>
                    <p class="product-specs">${product.specs}</p>
                    <div class="product-actions">
                        <button class="btn btn-secondary" onclick="viewProductDetails('${product.id}')">Details</button>
                        <button class="btn btn-primary" onclick="enquireWhatsApp('${escapeHtml(product.title)}')">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Enquire
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Update brand filter options
    updateBrandFilter();
}

function updateBrandFilter() {
    const brandFilter = document.getElementById('brandFilter');
    if (!brandFilter) return;
    
    const currentValue = brandFilter.value;
    const uniqueBrands = [...new Set(STATE.products.map(p => p.brand))];
    
    brandFilter.innerHTML = '<option value="">All Brands</option>' +
        uniqueBrands.map(brandId => {
            const brand = STATE.brands.find(b => b.id === brandId);
            return brand ? `<option value="${brandId}">${brand.name}</option>` : '';
        }).join('');
    
    brandFilter.value = currentValue;
}

function filterByBrand(brandId) {
    const brandFilter = document.getElementById('brandFilter');
    if (brandFilter) {
        brandFilter.value = brandId;
    }
    
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    renderProducts();
}

function viewProductDetails(productId) {
    const product = STATE.products.find(p => p.id === productId);
    if (!product) return;
    
    const brand = STATE.brands.find(b => b.id === product.brand);
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;
    
    modalBody.innerHTML = `
        <div class="modal-product-image">
            ${product.image 
                ? `<img src="${product.image}" alt="${product.title}">` 
                : '<span class="product-image-placeholder" style="font-size: 4rem;">📦</span>'
            }
        </div>
        <div class="modal-product-details">
            <h2 id="modalTitle">${product.title}</h2>
            <span class="product-brand">${brand ? brand.name : 'N/A'}</span>
            <p><strong>Specifications:</strong></p>
            <p>${product.specs}</p>
            <div style="margin-top: 2rem;">
                <button class="btn btn-primary btn-large" onclick="enquireWhatsApp('${escapeHtml(product.title)}')" style="width: 100%;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Enquire via WhatsApp
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/*
 * COMPANY DETAILS MANAGEMENT
 */
function loadCompanyDetails() {
    const details = STATE.companyDetails;
    document.querySelectorAll('.detail-item').forEach(item => {
        const field = item.dataset.field;
        if (details[field]) {
            const valueSpan = item.querySelector('.detail-value');
            if (valueSpan) {
                valueSpan.textContent = details[field];
            }
        }
    });
}

/*
 * WHATSAPP INTEGRATION
 */
function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank');
}

function enquireWhatsApp(productTitle) {
    const message = `Hi ${CONFIG.COMPANY_NAME}, I'm interested in: ${productTitle}. Please provide more details.`;
    openWhatsApp(message);
}

/*
 * CONTACT FORM HANDLING
 */
function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    
    if (!name || !email || !message) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    showToast('Message received! We\'ll get back to you soon.', 'success');
    event.target.reset();
}

function sendViaWhatsApp() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    
    if (!name || !email || !message) {
        showToast('Please fill in all fields first', 'error');
        return;
    }
    
    const whatsappMessage = `Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\n\nMessage: ${message}`;
    openWhatsApp(whatsappMessage);
}

/*
 * MODAL MANAGEMENT
 */
function closeModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/*
 * TOAST NOTIFICATIONS
 */
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/*
 * STORAGE UTILITIES
 */
function saveToStorage(key, value) {
    try {
        const data = JSON.parse(localStorage.getItem('nasCorpData') || '{}');
        data[key] = value;
        localStorage.setItem('nasCorpData', JSON.stringify(data));
    } catch (error) {
        console.error('Error saving to storage:', error);
    }
}

function loadFromStorageKey(key) {
    try {
        const data = JSON.parse(localStorage.getItem('nasCorpData') || '{}');
        return data[key];
    } catch (error) {
        console.error('Error loading from storage:', error);
        return null;
    }
}

/*
 * UTILITY FUNCTIONS
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

/*
 * EVENT LISTENERS
 */
function initializeEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Hero WhatsApp button
    const heroWhatsApp = document.getElementById('heroWhatsApp');
    if (heroWhatsApp) {
        heroWhatsApp.addEventListener('click', (e) => {
            e.preventDefault();
            openWhatsApp(CONFIG.WHATSAPP_MESSAGE);
        });
    }
    
    // Search products
    const searchProducts = document.getElementById('searchProducts');
    if (searchProducts) {
        searchProducts.addEventListener('input', renderProducts);
    }
    
    // Brand filter
    const brandFilter = document.getElementById('brandFilter');
    if (brandFilter) {
        brandFilter.addEventListener('change', renderProducts);
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // WhatsApp contact button
    const whatsappContactBtn = document.getElementById('whatsappContactBtn');
    if (whatsappContactBtn) {
        whatsappContactBtn.addEventListener('click', sendViaWhatsApp);
    }
    
    // Modal close button
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Close modal on outside click
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) {
                closeModal();
            }
        });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/*
 * ERROR HANDLING
 */
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

/*
 * CONSOLE WELCOME MESSAGE
 */
console.log(`
%c🌞 Nas Sales Corporation 🔋
%cWebsite loaded successfully!
%cVersion: 1.0.0
Built with ❤️ for sustainable energy solutions
`,
'color: #f59e0b; font-size: 20px; font-weight: bold;',
'color: #10b981; font-size: 14px;',
'color: #6b7280; font-size: 12px;'
);