
/*
TODO Consegna
TODO L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
TODO Ogni cella ha un numero progressivo, da 1 a 100.
TODO Ci saranno quindi 10 caselle per ognuna delle 10 righe.
TODO Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
TODO Bonus
TODO Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
TODO con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
TODO con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
TODO con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe 
*/

//& INUPUT
const userInput = document.getElementById("user-input");
//&BUTTON
const sendButton = document.getElementById("send-button");
//&OUTPUT
const response = document.getElementById("response");


sendButton.addEventListener('click', function () {
    //controllo sul numero da passare
    const wrapper = document.createElement('div')
    wrapper.setAttribute("id", "wrapper")
    wrapper.classList = "d-flex flex-wrap container p-5 my-3"
    createCells(100, wrapper);
    response.append(wrapper)
    console.log(wrapper);
})

//^FUNCTION: CREATECELLS
function createCells(numberOfCells, container) {
    for (let i = 0; i < numberOfCells; i++) {
        let cell = document.createElement('div');
        cell.setAttribute("id", `box-${i + 1}`);
        cell.className = `box-${numberOfCells} box d-flex justify-content-center align-items-center border border-2`;
        cell.value = i + 1;
        console.log(cell.value);
        cell.innerHTML = i + 1;
        container.append(cell);
        cell.addEventListener('click', function () {
            cell.classList.toggle("selected")
            console.log(`${cell.value}`);
        })
    }
}


