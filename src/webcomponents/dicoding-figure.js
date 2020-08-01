class DicodingFigure extends HTMLElement {
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
                <img src="${this.srcGambar}" alt="${this.altGambar}"/>
                <figcaption>${this.captionGambar}</figcaption>
            </figure>
            <div><p>Kata tambahan: ${this.kataTambahan}</p></div>
        `;

        this.innerHTML = stringEl;
    }
}

customElements.define('dicofig-el', DicodingFigure);
export default DicodingFigure;
