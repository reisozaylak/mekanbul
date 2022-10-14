const hakkinda=function(req, res, next) {
    res.render('anasayfa', { title: 'Hakkında Sayfası' });
};

module.exports={
    hakkinda
}