const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá
const [saudaçao, chamaSaudaçao] = saudacoes
chamaSaudaçao(saudaçao)
// Produza o mesmo resultado acima, porém utilizando array destructuring
