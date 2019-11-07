const express = require('express');
const app = express();
const port = 3000;
const db = require('./server/models/db');
const seed = require('./server/models/seed/seed-db');
// setup the Express middlware
require('./server/middleware/middleware')(app);

// setup the api
require('./server/api')(app);

// Connecting to Database
db.sequelize
	.sync(
		{
			// force: true
		}
	)
	// .then(() => {
	// 	seed.insert();
	// })
	.then(() => {
		app.listen(port, () => {
			console.log('running server on port ' + port);
		});
	});
