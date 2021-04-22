const { mdlinks } = require('../src/API/md-links');

const archive = 'pruebas\\folder2\\archive.md';
const relative = 'pruebas\\folder2';
const link = [
  {
    href: 'https://www.youtube.com',
    text: 'Youtube',
    file: `${process.cwd()}\\pruebas\\folder2\\archive.md`,
  },
];
// const url = [
//   {
//     href: 'https://www.youtube.com',
//     text: 'Youtube',
//     file: `${process.cwd()}\\pruebas\\folder2\\archive.md`,
//     status: 200,
//     message: 'OK',
//   },
// ];

describe('mdlinks', () => {
  it('should be a function', () => {
    expect(typeof mdlinks).toBe('function');
  });
  it('should validate md-links archive-true', (done) => {
    mdlinks(archive, true)
      .then((res) => {
        expect(res).toEqual(link);
        done();
      });
  });
  it('should validate md-links archive-false', (done) => {
    mdlinks(archive, false)
      .then((res) => {
        expect(res).toEqual(link);
        done();
      });
  });
  it('should validate md-links directory-true', (done) => {
    mdlinks(relative, true)
      .then((res) => {
        expect(res).toEqual(link);
        done();
      });
  });
  it('should validate md-links directory-false', (done) => {
    mdlinks(relative, false)
      .then((res) => {
        expect(res).toEqual(link);
        done();
      });
  });
});
//
// it('should md-linkd {validate:true} ', (done) => {
//   mdlinks(archive, { validate: true })
//     .then((res) => {
//       expect().toEqual(url);
//       done();
//     });
// });
//
