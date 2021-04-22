const { mdlinks } = require('./md-links');

const dirRelative = './pruebas';
const fileAbsolute = 'pruebas\\folder2\\archive.md';
// const fileAbsolute = 'C:\\Users\\Lorena RC\\Desktop\\LIM014-mdlinks\\pruebas\\file-Absolute.md';

// mdlinks(fileAbsolute)
//   .then((links) => {
//     console.log(links);
//     // console.table(links);
//   })
//   .catch(console.error);

mdlinks(fileAbsolute, { validate: true })
  .then((links) => {
    console.log(links);
  })
  .catch(console.error);

// mdlinks(dirRelative)
//   .then((links) => {
//     console.log(links);
//   })
//   .catch(console.error);
