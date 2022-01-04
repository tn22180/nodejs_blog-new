class AboutController {
    show(req, res) {
        res.send('This is slug');
    }
    index(req, res) {
        // [GET] about
        res.render('about', {
            title: 'About',
        });
    }
}
module.exports = new AboutController();
