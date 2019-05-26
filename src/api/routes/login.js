import GenericRoute from '../../framework/routes/GenericRoute';

class Route extends GenericRoute {
    async process(request) {
        request.result = 'login';
        return request.result;
    }
}

module.exports = new Route('post', '/login', []);
