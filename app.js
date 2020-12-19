const argv = require('./config/yargs').argv;

const colors = require('colors');



const {crearArchivo, listarTablas} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
  case 'listar':
      listarTablas(argv.base, argv.limite)

      console.log('listar')
      break;
  case 'crear':
      console.log('crear')
      crearArchivo(argv.base, argv.limite)
        .then(console.log('el archivo a sido creado'))
        .catch((err) => console.log(err))
      break;

  default:
    console.log('comando no reconocido')

}


//let argv2 = process.argv;
//console.log(argv.limite);
//console.log(argv2);

// let paramentro = argv[2];
// let base = paramentro.split('=')[1];


//
// crearArchivo(base)
//   .then(console.log('el archivo a sido creado'))
//   .catch((err) => console.log(err))
