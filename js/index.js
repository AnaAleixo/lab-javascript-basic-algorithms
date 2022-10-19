// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops



// Iteração 1: Nomes e Entrada
//*1.1 Crie uma variável hacker1com o nome do driver.
//1.2 Imprimir "The driver's name is XXXX".
//1.3 Crie uma variável hacker2com o nome do navegador.
//1.4 Imprimir "The navigator's name is YYYY".

const hacker1 = "Ana Aleixo"
console.log(`o nome do driver é ${hacker1}`)

const hacker2 = "Ana Aleixo"
console.log(`o nome da navegadora é é ${hacker2}`)


//Iteração 2: condicionais
// 2.1. Dependendo de qual nome é mais longo , imprima:
//- The driver has the longest name, it has XX characters.ou
//- It seems that the navigator has the longest name, it has XX characters.ou
//- Wow, you both have equally long names, XX characters!.

//Resposta
console.log(`o driver Ana Aleixo tem ${hacker1.length} caracteres`);
console.log(`a navegadora Ana Aleixo Lima tem ${hacker2.length} caracteres`);

let a = 10;
if (a < 10) {
  console.log("Hacker1 é o maior!");
} else if (a > 10) {
  console.log("Hacker2 é o maior!");
} else {
  console.log("empatou.");
}

// Iteração 3: Loops
// 3.1 Imprima todos os caracteres do nome do motorista, separados por um espaço e em maiúsculas ou seja"J O H N"

// 3.2 Imprima todos os caracteres do nome do navegador, na ordem inversa. ou seja"nhoJ"

// 3.3 Dependendo da ordem lexicográfica das strings, imprima:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
//-What?! You both have the same name?

const nome = "Ana Aleixo"
console.log(`o nome do driver é ${nome.toUpperCase()}`);

var hacker1S = "ANA ALEIXO";
var resultado = hacker1S.split(" ");
console.log(resultado);


function reverse (str) {
  if (str === "") {
      return "";
  } else {
      return reverse(str.substr(1)) + str.charAt(0);
  }
}
let reverseStringIs = reverse("Aleixo")
console.log(reverseStringIs)