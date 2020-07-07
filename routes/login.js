const Route = require('../server')

Route.get('/', (req, res) => {
    res.render('login/login');
});

module.exports = Route;