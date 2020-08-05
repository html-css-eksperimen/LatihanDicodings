class DicodingFigureShadow extends HTMLElement {
    constructor() {
        super();
        // this._shadowroot = this.attachShadow({ mode: 'open' });
        this._shadowroot = this.attachShadow({ mode: 'closed' });
    }

    connectedCallback() {
        console.log('figure dicoding connected');
        this.render();
    }

    disconnectedCallback() {
        console.log('figure dicoding disconnected');
    }

    render() {
        this.srcGambar = this.getAttribute('src');
        this.altGambar = this.getAttribute('alt');
        this.captionGambar = this.getAttribute('caption');
        this.kataTambahan = this.getAttribute('kata-tambah');

        const stringEl = /*html */ `
            <figure>
                <img src="${this.srcGambar}" alt="${this.altGambar}" loading="lazy"/>
                <figcaption>${this.captionGambar}</figcaption>
            </figure>
            <div><p>Kata tambahan: ${this.kataTambahan}</p></div>
        `;

        this._shadowroot.innerHTML = stringEl;
        this._shadowroot.innerHTML += /* html */ `
            <style>
                figure {
                    border: thin #110a0a solid;
                    display: flex;
                    flex-flow: column;
                    padding: 5px;
                    max-width: 220px;
                    margin: auto;
                }

                figure>img {
                    max-width: 220px;
                }

                figure>figcaption {
                    background-color: #222;
                    color: #f38181;
                    font: bold italic smaller sans-serif;
                    padding: 3px;
                    text-align: center;
                }
            </style>
        `;
    }

    attributeChangedCallback(name, _oldValue, newValue) {
        this[name] = newValue;
        this.render();
    }

    static get observedAttributes() {
        return ['caption'];
    }
}

customElements.define('figure-shadow', DicodingFigureShadow);
export default DicodingFigureShadow;
