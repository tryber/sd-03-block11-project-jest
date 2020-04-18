const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  const req1 = jest.spyOn( answerPhone, "answerPhone");
  afterEach(req1.mockReset);

  test("atende", async () => {
    req1.mockResolvedValue('Oi!');

    req1();
    expect(req1).toHaveBeenCalled();
    expect(req1).toHaveBeenCalledTimes(1);
    expect(req1()).resolves.toBe('Oi!');
    expect(req1).toHaveBeenCalledTimes(2);
  });

  test("ocupado", () => {
    req1.mockRejectedValue('Infelizmente não podemos atender...');
  
    expect(req1).toHaveBeenCalledTimes(0);
    expect(req1()).rejects.toMatch('Infelizmente não podemos atender...');
    expect(req1).toHaveBeenCalledTimes(1);
  });
});
