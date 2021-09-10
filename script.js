
//toteuta autoclicker ja hahmon vaihto

var points = 0;
var level = 1;
var pointMultiplier = 1;
var autoclickerCount = 0;
var autoMultiplier = 1;
var doubleHinta = 100;
var autoHinta = 10;
var doubleAutoHinta = 500;
console.log(points);

var level2 = false;
var level3 = false;
var level4 = false;
var level5 = false;
var finalLevel = "";






setInterval(function autoclickaus(){ 
    points += 1 * autoclickerCount * autoMultiplier;
    paivitaPisteet();
}, 2000);





function toLevel2(){
    document.body.style.backgroundImage = "url('images/backgrounds/level2.jpg')";
    pointMultiplier = pointMultiplier * 10;
    autoMultiplier = autoMultiplier * 5;
    level2 = true;
    level = 2;
    paivitaKaikki();
}

function toLevel3(){
    document.body.style.backgroundImage = "url('images/backgrounds/level3.jpg')";
    pointMultiplier = pointMultiplier * 10;
    autoMultiplier = autoMultiplier * 5;
    level = 3;
    level3 = true;
}

function toLevel4(){
    document.body.style.backgroundImage = "url('images/backgrounds/level4.jpg')";
    pointMultiplier = pointMultiplier * 10;
    autoMultiplier = autoMultiplier * 5;
    level = 4;
    level4 = true;
}

function toLevel5(){
    document.body.style.backgroundImage = "url('images/backgrounds/level5.jpg')";
    pointMultiplier = pointMultiplier * 10;
    autoMultiplier = autoMultiplier * 5;
    level = 5;
    level5 = true;
}

function paivitaLevel(){
    document.getElementById("level").innerHTML = "Level: " + level + finalLevel;

    if(points >= 1000 && level2 == false){
        toLevel2();
    }

    if(points >= 50000 && level3 == false){
        toLevel3();
    }

    if(points >= 10000000 && level4 == false){
        toLevel4();
    }

    if(points >= 1000000000 && level5 == false){
        toLevel5();
        finalLevel = " (Final level)"
    }
}


function clickaus(){
    points += 1 * pointMultiplier;
    paivitaPisteet();
}

function paivitaPisteet(){
    document.getElementById("points").innerHTML = "Cats:" + Math.trunc(points);
    paivitaLevel();
}

function paivitaMultiplier(){
    document.getElementById("multiplier").innerHTML = "Cats per click: " + pointMultiplier;
}

function paivitaHintaDouble(){
    document.getElementById("double-hinta").innerHTML = "Hinta: " + doubleHinta;
} 

function paivitaHintaAuto(){
    document.getElementById("auto-hinta").innerHTML = "Hinta: " + autoHinta;
}

function paivitaHintaAutoDouble(){
    document.getElementById("2x-auto-hinta").innerHTML = "Hinta: " + doubleAutoHinta;
}

function paivitaAuto(){
    document.getElementById("auto-clicker").innerHTML = "Autoclickers: " + autoclickerCount;
}

function paivitaAutoMulti(){
    document.getElementById("auto-multi").innerHTML = "Cats per autoclick: " + autoMultiplier;
}



function paivitaKaikki(){
    paivitaPisteet();
    paivitaMultiplier();
    paivitaHintaDouble();
    paivitaHintaAuto();
    paivitaHintaAutoDouble();
    paivitaAuto();
    paivitaAutoMulti()
}

function ostaDouble(){
    if(points >= doubleHinta){
        points -= doubleHinta;
        pointMultiplier = pointMultiplier * 2;
        doubleHinta = doubleHinta * 4;
    }
    paivitaPisteet();
    paivitaMultiplier();
    paivitaHintaDouble();
}



function ostaAuto(){
    if(points >= autoHinta){
        points -= autoHinta;
        autoclickerCount += 1;
        autoHinta = autoHinta * 1.3;
        autoHinta = Math.round(autoHinta * 10) / 10
    }
    paivitaPisteet();
    paivitaHintaAuto();
    paivitaAuto();
}


function ostaAutoMulti(){
    if(points >= doubleAutoHinta){
        points -= doubleAutoHinta;
        autoMultiplier += 1;
        doubleAutoHinta = doubleAutoHinta * 5;
        
    }
    paivitaPisteet();
    paivitaHintaAutoDouble();
    paivitaAutoMulti();

}

if(screen.width > 800){
    function onHover(){
        document.getElementById("kauppa").style.opacity = 1;
    }
    
    function noHover(){
        document.getElementById("kauppa").style.opacity = 0.3;
    }
    
    function ylaHover(){
        document.getElementById("ylanakyma").style.opacity = 1;
    }
    
    function ylaNoHover(){
        document.getElementById("ylanakyma").style.opacity = 0.5;
    } 
}



function kauppaHover1(){
 document.getElementById("kauppa-item-1").style.backgroundColor = "#DC143C";
}

function noKauppaHover1(){
    document.getElementById("kauppa-item-1").style.backgroundColor = "rgb(0, 0, 0)";
    
}

function kauppaHover2(){
    document.getElementById("kauppa-item-2").style.backgroundColor = "#DC143C";
   }
   
   function noKauppaHover2(){
     document.getElementById("kauppa-item-2").style.backgroundColor = "rgb(0, 0, 0)";
       
}

function kauppaHover3(){
    document.getElementById("kauppa-item-3").style.backgroundColor = "#DC143C";
}
   
function noKauppaHover3(){
     document.getElementById("kauppa-item-3").style.backgroundColor = "rgb(0, 0, 0)";
       
}