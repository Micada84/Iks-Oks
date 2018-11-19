function pocniIgru() {
    for(var i=1;i <=9 ;i++){
        obrisiSve(i);
        
    }
    document.turn = 'X';
    document.winer = null;
    porukaKojuSaljeIgrica(document.turn + ' igra prvi');
}


function sledeciPotez(polje) {
    if(document.winer != null){
        porukaKojuSaljeIgrica(document.turn  + " je već pobedio")  
    }

    else if (polje.innerText == '') {
        polje.innerText = document.turn;
        
        promeniZnak();
    }
    else {
        porukaKojuSaljeIgrica('Izaberite drugo polje');
    }
}
function promeniZnak() {
    if(proveriKoJePobedio(document.turn)){
        porukaKojuSaljeIgrica("Čestitamo "+document.turn+ " je pobedio!!!")
        document.winer = document.turn;
    }
    
   else if (document.turn == 'X') {
        document.turn = 'O';
        porukaKojuSaljeIgrica('Sledeći igra ' + document.turn)
   }  
    else {
        document.turn = 'X';
        porukaKojuSaljeIgrica('Sledeći igra ' + document.turn)
        }
    
}


function porukaKojuSaljeIgrica(msg) {
    document.getElementById("poruka").innerHTML = msg;
}
function proveraReda(a, b, c, potez) {
    var rezultat = false;
    if (staJeUPolju(a) == potez && staJeUPolju(b) == potez && staJeUPolju(c) == potez) {
        rezultat = true;
    }
    return rezultat;

}
function staJeUPolju(number) {
    return document.getElementById("a" + number).innerText;
}
function proveriKoJePobedio(potez) {
    var rezultat = false;
    if (proveraReda(1, 2, 3, potez) ||
        proveraReda(4, 5, 6, potez) ||
        proveraReda(7, 8, 9, potez) ||
        proveraReda(1, 4, 7, potez) ||
        proveraReda(2, 5, 8, potez) ||
        proveraReda(3, 6, 9, potez) ||
        proveraReda(1, 5, 9, potez) ||
        proveraReda(3, 5, 7, potez)) {
        rezultat = true;

    }
    return rezultat;

}
function obrisiSve(number){
document.getElementById("a" + number).innerText = "";
    
}




