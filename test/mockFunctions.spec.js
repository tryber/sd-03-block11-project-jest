const { add, subtract, multiply, divide, power, factorial } = require('../src/mockFunctions');

/*
Criamos uma série de funções com eficiência duvidosa.
Elas estão no arquivo 'src/mockFunctions.js'.
Crie mock functions para cada uma das operações de modo que os cálculos sejam feitos corretamente,
não como estão sendo feitos no arquivo original.
A idéia é que os novos testes sobrescrevam os testes
importados apenas na suite de testes abaixo.

Importante! A correção de código via mock functions não é uma aplicação usual.
O foco aqui é a utilização de mock functions.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('verifica as funções e os mocks', () => {
  // Crie suas mock functions aqui
  let add2 = jest.fn();
  add2.mockImplementation((a,b)=> a+b);
  let subtract2 = jest.fn();
  subtract2.mockImplementation((a,b)=> a-b);
  let multiply2 = jest.fn();
  multiply2.mockImplementation((a,b)=> a*b);
  let divide2 = jest.fn();
  divide2.mockImplementation((a,b)=> a/b);
  let power2 = jest.fn();
  power2.mockImplementation((a,b)=> Math.pow(a,b));
  let factorial2 = jest.fn();
  factorial2.mockImplementation((a)=> {
  let resultado = 1;
    for(var count=1 ; count<=a ; count++) {
    resultado *= count;
    }
    return resultado;
  });
  
  test('testa função add', () => {
    expect(add2(1, 2)).toEqual(3);
    expect(add2(8, 37)).toEqual(45);
    expect(add2(-11, 25)).toEqual(14);
    expect(add2(13, -188)).toEqual(-175);
    expect(add2(7, 26)).toEqual(33);
  });
  
  test('testa função subtract', () => {
    expect(subtract2(899, 35)).toEqual(864);
    expect(subtract2(-17, 333)).toEqual(-350);
    expect(subtract2(45, 97)).toEqual(-52);
    expect(subtract2(23, -108)).toEqual(131);
    expect(subtract2(-133, -29)).toEqual(-104);
  });
  
  test('testa função multiply', () => {
    expect(multiply2(1, 2)).toEqual(2);
    expect(multiply2(0, 5)).toEqual(0);
    expect(multiply2(-4, 9)).toEqual(-36);
    expect(multiply2(-12, -7)).toEqual(84);
    expect(multiply2(19, 23)).toEqual(437);
  });
  
  
  test('testa função divide', () => {
    expect(divide2(169, 13)).toEqual(13);
    expect(divide2(-1900, 5)).toEqual(-380);
    expect(divide2(42, 7)).toEqual(6);
    expect(divide2(729, 243)).toEqual(3);
    expect(divide2(1331, 11)).toEqual(121);
  });
  
  
  test('testa função power', () => {
    expect(power2(10, 2)).toEqual(100);
    expect(power2(2, 10)).toEqual(1024);
    expect(power2(5, 5)).toEqual(3125);
    expect(power2(1, 10)).toEqual(1);
    expect(power2(0, 0)).toEqual(1);
  });
  
  
  test('testa função factorial', () => {
    expect(factorial2(5)).toEqual(120);
    expect(factorial2(10)).toEqual(3628800);
    expect(factorial2(3)).toEqual(6);
    expect(factorial2(8)).toEqual(40320);
    expect(factorial2(2)).toEqual(2);
  });
});
