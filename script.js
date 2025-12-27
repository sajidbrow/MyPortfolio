// ===================================
// JAVASCRIPT FOR PORTFOLIO WEBSITE
// Save this as: script.js
// ===================================

// Data for dynamic content
const portfolioData = {
    skills: [
        { name: 'HTML5', icon: 'fab fa-html5', percentage: 95 },
        { name: 'CSS3', icon: 'fab fa-css3-alt', percentage: 90 },
        { name: 'JavaScript', icon: 'fab fa-js', percentage: 88 },
        { name: 'React', icon: 'fab fa-react', percentage: 85 },
        { name: 'Node.js', icon: 'fab fa-node-js', percentage: 10 },
        { name: 'Java', icon: 'fab fa-python', percentage: 90 },
        { name: 'MySql', icon: 'fas fa-database', percentage: 85 },
        { name: 'Git', icon: 'fab fa-git-alt', percentage: 90 }
    ],
    
    education: [
        {
            degree: 'Bachelor of Information Technology',
            school: 'Veer Bahadur Singh Purvanchal University, Jaunpur, UP, India',
            date: '2022 - 2025',
            description: 'Specialized in Web Development'
        },
        {
            degree: 'Diploma in Mechanical(Automobile)',
            school: 'Government Polytechnic Gorakhpur',
            date: '2019 - 2022',
            description: 'Focus on Mechanical Engineering'
        },
        {
            degree: 'Intermediate',
            school: 'MSI Inter College Buxipuer Gorakhpur',
            date: '2017 - 2018',
            description: 'Valedictorian. Active in robotics club and computer science competitions.'
        },
           {
            degree: 'High School Diploma',
            school: 'MSI Inter College Buxipuer Gorakhpur',
            date: '2015 - 2016',
            description: 'Valedictorian. Active in robotics club and computer science competitions.'
        }
        
    ],
    
    projects: [
        {
            title: 'E-Commerce Platform',
            category: 'web',
            image: 'https://via.placeholder.com/400x300',
            description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Task Management App',
            category: 'web',
            image: 'https://via.placeholder.com/400x300',
            description: 'Collaborative task management tool with real-time updates and notifications.',
            tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Weather Mobile App',
            category: 'mobile',
            image: 'https://via.placeholder.com/400x300',
            description: 'Cross-platform weather app with location-based forecasts and alerts.',
            tech: ['React Native', 'API Integration'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Portfolio Website',
            category: 'design',
            image: 'https://via.placeholder.com/400x300',
            description: 'Modern, responsive portfolio design with smooth animations.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Social Media Dashboard',
            category: 'web',
            image: 'https://via.placeholder.com/400x300',
            description: 'Analytics dashboard for social media management and insights.',
            tech: ['Angular', 'D3.js', 'Express'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Fitness Tracker',
            category: 'mobile',
            image: 'https://via.placeholder.com/400x300',
            description: 'Mobile app for tracking workouts, nutrition, and fitness goals.',
            tech: ['Flutter', 'Firebase', 'SQLite'],
            github: '#',
            demo: '#'
        }
    ],
    
    hobbies: [
        {
            icon: 'fas fa-code',
            title: 'Coding',
            description: 'Building side projects and contributing to open source.'
        },
        {
            icon: 'fas fa-camera',
            title: 'Photography',
            description: 'Capturing moments and exploring creative photography.'
        },
        {
            icon: 'fas fa-book',
            title: 'Reading',
            description: 'Tech blogs, sci-fi novels, and self-improvement books.'
        },
        {
            icon: 'fas fa-running',
            title: 'Fitness',
            description: 'Running marathons and maintaining an active lifestyle.'
        },
        {
            icon: 'fas fa-music',
            title: 'Music',
            description: 'Playing guitar and exploring different music genres.'
        },
        {
            icon: 'fas fa-plane',
            title: 'Travel',
            description: 'Exploring new cultures and destinations around the world.'
        }
    ]
};

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTypingEffect();
    loadSkills();
    loadEducation();
    loadProjects();
    loadHobbies();
    initializeScrollEffects();
    initializeProjectFilters();
    initializeContactForm();
    animateStatistics();
});

// ===== NAVIGATION FUNCTIONALITY =====
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== TYPING EFFECT =====
function initializeTypingEffect() {
    const roles = ['Full Stack Developer', 'Web Designer', 'Problem Solver', 'Tech Enthusiast'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedElement = document.getElementById('typed-role');
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typedElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let speed = isDeleting ? deletingSpeed : typingSpeed;
        
        if (!isDeleting && charIndex === currentRole.length) {
            speed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
        
        setTimeout(type, speed);
    }
    
    type();
}

// ===== LOAD SKILLS DYNAMICALLY =====
function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    portfolioData.skills.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.style.animationDelay = `${index * 0.1}s`;
        
        skillCard.innerHTML = `
            <div class="skill-header">
                <i class="${skill.icon} skill-icon"></i>
                <h3 class="skill-name">${skill.name}</h3>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-percentage="${skill.percentage}"></div>
            </div>
            <p class="skill-percentage">${skill.percentage}%</p>
        `;
        
        skillsContainer.appendChild(skillCard);
    });
    
    // Animate skill bars when in viewport
    observeElements('.skill-progress', animateSkillBar);
}

function animateSkillBar(element) {
    const percentage = element.getAttribute('data-percentage');
    element.style.width = percentage + '%';
}

// ===== LOAD EDUCATION TIMELINE =====
function loadEducation() {
    const timeline = document.getElementById('education-timeline');
    
    portfolioData.education.forEach((edu, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3 class="education-degree">${edu.degree}</h3>
                <p class="education-school">${edu.school}</p>
                <p class="education-date">${edu.date}</p>
                <p class="education-description">${edu.description}</p>
            </div>
            <div class="timeline-icon">
                <i class="fas fa-graduation-cap"></i>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// ===== LOAD PROJECTS =====
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    portfolioData.projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-category', project.category);
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-category">${project.category.toUpperCase()}</p>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="${project.demo}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// ===== PROJECT FILTERS =====
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ===== LOAD HOBBIES =====
function loadHobbies() {
    const hobbiesGrid = document.getElementById('hobbies-grid');
    
    portfolioData.hobbies.forEach((hobby, index) => {
        const hobbyCard = document.createElement('div');
        hobbyCard.className = 'hobby-card';
        
        hobbyCard.innerHTML = `
            <i class="${hobby.icon} hobby-icon"></i>
            <h3 class="hobby-title">${hobby.title}</h3>
            <p class="hobby-description">${hobby.description}</p>
        `;
        
        hobbiesGrid.appendChild(hobbyCard);
    });
}

// ===== ANIMATE STATISTICS =====
function animateStatistics() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    observeElements('.stat-number', (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    // Scroll to top button
    const scrollTopBtn = document.getElementById('scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Animate elements on scroll
    observeElements('.skill-card, .project-card, .hobby-card', (element) => {
        element.classList.add('fade-in-up');
    });
}

// ===== INTERSECTION OBSERVER =====
function observeElements(selector, callback) {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => observer.observe(element));
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// ===== SMOOTH SCROLL FOR NAVIGATION =====
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

// ===== THEME TOGGLE (Optional Enhancement) =====
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

console.log('Portfolio website loaded successfully! 🚀');
