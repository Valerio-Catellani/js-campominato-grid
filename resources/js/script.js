
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

//& BUTTON
const sendButton = document.getElementById("send-button");
//& OUTPUT
const response = document.getElementById("response");


sendButton.addEventListener('click', function () {
    document.getElementById("wrapper") ? document.getElementById("wrapper").remove() : ""; //rimuovi il wrapper se esiste già
    //controllo sul numero da passare
    const wrapper = document.createElement('div'); //creo il wrapper
    wrapper.setAttribute("id", "wrapper");           // setto i suoi attributi
    wrapper.classList = "d-flex flex-wrap container p-5 my-3";  //e classi
    let difficulty = 100;
    for (let i = 0; i < difficulty; i++) {
        wrapper.appendChild(createCell(i + 1, difficulty))
    }
    response.append(wrapper)
})

//^ FUNCTION: CREATECELL
function createCell(cellIndex, difficulty) {
    let cell = document.createElement('div');
    cell.setAttribute("id", `box-${cellIndex}`);
    cell.className = `box-${difficulty} box d-flex justify-content-center align-items-center border border-2`;
    cell.value = cellIndex;
    cell.innerHTML = cellIndex;
    cell.addEventListener('click', function () {
        cell.classList.toggle("selected")
        console.log(`${cell.value}`);
    });
    return cell
}
//& BUTTONS
//& dropdown
const difficultyMenu = document.getElementById("drop-down-difficulty");

difficultyMenu.addEventListener('click', function () {
    console.log(document.getElementById("difficulty"));
    document.getElementById("difficulty").classList.toggle("d-none")
})

document.querySelectorAll("#difficulty li").forEach(element => {
    element.addEventListener('click', function () {
        difficulty = element.id === "easy" ? 100 : element.id === "normal" ? 81 : 49;
        difficultyMenu.innerHTML = element.innerHTML;
        document.getElementById("difficulty").classList.toggle("d-none")
    })
})



