import generateElement from "./createElements";

import HeroBg from './assets/hero-img.jpg'
import BodyImg1 from './assets/body-img1.jpg'
import BodyImg2 from './assets/body-img2.webp'
import BodyImg3 from './assets/body-img3.jpg'

const content = document.getElementById('content');

const createHome = () => {

    const createHero = (() => {
        const hero = generateElement('div', 'hero', 0, 0, 0)
        const heroBg = generateElement('img', 'hero-bg', 'src', HeroBg, 0)
        const heroContent = generateElement('div', 'hero-content', 0, 0, 0)

        const heroHeader = generateElement('h1', 'hero-h1', 0, 0, 'Filipino Cuisine')
        const heroSub = generateElement('h2', 'hero-h2', 0, 0, 'A Taste Of')
        const heroBtn = generateElement('button', 'hero-btn', 0, 0, 'Order Now')

        heroContent.append(heroSub, heroHeader, heroBtn)
        hero.append(heroBg, heroContent)
        content.appendChild(hero)
    })()

    const createSection = (() => {
        const body = generateElement('section', 'body', 0, 0, 0)
        const bodyContent = generateElement('div', 'body-content', 0, 0, 0)

        const bodyText = generateElement('div', 'body-text', 0, 0, 0)
        const bodyHeader = generateElement('h3', 'body-header', 0, 0, 'Passed Down Through Generations')
        const bodyPara = generateElement('p', 'body-p', 0, 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        const bodyButton = generateElement('button', 'body-btn', 0, 0, 'View Menu')

        const bodyImages = generateElement('div', 'body-imgs-container', 0, 0, 0)
        const bodyImg1 = generateElement('img', 'body-img', 'src', BodyImg1, 0)
        const bodyImg2 = generateElement('img', 'body-img', 'src', BodyImg2, 0)
        const bodyImg3 = generateElement('img', 'body-img', 'src', BodyImg3, 0)


        bodyText.append(bodyHeader, bodyPara, bodyButton)
        bodyImages.append(bodyImg1, bodyImg2, bodyImg3)
        bodyContent.append(bodyText, bodyImages)
        body.append(bodyContent)
        content.append(body)
    })()
    
}

export default createHome