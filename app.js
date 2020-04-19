const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLtdLng(argv.direccion)
//     .then(console.log(''));


// clima.getClima(30, -35)
//     .then(console.log(''))
//     .catch(console.log(''));

//LA VERSION ORIGINAL SIN AWAIT
// const getInfo = (direccion) => {
//     lugar.getLugarLtdLng(direccion)
//         .then(
//             datos =>
//             clima.getClima(datos.lat, datos.lon)
//             .then(temp => console.log(`La temperatura en ${direccion} es de ${temp}`))
//             .catch(err => console.log(`No se pudo obtener temperatura de ${direccion}`))
//         )
//         .catch(err => console.log(`No se pudo obtener coordenadas de ${direccion}`));
// }

const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getLugarLtdLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lon);
        return `La temperatura en ${coord.dir} es de: ${temp}`;
    } catch {
        return `No se pudo determinar la temperatura en ${direccion}`;
    }
}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);