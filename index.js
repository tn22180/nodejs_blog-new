require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override')
const sortMiddleware = require('./src/app/middlewares/SortMiddleware')
const db = require('./src/config/db')
const sessionMiddleware = require('./src/app/middlewares/SessionMiddleware')
db.connect();

const route = require('./src/routes');
const mongooseDelete = require('mongoose-delete');
const cookieParser = require('cookie-parser')
// cookie parse
app.use(cookieParser(process.env.SESSION_SECRET));
// static file
app.use(express.static(path.join(__dirname, 'src','public')));
// use middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// override mothod
app.use(methodOverride('_method'))

// Custom middleware
app.use(sortMiddleware);
app.use(sessionMiddleware);
app.use(morgan('combined'))
// app.set('views','home')
app.set('view engine', 'pug');
app.set('views',path.join(__dirname, 'src', 'resources','views') )
// route init
route(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
