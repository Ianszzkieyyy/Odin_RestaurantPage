import generateElement from "./createElements";

import HeroBg from './assets/hero-img.jpg'

import BodyImg1 from './assets/body-img1.jpg'
import BodyImg2 from './assets/body-img2.webp'
import BodyImg3 from './assets/body-img3.jpg'

import FtrIcon1 from './assets/ftr-icon1.svg'
import FtrIcon2 from './assets/ftr-icon3.svg'
import FtrIcon3 from './assets/ftr-icon2.svg'

import CTAImg from './assets/cta-img.jpg'

const content = document.getElementById('content');

const createHome = () => {

    const createHero = (() => {
        const hero = generateElement('section', 'hero', 0, 0, 0)
        const heroBg = generateElement('div', 'hero-bg', 0, 0, 0)
        const heroContent = generateElement('div', 'hero-content', 0, 0, 0)

        const heroHeader = generateElement('h1', 'hero-h1', 0, 0, 'Filipino Cuisine')
        const heroSub = generateElement('h2', 'hero-h2', 0, 0, 'A Taste Of')
        const heroBtn = generateElement('button', 'hero-btn', 0, 0, 'Order Now')

        heroContent.append(heroSub, heroHeader, heroBtn)
        hero.append(heroBg, heroContent)
        content.appendChild(hero)
    })()

    const createBody= (() => {
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
    
    const createFeature = (() => {
        const feature = generateElement('section', 'ftr', 0, 0, 0)
        const featureContent = generateElement('div', 'ftr-content', 0, 0, 0)
        
        const featureHeader = generateElement('h3', 'ftr-header', 0, 0, 'Flavored With Love.')
        const featureCards = generateElement('div', 'ftr-cards', 0, 0, 0)

        const card1 = createCard(FtrIcon1, 'Prepped by Talented, Professional Chefs', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        const card2 = createCard(FtrIcon2, 'Fresh from our Trusted Farms', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        const card3 = createCard(FtrIcon3, 'Served with the Finest Touch', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')

        function createCard (icon, heading, paragraph) {
            const card = generateElement('div', 'ftr-card', 0, 0, 0)

            const cardIcon = generateElement('img', 'card-icon', 'src', icon, 0)
            const cardHeader = generateElement('h4', 'card-header', 0, 0, heading)
            const cardBody = generateElement('p', 'card-p', 0, 0, paragraph)

            card.append(cardIcon, cardHeader, cardBody)

            return card
        }

        featureCards.append(card1, card2, card3)
        featureContent.append(featureHeader, featureCards)
        feature.append(featureContent)
        content.append(feature)
    })()

    const createCTA = (() => {
        const cta = generateElement('section', 'cta', 0, 0, 0)
        const ctaLeft = generateElement('div', 'cta-left', 0, 0 ,0)
        const ctaRight = generateElement('div', 'cta-right', 0, 0 ,0)

        const ctaImg = generateElement('img', 'cta-img', 'src', CTAImg, 0)

        const ctaHeader = generateElement('h3', 'cta-header', 0, 0, 'Send a Message')
        const ctaBody = generateElement('p', 'cta-p', 0, 0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        const ctaBtn = generateElement('button', 'cta-btn', 0, 0, 'Contact Us')

        ctaLeft.append(ctaImg)
        ctaRight.append(ctaHeader, ctaBody, ctaBtn)
        cta.append(ctaLeft, ctaRight)
        content.append(cta)
    })()
}

export default createHome