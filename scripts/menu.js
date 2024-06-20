function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}