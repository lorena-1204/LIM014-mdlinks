// const arrayExample = [{
//   href: 'https://nodejs.org/en/',
//   text: 'Node.js',
//   file: 'C:\\Users\\Lorena RC\\Desktop\\LIM014-mdlinks\\pruebas\\file-Absolute.md',
//   status: 200,
//   message: 'OK',
// },
// {
//   href: 'https://es.wikipedia.org/wiki/Markdown',
//   text: 'Markdown',
//   file: 'C:\\Users\\Lorena RC\\Desktop\\LIM014-mdlinks\\pruebas\\file-Absolute.md',
//   status: 200,
//   message: 'OK',
// },
// {
//   href: 'https://es.wikipedia.org/wiki/Markdown',
//   text: 'Markdown',
//   file: 'C:\\Users\\Lorena RC\\Desktop\\LIM014-mdlinks\\pruebas\\file-Absolute.md',
//   status: 200,
//   message: 'OK',
// },
// {
//   href: 'ht://www.facebook',
//   text: 'Facebook',
//   file: 'C:\\Users\\Lorena RC\\Desktop\\LIM014-mdlinks\\pruebas\\file-Absolute.md',
//   status: 400,
//   statusText: 'FAIL',
// }];

const chalk = require('chalk');

const totalLinks = (arrayURL) => (chalk.bold.cyanBright(`✔ Total : ${arrayURL.length}`));
// console.log('total', totalLinks(arrayExample));

const uniqueLinks = (arrayURL) => {
  const arrayLinks = arrayURL.map((resp) => resp.href);
  // Set, va crear  un array solo con los elementos unicos
  const uniqueHref = new Set(arrayLinks).size;
  return (chalk.bold.greenBright(`✔ Unique : ${uniqueHref}`));
};
// console.log('unicos', uniqueLinks(arrayExample));

const brokenLinks = (arrayURL) => {
  const brokeArray = (arrayURL.filter((resp) => resp.status >= 400)).length;
  return (chalk.bold.redBright(`x Broken : ${brokeArray}`));
};
// console.log('roto', brokenLinks(arrayExample));

// const showResult = (arr) => {
//   const result = [];
//   arr.forEach((obj) => {
//     const linksArray = {
//       path: pathRelative(process.cwd(), obj.path),
//       text: obj.text,
//       href: obj.href,
//     };
//     if (obj.status) {
//       linksArray.statusText = obj.statusText;
//       linksArray.status = obj.status;
//     }
//     result.push(linksArray);
//   });
//   return result;
// const statsValidate = (arrayURL) => {
//   const unique = uniqueLinks(arrayURL);
//   const total = totalLinks(arrayURL);
//   const broken = brokenLinks(arrayURL);
//   const result = { unique, total, broken };
//   return result;
// };
// console.log(statsValidate(arrayExample));
// const fAIL = `
//       ().../) ().../)
//  FAIL ('.'= ) ('.'= )
//       (")_(") (")_(")`;

// const man = `
// ¸.¤*¨¨*¤.¸¸...¸..,¤*¨¨*¤
// ¸ Intente con valide stas -
// .¸.¤*¨¨*¤.¸¸.¸.¤.,¸.¤.,
// ..\
// ☻/
// /▌
// / ) __̴ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡̡̡̡.__
// ░☆  Intente con valide stat  ☆░
// `;

module.exports = {
  totalLinks,
  uniqueLinks,
  brokenLinks,
  // statsLinks,
  // statsValidate,
};
