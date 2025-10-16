// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button based on scroll position
function handleScrollButton() {
    const scrollButton = document.getElementById('scroll-to-top');
    if (window.scrollY > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
}

// Add smooth scrolling to all anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // Handle scroll events for scroll-to-top button
    window.addEventListener('scroll', handleScrollButton);
    
    // Initial check for scroll button visibility
    handleScrollButton();
    
    // Add fade-in animation to sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add hover effect to cards
    const cards = document.querySelectorAll('.content-card, .feature-item, .tutorial-card, .resource-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Copy code blocks on click
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        block.style.cursor = 'pointer';
        block.title = 'Click to copy';
        
        block.addEventListener('click', function() {
            const text = this.innerText;
            navigator.clipboard.writeText(text).then(() => {
                // Show feedback
                const originalBg = this.style.backgroundColor;
                this.style.backgroundColor = '#10b981';
                setTimeout(() => {
                    this.style.backgroundColor = originalBg;
                }, 200);
                
                // Show tooltip
                showTooltip(this, 'Copied!');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });
    
    // Add progress indicator for tutorial steps
    animateStepNumbers();
    
    // Handle mobile menu (if needed in future)
    setupMobileMenu();
    
    // Add keyboard navigation
    setupKeyboardNavigation();
    
    console.log('🚀 appsta.sh guide loaded successfully!');
});

// Show tooltip function
function showTooltip(element, message) {
    const tooltip = document.createElement('div');
    tooltip.textContent = message;
    tooltip.style.position = 'absolute';
    tooltip.style.background = '#10b981';
    tooltip.style.color = 'white';
    tooltip.style.padding = '5px 10px';
    tooltip.style.borderRadius = '5px';
    tooltip.style.fontSize = '14px';
    tooltip.style.zIndex = '1000';
    tooltip.style.pointerEvents = 'none';
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + window.scrollY + 'px';
    
    setTimeout(() => {
        tooltip.style.opacity = '0';
        tooltip.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(tooltip);
        }, 300);
    }, 1500);
}

// Animate step numbers
function animateStepNumbers() {
    const stepNumbers = document.querySelectorAll('.step-number');
    stepNumbers.forEach((step, index) => {
        step.style.animation = `fadeInUp 0.5s ease ${index * 0.2}s backwards`;
    });
}

// Setup mobile menu (placeholder for future enhancement)
function setupMobileMenu() {
    // This can be expanded in the future for a hamburger menu on mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        console.log('Mobile view detected');
    }
}

// Setup keyboard navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Press 'T' to scroll to top
        if (e.key === 't' || e.key === 'T') {
            if (!e.target.matches('input, textarea')) {
                scrollToTop();
            }
        }
        
        // Press '?' to show keyboard shortcuts
        if (e.key === '?') {
            if (!e.target.matches('input, textarea')) {
                showKeyboardShortcuts();
            }
        }
    });
}

// Show keyboard shortcuts overlay
function showKeyboardShortcuts() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.zIndex = '10000';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.padding = '20px';
    
    const content = document.createElement('div');
    content.style.background = 'white';
    content.style.padding = '2rem';
    content.style.borderRadius = '12px';
    content.style.maxWidth = '500px';
    content.style.width = '100%';
    
    content.innerHTML = `
        <h2 style="margin-bottom: 1rem; color: #6366f1;">⌨️ Keyboard Shortcuts</h2>
        <ul style="list-style: none; padding: 0;">
            <li style="padding: 0.5rem 0; border-bottom: 1px solid #e2e8f0;">
                <strong>T</strong> - Scroll to top
            </li>
            <li style="padding: 0.5rem 0; border-bottom: 1px solid #e2e8f0;">
                <strong>?</strong> - Show this help
            </li>
            <li style="padding: 0.5rem 0; border-bottom: 1px solid #e2e8f0;">
                <strong>ESC</strong> - Close this dialog
            </li>
            <li style="padding: 0.5rem 0;">
                <strong>Click code blocks</strong> - Copy to clipboard
            </li>
        </ul>
        <button id="close-shortcuts" style="margin-top: 1.5rem; padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; border: none; border-radius: 8px; cursor: pointer; width: 100%; font-weight: 600;">
            Close
        </button>
    `;
    
    overlay.appendChild(content);
    document.body.appendChild(overlay);
    
    // Close on click outside or ESC key
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.id === 'close-shortcuts') {
            document.body.removeChild(overlay);
        }
    });
    
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') {
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
            document.removeEventListener('keydown', closeOnEsc);
        }
    });
}

// Track user interactions for analytics (placeholder)
function trackInteraction(action, label) {
    console.log(`📊 User interaction: ${action} - ${label}`);
    // This can be connected to analytics services like Google Analytics
}

// Add click tracking to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            trackInteraction('button_click', this.textContent);
        });
    });
});

// Performance monitoring
window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`⚡ Page loaded in ${loadTime}ms`);
});

// Easter egg: Konami code
(function() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateHyperDevMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
})();

// Activate HyperDev mode (easter egg)
function activateHyperDevMode() {
    const style = document.createElement('style');
    style.textContent = `
        * {
            animation: rainbow 2s linear infinite !important;
        }
        
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    alert('🎉 HYPERDEV MODE ACTIVATED! 🚀');
    
    setTimeout(() => {
        document.head.removeChild(style);
    }, 5000);
}
