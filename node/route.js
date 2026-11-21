const fs = require('fs');

function handleRoute (req, res){
    if(req.url === '/'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            let formValues ='';
            formValues = fs.readFileSync('formValues.txt', 'utf8');
            res.end(`
                <h1>${formValues}</h1>
                <form action='/message' method='POST' id="myForm">
                <label for="username">Name:</label>
                <input type="text" name="username" placeholder="Enter your name" required>
                <button type="submit">Add</button>
                </form>
                `);
        } else if(req.url === '/message' && req.method === 'POST'){
            const bufferChunks = [];
            req.on('data', (chunk)=> {
                bufferChunks.push(chunk);
            });
            
            req.on('end', ()=> {
                const body = Buffer.concat(bufferChunks).toString();

                fs.writeFile('formValues.txt', body.split('=')[1], (err)=> {
                    if(err){
                        console.error('Error writing to file:', err);
                        res.statusCode = 500;
                        res.end('Internal Server Error');
                        return;
                    }
                })
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            })
    }
}

const anotherFunction = ()=> {
    console.log('an other function.');
}

module.exports = {handler: handleRoute, anotherFunction}