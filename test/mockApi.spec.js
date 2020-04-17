const api = require('../src/mockApi');

/*
A função fetchURL retorna um JSON com informações de um usuário aleatório buscadas da API 'randomuser.me'.
No entanto, nos testes abaixo, queremos que todas as vezes que chamarmos a API a resposta contenha as informações do nosso adminis..Cof! Cof!.. programador favorito, Tunicão.

Faça um mock da função fetchURL() de forma que,
independa de chamadas de API e retorne as seguintes informações do Tunico:
- Gênero: Masculino
- Primeiro nome: Antônio
- Último nome: Britto
- País: Brasil
- Email: tunico@bol.com.br (Sim, é um email do bol mesmo...)
- Nome de usuário: tunicao123
- Senha: 1234567890 (Usem senhas fortes, crianças!)

Note que as informações devem estar de acordo com o JSON
presente no README.md do projeto.

Dica: Utilizem os métodos jest.fn() ou jest.spyOn().

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('verifica o usuário', () => {
  // Crie sua mock da função fetchURL() aqui
  const mockDaFetchUrl = {
    gender: 'male',
    name: {
      title: 'Monsieur',
      first: 'Antônio',
      last: 'Britto'
    },
    location: {
      street: {
        number: 6847,
        name: 'Rue du Village'
      },
      city: 'Ménières',
      state: 'Zürich',
      country: 'Brazil',
      postcode: 2996,
      coordinates: {
        latitude: '-54.0968',
        longitude: '-138.8794'
      },
      timezone: {
        offset: '+8:00',
        description: 'Beijing, Perth, Singapore, Hong Kong'
      }
    },
    email: 'tunico@bol.com.br',
    login: {
      uuid: 'a0dad8f9-ce29-4128-bf1d-05c33d487a85',
      username: 'tunicao123',
      password: '1234567890',
      salt: 'Y4iJejGT',
      md5: '261ce8a69c875a79a55026faad804786',
      sha1: 'ff5a5ebe957063f6418f0974fe302cb29a8b7169',
      sha256: '968682b51edeb3928c8d5ba174f7b5c57fc7b6d3196e57187213f119cb7e5849'
    },
    dob: {
      date: '1962-02-08T10:15:14.583Z',
      age: 58
    },
    registered: {
      date: '2015-06-22T17:06:40.261Z',
      age: 5
    },
    phone: '079 254 65 37',
    cell: '075 748 24 12',
    id: {
      name: 'AVS',
      value: '756.9629.8176.50'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/23.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/23.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/23.jpg'
    },
    nat: 'CH'
  }

  test('verifica se o usuário é o tunico', async () => {
    api.fetchURL = jest.fn().mockResolvedValue(mockDaFetchUrl);
    return api.fetchURL().then((user) => {
      expect(user.gender).toEqual('male');
      expect(user.name.first).toEqual('Antônio');
      expect(user.name.last).toEqual('Britto');
      expect(user.location.country).toEqual('Brazil');
      expect(user.email).toEqual('tunico@bol.com.br');
      expect(user.login.username).toEqual('tunicao123');
      expect(user.login.password).toEqual('1234567890');
    });
  });
});
