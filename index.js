

const express = require('express');
// console.log(pug)
const app = express();
const port = 3000;
const path = require('path');
const morgan = require('morgan');

// static file

app.use(express.static(path.join(__dirname, 'src','public')));
// app.engine('pug', pug.engine);
app.use(morgan('combined'))
// app.set('views','home')
app.set('view engine', 'pug');
app.set('views',path.join(__dirname, 'src', 'resources','views') )
app.get('/', (req, res) => {
    res.render('home', {
        title : "Home Page"
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        title : 'About'
    });
});
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
