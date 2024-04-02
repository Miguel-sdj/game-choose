
function printLogging(choosen, value, status){
    // document.add
    console.log("Você escolheu o número: " + value + " e o número sorteado foi: " + choosen + " logo você " + status);
}

function chooseWinner(value){
    var choosen = Math.floor(Math.random() * 9) + 1;
    var status
    console.log(choosen)
    if (choosen == value){
        status = "Ganhou"
    } else {
        status = "Perdeu"
    }

    printLogging(choosen, value, status)
}
