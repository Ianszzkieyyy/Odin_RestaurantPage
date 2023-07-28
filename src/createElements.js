function generateElement (elType, elClass, elAttrSet, elAttrValue, elText) {
    const el = document.createElement(elType);
    if (elClass) el.classList.add(elClass)
    if (elAttrSet && elAttrValue) el.setAttribute(elAttrSet, elAttrValue);
    if (elText) el.textContent = elText;
    return el;
}

export default generateElement