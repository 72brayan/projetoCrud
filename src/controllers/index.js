function index(req, res){
    res.render('index',{
        title: 'teste'
    } )
}

module.exports = {
    index
}