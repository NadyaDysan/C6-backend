const http = require ('http');

const server = http.createServer( requestListener = (request , response ) => {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-type: text/plain";
    response.write("Hello, world");
    response.end ();
});

server.listen(3000, ()=> {
    console.log("Сервер http://127.0.0.1:3000/ запущен")
})