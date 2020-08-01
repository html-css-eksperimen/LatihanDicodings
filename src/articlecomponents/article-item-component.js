class ArtikelItem extends HTMLElement {
    constructor() {
        super();
        this._articleItem = {};
    }

    get artikelItem() {
        return this._articleItem;
    }

    set artikelItem(artikel) {
        this._articleItem = artikel;
        this.render();
    }

    connectedCallback() {
        console.log('element connected');
        this.render();
    }

    disconnectedCallback() {
        console.log('element disconnected');
    }

    render() {
        // Cek apakah object ada atau tidak
        if (Object.entries(this._articleItem).length > 0) {
            // render halaman jika object tidak kosong
            const stringElement = /* html */ `
                <img class="featured-image" src="${this._articleItem.featuredImage}" loading="lazy">
                <div class="article-info">
                    <h2><a href="${this._articleItem.id}">${this._articleItem.title}</a></h2>
                    <p>${this._articleItem.description}</p>
                </div>
            `;

            this.innerHTML = stringElement;
        }
    }
}

customElements.define('article-item', ArtikelItem);

export default ArtikelItem;
