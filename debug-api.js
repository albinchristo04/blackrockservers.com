const https = require('https');

const API_USER = '50307_api';
const API_TOKEN = '6af0f8rzbzk7ldbr1s6mrpdql5wdylbn';

// Test different endpoints
const endpoints = [
    '/list-services/',
    '/list-products/',
    '/preconfigured-servers/',
    '/inventory/',
    '/stock/',
];

const fetchEndpoint = (endpoint) => {
    return new Promise((resolve) => {
        const options = {
            hostname: 'my.nocix.net',
            path: `/api${endpoint}`,
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + Buffer.from(`${API_USER}:${API_TOKEN}`).toString('base64'),
                'Accept': 'application/json',
                'User-Agent': 'BlackRock-Reseller/1.0'
            }
        };

        console.log(`\n=== Testing: ${endpoint} ===`);

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                console.log(`Status: ${res.statusCode}`);
                console.log(`Content-Type: ${res.headers['content-type']}`);
                console.log(`Body Length: ${data.length} bytes`);
                console.log(`Body Preview: ${data.substring(0, 200)}`);

                if (data.length > 0) {
                    try {
                        const parsed = JSON.parse(data);
                        console.log(`Parsed JSON:`, JSON.stringify(parsed, null, 2).substring(0, 500));
                    } catch (e) {
                        console.log(`Not valid JSON. Raw data: ${data.substring(0, 300)}`);
                    }
                }
                resolve();
            });
        });

        req.on('error', (e) => {
            console.error(`Error: ${e.message}`);
            resolve();
        });

        req.end();
    });
};

async function testAll() {
    for (const ep of endpoints) {
        await fetchEndpoint(ep);
    }
}

testAll();
