
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    const sideNavbar = document.querySelector('.sideNavigationBar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        sideNavbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        sideNavbar.classList.remove('scrolled');
    }
});


function openNavbar() {
    document.getElementById('sideNavigationBar').style.display = 'block';
}

function closeNavbar() {
    document.getElementById('sideNavigationBar').style.display = 'none';
}
