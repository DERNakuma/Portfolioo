// Sidebar and Navigation Control
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const homeSection = document.getElementById('home');
    const topNav = document.querySelector('.top-nav');
    const sideNav = document.querySelector('.side-nav');
    
    if (homeSection && topNav && sideNav) {
        const homeHeight = homeSection.offsetHeight;
        
        if (scrollY > homeHeight - 100) {
            // Show sidebar, hide top nav
            sideNav.style.opacity = '1';
            sideNav.style.visibility = 'visible';
            topNav.style.transform = 'translateY(-100%)';
        } else {
            // Hide sidebar, show top nav
            sideNav.style.opacity = '0';
            sideNav.style.visibility = 'hidden';
            topNav.style.transform = 'translateY(0)';
        }
    }
});

// Active link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const sideNavLinks = document.querySelectorAll('.side-nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    sideNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});