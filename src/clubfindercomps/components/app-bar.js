class AppBar extends HTMLElement {
    constructor() {
        super();
        console.log('App bar created');
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {}

    render() {
        const appbarEl = /* html */ `
        <h2>Club Finder</h2>`;
        this.innerHTML = appbarEl;
    }
}

customElements.define('app-bar', AppBar);
export default AppBar;
