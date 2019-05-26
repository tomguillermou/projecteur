
module.exports = (range, minValue, maxValue) => {
    const rangeValues = range.split('-');

    if (rangeValues.length === 2) {
        const min = (rangeValues[0] === 'min') ? minValue : parseInt(rangeValues[0], 10);
        const max = (rangeValues[1] === 'max') ? maxValue : parseInt(rangeValues[1], 10);

        if (Number.isInteger(min) && Number.isInteger(max)) {
            return { $gte: min, $lte: max };
        }
    }

    return null;
};
