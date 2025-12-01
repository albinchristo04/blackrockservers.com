const https = require('https');
const fs = require('fs');

const API_USER = '50307_api';
const API_TOKEN = '6af0f8rzbzk7ldbr1s6mrpdql5wdylbn';

const endpoints = [
    '/preconfigured-servers/',
    '/list-products/',
];

const fetchEndpoint = (endpoint) => {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'my.nocix.net',
            path: `/api${endpoint}`,
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + Buffer.from(`${API_USER}:${API_TOKEN}`).toString('base64'),
                'Accept': 'application/json'
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                const output = `\n--- Endpoint: ${endpoint} ---\nStatus: ${res.statusCode}\nHeaders: ${JSON.stringify(res.headers)}\nBody:\n${data}\n-----------------------------\n`;
                fs.appendFileSync('api_output.txt', output);
                resolve();
            });
        });

        req.on('error', (e) => {
            fs.appendFileSync('api_output.txt', `Error fetching ${endpoint}: ${e.message}\n`);
            resolve();
        });
        req.end();
    });
};

async function testAll() {
    if (fs.existsSync('api_output.txt')) fs.unlinkSync('api_output.txt');
    for (const ep of endpoints) {
        await fetchEndpoint(ep);
    }
}

testAll();
