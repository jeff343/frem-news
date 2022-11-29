// open mobile menu and removes scolling
const menuOpen = () => {
    const navItems = document.querySelector('.nav-items')
    navItems.classList.add('active')
    document.querySelector('.nav-menu').classList.add('dnone')
    document.querySelector('.nav-close').classList.remove('dnone')
    document.querySelector('.cover').classList.add('covering')
    document.querySelector('body').classList.add('fixed-position')
}

// close mobile menu and returns scrolling
const menuClose = () => {
    const navItems = document.querySelector('.nav-items')
    navItems.classList.remove('active')
    document.querySelector('.nav-menu').classList.remove('dnone')
    document.querySelector('.nav-close').classList.add('dnone')
    document.querySelector('.cover').classList.remove('covering')
    document.querySelector('body').classList.remove('fixed-position')
}




document.querySelector('.nav-menu').addEventListener('click',menuOpen)
document.querySelector('.nav-close').addEventListener('click',menuClose)
document.querySelector('.nav-items').addEventListener('click', menuClose)