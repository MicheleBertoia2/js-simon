// **Descrizione:**
// Visualizzare in pagina 5 numeri casuali (tutti differenti). Da lì parte un timer di 5 secondi.
// Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente(tramite il prompt() o traminte input).
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/*
1. genero un numero N di numeri unici e li salvo in un array
2. li stampo in pagina 
3. creo una funzione che dopo 5 secondi dal click cancella i numeri
4. chiedo di inserire i numeri e li salvo in un array
5. con una funzione verifico che i numeri inseriti corrispondano a quelli generati
6.stampo i risultati diversi
*/

//-------elements--------
const btn              = document.querySelector('.btn');
const output           = document.querySelector('.output');
const numeriDaEstrarre = 5;
const rangeMax         = 10
//---------data-------------------
let numeriEstratti = [];
let risposteDate = [];
let rispostCorrette = [];

//---------------------------------

btn.addEventListener('click',function() {
  reset()
  play()
})

//--------------functions---------

function play() {
  numeriEstratti = generaNumUnico()
  console.log(numeriEstratti);
  //2.
  for (let i = 0; i < numeriEstratti.length; i++) {
    const numEstratto = numeriEstratti[i];
    output.innerHTML += ' ' + numEstratto
  }

  //3.
  setTimeout(reset,5000)
}

//1.
function generaNumUnico() {
  let numeriEstratti = [];
  while (numeriEstratti.length < numeriDaEstrarre) {
    let num = generatoreNumRandom(1,rangeMax)
    if (!numeriEstratti.includes(num)) {
      numeriEstratti.push(num)
    }
  }
  return numeriEstratti
}

function generatoreNumRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function reset() {
  output.innerHTML = ''
}
