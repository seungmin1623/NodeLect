const url = require('url');

const { URL } = url;
const myURL = new URL('https://m.sports.naver.com/game/bswOvq66nC9NIrW/cheer');
console.log('new URL(): ', myURL);
console.log('url.format(): ', url.format(myURL));
console.log('-------------------');
const parsedUrl = url.parse('https://m.sports.naver.com/game/bswOvq66nC9NIrW/cheer');
console.log('url.parse(): ', parsedUrl);
console.log('url.format(): ', url.format(parsedUrl));