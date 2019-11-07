const models = require('../db');
const _USERS = require('./users.json');
const _BOOKS = require('./books.json');

module.exports = {
	insert: () => {
		models.User
			.bulkCreate(_USERS)
			.then(() => {
				models.Book.bulkCreate(_BOOKS);
			})
			.then(() => {
				console.log('success adding User and Books ');
			})
			.catch((err) => {
				console.log(error);
			});
	}
};
