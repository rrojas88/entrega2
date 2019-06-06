let opciones = {
	nombre: {
		default: 'Rr',
		alias: 'n'
	},
	matematicas: {
		default: 0,
		alias: 'm'
	},
	ingles: {
		default: 0,
		alias: 'i'
	},
	programacion: {
		default: 0,
		alias: 'p'
	}
}

const argv = require('yargs')
		.command('promedio','Calcular el promedio', opciones)
		.argv

const promediar = (n1, n2, n3 ) => {
	let promedio = (+n1+n2+n3)/3
	return promedio
}

module.exports = {

	argv,
	promediar

}
