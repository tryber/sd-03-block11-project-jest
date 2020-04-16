// const adventure = require('../src/setupTeardown');
/*
Num universo não tão distante, um grupo de aventureiros da Trybe enfrentam uma série de testes.
O grupo parte em direção ao sucesso, mas,
devido a ameaça de criaturas temíveis, o grupo não chegará inteiro ao fim.
Após cada aventura um de nossos aventureiros cairá.
Cada um dos testes abaixo verifica a quantidade de aventureiros após cada iteração.
Sua missão aqui é:

  - Use a função randomAttack do objeto adventure
  que remove um dos aventureiros toda vez que é chamada,
  ela deve funcionar entre cada teste.
  Opcional:
  - Para ficar mais visível, imprima na tela após cada teste o grupo de aventureiros restante.
  - No fim dos testes, imprima uma mensagem com o nome do aventureiro que sobreviveu.

PS: Os codinomes dos aventureiros são reais! Tentem descobrir quem é quem!

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
const specialists = [{ nome: 'Tunico', classe: 'Mestre dos Magos' },
                  { nome: 'Cremoso', classe: 'Cavaleiro Negro' },
                  { nome: 'Gordinho', classe: 'Pirata' },
                  { nome: 'Lobo Solitário', classe: 'Samurai' },
                  { nome: 'Ousado', classe: 'Mago' },
                  { nome: 'Anjo Loiro', classe: 'Clérigo' }];


const randomSpecialistIndex = Math.floor(Math.random() * specialists.length);

describe('quem sobreviveu?', () => {
  // Adicione seu código aqui
  specialists.splice(randomSpecialistIndex, 1);
  test('depois da primeira aventura', () => {
    expect(specialists.length).toBe(5);
  });
  specialists.splice(randomSpecialistIndex, 1);
  test('depois da segunda aventura', () => {
    expect(specialists.length).toBe(4);
  });
  specialists.splice(randomSpecialistIndex, 1);
  test('depois da terceira aventura', () => {
    expect(specialists.length).toBe(3);
  });
  specialists.splice(randomSpecialistIndex, 1);
  test('depois da quarta aventura', () => {
    expect(specialists.length).toBe(2);
  });
  specialists.splice(randomSpecialistIndex, 1);
  test('depois da quinta aventura', () => {
    expect(specialists.length).toBe(1);
  });
});
