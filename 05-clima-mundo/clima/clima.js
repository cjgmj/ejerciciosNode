/*jshint esversion: 8 */

const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ccdbf32e542d9bb93271d9ae91bbbac6&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
};