function changetext() {

var element = document.getElementById("fickle");
var text1 = element.innerText;

console.log(text1)

    if (text1 == "We love brains more than you do.\n" + "I like to eat food too.") {
        document.getElementById("fickle").innerHTML ="Thing Happened! hoho";
    } else {
        document.getElementById("fickle").innerHTML ="We love brains more than you do." + "I like to eat food too.";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function titlechangeto(plusses, msg, val) {

let animstep = val;

    document.getElementById("titleanim").innerHTML= msg;
    if (plusses == "up") {
        animstep ++;
    }
    else if (plusses == "down") {
        animstep = 1;
    }
    await sleep(1000);
    return animstep;
}
   
function keypress() {
    
        document.addEventListener('keydown', function(event) {
        let keypressed = event.key
        console.log("Key: " + keypressed)
        });
    
}

// for no repeat texts, try starting from zero and using modulos, adding 1-6 to var each time.

async function titleanim() {

let animstep = 1;
let timewait = 1000;
console.log(animstep)
    
    while (true) {

        switch (animstep) {
            case 1:
                document.getElementById("titleanim").innerHTML="Articles";
                animstep++;
                await sleep(timewait);
                break;
            case 2:
                document.getElementById("titleanim").innerHTML="Coolstuffs";
                animstep++;
                await sleep(timewait);
                break;
            case 3:
                document.getElementById("titleanim").innerHTML="The World";
                animstep++;
                await sleep(timewait);
                break;
            case 4:
                document.getElementById("titleanim").innerHTML="Mr Pea";
                animstep++;
                await sleep(timewait);
                break;
            case 5:
                document.getElementById("titleanim").innerHTML="Our " + Math.floor(Math.random() * 10 + 1) + " Texts";
                animstep++;
                await sleep(timewait);
                break;
            case 6:
                document.getElementById("titleanim").innerHTML="Wisdom";
                animstep++;
                await sleep(timewait);
                break;
            case 7:
                document.getElementById("titleanim").innerHTML="DIY";
                animstep++;
                await sleep(timewait);
                break;
            case 8:
                document.getElementById("titleanim").innerHTML="Gold";
                animstep=1;
                await sleep(timewait);
                break;
        }
        console.log(animstep)
    }
}