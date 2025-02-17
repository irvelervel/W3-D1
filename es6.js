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

// SPREAD OPERATOR
// ...
// Lo spread operator è un nuovo operatore introdotto da ES6 che torna utile per effettuare una copia
// delle proprietà di un oggetto

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
