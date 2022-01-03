class SiteController{
    
    index(req, res)
    {
        // [GET] about
        res.render('home', {
            title : 'Home Page'
        });
    }
    search(req, res)
    {
        // [GET] about
        res.render('search', {
            title : 'Search Page'
        });
    }
}
module.exports = new SiteController;