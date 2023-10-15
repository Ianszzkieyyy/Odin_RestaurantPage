import generateElement from "./createElements";

import MenuImg1 from './assets/menu-img1.webp';
import MenuImg2 from './assets/menu-img2.jpg';
import MenuImg3 from './assets/menu-img3.jpg';
import MenuImg4 from './assets/menu-img4.jpg';
import MenuImg5 from './assets/menu-img5.jpg';
import MenuImg6 from './assets/menu-img6.jpg';


const menu = generateElement('section', 'menu', 0, 0, 0)
const content = document.getElementById('content');

const createMenu = () => {

    const menuGrid = (() => {
        const menuBg = generateElement('div', 'menu-bg', 0, 0, 0)
        const menuContent = generateElement('div', 'menu-content', 0, 0, 0)

        const item1 = generateElement('figure', 'gallery__item--1', 0,0,0)
        const img1 = generateElement('img', 'gallery__img', 'src', MenuImg1, 0)
        item1.append(img1)

        const item2 = generateElement('figure', 'gallery__item--2', 0,0,0)
        const img2 = generateElement('img', 'gallery__img', 'src', MenuImg2, 0)
        item2.append(img2)

        const item3 = generateElement('figure', 'gallery__item--3', 0,0,0)
        const img3 = generateElement('img', 'gallery__img', 'src', MenuImg3, 0)
        item3.append(img3)
        
        const item4 = generateElement('figure', 'gallery__item--4', 0,0,0)
        const img4 = generateElement('img', 'gallery__img', 'src', MenuImg4, 0)
        item4.append(img4)

        const item5 = generateElement('figure', 'gallery__item--5', 0,0,0)
        const img5 = generateElement('img', 'gallery__img', 'src', MenuImg5, 0)
        item5.append(img5)

        const item6 = generateElement('figure', 'gallery__item--6', 0,0,0)
        const img6 = generateElement('img', 'gallery__img', 'src', MenuImg6, 0)
        item6.append(img6)


        menuContent.append(item1, item2, item3, item4, item5, item6)
        menuBg.append(menuContent)
        menu.append(menuBg)
        content.append(menu)
    })()

    const elements = [menu]

    elements.forEach((element) => {
        if (element.classList.contains('fade-out')) {
            console.log(`${element} has classlist`)
            element.classList.remove('fade-out')
        }
    })
}

const wipeMenu = () => {
    const elements = [menu]

    elements.forEach((element) => {
        element.classList.add('fade-out') 
    })

    setTimeout(() => {
        elements.forEach((element) => {
            const childElements = element.querySelectorAll('*');

            childElements.forEach((child) => {
                child.remove();
            })
            
            element.remove()  
        })
    }, 250)
}

export {createMenu, wipeMenu}