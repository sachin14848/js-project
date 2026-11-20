const http = require('http');


const server =http.createServer((req, res)=> {
    console.log('request made');
    if(req.url === '/'){
        res.statusCode = 200;
        res.end('<h1>Hello World</h1>');
    } else if (req.url === '/home'){
        res.statusCode = 200;
        res.end('<h1>Welcome home</h1>');
    } else if(req.url === '/about'){
        res.statusCode = 200;
        res.end('<h1>Welcome to About Us</h1>');
    } else if(req.url === '/node'){
        res.statusCode = 200;
        res.end('<h1>Welcome to my Node Js project</h1>')
    } else{
        res.statusCode = 404;
        res.end('<h1>Page not found</h1>')
    }
});
const PORT = 5000;

server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});