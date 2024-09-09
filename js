const mobileMenu = () => {
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    if(btn.innerText === 'MENU') {
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    } else {
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }

}

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

//move pics to right side

const moveRight = () => {
    displayNone();
    imgNum++;

    if(imgNum === pictures.length) {
        imgNum = 0;
    }

    pictures[imgNum].style.display = 'block';
}

//move pics to left side

const moveLeft = () => {
    displayNone();
    imgNum--;

    if(imgNum === -1) {
        imgNum = pictures.length -1;    //we hv 3 pics > 0,1 and 2
    }

    pictures[imgNum].style.display = 'block';
}

//eventlisteners for picturs moving

rightBtn.addEventListener('click', moveRight)

leftBtn.addEventListener('click', moveLeft)

// this function will hide all pictures 

const displayNone = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    })
}

//portfolios 

const portfolioSort = (button) => {
    let category = button.getAttribute('data-category');
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');

    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });

    if(category === 'sve') {
        portfolioItems.forEach((item) => {
        item.style.display = 'block';
        });
    }

    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category)) {
            item.style.display = 'block';
        }
    })
}

//opening modal

const openModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'block';
    overlay.style.display = 'block';

}

//close modal 

const closeModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
}

