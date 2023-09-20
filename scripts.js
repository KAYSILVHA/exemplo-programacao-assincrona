const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');

// getCityFromZipcode('87711715').then((cidade)=>{
//   console.log(cidade)
// }).catch((erro)=>{
//   console.log(erro)
// });


// const cidade = getCityFromZipcode('87711715');

// cidade.then((cidade) => {
//   console.log(cidade)
// });

// cidade.catch((erro) => {
//   console.log(erro.message)
// });



// getCityFromZipcode('87711715').then((cidade)=>{
//   console.log(cidade);
//   getStateFromZipcode('87711715').then((uf)=>{
//     console.log(uf);
//   })
// }).catch((erro)=>{
//   console.log(erro);
// });


//funcao anonima, ela sempre vai executar de imediato
//async await
// (async function () {
//   const cidade = await getCityFromZipcode('87711715');
//   console.log(cidade)

//   const estado = await getStateFromZipcode('87711715');
//   console.log(estado)
// })();

//padrao normal
async function teste(){
  return '123'
}

console.log(teste());


//arow function

const teste = async () =>{

};

console.log(teste());