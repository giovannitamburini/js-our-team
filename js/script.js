/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede
*/

// PSEUDO CODICE
/*

MILESTONE 0:
- creo i 6 oggetti contenenti ciascuno le informazioni forniteci
- creo un array contenente i 6 oggetti creati

MILESTONE 1:
- stampo in console le informazioni

*/

// SVOLGIMENTO

// MILESTONE 0 ----------------
// - creo i 6 oggetti contenenti ciascuno le informazioni forniteci
let worker1 = {
    name: 'Wayne Barnett',
    position: 'Founder & CEO',
    photo: 'wayne-barnett-founder-ceo.jpg'
};
let worker2 = {
    name: 'Angela Caroll',
    position: 'Chief Editor',
    photo: 'angela-caroll-chief-editor.jpg'
};
let worker3 = {
    name: 'Walter Gordon',
    position: 'Office Manager',
    photo: 'walter-gordon-office-manager.jpg'
};
let worker4 = {
    name: 'Angela Lopez',
    position: 'Social Media Manager',
    photo: 'angela-lopez-social-media-manager.jpg'
};
let worker5 = {
    name: 'Scott Estrada',
    position: 'Developer',
    photo: 'scott-estrada-developer.jpg'
};
let worker6 = {
    name: 'Barbara Ramos',
    position: 'Graphic Designer',
    photo: 'barbara-ramos-graphic-designer.jpg'
};

// - creo un array contenente i 6 oggetti creati
let workers = [ worker1, worker2, worker3, worker4, worker5, worker6 ];

// MILESTONE 1 ----------------