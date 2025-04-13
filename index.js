//RESUELVE LOS EJERCICIOS AQUI
// - [ ] 1.- Dado el array **numbers** cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una 
// función **elevados** que devuelva un array con el cuadrado de cada uno de los elementos.
const numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados(arr) {
  return arr.map(num => Math.pow(num, num));
}
console.log(elevados(numbers));




//******************************************** */
// - [ ] 2.- Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], 
// generar un segundo array que consiga generar de salida el resultado esperado.

const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];

const result2 = foodList.map((food) => {
  if (food === "Pizza") {
    return "Como soy de Italia, amo comer " + food;
  } else if (food === "Ramen") {
    return "Como soy de Japón, amo comer " + food;
  } else if (food === "Paella") {
    return "Como soy de Valencia, amo comer " + food;
  } else if (food === "Entrecot") {
    return "Aunque no como carne, el " + food + " es sabroso";
  }
});

console.log(result2);

/*const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const frases = foodList.map((food, i) => {
  let countries = ["Italia", "Japón", "Valencia", "--"];
  return i != 3
            ? `Como soy de ${countries[i]}, amo comer ${food}`
            : "Aunque no como carne, el Entrecot es sabroso";
});

console.log(frases);*/

//**************************************************** */
// [ ] 3.- Dado el  array **staff**, crear un segundo array que forme frases como
//  en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];
const result3 = staff.map(
  (person) =>
    `${person.name} es ${person.role} y le gusta ${person.hobbies[0]} y ${person.hobbies[1]}`
);
console.log(result3);

//************************************************************** */
// [ ] 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares


const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result4 = numbers2.filter((num) => num % 2).map((elemento) => elemento);
console.log(result4);

//************************************************************** */
// - [ ] 5.- Dado el array foodList2, genera un segundo array result5 que filtre los 
// platos veganos y saque una sentencia como la del ejemplo
// ```
// ['Que rico Tempeh me voy a comer!',
// 'Que rica Tofu burguer me voy a comer!']
// ```


const foodList2 = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];

const veganos = (food) => food.isVeggie;
const result5 = foodList2

  .filter(veganos)
  .map((food) => 
    food.name == "Tempeh"
        ? "Que rico " + food.name + " me voy a comer!" 
        : "Que rica " + food.name + " me voy a comer!");
console.log(result5);

//************************************************************** */
// - [ ] 6.- Dado el array **inventory**, devolver un array con los nombres de los elementos que valgan más de 300 euros.

const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a Cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];
const result6 = inventory
  .filter((precio) => precio.price > 300)
  .map((producto) => producto.name);
console.log(result6);

//************************************************************** */
// [ ] 7.- Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
    'Me',
    'llamo',
    'ken',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];
result8 = sentenceElements.reduce((prev, curr) => prev +' '+ curr ); 
console.log(result8)

//************************************************************** */
// - [ ] 6.- Dado el siguiente array **numeros** [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array
const numeros3=[39, 2, 4, 25, 62]
let result7= numeros3.reduce( (a, b) => a*b)
console.log(result7);

//************************************************************** */
// [ ] 8.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.
const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];

  const totalcodeBooks=(books,category) =>books
  .filter(book=>book.category ===category)
  .reduce((sum,book)=>sum+ book.price,0)
 const total= totalcodeBooks(books,'code')
 console.log(total)
  
