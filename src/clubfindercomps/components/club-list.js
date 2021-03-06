import './club-item';

class ClubList extends HTMLElement {
    constructor() {
        super();
        console.log('Club list created');
    }

    set clubItemList(clublist) {
        this._clubitemList = clublist;
        this.render();
    }

    get clubItemList() {
        return this._clubitemList;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        console.log('Club list disconnected');
    }

    render() {
        if (this._clubitemList && this._clubitemList.length > 0) {
            const listClubItem = [];

            this._clubitemList.forEach((club) => {
                const clubItemEl = document.createElement('club-item');
                clubItemEl.clubItem = club;
                listClubItem.push(clubItemEl);
            });

            this.innerHTML = '';
            this.append(...listClubItem);
        }
    }

    renderError(message) {
        console.log('render error', message);
        const elFallback = /*html*/ `<h2 class="placeholder">${message}</h2>`;
        this.innerHTML = '';
        this.innerHTML += elFallback;
    }
}

customElements.define('club-list', ClubList);
export default ClubList;
