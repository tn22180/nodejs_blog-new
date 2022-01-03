

const express = require('express');
// console.log(pug)
const app = express();
const port = 3000;
const path = require('path');
const morgan = require('morgan');


const route = require('./src/routes');
// static file
app.use(express.static(path.join(__dirname, 'src','public')));
// use middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('combined'))
// app.set('views','home')
app.set('view engine', 'pug');
app.set('views',path.join(__dirname, 'src', 'resources','views') )

// route init
route(app);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
