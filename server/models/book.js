'use strict';

module.exports = (sequelize, DataTypes) => {
	const Book = sequelize.define('Book', {
		title: DataTypes.STRING,
		author: DataTypes.STRING,
		year: DataTypes.INTEGER
	});

	Book.associate = (models) => {
		//models.Listing hasMany Favorites as 'Favorite' 'through': 'FavoritesList'
		models.Book.belongsToMany(models.User, { as: 'Readers', through: 'ReadingList' });
	};

	return Book;
};
