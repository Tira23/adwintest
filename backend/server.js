const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;
const server = http.createServer(  (req, res) => {
    req.on("end" ,() =>{
         return JSON.stringify({a: 42})
    })
    console.log('Кто-то постучал1')
    res.on("end",()=>{
        console.log('Кто-то постучал2')
    })
    req.on("end",()=>{
        console.log('Кто-то постучал3')
    })
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
