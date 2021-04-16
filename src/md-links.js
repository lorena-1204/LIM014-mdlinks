const {
  pathExists,
  searchLinks, // convierte ya la ruta a absoluta 
  validateLinks,
} = require('./api-index');

const mdlinks = (path, options) => new Promise((resolve, reject) => {
  if (pathExists(path) === true) {
    const search = validateLinks(searchLinks(path));
    resolve(search);
  } else {
    const msj = 'does not exist';
    reject(msj);
  }
});

module.exports = { mdlinks };

// const mdlinks = (path, options = { validate: false }) => new Promise((resolve, reject) => {
//   // if ((validateRoute(path)) === true && (options.validate === true)) {
//   //   resolve(validateLinks(searchLinks(path)));
//   // }
//   if (options.validate === false) {
//     if (validateRoute(path)) {
//       console.log(pathAbsolute(path));
//       if (!pathAbsolute(path)) {
//         const absolute = (seeISAbsolute(path));
//         console.log(searchLinks(absolute));
//         resolve(searchLinks(absolute));
//       }
//     } else {
//       const msj = 'No existe';
//       reject(msj);
//     }
//   }
// });

// module.exports = { mdlinks };

// Ej
// const mdlinks = (path, options = { validate: false }) => {
//   const promise = new Promise((resolve, reject) => {
//     if ((validateRoute(path === true)) && (options.validate === true)) {
//       resolve(validateLinks(searchLinks(path)));
//     }
//     if (options.validate === false) {
//       if (validateRoute(path)) {
//         if (!pathAbsolute(path)) {
//           resolve(seeISAbsolute(path));
//         }
//         if (seeISAbsolute(path)) {
//           if (getAllFiles(path)) {
//             resolve(searchLinks(path));
//           }
//         }
//       } else {
//         reject(new Error('does not exist'));
//       }
//     }
//   });
//   return promise;
// };
// module.exports = { mdlinks };

//  ej1
// const mdlinks = (path, options) => {
//   const promise = new Promise((resolve, reject) => {
//     if (validateRoute(path) === false) {
//       reject(new Error(`${path}does not exist`));
//     } else if ((validateRoute(path === true)) && (options.validate === true)) {
//       resolve(validateLinks(searchLinks(path)));
//     } else {
//       resolve(validateLinks(path));
//     }
//   });
//   return promise;
// };
// module.exports = { mdlinks };

// ej2
// const mdlinks = (option, path = { validate: false }) => new Promise((resolve, reject) => {
//   if (option.validate === true) {
//     resolve(validateLinks(searchLinks(path)));
//   }
//   if (option.validate === false) {
//     if (validateRoute(path)) {
//       if (!pathAbsolute(path)) {
//         resolve(seeISAbsolute(path));
//       }
//       if (seeISAbsolute(path)) {
//         if (getAllFiles(path)) {
//           resolve(searchLinks(path));
//         }}
//     } else {
//       reject(new Error('does not exist'));
//     }
//   }
// });
// module.exports = { mdlinks };
