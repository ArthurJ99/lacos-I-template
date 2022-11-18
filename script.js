
//WHILE

/* let numero = Number(prompt('Insira um número'))

let soma = 0

while(numero !== 0){
    soma = soma + numero
    console.log(soma);
    numero=Number(prompt('Tente outro número'))
} */


//FOR

/* let numero = Number(prompt('Insira um número'))

for(let i=0;i<=numero;i++){
    console.log(i);
}
console.log('Fim do laço for'); */

// FOR com ARRAYS

/* const numeros = [2,4,6,8,10]
for(let indice=0;indice <= numeros.length-1;indice++){
    console.log(`O número do índice ${indice} é ${numeros[indice]}`);
} */

//EXERCICIO
//1
/* let tipoUsuario = prompt('Qual o seu tipo de usuário? \nA- Admnistrador \nB- Usuário comum \nC- Usuário assinante').toUpperCase()

while (tipoUsuario !== "A") {
    console.log('Acesso negado');
    tipoUsuario = prompt('Qual o seu tipo de usuário? \nA- Admnistrador \nB- Usuário comum \nC- Usuário assinante').toUpperCase()
}
console.log('Boas vindas, admin!'); */

//2

/* let numUsuario = Number(prompt('Insira um número'))

for(let numero = 1;numero <=10; numero++){
    console.log(`${numUsuario}x${numero}=${numUsuario*numero}`);
} */

//3

/* const bichos =["gato","cachorro","passaro","roedores"]
for(i=0;i<bichos.length - 1;i++){
    console.log(bichos[i].toUpperCase());
} */