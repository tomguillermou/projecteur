const axios = require('axios');

export default class Seeder {
    getRoute() { /* Must be overwrite */ }

    getAttributes() { /* Must be overwrite */ }

    async seedOne() {
        try {
            await axios.post(this.getRoute(), this.getAttributes());
            console.log('Success: Seeder successfully added document to DB.');
        } catch (error) {
            console.log('Error: Failed to seed DB.');
        }
    }

    seed(count) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < count; i++) {
            this.seedOne();
        }
    }
}
