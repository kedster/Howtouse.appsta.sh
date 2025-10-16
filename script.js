// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with appsta.sh",
        date: "January 15, 2025",
        excerpt: "Learn the basics of appsta.sh and how to set up your first project. This comprehensive guide will walk you through installation and initial configuration.",
        content: "Full article content here..."
    },
    {
        id: 2,
        title: "Advanced Features of appsta.sh",
        date: "January 10, 2025",
        excerpt: "Dive deeper into the advanced features and capabilities of appsta.sh. Discover powerful tools and techniques for optimizing your workflow.",
        content: "Full article content here..."
    },
    {
        id: 3,
        title: "Best Practices for Using appsta.sh",
        date: "January 5, 2025",
        excerpt: "Explore industry-standard best practices and tips for getting the most out of appsta.sh in your development workflow.",
        content: "Full article content here..."
    },
    {
        id: 4,
        title: "Troubleshooting Common Issues",
        date: "December 28, 2024",
        excerpt: "Common problems and their solutions when working with appsta.sh. Get quick fixes for the most frequently encountered issues.",
        content: "Full article content here..."
    },
    {
        id: 5,
        title: "Integration with Other Tools",
        date: "December 20, 2024",
        excerpt: "How to integrate appsta.sh with your existing development tools and workflow. Learn about compatibility and integration strategies.",
        content: "Full article content here..."
    },
    {
        id: 6,
        title: "Performance Optimization Tips",
        date: "December 15, 2024",
        excerpt: "Maximize the performance of your appsta.sh projects with these optimization techniques and performance tuning strategies.",
        content: "Full article content here..."
    }
];

// Load Blog Posts on Page Load
document.addEventListener('DOMContentLoaded', function() {
    loadBlogPosts();
    setupContactForm();
    setupSmoothScrolling();
});

// Function to Load Blog Posts
function loadBlogPosts() {
    const postsContainer = document.getElementById('postsContainer');
    
    if (!postsContainer) return;
    
    blogPosts.forEach(post => {
        const postCard = createPostCard(post);
        postsContainer.appendChild(postCard);
    });
}

// Function to Create Post Card
function createPostCard(post) {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
        <h3>${post.title}</h3>
        <div class="post-meta">${post.date}</div>
        <p class="post-excerpt">${post.excerpt}</p>
        <span class="read-more">Read more →</span>
    `;
    
    card.addEventListener('click', () => {
        showPostModal(post);
    });
    
    return card;
}

// Function to Show Post Modal
function showPostModal(post) {
    alert(`${post.title}\n\n${post.excerpt}\n\nThis is where the full blog post content would be displayed. In a full implementation, this would open a modal or navigate to a dedicated post page.`);
}

// Setup Contact Form
function setupContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }
        
        // Simulate form submission
        setTimeout(() => {
            showFormMessage(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`, 'success');
            form.reset();
        }, 500);
    });
}

// Show Form Message
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';
    }, 5000);
}

// Setup Smooth Scrolling
function setupSmoothScrolling() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add scroll-to-top functionality
window.addEventListener('scroll', function() {
    // Could add a scroll-to-top button here if needed
});

// Search functionality (for future enhancement)
function searchPosts(query) {
    return blogPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase())
    );
}

// Filter posts by date (for future enhancement)
function filterPostsByDate(startDate, endDate) {
    return blogPosts.filter(post => {
        const postDate = new Date(post.date);
        return postDate >= startDate && postDate <= endDate;
    });
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        blogPosts,
        searchPosts,
        filterPostsByDate
    };
}
