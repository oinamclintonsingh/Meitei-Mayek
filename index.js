var numberOfButton = document.querySelectorAll(".khonjel").length;
for(var i = 0; i<numberOfButton; i++) {

    document.querySelectorAll(".khonjel")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML);
        
    });
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
});

function makeSound(key) {
    switch (key) {
        case "k":
            var kok = new Audio("sounds/Ladies/01Kok.mp3");
            kok.play();
            break;

        case "s":
            var sam = new Audio("sounds/Ladies/02Sam.mp3");
            sam.play();
            break;
        
        case "l":
            var lai = new Audio("sounds/Ladies/03Lai.mp3");
            lai.play();
            break;

        case "m":
            var mit = new Audio("sounds/Ladies/04Mit.mp3");
            mit.play();
            break;

        case "p":
            var pa = new Audio("sounds/Ladies/05Pa.mp3");
            pa.play();
            break;

        case "n":
            var na = new Audio("sounds/Ladies/06Na.mp3");
            na.play();
            break;

        case "c":
            var chil = new Audio("sounds/Ladies/07Chil.mp3");
            chil.play();
            break;

        case "t":
            var til = new Audio("sounds/Ladies/08Til.mp3");
            til.play();
            break;

        case "kh":
            var khou = new Audio("sounds/Ladies/09Khou.mp3");
            khou.play();
            break;

        case "ng":
            var ngou = new Audio("sounds/Ladies/10Ngou.mp3");
            ngou.play();
            break;

        case "th":
            var thou = new Audio("sounds/Ladies/11Thou.mp3");
            thou.play();
            break;
        case "w":
            var wai = new Audio("sounds/Ladies/12Wai.mp3");
            wai.play();
            break;

        case "y":
            var yang = new Audio("sounds/Ladies/13Yang.mp3");
            yang.play();
            break;

        case "h":
            var huk = new Audio("sounds/Ladies/14Huk.mp3");
            huk.play();
            break;

        case "u":
            var um = new Audio("sounds/Ladies/15Un.mp3");
            um.play();
            break;

        case "e":
            var ee = new Audio("sounds/Ladies/16Ee.mp3");
            ee.play();
            break;

        case "ph":
            var pham = new Audio("sounds/Ladies/17Pham.mp3");
            pham.play();
            break;
        
        case "A":
            var atiya = new Audio("sounds/Ladies/18Atiya.mp3");
            atiya.play();
            break;

        case "g":
            var gok = new Audio("sounds/Ladies/19Gok.mp3");
            gok.play();
            break;

        case "jh":
            var jham = new Audio("sounds/Ladies/20Jham.mp3");
            jham.play();
            break;

        case "r":
            var rai = new Audio("sounds/Ladies/21Rai.mp3");
            rai.play();
            break;

        case "b":
            var ba = new Audio("sounds/Ladies/22Ba.mp3");
            ba.play();
            break;

        case "j":
            var jil = new Audio("sounds/Ladies/23Jil.mp3");
            jil.play();
            break;
            
        case "d":
            var dil = new Audio("sounds/Ladies/24Dil.mp3");
            dil.play();
            break;
            
        case "gh":
            var ghou = new Audio("sounds/Ladies/25Ghou.mp3");
            ghou.play();
            break;

        case "dh":
            var dhou = new Audio("sounds/Ladies/26Dhou.mp3");
            dhou.play();
            break;

        case "bh":
            var bham = new Audio("sounds/Ladies/27Bham.mp3");
            bham.play();
            break;
            
        default: console.log(buttonInnerHTML);
            break;
    }
}



