class ImageFigures extends HTMLElement {
    constructor() {
        super();
        console.log('Element constructed');
    }

    connectedCallback() {
        this.renderPage();
    }

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Attribute changed');
    }

    static get observedAttributes() {
        return ['attr1', 'attr2'];
    }

    renderPage() {
        this.innerHTML = /* html */ `
        <h2>Hello HTML ELEMENT Web Components</h2>`;
    }
}

customElements.define('h2-element', ImageFigures);

export default ImageFigures;
