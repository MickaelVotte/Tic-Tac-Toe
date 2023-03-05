//on charge les elements du DOM
let jeu = document.getElementById('jeu');
let cellElements = [...document.getElementsByClassName('cell')];
//cellElements = Array.from(cellElements)
let joueurScore1 = document.getElementById('joueurScore1');
let joueurScore2 = document.getElementById('joueurScore2');
let matchNuls = document.getElementById('matchNuls');
let recommencer = document.getElementById('recommencer');
let tourJoueur = document.getElementById('tourJoueur');

//Etat de la partie;
let joueur1 = 'X';
let joueur2 = 'O';
let currentPlayer = joueur1
let tableau = ["", "", "", "", "", "", "", "", ""]
let valeurJ1 = 0
let valeurJ2 = 0
let valeurMatchNull = 0

const tourJ = () => `Au tour du joueur ${currentPlayer}`

//condition de victoire
const conditionsDeVictoire = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

tourJoueur.innerHTML = tourJ()

//lancement du jeu
cellElements.forEach((e) => {
    e.addEventListener('click', jouerPartie)


})


function checkWin() {
    // On boucle le tableau de conditionsDeVictoire 
    for (let condition of conditionsDeVictoire) {
        let [a, b, c] = condition
        //On met une condition pour savoir si a,b et c on le meme symbole puis on retourne le tableau si c'est vrai
        if (tableau[a] && (tableau[a] == tableau[b] && tableau[a] == tableau[c])) {
            return [a, b, c]
        }
    }
    //Sinon on retourne false
    return false
}



function jouerPartie(e) {
    const id = e.target.id

    //on vérifie que le tableau ne contient pas d'élèments
    //si c'est le cas le 1er joueur est X

    if (!tableau[id]) {
        tableau[id] = currentPlayer
        e.target.innerHTML = currentPlayer
        if (checkWin() !== false) {
            alert(`${currentPlayer} a gagné`)

            if (currentPlayer == 'X') {
                console.log(currentPlayer);
                valeurJ1++
                joueurScore1.innerHTML = valeurJ1
            } else {
                valeurJ2++
                joueurScore2.innerHTML = valeurJ2
            }
            reset()
        }

        if (checkWin() === false) {
            if (!tableau.includes('')) {
                alert("Match nul !")
                valeurMatchNull++
                matchNuls.innerHTML = valeurMatchNull
            }
            // reset()
        }

        currentPlayer = currentPlayer === joueur1 ? joueur2 : joueur1
        tourJoueur.innerHTML = tourJ()
    }
}


function reset() {
    tableau = ["", "", "", "", "", "", "", "", ""]
    joueur1 = 'X';
    currentPlayer = joueur1
tourJoueur.innerHTML = tourJ()
    cellElements.forEach(cell => {
        cell.innerHTML = ""
    })

}