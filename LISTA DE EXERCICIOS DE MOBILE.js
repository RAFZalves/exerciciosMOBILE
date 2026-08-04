/*
let celcius = 10
let faren = celcius * 1.8 + 32

console.log (`A tempertura em fahrenheit: ${faren}`);



let base = 10
let altura = 12
area = base * altura
perimetro = 2 * base + altura

console.log (`A area do retangulo é  ${area}`);
console.log (`O perimetro do retangulo é  ${perimetro}`);


let valor = 5;
let tipo = valor % 2 == 0 ? "par" : "impar";
 console.log (`O Valor é ${tipo}`);
 
 let linha = "";

for (let i = 1; i <= 7; i++) {
  linha += "#";
  console.log("A divisão é : "(linha);
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("A divisão é : "("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("A divisão é : "("Fizz");
  } else if (i % 5 === 0) {
    console.log("A divisão é : "("Buzz");
  } else console.log (i); 
  }
    
    
   

let numero = 10
for (let i = numero; i >= 1; i--) {
  console.log("A divisão é : "(i);
}

console.log("A divisão é : "("Fim!");



let soma = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    soma += i;
  }
}

console.log("A divisão é : "("A soma dos números pares de 1 a 50 é:", soma);


const min = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};

console.log("A divisão é : "("O menor número é: ",(min(8, 3)));




function contarLetra(texto, letra) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contador++;
        }
    }

    return contador;
}

console.log("A divisão é : "(contarLetra("sabado", "o"));




function podeVotar(idade) {
    return idade >= 16;
}

let idade = 15;

if (podeVotar(idade)) {
    console.log("A divisão é : "("Pode votar.");
} else {
    console.log("A divisão é : "("Não pode votar.");
}



function calcular(a, b, operacao) {
    return operacao(a, b);
}

console.log("A soma é : ",(calcular(10, 5, (a, b) => a + b)));
console.log("A subtração é : ",(calcular(10, 5, (a, b) => a - b)));
console.log("A multiplicação é : ",(calcular(10, 5, (a, b) => a * b)));
console.log("A divisão é : ",(calcular(10, 5, (a, b) => a / b)));




function range(inicio, fim) {
    let numeros = [];

    for (let i = inicio; i <= fim; i++) {
        numeros.push(i);
    }

    return numeros;
}

function soma(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }

    return total;
}

console.log(range(1, 10));
console.log(soma(range(1, 10)));




function reverter(array) {
    let novoArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i]);
    }

    return novoArray;
}

console.log(reverter([1, 2, 3, 4, 5]));

*/

const produtos = [
    { id: 1, nome: "Teclado", preco: 120 },
    { id: 2, nome: "Mouse", preco: 80 },
    { id: 3, nome: "Monitor", preco: 900 },
    { id: 4, nome: "Fone", preco: 150 },
    { id: 5, nome: "Pendrive", preco: 60 }
];

// a)
const produto = produtos.find(p => p.id === 3);
console.log(produto);

// b)
const caros = produtos.filter(p => p.preco > 100);
console.log(caros);

// c)
const nomes = produtos.map(p => p.nome);
console.log(nomes);

// d)
produtos.forEach(p => {
    console.log(`${p.id} - ${p.nome} - R$ ${p.preco}`);
});