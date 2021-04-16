const { mdlinks } = require('./md-links');

const dirRelative = './pruebas';
const fileAbsolute = 'C:\\Users\\Lorena RC\\Desktop\\LIM014-mdlinks\\pruebas\\file-Absolute.md';

mdlinks(fileAbsolute)
  .then((links) => {
    console.log(links);
    // console.table(links);
  })
  .catch(console.error);

// mdlinks(fileAbsolut, { validate: true })
//   .then((links) => {
//     console.log(links);
//   })
//   .catch(console.error);

// mdlinks(dirRelative)
//   .then((links) => {
//     // => [{ href, text, file }]
//   })
//   .catch(console.error);

// mdlinks(dirRelative)
//   .then((links) => {
//     console.log(links);
//     // => [{ href, text, file }]
//   })
//   .catch(console.error);

// const { mdLinks } = require("./src/md-links.js");

// console.log(mdLinks("C:/Users/51947/////Documents/Laboratoria///LIM014-mdlinks///pruebas"));
