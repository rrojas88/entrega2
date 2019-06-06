/*
npm i yargs
npm i express
*/
const express = require('express')

const {argv, promediar} = require( './calculos' )

const app = express()
//console.log( argv )
let texto = 'Promedio no Calculado'
if( argv._[0] == 'promedio' ){
	let promedio = promediar(argv.m, argv.i, argv.p)
	texto = `<strong>El Promedio de ${argv.n} es ${promedio}</strong>`
}


app.get('/', function (req, res){
	res.send( texto )
})

app.listen( 3000 )

