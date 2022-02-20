const fs = require('fs');
const colors = require('colors');

const crearArchivo = async ( base = 5,  listar = false, hasta = 10 ) => {

  try {
    let salida = '';
    let consola = '';

    for (let index = 1; index <= hasta; index++) {
      const element = base * [index];
      salida += (`${base} x ${index} = ${element}\n`);
      consola += (`${colors.green(base)} ${'x'.red} ${colors.green(index)} ${'='.green} ${colors.red.underline(element)}\n`) ;
    }
    if (listar) {
      console.log('================'.yellow)
      console.log('Tabla del:'.cyan, colors.blue.underline(base))
      console.log('================'.yellow)
      console.log(consola)
      }
    
      fs.writeFileSync(`./salida/tabla-${base}.txt`, salida) 
      return (`tabla-${base}.txt`)
  } catch (error) {
      throw error
  }
}

module.exports = {
  crearArchivo
}
