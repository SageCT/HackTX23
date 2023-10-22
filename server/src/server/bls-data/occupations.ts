const fetch = require('node-fetch');

export async function getBLSAPICallResult(seriesID: string) {
    const url: string = `https://api.bls.gov/publicAPI/v2/timeseries/data/${seriesID}`;
    try {
        const response = await fetch(url);
        const jsonData = await response.json();

        return jsonData;
    } catch (error) {
        console.error(error);
    }
}