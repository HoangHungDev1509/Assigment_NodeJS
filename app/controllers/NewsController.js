// (req, res) => {
//     res.render('news');
// })

class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('home');
    }

    show(req, res) {
        res.render('Hoang Hung dep trai vcll !!');
    }
}

module.exports = new NewsController(); //exports gi require nhan do
