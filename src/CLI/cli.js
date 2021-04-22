#!/usr/bin/env node
/* eslint-disable no-console */
/* Es una instancia de una línea shebang:
en Windows, es únicamente la extensión del nombre de archivo de un archivo determinado
lo que determina qué ejecutable lo interpretará. */
// console.log('pruebas');

const { program } = require('commander');

program.version('0.0.1'); // (libreria del cLI)

const { mdlinks } = require('../API/md-links');
const {
  totalLinks,
  uniqueLinks,
  brokenLinks,
} = require('./cli-methods');

program
// program.parse (argumentos) procesa los argumentos, dejando cualquier argumento no consumido
  .arguments('<path>')
  .option('--validate') /* Validar links con peticiones HTTP' */
  .option('--stats') /* Mostrar las estadísticas básicas de los links */
  .parse(process.argv);
/* argv de NodeJs => devuelve una matriz de cadenas de argumentos de la línea de comandos. */

const myARGV = process.argv;
const path = myARGV[2];
const validate = myARGV.includes('--validate');
const stats = myARGV.includes('--stats');

if (validate && stats) {
  mdlinks(path, { validate: true })
    .then((links) => {
      console.log(totalLinks(links));
      console.log(uniqueLinks(links));
      console.log(brokenLinks(links));
    // => [{Total,Unique, broken}]
    });
} else if (stats) {
  mdlinks(path, { validate: true })
    .then((links) => {
      console.log(totalLinks(links));
      console.log(uniqueLinks(links));
    });
  // => [{Total,Unique}]
} else if (validate) {
  mdlinks(path, { validate: true })
    .then((links) => {
      console.log(links);
      // console.table(links);
      //= >[{href,text,file,message,status}]
    })
    .catch(console.error);
} else {
  const bear = `
    _───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
    ─♥─█▒▒░░░░░░░░░▒▒█─♥─
    ─♥──█░░♥░░░░░♥░░█──♥─
    ─▄▄──█░░░▀█▀░░░█──▄▄─
    █░░█─▀▄░░░░░░░▄▀─█░░█
░☆ TRY WITH VALIDATE OR STATS☆░
`;
  console.log('WRONG COMAND TRY WITH --validate --stats', bear);
}

// (async () => {
//   msn('MD-LINKS');
//   createFile(await queryParams());
// })();

// const a = './pruebas/file-Absolute.md --validate';
