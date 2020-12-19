const fs = require('fs');
const colors = require('colors');

let listarTablas = (base, limite) =>{
  return new Promise((resolve, reject) => {
    if(!Number(base)){
      reject('No es un número');
      return;
    }
    console.log('========'.blue);
    console.log(`tabla ${base}`.green );
    console.log('===='.red);
    for (var i = 1; i < limite; i++) {
      const result = base * i;
      console.log(`${base} * ${i} = ${result}\n`);
    }
  })

}


let crearArchivo = (base, limite = 10) =>{
  return new Promise((resolve, reject) => {
    if(!Number(base)){
      reject('no es un numero');
      return;
    }
    let data = '';
    for (let i = 1; i <= limite; i++) {
      const result = base *i;
      data += `${base} * ${i} = ${result}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data , (err) =>{
      if(err) reject(err);
      else
        resolve(`tabla-${base}.txt`);
    })
  })
}

module.exports = {
  crearArchivo,
  listarTablas
};
