var mysql = require('mysql');

module.exports = function(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'insira a senha do seu banco',
        database : 'projeto_simples'
    });
}