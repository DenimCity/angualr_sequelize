const { User, Book, Favorite } = require('../../models/db');

exports.allUsers = async (req, res) => {
	try {
		const users = await User.findAll({});
		res.send(users);
	} catch (error) {
		console.log(error);
		res.status(404).send(error);
	}
};

exports.singleUser = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await User.findOne({
			where: { id },
			include: [
				{
					model: Book,
					as: 'Reading',
					attributes: [ 'tite', 'author' ]
				},
				{
					model: Favorite
				}
			]
		});
		res.send(user);
	} catch (error) {
		console.log(error);
		res.status(404).send(error);
	}
};

exports.saveUserFav = async (req, res) => {
	const { title, UserId } = req.body;
	try {
		await Favorite.create({ title, UserId });

		res.send({ success: `Success, favorite book added for User: ${UserId}` });
	} catch (error) {
		console.log(error);
		res.status(404).send(error);
	}
};
exports.saveUser = async (req, res) => {
	const { name } = req.body;
	try {
		const user = await User.create({ name });
		res.send(user);
	} catch (error) {
		console.log(error);
		res.status(404).send(error);
	}
};
