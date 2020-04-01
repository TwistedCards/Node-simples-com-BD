var server = require('./config/server.js');

var home = require('./main/routes/home');

home(server);

server.listen('3000', function(){
    console.log("Servidor ON");
});