//RESUELVE LOS EJERCICIOS AQUI

const numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados() {
  return numbers.map((num) => Math.pow(num, num));
}
console.log(elevados(numbers));

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

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result4 = numbers2.filter((num) => num % 2).map((elemento) => elemento);
console.log(result4);

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
const result8= sentenceElements.reduce( (prev, curr) => prev +' '+ curr )
console.log(result7)

const numeros=[39, 2, 4, 25, 62]
let result7= numeros.reduce( (a, b) => a*b)
    
console.log(result7);

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

