const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
      })
      .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Determina hasta donde llega la tabla de multiplicar'
      })
      .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar en consola'
      })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
          throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;