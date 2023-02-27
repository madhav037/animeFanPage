// slideshow
let index = 0;
slideshow();
function slideshow() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display="none";
    }
    index++;
    if (index > slides.length) {
        index = 1;
    }
    slides[index - 1].style.display = "block";
    setTimeout(slideshow, 2000);
}
// anime sidebar
function sidebar() {
    document.getElementById("SideNav").style.width = "1270px";
    document.getElementById("sidenav").style.marginLeft = "0px";
    document.body.style.backgroundColor = "rgba(0,0,0,1)";
}

function closeNav() {
  document.getElementById("SideNav").style.width = "0";
  document.getElementById("sidenav").style.marginLeft= "0";
  document.body.style.backgroundColor = "black";
}
// naruto sidebar
function shurikenbar() {
    document.getElementById("shurikenNav").style.width = "250px";
    document.getElementById("shurikenrotate").style.display="none"
    document.body.style.backgroundColor = "white";
}

function closeNav1() {
    document.getElementById("shurikenNav").style.width = "0";
    document.getElementById("shurikenrotate").style.display="block"
    document.body.style.backgroundColor = "rgba(255,148,39)";
}
// ONE PIECE SIDEBAR
function onepiecebar() {
    document.getElementById("onepieceNav").style.width = "250px";
    document.getElementById("onepiecerotate").style.display="none"
    document.body.style.backgroundColor = "white";
}

function closeNav2() {
    document.getElementById("onepieceNav").style.width = "0";
    document.getElementById("onepiecerotate").style.display="block"
    document.body.style.backgroundColor = "rgba(255,148,39)";
}
