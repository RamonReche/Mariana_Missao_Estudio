// Portfolio images data
const portfolioImages = {
    noiva: [
        './src/assets/img/noiva/noiva1.jpeg',
        './src/assets/img/noiva/noiva2.jpeg',
        './src/assets/img/noiva/noiva3.jpeg',
        './src/assets/img/noiva/noiva4.jpeg',
        './src/assets/img/noiva/noiva5.jpeg',
        './src/assets/img/noiva/noiva6.jpeg',

    ],
    social: [
        './src/assets/img/social/social.jpeg',
        './src/assets/img/social/social2.jpeg',
        './src/assets/img/social/social3.jpeg',
        './src/assets/img/social/social4.jpeg',
        './src/assets/img/social/social5.jpeg',
        './src/assets/img/social/social6.jpeg',
    ],
    penteado: [
        './src/assets/img/penteado/penteado1.jpeg',
        './src/assets/img/penteado/penteado2.jpeg',
        './src/assets/img/penteado/penteado3.jpeg',
        './src/assets/img/penteado/penteado4.jpeg',
        './src/assets/img/penteado/penteado5.jpeg',
        './src/assets/img/penteado/penteado6.jpeg',
    ]
};

// Current active tab
let activeTab = 'noiva';

// Function to render gallery
function renderGallery(tab) {
    const gallery = document.getElementById('gallery');
    const images = portfolioImages[tab];
    
    // Clear gallery
    gallery.innerHTML = '';
    
    // Add images
    images.forEach((imageUrl, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `${tab} ${index + 1}`;
        
        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        
        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);
        gallery.appendChild(galleryItem);
    });
}

// Function to handle tab click
function handleTabClick(event) {
    const tabButton = event.target;
    const tab = tabButton.getAttribute('data-tab');
    
    if (!tab) return;
    
    // Update active tab
    activeTab = tab;
    
    // Update button states
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    tabButton.classList.add('active');
    
    // Render gallery
    renderGallery(tab);
}

// Smooth scroll for anchor links
function smoothScroll(event) {
    const target = event.target;
    
    if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Render initial gallery
    renderGallery(activeTab);
    
    // Add event listeners to tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', handleTabClick);
    });
    
    // Add smooth scroll
    document.addEventListener('click', smoothScroll);
});
