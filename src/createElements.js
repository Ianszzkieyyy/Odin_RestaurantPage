function generateTextElement(elementType, className, textContent) {
    const element = document.createElement(elementType);

    element.classList.add(className);
    element.textContent = textContent

    return element
}

function generateElement(elementType, className) {
    const element = document.createElement(elementType);

    element.classList.add(className)

    return element
}

export {generateTextElement, generateElement}