class DicodingFigureShadow extends HTMLElement {
    constructor() {
        super();
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

        this.innerHTML = stringEl;
    }
}

customElements.define('figure-gbr', DicodingFigureShadow);
export default DicodingFigureShadow;
