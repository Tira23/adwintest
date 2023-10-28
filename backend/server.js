const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;
const notes = [{
    title: "Что-то не такое важное, но тоже интересное",
    text: "Идейные соображения высшего порядка, а также сложившаяся структура организации требуют определения и уточнения модели развития. Значимость этих проблем настолько очевидна, что сложившаяся структура организации представляет собой интересный эксперимент проверки существенных финансовых и административных условий.",
    date: " 34.3.43"
}]

const server = http.createServer(  (req, res) => {
    req.on("end" ,() =>{
         return JSON.stringify({a: 42})
    })
    console.log('Кто-то постучал1')
    res.on("end",()=>{
        console.log('Кто-то постучал2')
    })
    req.on("data",()=>{
        return notes
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
