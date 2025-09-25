const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h2>나의 서버</h2>');
    res.end('<p>반가워요</p>')
})
    .listen(8080, () => {
        console.log('8080번 포트에서 서버 대기 중입니다!');
    })













