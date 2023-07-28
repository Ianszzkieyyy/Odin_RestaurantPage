import generateElement from "./createElements";
import HeroBg from './assets/hero-img.jpg'

const content = document.getElementById('content');

const createHome = () => {
    const hero = generateElement('div', 'hero', 0, 0, 0)
    const heroBg = generateElement('img', 'hero-bg', 'src', HeroBg, 0)
    const heroContent = generateElement('div', 'hero-content', 0, 0, 0)

    const heroHeader = generateElement('h1', 'hero-h1', 0, 0, 'Filipino Cuisine')
    const heroSub = generateElement('h2', 'hero-h2', 0, 0, 'A Taste Of')
    const heroBtn = generateElement('button', 'hero-btn', 0, 0, 'Order Now')

    heroContent.append(heroSub, heroHeader, heroBtn)
    hero.append(heroBg, heroContent)
    content.appendChild(hero)
}

export default createHome