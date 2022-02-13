const path = require('path');
const express = require('express');
const session = require('express-session');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

global.sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const cloudinary = require('./config/cloudinary')


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

// moved secret to .env file
const SECRET = process.env.SESS_SECRET 
const sess = {
  secret: SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// When connecting Handlebars to the Express app...
app.engine('handlebars', exphbs({
      defaultLayout: 'main',
      // ...implement newly added insecure prototype access
      handlebars: allowInsecurePrototypeAccess(Handlebars)
    })
);
app.set('view engine', 'handlebars');
Handlebars.registerPartial('latest', path.join(__dirname, '/views/partials'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));
});
