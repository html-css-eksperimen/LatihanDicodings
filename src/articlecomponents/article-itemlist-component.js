import './article-item-component';

class ArtikelItemList extends HTMLElement {
    constructor() {
        super();
        this._articles = [];
    }

    set articles(articles = []) {
        this._articles = articles;
        this.render();
    }

    get articles() {
        return this._articles;
    }

    connectedCallback() {
        console.log('element connected');
        this.render();
    }

    disconnectedCallback() {
        console.log('element disconnected');
    }

    render() {
        // render halaman
        if (this._articles.length > 0) {
            const listArtikelEl = [];
            for (const artikelItem of this._articles) {
                const artikelElement = document.createElement('article-item');
                artikelElement.artikelItem = artikelItem;
                listArtikelEl.push(artikelElement);
            }

            this.append(...listArtikelEl);
        }
    }
}

customElements.define('artikel-list', ArtikelItemList);
export default ArtikelItemList;
