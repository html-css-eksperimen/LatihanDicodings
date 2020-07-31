import DataSource from '../data/data-source';

const main = () => {
    const searchElement = document.querySelector('#searchElement');
    const buttonSearchElement = document.querySelector('#searchButtonElement');
    const clubListElement = document.querySelector('#clubList');

    const onButtonSearchClicked = () => {
        // let dataSource = new DataSource(renderResult, fallbackResult);
        // dataSource.searchClub(searchElement.value);
        DataSource.searchClubsAsync(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const onButtonSearchClickedAsync = async () => {
        try {
            const results = await DataSource.searchClubsAsync(
                searchElement.value,
            );

            renderResult(results);
        } catch (err) {
            console.log(err);
            fallbackResult(err);
        }
    };

    const renderResult = (results) => {
        clubListElement.innerHTML = '';
        results.forEach((club) => {
            const { name, fanArt, description } = club;

            const clubElement = document.createElement('div');
            clubElement.setAttribute('class', 'club');

            const elementClubs = /* html */ `
                <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
                <div class="club-info">
                    <h2>${name}</h2>
                    <p>${description}</p>
                </div>
            `;

            clubElement.innerHTML = elementClubs;
            clubListElement.appendChild(clubElement);
        });
    };

    const fallbackResult = (message) => {
        const elFallback = /*html*/ `<h2 class="placeholder">${message}</h2>`;
        clubListElement.innerHTML = '';
        clubListElement.innerHTML = elFallback;
        // clubListElement.innerHTML +=
        //     '<h2 class="placeholder">' + message + '</h2>';
    };

    buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};

export default main;
