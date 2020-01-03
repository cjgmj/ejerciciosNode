/*jshint esversion: 8 */

const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "f4ea34411fmsh0d03055d42964a2p1906a0jsn75570cdd46f0"
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const { name: direccion, lat, lon: lng } = data;

    return {
        direccion,
        lat,
        lng
    };
};

module.exports = {
    getLugarLatLng
};