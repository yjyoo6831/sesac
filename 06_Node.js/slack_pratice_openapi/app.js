/// 오픈 api 
const axios = require('axios');
async function getWeatherData(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(`Error: ${error}`);
      return null;
    }
  }
function parseWeatherData(data) {
    const weatherData = data.response.body.items.item;
    const parsedData = weatherData.map(item => {
        return {
            category: item.category,
            fcstTime: item.fcstTime,
            fcstValue: item.fcstValue
        };
    });

    return parsedData;
}

const apiKey = 'uSoOyMw%2BDKzxIGg9%2Bz%2BtRKOI%2FJt1R9mMx%2FpijgvIZBHRm%2Fc6xMur5fIGqVNCEZkMea%2Bq9VAJ3f9pBaWE5SBoxw%3D%3D';
const apiUrl = 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa';
getWeatherData(apiUrl)
    .then(data => {
        const parsedData = parseWeatherData(data);
        console.log(parsedData);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        getWeatherData(apiUrl)
            .then(data => {
                const parsedData = parseWeatherData(data);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<html><head><title>날씨 정보</title></head><body>');
                res.write('<h1>날씨 정보</h1>');
                res.write('<table><tr><th>category</th><th>fcstTime</th><th>fcstValue</th></tr>');
                parsedData.forEach(item => {
                    res.write(`<tr><td>${item.category}</td><td>${item.fcstTime}</td><td>${item.fcstValue}</td></tr>`);
                });
                res.write('</table></body></html>');
                res.end();
            })
            .catch(error => {
                console.error(`Error: ${error}`);
            });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<html><head><title>404 Not Found</title></head><body><h1>404 Not Found</h1></body></html>');
        res.end();
    }
});

server.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});