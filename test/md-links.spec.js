const { mdlinks } = require('../src/API/md-links');

const linkFail = 'pruebas\\folder\\file-two.css';
const archive = 'pruebas\\folder2\\archive.md';
const relative = 'pruebas\\folder2';
const link = [
  {
    href: 'https://www.youtube.com',
    text: 'Youtube',
    file: `${process.cwd()}\\pruebas\\folder2\\archive.md`,
  },
];

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
  it('return false resolve', () => {
    expect(mdlinks(archive, { validate: false })).resolves.toEqual(link);
  });
  it('return false resolve', () => {
    expect(mdlinks(archive, { validate: true })).resolves.toEqual(link);
  });
  it('return reject', () => {
    mdlinks(linkFail, { validate: true }).catch((error) => {
      expect(error.msj).toBe('does not exist');
    });
  });
});
