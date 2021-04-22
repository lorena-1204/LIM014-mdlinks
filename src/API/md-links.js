const {
  pathExists,
  searchLinks, // convertida ya la ruta a absoluta
  validateLinks,
} = require('./api-methods');

// const array = {
//   nombre: 'miluska',
//   soltera: true,
//   validate: false,
// },

const mdlinks = (path, options = { validate: false }) => new Promise((resolve, reject) => {
  if (pathExists(path) === true) {
    if (options.validate === true) {
      const getAllLinks = validateLinks(searchLinks(path));
      resolve(getAllLinks);
    } else {
      const getAllLinks = searchLinks(path);
      resolve(getAllLinks);
    }
  } else {
    const msj = 'does not exist';
    reject(msj);
  }
});

// const archive = 'pruebas\\folder2\\archive.md';
// const relative = 'pruebas\\folder2';
// console.log(mdlinks(archive, true).then((res) => console.log(res)));}

// console.log(mdlinks(relative, true).then((res) => console.log(res)));

module.exports = { mdlinks };
