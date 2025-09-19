// Lightspeed Support Portal JavaScript

// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const filterBtns = document.querySelectorAll('.filter-btn');
const articleCards = document.querySelectorAll('.article-card');
const globalSearchInput = document.getElementById('global-search');
const helpSearchInput = document.getElementById('help-search');
const downloadBtns = document.querySelectorAll('.download-btn');

// State Management
let currentSection = 'home';
let currentFilter = 'all';

// Initialize the portal
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSearch();
    initializeFilters();
    initializeDownloads();
    initializeMobileMenu();
    
    // Show home section by default
    showSection('home');
    
    // Handle hash navigation
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        if (hash && document.getElementById(hash)) {
            showSection(hash);
        }
    }
});

// Navigation Functions
function initializeNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            showSection(sectionId);
            
            // Close mobile menu if open
            mobileNav.classList.remove('active');
        });
    });
}

function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
        
        // Update navigation active state
        updateNavActive(sectionId);
        
        // Update URL hash
        history.replaceState(null, null, `#${sectionId}`);
        
        // Scroll to top of section
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateNavActive(activeSection) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeSection}`) {
            link.classList.add('active');
        }
    });
}

// Mobile Menu Functions
function initializeMobileMenu() {
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        
        // Update button icon
        const icon = this.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileNav.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
        }
    });
}

// Search Functions
function initializeSearch() {
    // Global search functionality
    globalSearchInput.addEventListener('input', debounce(function() {
        const query = this.value.toLowerCase().trim();
        performGlobalSearch(query);
    }, 300));
    
    // Help search functionality
    if (helpSearchInput) {
        helpSearchInput.addEventListener('input', debounce(function() {
            const query = this.value.toLowerCase().trim();
            filterHelpArticles(query);
        }, 300));
    }
    
    // Search button clicks
    document.querySelectorAll('.search-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.previousElementSibling;
            const query = input.value.toLowerCase().trim();
            
            if (input.id === 'global-search') {
                performGlobalSearch(query);
            } else if (input.id === 'help-search') {
                filterHelpArticles(query);
            }
        });
    });
}

function performGlobalSearch(query) {
    if (!query) {
        // Reset to current section if no query
        showSection(currentSection);
        return;
    }
    
    // Simple search implementation - in a real app, this would be more sophisticated
    const searchResults = [];
    
    // Search help articles
    articleCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const content = card.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || content.includes(query)) {
            searchResults.push({
                type: 'help',
                element: card,
                title: card.querySelector('h3').textContent,
                content: card.querySelector('p').textContent
            });
        }
    });
    
    // Search tutorials
    document.querySelectorAll('.tutorial-card').forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const content = card.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || content.includes(query)) {
            searchResults.push({
                type: 'tutorial',
                element: card,
                title: card.querySelector('h3').textContent,
                content: card.querySelector('p').textContent
            });
        }
    });
    
    // Search downloads
    document.querySelectorAll('.download-item').forEach(item => {
        const title = item.querySelector('h4').textContent.toLowerCase();
        const content = item.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || content.includes(query)) {
            searchResults.push({
                type: 'download',
                element: item,
                title: item.querySelector('h4').textContent,
                content: item.querySelector('p').textContent
            });
        }
    });
    
    // Display search results or show appropriate section
    if (searchResults.length > 0) {
        displaySearchResults(query, searchResults);
    } else {
        // No results found - could show a "no results" message
        console.log('No search results found for:', query);
    }
}

function displaySearchResults(query, results) {
    // For now, just navigate to the first result's section
    if (results.length > 0) {
        const firstResult = results[0];
        let targetSection = 'home';
        
        switch (firstResult.type) {
            case 'help':
                targetSection = 'help';
                break;
            case 'tutorial':
                targetSection = 'tutorials';
                break;
            case 'download':
                targetSection = 'downloads';
                break;
        }
        
        showSection(targetSection);
        
        // Highlight the found element
        setTimeout(() => {
            firstResult.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstResult.element.style.backgroundColor = 'var(--bg-secondary)';
            setTimeout(() => {
                firstResult.element.style.backgroundColor = '';
            }, 2000);
        }, 300);
    }
}

function filterHelpArticles(query) {
    const articles = document.querySelectorAll('.article-card');
    articles.forEach(card => {
        const titleElement = card.querySelector('h3');
        const contentElement = card.querySelector('p');
        const category = card.dataset.category;
        
        if (titleElement && contentElement) {
            const title = titleElement.textContent.toLowerCase();
            const content = contentElement.textContent.toLowerCase();
            
            const matchesSearch = !query || title.includes(query) || content.includes(query);
            const matchesFilter = currentFilter === 'all' || category === currentFilter;
            
            if (matchesSearch && matchesFilter) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Filter Functions
function initializeFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update current filter
            currentFilter = this.dataset.category;
            
            // Apply filter
            filterHelpArticles(helpSearchInput ? helpSearchInput.value.toLowerCase().trim() : '');
        });
    });
}

// Download Functions
function initializeDownloads() {
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get download info
            const downloadItem = this.closest('.download-item');
            const fileName = downloadItem.querySelector('h4').textContent;
            
            // Show download feedback
            showDownloadFeedback(this, fileName);
            
            // In a real application, you would trigger the actual download here
            // For demo purposes, we'll just show a message
            setTimeout(() => {
                alert(`Download started: ${fileName}\n\nIn a real application, the file would be downloaded to your device.`);
            }, 500);
        });
    });
}

function showDownloadFeedback(button, fileName) {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Downloaded';
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
    }, 1000);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Article and Tutorial Click Handlers
document.addEventListener('click', function(e) {
    // Handle article card clicks
    if (e.target.closest('.article-card')) {
        const articleCard = e.target.closest('.article-card');
        const title = articleCard.querySelector('h3').textContent;
        
        // In a real application, this would open the full article
        alert(`Opening article: "${title}"\n\nIn a real application, this would navigate to the full article page.`);
    }
    
    // Handle tutorial button clicks
    if (e.target.closest('.tutorial-btn')) {
        e.preventDefault();
        const tutorialCard = e.target.closest('.tutorial-card');
        const title = tutorialCard.querySelector('h3').textContent;
        
        // In a real application, this would start the tutorial
        alert(`Starting tutorial: "${title}"\n\nIn a real application, this would begin an interactive tutorial experience.`);
    }
});

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
    }
    
    // Enter key on search inputs
    if (e.key === 'Enter' && e.target.classList.contains('search-input')) {
        const query = e.target.value.toLowerCase().trim();
        if (e.target.id === 'global-search') {
            performGlobalSearch(query);
        } else if (e.target.id === 'help-search') {
            filterHelpArticles(query);
        }
    }
});

// Smooth scrolling for anchor links
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

// Window resize handler for mobile menu
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        mobileNav.classList.remove('active');
        mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
    }
});

// Loading animation for slow networks
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Global function to be called from HTML onclick events
window.showSection = showSection;

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showSection,
        performGlobalSearch,
        filterHelpArticles
    };
}