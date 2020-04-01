var bdConnection = require('../../config/bdConnection');

module.exports = function(app){   

    app.get('/', function(req,res){
        
        var connection = bdConnection();

        connection.query('select * from dados', function(erro, result){
            res.render("home/home", {
                dados : result
            });
        })
    });
}