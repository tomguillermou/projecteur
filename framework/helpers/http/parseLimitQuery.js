
module.exports = (query) => {
    let limit = parseInt(query.limit, 10);

    limit = Number.isInteger(limit) ? limit : 0;

    return limit;
};
