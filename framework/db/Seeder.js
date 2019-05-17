class Seeder {
    // eslint-disable-next-line class-methods-use-this
    async seedOne() { /* Must be overwrite */ }

    seed(count) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < count; i++) {
            this.seedOne();
        }
    }
}

module.exports = Seeder;
