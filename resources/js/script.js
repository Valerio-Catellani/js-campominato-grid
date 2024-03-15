
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
const title = document.getElementById('title');

//& VARIABLES
let difficulty;


sendButton.addEventListener('click', function () {
    document.getElementById("wrapper") ? document.getElementById("wrapper").remove() : ""; //rimuovi il wrapper se esiste già
    title.classList.contains('reduction-done') ? '' : reduction(title, 75, 30);
    const wrapper = document.createElement('div'); //creo il wrapper
    wrapper.setAttribute("id", "wrapper");           // setto i suoi attributi
    wrapper.classList = "d-flex flex-wrap container p-3";  //e classi
    for (let i = 0; i < difficulty; i++) {
        const zone = document.createElement('div');
        zone.setAttribute('id', `zone-${i + 1}`);
        zone.className = `box-${difficulty} box zone is-flipped text-white`;
        //let backCell = createCell(`mistery-${i + 1}`, "?", difficulty); riferimento all'index
        let backCell = createCell(i + 1, "?", difficulty, null);
        backCell.classList.add('back');
        let frontCell = createCell(i + 1, i + 1, difficulty, "selected");
        frontCell.classList.add('front')
        zone.appendChild(backCell);
        zone.appendChild(frontCell)
        zone.addEventListener('click', function () {
            this.classList.remove("is-flipped");
        })
        wrapper.appendChild(zone)
    }
    response.append(wrapper)
})


//^ FUNCTION: CREATECELL
function createCell(cellIndex, content, difficulty, toggleClass) {
    let cell = document.createElement('div');
    //cell.setAttribute("id", `box-${cellIndex}`);
    cell.className = `box-${difficulty} box d-flex justify-content-center align-items-center`;
    cell.value = cellIndex;
    cell.innerHTML = content;
    cell.addEventListener('click', function () {
        cell.classList.toggle(`${toggleClass}`)
        console.log(`${cell.value}`);
    });
    return cell
}

//! -----------------BONUS-----------------------
//& BUTTONS
//& dropdown
const difficultyMenu = document.getElementById("drop-down-difficulty");

difficultyMenu.addEventListener('click', function () {
    document.getElementById("difficulty").classList.toggle("d-none")
})

document.querySelectorAll("#difficulty li").forEach(element => {
    element.addEventListener('click', function () {
        difficulty = element.id === "easy" ? 100 : element.id === "normal" ? 81 : 49;
        difficultyMenu.innerHTML = element.innerHTML;
        document.getElementById("difficulty").classList.toggle("d-none");
        sendButton.disabled = false;
    })
})



//! ---------- MY BONUS ----------------


//& TITLE
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function reduction(element, start, end) {
    while (start > end) {
        await delay(10); // Aspetta 100 millisecondi
        start -= 1; // Decrementa la larghezza
        element.style.width = `${start}%`; // Applica la nuova larghezza
    }
    element.classList.add('reduction-done')
}

//& CARDS



