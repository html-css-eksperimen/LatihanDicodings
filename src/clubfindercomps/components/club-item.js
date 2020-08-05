class ClubItem extends HTMLElement {
    constructor() {
        super();
        console.log('Club item created');
    }

    set clubItem(clubitem) {
        this._clubitem = clubitem;
        this.render();
    }

    get clubItem() {
        return this._clubitem;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        console.log('club item disconnected');
    }

    render() {
        if (Object.entries(this._clubitem).length > 0) {
            const { name, fanArt, description } = this._clubitem;

            const elementClubs = /* html */ `
            <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
            <div class="club-info">
                <h2>${name}</h2>
                <p>${description}</p>
            </div>
            `;

            this.innerHTML = elementClubs;
        }
    }
}

customElements.define('club-item', ClubItem);
export default ClubItem;
