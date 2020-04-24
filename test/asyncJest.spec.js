const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe ('retornando ligação', () => {
  test("atende", async () => {
    const retorno = await answerPhone (true);
    expect(response).toBe('Olá');
  });
    // Insira seu teste assíncrono aqui
  test('ocupado', async () => {
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error).toBe('O telefone está ocupado.');
    }
  });
});
