var listeImages = ["../images/gtaniko1.jpg", "../images/gtaniko2.jpg", "../images/gta4.jpg"];
var positionImage = 0;
var imagePrincipale = document.getElementById("carouselImg");

function allerSuivante() {
    positionImage = positionImage + 1;
    if (positionImage == 3) { positionImage = 0; }
    if (imagePrincipale) { imagePrincipale.src = listeImages[positionImage]; }
}

function allerPrecedente() {
    positionImage = positionImage - 1;
    if (positionImage == -1) { positionImage = 2; }
    if (imagePrincipale) { imagePrincipale.src = listeImages[positionImage]; }
}

var boutonSuivant = document.getElementById("nextBtn");
var boutonPrecedent = document.getElementById("prevBtn");

if (boutonSuivant) { boutonSuivant.onclick = allerSuivante; }
if (boutonPrecedent) { boutonPrecedent.onclick = allerPrecedente; }



function openTab(evt, nomPerso) {
    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(nomPerso).style.display = "block";
    evt.currentTarget.className += " active";
}