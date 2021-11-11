// Gir elementene i nav-baren en ny klasse når man trykker på hamburgermenyen
// når man trykker på hamburgermenyen

function hamburger() {
  var x = document.getElementById("navId");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
} 

// Validerer skjemaet
function validate(){
  var fornavn = document.getElementById("fornavn").value;
  var etternavn = document.getElementById("etternavn").value;
  var alder = document.getElementById("alder").value;
  var adresse = document.getElementById("adresse").value;
  var mobil = document.getElementById("mobil").value;
  var error_melding = document.getElementById("error_melding");
  
  error_melding.style.padding = "10px";
  
  var text;
// Sjekker om bruker har gitt gyldig input, dersom det er ugyldig vil variablen
// text gjøres om og varsle om hva som er ugyldig

// Fornavn må skrives med bokstaver og være lengre enn 1 bokstav
  if(!isNaN(fornavn) || fornavn.length < 2){
   text = "Ugyldig fornavn";
   error_melding.innerHTML = text;
   return false;
  }
// Samme med etternavn
  if(!isNaN(etternavn) || etternavn.length < 2){
   text = "Ugyldig etternavn";
   error_melding.innerHTML = text;
   return false;
  }
// Adresse kan inneholde tall og må være lengre enn 3 bokstaver
  if(adresse.length < 4){
   text = "Ugyldig adresse";
   error_melding.innerHTML = text;
   return false;
  }
// Alder må være et tall mellom 18 og 200
  if(isNaN(alder) || alder < 18 || alder > 200){
    text = "Ugyldig alder";
    error_melding.innerHTML = text;
    return false;
  }
// Mobilnummer kan bare inneholde 8 tall
  if(isNaN(mobil) || mobil.length != 8){
    text = "Ugyldig mobilnummer";
    error_melding.innerHTML = text;
    return false;
  }

  alert("Skjema validert!");
  return true;
}

// Bilde-slider på index.html
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Bytter bilde hvert 3sekund 
}
var imgArray = [
    'bilde1.jpg',
    'bilde3.jpg',
    'bilde4.jpg'],
    curIndex = 0;
    imgDuration = 3000;

function slideShow() {
    document.getElementsByClassName('mySlides').className += "fadeOut";
    setTimeout(function() {
        document.getElementsByClassName('mySlides').src = imgArray[curIndex];
        document.getElementsByClassName('mySlides').className = "";
    },1000);
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout(slideShow, imgDuration);
}
slideShow();