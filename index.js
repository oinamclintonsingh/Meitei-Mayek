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
            var kok = new Audio("sounds/01_Kok.mp3");
            kok.play();
            break;

        case "s":
            var sam = new Audio("sounds/02_Sam.mp3");
            sam.play();
            break;
        
        case "l":
            var lai = new Audio("sounds/03_Lai.mp3");
            lai.play();
            break;

        case "m":
            var mit = new Audio("sounds/04_Mit.mp3");
            mit.play();
            break;

        case "p":
            var pa = new Audio("sounds/05_Pa.mp3");
            pa.play();
            break;

        case "n":
            var na = new Audio("sounds/06_Na.mp3");
            na.play();
            break;

        case "c":
            var chil = new Audio("sounds/07_Cheen.mp3");
            chil.play();
            break;

        case "t":
            var til = new Audio("sounds/08_Til.mp3");
            til.play();
            break;

        case "kh":
            var khou = new Audio("sounds/09_Khou.mp3");
            khou.play();
            break;

        case "ng":
            var ngou = new Audio("sounds/10_Ngou.mp3");
            ngou.play();
            break;

        case "th":
            var thou = new Audio("sounds/11_Thou.mp3");
            thou.play();
            break;
        case "w":
            var wai = new Audio("sounds/12_Wai.mp3");
            wai.play();
            break;

        case "y":
            var yang = new Audio("sounds/13_Yang.mp3");
            yang.play();
            break;

        case "h":
            var huk = new Audio("sounds/14_Huk.mp3");
            huk.play();
            break;

        case "u":
            var um = new Audio("sounds/15_Un.mp3");
            um.play();
            break;

        case "e":
            var ee = new Audio("sounds/16_E.mp3");
            ee.play();
            break;

        case "ph":
            var pham = new Audio("sounds/17_Pham.mp3");
            pham.play();
            break;
        
        case "a":
            var atiya = new Audio("sounds/18_Atiya.mp3");
            atiya.play();
            break;
            
        default: console.log(buttonInnerHTML);
            break;
    }
}



