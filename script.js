document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const navbar = document.getElementById('navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const loadMoreBtn = document.getElementById('load-more');
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.getElementById('skills');

    // Navbar scroll effect
    function handleScroll() {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }

    // Mobile menu toggle
    function toggleMenu() {
        navLinks.classList.toggle('active');
    }

    // Close mobile menu when clicking a link
    function closeMenuOnLinkClick() {
        navLinks.classList.remove('active');
    }

    // Smooth scrolling
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }

    // Filter projects
    function filterProjects() {
        const filterValue = this.dataset.filter;
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter cards
        projectCards.forEach(card => {
            card.style.display = (filterValue === 'all' || card.dataset.category === filterValue) 
                ? 'block' 
                : 'none';
        });
    }

    // Animate skill bars
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.parentElement.querySelector('.skill-info span:last-child').textContent;
            bar.style.width = width;
        });
    }

    // Initialize skill bars animation
    function initSkillBarsAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (skillsSection) {
            observer.observe(skillsSection);
        }
    }

    // Event Listeners
    window.addEventListener('scroll', handleScroll);
    
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenuOnLinkClick);
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });
    
    filterButtons.forEach(button => {
        button.addEventListener('click', filterProjects);
    });
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            alert('Fonctionnalité "Voir plus" à implémenter');
        });
    }

    // Initialize
    initSkillBarsAnimation();
});


// Gestion du modal
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.veille-modal');
    const modalLinks = document.querySelectorAll('a[href="#quantique-details"]');
    
    modalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    document.querySelector('.modal-close').addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("veille");
    const closeModal = document.querySelector(".modal-close");
    const veilleLink = document.querySelector("a[href='#veille']");

    veilleLink.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "flex"; // Afficher le modal
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none"; // Cacher le modal
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Animation au scroll pour les sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Animation des sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Effet de délai progressif
                entry.target.style.transitionDelay = `${entry.target.dataset.delay || '0s'}`;
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach((section, index) => {
        section.dataset.delay = `${index * 0.1}s`;
        observer.observe(section);
    });
    
    // Effet de survol pour les éléments de liste
    const listItems = document.querySelectorAll('#veille li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.color = '#bb86fc';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.color = '#e0e0e0';
        });
    });
});