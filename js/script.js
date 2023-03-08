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
-----------------------------------------------------------------
*/

// PSEUDO CODICE
/*
MILESTONE 0:
- creo i 6 oggetti contenenti ciascuno le informazioni forniteci
- creo un array contenente i 6 oggetti creati

MILESTONE 1:
- stampo in console le informazioni singole contenute all'interno di ogni oggetto (creo una funzione adempia a tale scopo)
- creo una funzione che adempia allo scopo sopracitato
- richiamo la funzione

MILESTONE 2
- stampo nel Dom le informazioni singole contenute all'interno di ogni singolo oggetto
- creo una funzione che adempia allo scopo sopracitato
- richiamo la funzione

BONUS 1
- devo creare nel Dom un immagine per ogni worker, in cui il link dell'immagine coincide con il valore relativo alla key 'photo'
- creo una funzione che adempia allo scopo sopracitato
- richiamo la funzione

BONUS 2
- devo creare nel Dom una scheda, contenente le informazioi del singolo lavoratore, per ogni worker
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

// - richiamo l'elemento dal Dom in cui appenderò i dati dei singoli worker
let containerElement = document.getElementById('container');

// - richiamo l'elemento dal Dom in cui appenderò le immagini dei singoli worker
let containerImagesElement = document.getElementById('container-images');

// - richiamo l'elemento dal Dom in cui appenderò le card dei singoli worker
let containerCardElement = document.getElementById('container-card');

// - modifico lo stile del container in cui appenderò le cards
containerCardElement.style.display = 'flex';
containerCardElement.style.flexWrap = 'wrap';
containerCardElement.style.width = '90%';
containerCardElement.style.gap = '20px';


// MILESTONE 1 ----------------
// - stampo in console le informazioni singole contenute all'interno di ogni oggetto
// - richiamo la funzione che adempie allo scopo sopracitato
printWorker(workers);

// MILESTONE 2 ----------------
// - stampo nel Dom le informazioni singole contenute all'interno di ogni singolo oggetto
// - richiamo la funzione che adempie allo scopo sopracitato
printDomWorker(workers, containerElement);

// BONUS 1 -----------------
// - devo creare nel Dom un immagine per ogni worker, in cui il link dell'immagine coincide con il valore relativo alla key 'photo'
// - richiamo la funzione generatrice di immagini 
printImageWorker(workers, containerImagesElement);

// BONUS 2 ----------------
creatorCard(workers, containerCardElement);





// FUNCTIONS -----------------

// FUNCTION MILESTONE 1
// - stampo in console le informazioni singole contenute all'interno di ogni oggetto
function printWorker (array) {

    for (i = 0; i < array.length; i++) {

        console.log('WORKER ' + (i + 1) + '--------');

        console.log(array[i].name);
        console.log(array[i].position);
        console.log(array[i].photo)
    }
}

// FUNCTION MILESTONE 2
// - stampo nel Dom le informazioni singole contenute all'interno di ogni singolo oggetto
function printDomWorker (array, domElement) {

    for (i = 0; i < array.length; i++) {

        let newElement = document.createElement('div');
        newElement.innerHTML = 'WORKER' + (i + 1) + ':' + ' NAME: ' + array[i].name + ', POSITION: ' + array[i].position + ', PHOTO: ' + array[i].photo;
        domElement.append(newElement);
    }
}

// FUNCTION BONUS 1
// - devo creare nel Dom un immagine per ogni worker, in cui il link dell'immagine coincide con il valore relativo alla key 'photo'
// - creo una funzione che adempia allo scopo sopracitato
function printImageWorker(array, container) {

    for (i = 0; i < array.length; i++) {

        let imageWorker = document.createElement('img');
        imageWorker.src = '/img/' + array[i].photo;
        imageWorker.style.display = 'block';
        imageWorker.style.width = '100px';
        container.append(imageWorker);
    }
}

// FUNCTION BONUS 2

// - creo una funzione generatrice di card in cui inserirò le proprietà dei workers
function creatorCard (array, containerCard) {

    // - creo un ciclo che mi generi x card, dove x è pari alla lunghezza dell'array workers
    for (i = 0; i < array.length; i++) {

        let cardElement = document.createElement('div');
        cardElement.style.width = 'calc(100% / 3 - (20px / 4 * 3))';
        cardElement.style.minHeight = '200px';
        cardElement.style.display = 'flex';
        cardElement.style.flexDirection = 'column';
        cardElement.style.alignItems = 'center';
        cardElement.style.backgroundColor = 'white';
        containerCard.append(cardElement);

        creatorCardPhoto (array,cardElement);
    }
}

// - creo una funzione che genera un immagine che inserirò nella card
function creatorCardPhoto (array, containerCardInner) {
    
    let cardImageElement = document.createElement('img');
    cardImageElement.src = '/img/' + array[i].photo;
    cardImageElement.style.width = '100%';
    cardImageElement.style.display = 'block';
    cardImageElement.classList.add('card-inside');
    containerCardInner.append(cardImageElement);

    createCardName (array, i, containerCardInner);
    createCardPosition (array, i, containerCardInner);

}

// - creo una funzione che genera un titolo in cui è indicato il nome del worker che inserirò nella card
function createCardName (arrayName, indexName, containerCardName) {

    let cardNameElement = document.createElement('div');
    cardNameElement.innerHTML = arrayName[indexName].name;
    cardNameElement.style.fontWeight = '600'
    cardNameElement.style.fontSize = '1.1em';
    cardNameElement.classList.add('card-inside');
    containerCardName.append(cardNameElement);
}

// - creo una funzione che genera un titolo in cui è indicato il ruolo del worker che inserirò nella card
function createCardPosition (arrayPosition, indexPosition, containerCardPosition) {

    let cardPositionElement = document.createElement('div');
    cardPositionElement.innerHTML = arrayPosition[indexPosition].position;
    cardPositionElement.classList.add('card-inside');
    containerCardPosition.append(cardPositionElement);
}