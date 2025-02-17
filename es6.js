// NOVITÀ INTRODOTTE DA ES6 (una versione di JS introdotta nel 2015-2016)

// let e const
// il modo MODERNO di dichiarare delle variabili in JS prevede l'utilizzo delle
// keywords "let" e "const", il cui comportamento si distacca notevolmente
// dalla precedente nomenclatura utilizzata che prevedeva il costrutto "var"

// "var" risulta oggi deprecata come keyword perchè dichiarava delle variabili
// con visibilità di FUNZIONE ("function scope")

const myFunction = function () {
  // DO NOT TRY THIS AT HOME
  // ora utilizzo "var" per un esempio
  // ma "VAR IS LAVA!!!"

  // ABOMINIO CHE FUNZIONA SOLAMENTE IN JS
  console.log('VAR', counter)
  var counter = 0

  // QUI È GIUSTO CHE MI DIA ERRORE!
  // perchè alla riga 23 "counter2"
  // non è ancora definita!
  //   console.log('LET', counter2)
  let counter2 = 0

  if (counter === 0) {
    // ENTRO dentro l'if
    var test = 'Stefano'
  }

  // il fatto che qua test sia accessibile, È UN PROBLEMA!
  // perchè "TUTTI" gli altri linguaggi di programmazione che si rispettino
  // creano delle variabili con visibilità di BLOCCO
  console.log('TEST', test)
}

myFunction()

for (let i = 0; i < 10; i++) {
  // qui dentro la i esiste
}

// qui fuori la i non esiste!

console.log(ciao)
var ciao = 'CIAO'

// questo "ciao" è visibili ovunque all'interno di questo file "es6.js" (anche prima
// della riga 46), perchè viene effettuato un processo di "hoisting" (sollevamento)
// esattamente come viene avviene nelle funzioni NON anonime dichiarate con la parola "function"

// NON RIPETERE
function greet() {
  // una funzione dichiarata così si può invocare PRIMA della sua definizione
  // orribile practise che funziona SOLO in JS!
}

// COSÌ INVECE VA BENE
const greet2 = function () {
  // in questo modo greet2 lancia errore se invocata prima della riga 59,
  // com'è giusto che sia!
}

// inoltre "const", sempre introdotto con ES6, permette di creare delle "constant variables",
// ovvero delle variabili "costanti", con la stessa visibilità di blocco di let, ma il cui valore
// non può cambiare nel corso del ciclo vita della variabile: questo può essere molto utile per evitare
// di alterare per sbaglio un valore che NON intendiamo rendere modificabile, oltre che essere preferibile
// in termini di footprint quanto possibile

// !! ATTENZIONE DURANTE LA CREAZIONE DI COPIE DI VARIABILI !!

const obj1 = {
  name: 'Stefano',
  favouriteColor: 'blu',
}

const obj2 = obj1 // LA DIFFERENZA È CHE OBJ1 e OBJ2 SONO OGGETTI!
// la riga sopra NON ha creato una NUOVA VARIABILE! abbiamo semplicemente un nuovo
// modo per accedere allo STESSO oggetto (di oggetto ce n'è uno solo!)

obj2.favouriteColor = 'red'
console.log(obj1.favouriteColor) // ??? 'blue'? NO, è RED

//
let x = 10
let y = x // y prende il valore di 10
// la riga sopra ha creato una NUOVA VARIABILE, SCOLLEGATA DA X

x = 30
console.log('y', y) // ??? 10

// x vale 30, y vale 10

// SPREAD OPERATOR
// ...
// Lo spread operator è un nuovo operatore introdotto da ES6 che torna utile per effettuare una copia
// delle proprietà di un oggetto

// Con lo SPREAD OPERATOR noi riusciamo a creare delle VERE copie di strutture dati complesse!

const object1 = {
  brand: 'Apple',
  model: 'iPhone 6s',
}

// const object2 = object1 <-- NON CREA UNA VERA COPIA
const object2 = {
  ...object1, // <-- tutte le proprietà di object1
}

object2.model = 'iPhone 15 Pro'
// NON HA CAMBIATO IL MODEL DI OBJECT1, sono due oggetti diversi!
console.log(object1.model) // "iPhone 6s"

// ...object1 -> RAPPRESENTA UN "copia-incolla" DI TUTTE LE COPPIE CHIAVE:VALORE DI OBJECT1

const object3 = {
  ...object1,
  color: 'Midnight Black',
}

const fruit1 = {
  color: 'red',
  taste: 'strong',
}

const fruit2 = {
  exotic: true,
  color: 'orange',
}

const fruit3 = {
  ...fruit1,
  ...fruit2,
}

// quante proprietà ha fruit3? tre in tutto, perchè "color" c'è in entrambi gli oggetti e verrà riportata
// una volta sola dentro fruit3; il valore di "color" sarà l'ULTIMO VALORE assegnatole!
// {
//     taste: 'strong',
//     exotic: true,
//     color: 'orange'
// }
console.log('FRUIT3', fruit3)

// ARRAY & SPREAD OPERATOR
const numbers1 = [2, 4, 6, 8, 10]
const numbers2 = numbers1 // QUESTA NON È UNA COPIA DELL'ARRAY NUMBERS
numbers2.pop()
console.log(numbers1.length) // 4, avete accorciato anche numbers1 :(

const num1 = [1, 3, 5, 7, 9]
const num2 = [...num1] // QUESTA È UNA VERA E PROPRIA COPIA
// ...num1 rappresenta TUTTI GLI ELEMENTI DI num1
num2.pop() // rimuovo l'ultimo elemento dell'array num2
console.log(num1.length) // 5 :)

const num3 = [...numbers1, ...num1] // [2, 4, 6, 8, 1, 3, 5, 7, 9]
console.log('9 elementi?', num3)

// REST PARAMETERS
const acceptManyStrings = function (s1, s2, s3, s4, s5, s6, s7, s8, s9, s10) {
  // voglio fare un console.log di tutte le stringhe che ho ricevuto
  console.log(s1)
  console.log(s2)
  console.log(s3)
  console.log(s4)
  console.log(s5)
  console.log(s6)
  console.log(s7)
  console.log(s8)
  console.log(s9)
  console.log(s10)
}

acceptManyStrings('stefano', 'gianmarco', 'topogigio', 'fedez')
acceptManyStrings('giuseppe', 'loretta', 'carloconti', 'alessia', 'ollie')
acceptManyStrings(
  'giuseppe',
  'loretta',
  'carloconti',
  'alessia',
  'ollie',
  'giorgia'
)

// ...ecco una maniera che invece funziona sempre:
const printManyNames = function (...names) {
  // ...names si chiamano "REST PARAMETERS"
  // ora "names" è un ARRAY con TUTTI i parametri dentro!
  // console.logga tutti i parametri
  for (let i = 0; i < names.length; i++) {
    console.log(names[i])
  }
}

printManyNames('stefano', 'gianmarco', 'topogigio', 'fedez')
printManyNames(
  'giuseppe',
  'loretta',
  'carloconti',
  'alessia',
  'ollie',
  'rose',
  'brunorisas'
)

// ...names è un modo per TRASFORMARE una serie di parametri (anche di lunghezza indefinita) in
// un ARRAY, con dentro tutti i parametri!

// DESTRUCTURING di oggetti
const myObj = {
  brand: 'Sennheiser',
  surround: true,
  channels: 2,
}

// const brand = myObj.brand // 'Sennheiser'
// const surround = myObj.surround // true
// const channels = myObj.channels // 2

const { brand, surround, channels } = myObj

const myBrand = myObj.brand

// brand è ora una variabile con valore 'Sennheiser'
// surround è ora una variabile con valore true
// channels è ora una variabile con valore 2

console.log('brand', brand)
console.log('surround', surround)
console.log('channels', channels)

// BACKTICKS ``
// il backtick è un delimitatore di stringhe, come ' e "

const str = `CIAO EPICODE`

const myName = 'STEFANO'
const myAge = 18

const message = 'IO MI CHIAMO ' + myName + ' E HO ' + myAge + ' ANNI'
console.log('message', message)

const message2 = `IO MI CHIAMO ${myName} E HO ${myAge} ANNI`
console.log('message2', message2)
// se la stringa è delimitata con i backticks, potete iniettare delle variabili
// o dei valori con ${nomeVariabile}

// BONUS STAGE: "TEMPLATE LITERALS"
// il backtick permette anche di "spezzare" una stringa su più righe nell'editor
const longMessage = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quasi fuga officia iusto ullam ipsum mollitia qui velit doloremque
    repellat cumque unde dolores a veniam iure quidem sequi,
    quia, eaque debitis.
  `

// ARROW FUNCTIONS (FUNZIONI FRECCIA)
const myFunc1 = function (str1) {
  // aggiungo il numero 10 alla str1
  const result = str1 + '10'
  return result
}

myFunc1('ciao') // "ciao10"

// VERSIONE FRECCIA
const arrowFunc = (str1) => {
  // aggiungo il numero 10 alla str1
  const result = str1 + '10'
  return result
}

// sintassi più snella!
// ...e poi ci sono piccole variazioni nel funzionamento:
// - se la funzione si risolve in una sola riga, non servono le { }

const printAName = (name) => console.log(`Mi chiamo ${name}`)

// - se la funzione si risolve in una sola riga, la arrow function RITORNERÀ quel risultato

const sum = function (n1, n2) {
  console.log(this)
  return n1 + n2
}

const arrowSum = (n1, n2) => {
  console.log(this)
  return n1 + n2
}
// arrowSum riceve due parametri e ne ritorna la somma, il tutto in una sola riga!
// il return è IMPLICITO (senza "return" e senza graffe)

// - unica differenza nel funzionamento: il diverso binding di alcune keywords, in particolare
// la parola "this"

// I NUOVI METODI DEGLI ARRAY INTRODOTTI DA ES6
// metodi che già conosciamo:
const arr = []
arr.push(1) // aggiunge in fondo
arr.pop() // elimina l'ultimo elemento
arr.unshift(0) // aggiunge in cima
arr.shift() // elimina il primo elemento
arr.splice(0, 1) // alla tot posizione elimina tot elementi

// i nuovi metodi si focalizzano sull'ITERAZIONE degli array

const namesArray = ['Pupo', 'Gianni Morandi', 'Elisa', 'Claudio Baglioni']

for (let i = 0; i < namesArray.length; i++) {
  i // da 0 a 3
  namesArray[i] // da 'Pupo' a 'Claudio Baglioni'
}

// i metodi di cui andiamo a parlare ora sono dei FOR "mascherati"

// FOREACH
// forEach itera tutti gli elementi di un array e permette di eseguire le stesse
// operazioni su ognuno di essi
namesArray.forEach((name) => {
  // questo forEach è un ciclo for!
  // quindi, qui dentro, ci finisco 4 volte!
  console.log('DENTRO IL FOREACH', name)
})

for (let i = 0; i < namesArray.length; i++) {
  console.log('DENTRO IL FOR', namesArray[i])
}

const objArray = [
  {
    brand: 'Fiat',
    model: 'Punto',
  },
  {
    brand: 'Volkswagen',
    model: 'Bora',
  },
  {
    brand: 'Toyota',
    model: 'Yaris',
  },
]

objArray.forEach((car, i) => {
  console.log(car.model, i) // 'Punto', 'Bora', 'Yaris'
})

// anche con la struttura forEach è possibile utilizzare la i
// magari per saltare un elemento o per fare cose diverse a seconda dell'indice raggiunto
objArray.forEach((car, i) => {
  if (i > 0) {
    console.log(car.model, i) // 'Bora', 'Yaris'
  }
})

// MAP
// .map() TRASFORMA un array in un altro array!
// la LUNGHEZZA dell'array risultante sarà sempre UGUALE alla lunghezza dell'array di partenza

// trasformiamo l'array di oggetti objArray in un array di SOLO NOMI di PRODUTTORI

const brandsArray = objArray.map((car) => {
  // car è sempre l'oggetto macchina
  return car.brand // stringa
})

console.log('BRANDARRAY', brandsArray)

const lowerCaseArray = ['barbara', 'chiara', 'gianni']
// voglio un nuovo array trasformato tutto in maiuscolo
const upperCaseArray = lowerCaseArray.map((nameString) => {
  return nameString.toUpperCase()
})

console.log(upperCaseArray)

const numbersArray = [23, 54, 99, 134]

const numbersPlus50 = numbersArray.map((num) => {
  return num + 50
})

// PRO VERSION
// const numbersPlus50_2 = numbersArray.map((num) => num + 50)

console.log('numbersPlus50', numbersPlus50)

// FILTER
// .filter() crea un nuovo array di elementi FILTRATI
// ad ogni elemento viene applicata una condizione, e solo se la condizione torna
// TRUE l'elemento in questione farà parte dell'array "FILTRATO"

// filtriamo numbersArray e teniamo solamente i valori maggiori di 100
const above100 = numbersArray.filter((number) => {
  // se voglio far passare solo i >100...
  if (number > 100) {
    return true
  } else {
    return false
  }
})

console.log('above100', above100)

// MAP e FILTER tornano sempre un NUOVO ARRAY!
