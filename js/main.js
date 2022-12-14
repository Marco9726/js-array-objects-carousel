//creo array di oggetti letterali che contengono : url dell'immagine, titolo e descrizione
const mainArray = [
    {
        img: '01.webp',
        title: 'Marvel Spiderman Miles Morales',
        descrition: 'Il giovane Miles Morales sta cercando di adattarsi alla nuova realtà mentre, nel ruolo di nuovo Spider-Man, segue i passi del suo mentore.'
    },
    {
        img: '02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        descrition: 'Ratchet & Clank: Rift Apart è un videogioco a piattaforme e sparatutto in terza persona sviluppato da Insomniac Games e pubblicato da Sony Interactive Entertainment per PlayStation 5.'
    },
    {
        img: '03.webp',
        title: 'Fortnite',
        descrition: 'Fortnite è un videogioco sparatutto in terza persona del 2017, sviluppato da People Can Fly e pubblicato da Epic Games per console e PC.'
    },
    {
        img: '04.webp',
        title: ' Stray',
        descrition: 'Stray è un videogioco di tipo avventura dinamica del 2022 sviluppato da BlueTwelve Studio e pubblicato dall Annapurna Interactive per PlayStation 4, PlayStation 5 e Microsoft Windows.'
    },
    {
        img: '05.webp',
        title: 'Marvel Avengers',
        descrition: 'Marvels Avengers è un videogioco action-adventure sviluppato dalla Crystal Dynamics e Eidos Montréal, e pubblicato dalla Square Enix.'
    }
]

//creo un for per ciclare gli oggetti dell'array
for(i=0;i<mainArray.length;i++){
    //creo i div che conterranno le immagini grandi
    const bigImgDiv = document.createElement('div');
    //assegno la classe item(display none) ai div appena creati
    bigImgDiv.classList.add('item');
    //creo l'elemento HTML img
    const tagImg = document.createElement('img');
    //assegno ad una costante il valore degli oggetti
    const game = mainArray[i];
    //assegno ad una costante il valore della proprietà 'img' degli oggetti
    const img = game.img;
    //rintraccio il percorso dell'immagine grazie alla costante appena creata
    tagImg.src =`./img/${img}`;
    //inserisco le img nei div
    bigImgDiv.appendChild(tagImg);
    //inserisco i div nell'HTML 
    document.getElementById('big-img-container').appendChild(bigImgDiv);

    //creo l'elemento HTML h2
    const tagH2 = document.createElement('h2');
    //assegno ad una costante il valora della proprità 'title' degli oggetti
    const title = game.title;
    //inserisco il la stringa di 'title' nell'h2
    tagH2.innerHTML = title;
    //inserisco l'h2 nel div
    bigImgDiv.appendChild(tagH2);

    //creo l'elemento HTML p
    const par = document.createElement('p');
    //assegno ad una costante il valore della proprietà 'descrition' degli oggetti
    const descrition = game.descrition;
    //inserisco la stringa di 'descrition' nel p
    par.innerHTML = descrition;
    // inserisco il p nel div
    bigImgDiv.appendChild(par);

    //////Thumbnails//////

    //creo i div che conterranno le immagini thumbnails
    const thumDiv = document.createElement('div');
    //assegno la classe 'thum-item' ai div appena creati
    thumDiv.classList.add('thum-item');
    //inserisco le img nei div
    thumDiv.innerHTML = `<img src="./img/${img}">`
    //inserisco i div nell'HTML
    document.getElementById('thumbnails').appendChild(thumDiv);

}

//creo due funzione riutilizzabili per aggiungere e rimuovere la classe active
function removeActive (){
    mainImg[active].classList.remove('active');
    thum[active].classList.remove('active');
}

function addActive (){
    mainImg[active].classList.add('active');
    thum[active].classList.add('active');
}
//creo un contatore da assegnare alla variabile Active
let active = 0;
// mi collego ai div nella thumbnails 
const thum = document.getElementsByClassName('thum-item');
//assegno la classe active alla prima immagine delle thumbnails
thum[active].classList.add('active');

for(let i = 0; i<thum.length; i++){
    let thumItem = thum[i];
    thumItem.addEventListener('click', function(){
        removeActive();
        active = i
        addActive();
    })
}
// creo la funzione riutilizzabile per passare alla slide successiva
function goToNextSlide(){
      // elimino la classe active dagll'elemento precedenti
      removeActive();
      //incremento il valore di active 1
      active++
      // se il valore di Active arriva 5, visualizzo la prima immagine
      if (active > mainImg.length - 1){
          active = 0;
      }   
      //assegno la classe active al nuovo elemento dell'array delle immagini
      addActive() ; 
}

//creo lafunzione riutilizzabile per passare alla slide precendete
function goToPrevSlide(){
    // elimino la classe active dagli elemnti precedenti
    removeActive();
    //diminuisco il suo valore di 1
    active--;
    //se il valore di active è minore di 0, visualizzo l'ultima immagine
    if (active < 0){
        active = 4;
    }
    //aggiungo la classe active al nuovo elemento dell'array delle immagini 
    addActive();
}

//mi collego ai div nel big-container
const mainImg = document.getElementsByClassName('item')
//assegno la classe active alla prima immagine
mainImg[active].classList.add('active');

//collego la freccia in giù dell'HTML ad una costante
const next = document.getElementById('next');
// al click della freccia in giù, invoco la funzione per scorrere le slide 
next.addEventListener('click', function(){
    goToNextSlide()  
});

//collego la freccia in su dell'HTML ad una costante
const prev = document.getElementById('prev');
// al click della freccia in su, invoco la funzione per passare alla slide precedente
prev.addEventListener('click', function(){
    goToPrevSlide()
})

// dichiaro una costante alla quale assegno l'intervallo ripetuto ogni 3 secondi della mia funzione 
let myInterval = setInterval(goToNextSlide,3000);

//collego il pulsante play ad una costante
const play = document.getElementById('play');
//collego il pulsante stop ad una costante
const stop = document.getElementById('stop');
// collego il pulsante back ad una costante 
const back = document.getElementById('backward');

let check = false;
// fermo l'autoplay al click di stop con clearInterval 
stop.addEventListener('click', function(){
    if(check == false){
        clearInterval(myInterval);
        check = true;
    }
})
// faccio ripartire l'autoplay al click di Play
play.addEventListener('click', function(){
    if(check == true){
        myInterval = setInterval(goToNextSlide, 3000);
        check = false;
    }
})
//inverto l'autoplay al click di back
back.addEventListener('click', function(){
    if(check == true){
        myInterval = setInterval(goToPrevSlide, 3000);
        check = false;
    }
})
