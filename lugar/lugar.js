const axios = require('axios');

const getLugarLtdLng = async(direccion) => {
    const encodedUlr = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'x-rapidapi-key': 'b316ebd09amshf50a58965c26287p172949jsn245bd73d4ab4' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length == 0)
        console.log(`No hay resultados para: ${direccion}`);
    else {
        let data = resp.data.Results[0];
        let dir = data.name;
        let lat = data.lat;
        let lon = data.lon;
        return ({ dir, lat, lon });
    }
}
module.exports = {
    getLugarLtdLng
};