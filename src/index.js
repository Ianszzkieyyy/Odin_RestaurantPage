'use strict';

import {generateTextElement, generateElement} from './createElements';
import './styles/style.css'

const content = document.getElementById('content');

const nav = generateElement('nav', 'navbar')
const navHome = generateTextElement('li', 'nav-home', 'Home');
const navMenu = generateTextElement('li', 'nav-menu', 'Menu');
const navCtn = generateTextElement('li', 'nav-ctn', 'Contact');



nav.append(navHome, navMenu, navCtn);
content.appendChild(nav);

