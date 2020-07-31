import clubs from './clubs';

function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchClub = function (keyword) {
    const filteredClubs = clubs.filter((club) => {
        return club.name.toUpperCase().includes(keyword.toUpperCase());
    });

    if (filteredClubs.length) {
        this.onSuccess(filteredClubs);
    } else {
        const stringFailed = `${keyword} is not found`;
        this.onFailed(stringFailed);
    }
};

export default DataSource;
