// ATENÇÃO!!! Não edite este arquivo. Altere apenas os arquivos da pasta 'test'.
const answerPhone = answer => new Promise(function (resolve, reject) {
  setTimeout(answer ? resolve('Oi!') : reject('Infelizmente não podemos atender...'), 3000);
});
module.exports = answerPhone;

async function teste() {
  try {
  const teste = await answerPhone(false)
  } catch (error) {
    expect(error).toBe('Infelizmente não podemos atender...')
  }
}

teste();