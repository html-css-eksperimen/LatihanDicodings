class KucingFigure extends HTMLElement {
    constructor() {
        super();
        console.log('Constructor dibuat');
    }

    connectedCallback() {
        console.log('Element gambar connected');
        this.render();
    }

    disconnectedCallback() {
        console.log('Element gambar disconnected');
    }

    adoptedCallback() {
        console.log('adopted!');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute: ${name} changed!`);
    }

    // digunakan untuk mengamati perubahan nilai attribute caption
    /* kita bisa menetapkan lebih dari satu atribut yang diamati.
    dengan memisahkan nama atribut menggunakan koma. Contoh: */
    // return ["caption", "title", "src", ...]
    static get observedAttributes() {
        return ['caption'];
    }

    render() {
        const urlImage = 'https://http.cat/500';
        const divEl = document.createElement('div');
        const imgKucingEl = document.createElement('img');
        imgKucingEl.setAttribute('src', urlImage);
        imgKucingEl.setAttribute('loading', 'lazy');
        imgKucingEl.setAttribute('width', '300');

        divEl.append(imgKucingEl);
        console.log(imgKucingEl);

        this.appendChild(divEl);
    }
}

customElements.define('kucing-figure', KucingFigure);

export default KucingFigure;
