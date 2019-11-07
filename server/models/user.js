'use strict';

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		}
	});

	User.associate = (models) => {
		//models.User hasMany Favorites as 'Favorite' 'through': 'FavoritesList'
		models.User.belongsToMany(models.Book, { as: 'Reading', through: 'ReadingList' });
		// models.Listing belongs to One Owner
		models.User.hasOne(models.Favorite);
	};

	return User;
};
