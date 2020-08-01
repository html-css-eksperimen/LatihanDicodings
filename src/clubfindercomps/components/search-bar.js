class SearchBar extends HTMLElement {
    constructor() {
        super();
        console.log('search bar created');
    }

    set clickEvent(eventListener) {
        this._eventListener = eventListener;
        this.render();
    }

    get clickEvent() {
        return this._eventListener;
    }

    set valueInput(valueInput) {
        this._valueInput = valueInput;
    }

    get valueInput() {
        this._valueInput = this.querySelector('#searchElement').value;
        return this._valueInput;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {}

    render() {
        const searchEl = /* html */ `
        <div id="search-container" class="search-container">
            <input
                placeholder="Search football club"
                id="searchElement"
                type="search"
            />
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        this.innerHTML = searchEl;

        this.querySelector('#searchButtonElement').addEventListener(
            'click',
            this._eventListener,
        );
    }
}

customElements.define('search-bar', SearchBar);
export default SearchBar;
