const {
  pathExists,
  absolutePath,
  archive,
  readFile,
  directory,
  readDirectory,
  markDown,
  getAllFiles,
  searchLinks,
} = require('../src/api-index');

const dirRelative = 'pruebas';
const relative = 'pruebas\\folder2';
const fileAbsolute = 'C:\\Users\\Lorena RC\\Desktop\\LIM014-mdlinks\\pruebas\\file-Absolute.md';
const prueba = `${process.cwd()}\\pruebas`;
const filemd = 'C:\\Users\\Lorena RC\\Desktop\\LIM014-mdlinks\\pruebas\\file.md';
const link = [
  {
    href: 'https://www.youtube.com',
    text: 'Youtube',
    file: `${process.cwd()}\\pruebas\\folder2\\archive.md`,
  },
];
// Process.cwd, entrega la ruta del directorio donde se ejecuta el node
describe('pathExists', () => {
  it('should be a function', () => {
    expect(typeof pathExists).toBe('function');
  });
  it('should verify if path is exist', () => {
    expect(pathExists(dirRelative)).toBe(true);
  });
});

describe('absolutePath', () => {
  it('should be a function', () => {
    expect(typeof absolutePath).toBe('function');
  });
  it('should verify if path is absolutePath', () => {
    expect(absolutePath(dirRelative)).toBe(prueba);
  });
});

describe('archive', () => {
  it('should be a function', () => {
    expect(typeof archive).toBe('function');
  });
  it('should verify if it is archive', () => {
    expect(archive(fileAbsolute)).toBe(true);
  });
});

describe('readFile', () => {
  it('should be a function', () => {
    expect(typeof readFile).toBe('function');
  });
  it('should readFile', () => {
    expect(readFile(filemd)).toBe('[Markdown](https://es.wikipedia.org/wiki/Markdown)');
  });
});

describe('directory', () => {
  it('should be a function', () => {
    expect(typeof directory).toBe('function');
  });
  it('should verify if it is directory', () => {
    expect(directory(dirRelative)).toBe(true);
  });
});

describe('readDirectory', () => {
  it('should be a function', () => {
    expect(typeof readDirectory).toBe('function');
  });
  it('should verify if read Directory', () => {
    expect(readDirectory(dirRelative)).toEqual(['file-Absolute.md', 'file.md', 'folder', 'folder2', 'prueba2.js']);
  });
});

describe('markDown', () => {
  it('should be a function', () => {
    expect(typeof markDown).toBe('function');
  });
  it('should verify if it is markDown', () => {
    expect(markDown(fileAbsolute)).toBe(true);
  });
});

describe('getAllFiles', () => {
  it('should be a function', () => {
    expect(typeof getAllFiles).toBe('function');
  });
  it('should getAllFiles', () => {
    expect(getAllFiles(dirRelative)).toEqual(['pruebas\\file-Absolute.md', 'pruebas\\file.md', 'pruebas\\folder\\file-one.md', 'pruebas\\folder2\\archive.md']);
  });
});

// searchLinks,
describe('searchLinks', () => {
  it('should be a function', () => {
    expect(typeof searchLinks).toBe('function');
  });
  it('searchLinks', () => {
    expect(searchLinks(relative)).toEqual(link);
  });
});
