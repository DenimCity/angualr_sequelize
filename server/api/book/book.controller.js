const { Book } = require('../../models/db');

exports.allBooks = async (req, res) => {
	try {
		const books = await Book.findAll({});
		res.send(books);
	} catch (error) {
		console.log(error);
		res.status(404).send(error);
	}
};
exports.saveUserBook = async (req, res) => {
	const { bookId, userId } = req.body;
	try {
		const book = await Book.findOne({ where: { id: bookId } });
		console.log('TCL: exports.saveUserBook -> book', book);
		book.addReader(userId);
		res.send({ success: 'Success, book added for User!' });
	} catch (error) {
		console.log(error.message);
		// res.status(404).send(error);
	}
};
