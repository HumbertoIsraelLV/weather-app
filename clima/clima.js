const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cee1fcfe5180331a48a66f0c4e25d26a&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
};