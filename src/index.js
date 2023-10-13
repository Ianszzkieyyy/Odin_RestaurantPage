'use strict';

import generateElement from './createElements';
import {createHome, wipeHome} from './homeModule';
import {createMenu, wipeMenu} from './menuModule';
import './styles/style.css'

const content = document.getElementById('content');

let state = 'home';

const createNav = (() => {

    const nav = generateElement('nav', 'navbar', 0, 0, 0);
    const navHome = generateElement('li', 'nav-home', 0, 0, 'Home')
    const navMenu = generateElement('li', 'nav-menu', 0, 0, 'Menu')
    const navCtn = generateElement('li', 'nav-ctn', 0, 0, 'Contact')


    navHome.addEventListener('click', (e) => {
        if (state === 'menu') {
            wipeMenu()
            createHome()
            state = 'home'
            
        }
    })

    navMenu.addEventListener('click', (e) => {
        if (state === 'home') {
            wipeHome()
            createMenu()
            state = 'menu'

        }
    })

    nav.append(navHome, navMenu, navCtn)
    content.appendChild(nav)

    createHome()

})();



