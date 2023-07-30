'use strict';

import generateElement from './createElements';
import {createHome, wipeHome} from './homeModule';
import './styles/style.css'

const content = document.getElementById('content');

const createNav = (() => {

    const nav = generateElement('nav', 'navbar', 0, 0, 0);
    const navHome = generateElement('li', 'nav-home', 0, 0, 'Home')
    const navMenu = generateElement('li', 'nav-menu', 0, 0, 'Menu')
    const navCtn = generateElement('li', 'nav-ctn', 0, 0, 'Contact')

    const state = 'home';

    navHome.addEventListener('click', (e) => {
        alert('home was clicked')
    })

    navMenu.addEventListener('click', (e) => {
        wipeHome()
    })

    navCtn.addEventListener('click', (e) => {
        wipeHome()
    })

    nav.append(navHome, navMenu, navCtn)
    content.appendChild(nav)

    createHome()

})();



