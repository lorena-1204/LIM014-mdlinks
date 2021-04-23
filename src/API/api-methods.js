// path-> proporciona utilidades para trabajar con rutas de archivos y directorios .
const path = require('path');

// fs-> proporciona una API para interactuar con los ficheros y directorios
const fs = require('fs');

// Utiliza las solicitudes http (de forma asincrona)-solo peticiones a una API-rest,traer datos
const axios = require('axios');

// Verificar si la ruta existe,
const pathExists = (route) => fs.existsSync(route);

const pathAbsolute = (route) => path.resolve(route);

const ConvertAbsolutePath = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

// Comprobar si es un archivo
const archive = (route) => fs.statSync(route).isFile();

// leer contenido de un archivo
const readFile = (route) => fs.readFileSync(route, { encoding: 'utf-8', flag: 'r' });

//  Comprobar si es un Directorio
const directory = (route) => fs.statSync(route).isDirectory();

// Leer un directorio
const readDirectory = (route) => fs.readdirSync(route);

// Identificar si tiene extensiones MD/ extname -> obtiene la extension de una ruta de archivo
const markDown = (route) => (path.extname(route) === '.md');

// Obtener todos los archivos md. desde un archivo o directorio, retonando un array de rutas (path)
const getAllFiles = (route) => {
  let arrayFile = [];
  if (archive(route)) {
    arrayFile.push(route);
  } else {
    readDirectory(route).forEach((file) => {
      // path.join -> une varios segementos de la ruta para formar una sola ruta.
      const newPath = path.join(route, file);
      const recursive = getAllFiles(newPath);
      arrayFile = arrayFile.concat(recursive);
    });
  }
  // path.extname('users/joe/notes.txt')(method)
  // return .txt
  const mdPath = arrayFile.filter((routa) => markDown(routa));
  return mdPath;
};

// Se obtiene todos los enlaces de archivos md,devuelve in array de objeto
const searchLinks = (route) => {
  const arrayLink = [];
  const absolutePath = ConvertAbsolutePath(route);
  getAllFiles(absolutePath).forEach((file) => {
    // g=> global(todas)/i=>Case insensitive(mayuscula y minusculas)
    // .=> todas las coincidencias de cualquier caracter excepto nuevas linea
    // * =>0 o Más /+ =>1 o Más/ ? => 0 o Uno
    const regExp = /\[(.*)\]\(((?!#).+)\)/gi;
    // match() => para obtener todas las ocurrencias de una expresión regular dentro de una cadena.
    // split() => divide un objeto de tipo String en un array.Especifica donde realizar cada corte.
    // slice()=> extrae una array indicandole el indice incial y el final
    const links = readFile(file).match(regExp).map((e) => e.split('](')[1].slice(0, -1));
    const text = readFile(file).match(regExp).map((e) => e.split('](')[0].slice(1));
    links.forEach((link, i) => {
      arrayLink.push({
        href: link,
        text: text[i],
        file,
      });
    });
  });

  return arrayLink;
};

// Peticion HTTP
const validateLinks = (arrLiknsValidate) => {
  const arr = arrLiknsValidate.map((obj) => (axios.get(obj.href))
    .then((url) => {
      if (url.status === 200) {
        return {
          ...obj,
          status: url.status,
          message: url.statusText,
        };
      }
    })
    .catch(() => ({
      ...obj,
      status: 404,
      message: 'FAIL',
    })));
  return Promise.all(arr);
};

module.exports = {
  pathExists,
  pathAbsolute,
  ConvertAbsolutePath,
  archive,
  readFile,
  directory,
  readDirectory,
  markDown,
  getAllFiles,
  searchLinks,
  validateLinks,
};
