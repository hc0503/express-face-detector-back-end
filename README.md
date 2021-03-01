# Face Detector Back End Express

Clone the repository and simply run `npm install` from the root folder.

## Configuration

In order to run the application, a database connection string has to be configured. The connection string is stored in `app/sequelize.js`.

When Sequelize is configured, you can run the setup script that creates the `users` table and also adds one default user (username: `user`, password: `user`). From the root directory run:

```
node setup.js
```

If you want to run the tests, it is necessary to configure Nightwatch.js using the `nightwatch.json` file. Namely it is required to provide server path to selenium. For more information see the [documentation](http://nightwatchjs.org/guide#settings-file).

## Run the application

From the root folder of the project, you can run the application with: 
```
node app.js
```