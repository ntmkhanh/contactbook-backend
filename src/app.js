const express = require('express');
const cors = require('cors');
const contactController = require('./controllers/contact.controller');
const ApiError = require('./api-error');


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: `Welcome to contact book application.`});
});

app.route('/api/contacts')
    .get(contactController.findAll)
    .post(contactController.create)
    .delete(contactController.deleteAll);

app.route('/api/contacts/favorite')
    .get(contactController.findAllFavorite);

app.route('/api/contacts/:id')
    .get(contactController.findOne)
    .put(contactController.update)
    .delete(contactController.delete);

app.route('/api/contacts/:id')
    .get(contactController.findOne)
    .put(contactController.update)
    .delete(contactController.delete);

app.use((req, res, next) => {
    return next(new ApiError(404, 'Resource not found'));
});

app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
            message: err.message || 'Internal Server Error',
    });
});

app.get('/', (req, res) => {
    res.json({message: 'Welcome to contact book.'})
});

module.exports = app;