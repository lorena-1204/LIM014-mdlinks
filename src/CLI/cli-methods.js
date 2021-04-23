const chalk = require('chalk');

const totalLinks = (arrayURL) => (chalk.bold.cyanBright(`✔ Total : ${arrayURL.length}`));

const uniqueLinks = (arrayURL) => {
  const arrayLinks = arrayURL.map((resp) => resp.href);
  // Set, va crear  un array solo con los elementos unicos
  const uniqueHref = new Set(arrayLinks).size;
  return (chalk.bold.greenBright(`✔ Unique : ${uniqueHref}`));
};

const brokenLinks = (arrayURL) => {
  const brokeArray = (arrayURL.filter((resp) => resp.status >= 400)).length;
  return (chalk.bold.redBright(`x Broken : ${brokeArray}`));
};

module.exports = {
  totalLinks,
  uniqueLinks,
  brokenLinks,
};
