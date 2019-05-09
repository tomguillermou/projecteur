
module.exports = {
    getLimitFromQuery: (query) => {
        let limit = null;

        if (query.limit === undefined) {
            limit = 0;
        } else {
            limit = parseInt(query.limit, 10);
        }

        return limit;
    },
};
