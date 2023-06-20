const http = require ('http');

http.createServer ((req, res) =>{
//res.setHeader('content-disposition', 'attachment; filename=lista.csv');
//res.writeHead(200, {'content-type':"application/csv"});
res.write("Hola mundo");

res.end();
})
.listen(8080);
console.log("Escuchando el puerto", 8080)
