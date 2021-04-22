jest.mock('axios');
const axios = require('axios');
const { validateLinks } = require('../src/API/api-methods');

describe('validateLinks', () => {
  test('should is a function', () => {
    const link = [
      {
        href: 'https://www.youtube.com',
        text: 'Youtube',
        file: `${process.cwd()}\\pruebas\\folder2\\archive.md`,
      },
    ];

    const linkstatus = [
      {
        href: 'https://www.youtube.com',
        text: 'Youtube',
        file: `${process.cwd()}\\pruebas\\folder2\\archive.md`,
        status: 200,
        message: 'OK',
      },
    ];
    const axiosResponde = {
      status: 200, statusText: 'OK',
    };

    axios.get.mockResolvedValue(axiosResponde);
    return validateLinks(link).then((res) => {
      expect(res).toEqual(linkstatus);
    });
  });
});
