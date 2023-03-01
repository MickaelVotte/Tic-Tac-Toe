//on charge les infos utiles
let jeu = document.getElementById('jeu');
let cellElements = document.querySelectorAll('[data-cell]');
let joueur = document.getElementById('joueur');
let joueurScore1 = document.getElementById('joueurScore1');
let joueurScore2 = document.getElementById('joueurScore2');
let matchNuls = document.getElementById('matchNuls');
let recommencer = document.getElementById('recommercer');


//Etat de la partie;
let board = ["", "", "", "", "", "", "", "", ""];
let joueur1 = 'X';
let joueur2 = 'O';
let currentPlayer = joueur1


//condition de victoire
const conditionDeVicotire = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


//l'object once permet de déclencher une seule fois la cellule
cellElements.forEach((e) => {
    e.addEventListener('click', jouerPartie, {once: true})
})


function jouerPartie(e){
    //permet de récupéré la cellule
    e.target.innerHTML = currentPlayer

    //ternaire permettant de changer de joueur
    currentPlayer == joueur1 ? currentPlayer = joueur2 : currentPlayer = joueur1
}




function checkDraw(){
    //déstructuration 
   return [...conditionDeVicotire].every((cell) => {
        return cell.innerHTML == joueur1 || cell.innerHTML == joueur2
   })
    
}
