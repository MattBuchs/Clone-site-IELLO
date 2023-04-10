// Récupération des elements dans le DOM
const logo = document.querySelector('.header__center-logo');
const main = document.querySelector('main');
const navRight = document.querySelector('.header__right-ul');

const menu = document.querySelector('.header__right-menu');
const menuOpen = document.querySelector('.open-menu');
const menuClosed = document.querySelector('.close-menu');

const navLis = navRight.querySelectorAll('li');
const menuSvg = document.querySelector('.header__right-svg');

const header = document.querySelector('.header');
const headerPos = header.getBoundingClientRect();

let path;

// Evenement au Scroll
window.addEventListener("scroll", () => {

    if(main.getBoundingClientRect().top + 27 <= headerPos.bottom) {
        header.style.height = "60px";
        header.style.transition = "all .1s linear";

        logo.classList.add('logo-modification');

        navRight.style.display = "none";
        menu.style.display = "flex";

        if(menuSvg.innerHTML === path) {
            navRight.classList.add('active');

            navLis.forEach(navLi => {
                navLi.classList.add('li-Modifier');
            });
        }
    }
    else {
        header.style.height = "86px";

        logo.classList.remove('logo-modification');

        navRight.style.display = "flex";

        if(header.clientWidth > 1416) {
            navRight.classList.remove('active');
            
            navLis.forEach(navLi => {
                navLi.classList.remove('li-Modifier');
            });
        }

        menu.style.display = "none";
    }
});


// Afficher le menu
menu.addEventListener('click', () => {
    navRight.classList.toggle('active');

    navLis.forEach(navLi => {
        navLi.classList.toggle('li-Modifier');
    });

    path = `
    <path id="close-menu" d="m13.41 11.999 6.3-6.29c.392-.392.392-1.028 0-1.42s-1.028-.392-1.42 0l-6.29 6.3-6.29-6.3c-.392-.392-1.028-.392-1.42 0s-.392 1.028 0 1.42l6.3 6.29-6.3 6.29c-.392.389-.395 1.022-.006 1.414.002.002.004.004.006.006.389.392 1.022.395 1.414.006.002-.002.004-.004.006-.006l6.29-6.3 6.29 6.3c.389.392 1.022.395 1.414.006l.006-.006c.392-.389.395-1.022.006-1.414-.002-.002-.004-.004-.006-.006z" fill="#fff"></path>
    `;
   
    if(menuSvg.innerHTML === path) {
        menuSvg.innerHTML = `
        <path id="open-menu" d="m12 7a2 2 0 1 0 -2-2 2 2 0 0 0 2 2zm0 10a2 2 0 1 0 2 2 2 2 0 0 0 -2-2zm0-7a2 2 0 1 0 2 2 2 2 0 0 0 -2-2z"></path>
        `;
        menu.style.background = "transparent";
        menu.classList.add('active2');
    }
    else {
        menuSvg.innerHTML = path;
        menu.style.background = "#191919";
        menu.classList.remove('active2');
    }

});

// Carrousel d'images
const imgContainer = document.querySelector('.main__footer-img');
const listImages = document.querySelectorAll('.main__footer-ul li');

function arrowLeft() {
    listImages.forEach(listImage => {
        listImage.classList.remove('active3');
    });

    if(imgContainer.style.transform === 'translateX(-400%)') {
        imgContainer.style.transform = 'translateX(-300%)';
        listImages[3].classList.add('active3');
    }
    else if(imgContainer.style.transform === 'translateX(-300%)') {
        imgContainer.style.transform = 'translateX(-200%)';
        listImages[2].classList.add('active3');
    }
    else if(imgContainer.style.transform === 'translateX(-200%)') {
        imgContainer.style.transform = 'translateX(-100%)';
        listImages[1].classList.add('active3');
    }
    else if(imgContainer.style.transform === 'translateX(-100%)') {
        imgContainer.style.transform = 'translateX(0%)';
        listImages[0].classList.add('active3');
    }
    else if(imgContainer.style.transform === 'translateX(0%)') {
        listImages[0].classList.add('active3');
    }
}

function arrowRight() {
    listImages.forEach(listImage => {
        listImage.classList.remove('active3');
    });

    if(imgContainer.style.transform === '') {
        imgContainer.style.transform = 'translateX(-100%)';
        listImages[1].classList.add('active3');
    }
    else if(imgContainer.style.transform === 'translateX(0%)') {
        imgContainer.style.transform = 'translateX(-100%)';
        listImages[1].classList.add('active3');
    }
    else if(imgContainer.style.transform === 'translateX(-100%)') {
        imgContainer.style.transform = 'translateX(-200%)';
        listImages[2].classList.add('active3');
    }
    else if(imgContainer.style.transform === 'translateX(-200%)') {
        imgContainer.style.transform = 'translateX(-300%)';
        listImages[3].classList.add('active3');
    }
    else if(imgContainer.style.transform === 'translateX(-300%)') {
        imgContainer.style.transform = 'translateX(-400%)';
        listImages[4].classList.add('active3');
    }
    else if(imgContainer.style.transform === 'translateX(-400%)') {
        listImages[4].classList.add('active3');
    }
}

listImages.forEach(listImage => {
    listImage.addEventListener('click', () => {
        for(let i = 0; i < listImages.length; i++) {
            listImages[i].classList.remove('active3');
        }
        
        if(listImage === listImages[0]) {
            imgContainer.style.transform = 'translateX(0%)';
        }
        else if(listImage === listImages[1]) {
            imgContainer.style.transform = 'translateX(-100%)';
        }
        else if(listImage === listImages[2]) {
            imgContainer.style.transform = 'translateX(-200%)';
        }
        else if(listImage === listImages[3]) {
            imgContainer.style.transform = 'translateX(-300%)';
        }
        else if(listImage === listImages[4]) {
            imgContainer.style.transform = 'translateX(-400%)';
        }

        listImage.classList.add('active3');
    });
});

// Afficher le h1 dans la Navbar quand on scroll et qu'on le voit plus
const h1 = document.querySelector('h1');
const menuPageTitle = document.querySelector('.menu-page-title');

window.addEventListener('scroll', () => {
    if(h1.getBoundingClientRect().top <= headerPos.top - 100) {
        menuPageTitle.style.display = "initial";
        menuPageTitle.style.animation = "animation .3s ease-out";
    }
    else {      
        menuPageTitle.style.display = "none";
    }
});


// Afficher Overlay
const buttonOverlay = document.querySelector('.header__left-button');

buttonOverlay.addEventListener('click', () => {
    const overlay = document.querySelector('.overlay');
    const buttonMenu = document.querySelector('#header__left-menu');

    const headerRight = document.querySelector('.header__right');
    const logoTwitch = document.querySelector('.header__center-twitch');
    const imgSearch = document.querySelector('.header__center-search');

    path = `
    <path id="close-menu" d="m13.41 11.999 6.3-6.29c.392-.392.392-1.028 0-1.42s-1.028-.392-1.42 0l-6.29 6.3-6.29-6.3c-.392-.392-1.028-.392-1.42 0s-.392 1.028 0 1.42l6.3 6.29-6.3 6.29c-.392.389-.395 1.022-.006 1.414.002.002.004.004.006.006.389.392 1.022.395 1.414.006.002-.002.004-.004.006-.006l6.29-6.3 6.29 6.3c.389.392 1.022.395 1.414.006l.006-.006c.392-.389.395-1.022.006-1.414-.002-.002-.004-.004-.006-.006z" fill="#191919"></path>
    `;

    if(buttonMenu.innerHTML !== path) {
        buttonMenu.innerHTML = path;
        document.body.style.overflow = 'hidden';
        overlay.style.transform = 'translateX(0%)';
        overlay.style.transition = 'all .3s ease-out';
        overlay.style.overflow = 'auto';

        header.style.background = '#fff';
        headerRight.style.display = 'none';
        logoTwitch.style.display = 'none';
        imgSearch.style.display = 'none';
    }
    else {
        buttonMenu.innerHTML = `
        <path d="m3 8h18c.552 0 1-.448 1-1s-.448-1-1-1h-18c-.552 0-1 .448-1 1s.448 1 1 1zm18 8h-18c-.552 0-1 .448-1 1s.448 1 1 1h18c.552 0 1-.448 1-1s-.448-1-1-1zm0-5h-18c-.552 0-1 .448-1 1s.448 1 1 1h18c.552 0 1-.448 1-1s-.448-1-1-1z"></path>
        `;
        document.body.style.overflow = 'scroll';
        overlay.style.transform = 'translateX(100%)';
        overlay.style.transition = 'all .2s ease-out';

        header.style.background = '#fc0';
        headerRight.style.display = 'flex';
        logoTwitch.style.display = 'flex';
        imgSearch.style.display = 'flex';
    }
});