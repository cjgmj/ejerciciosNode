/*jshint esversion: 6 */

const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const encodedURL = encodeURI(argv.direccion);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
    headers: {
        "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
        "x-rapidapi-key": "f4ea34411fmsh0d03055d42964a2p1906a0jsn75570cdd46f0"
    }
});

instance.get().then(resp => console.log(resp.data.Results[0])).catch(err => console.log('Error', err));