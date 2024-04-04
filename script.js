let points = 0; // Players points

let timerOn = false;
let i = 0;

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

function printLogging(choosen, value, status) {
  let list = document.getElementById("logging");
  let item = document.createElement("li");
  item.appendChild(
    document.createTextNode(
      "Você escolheu o número: " +
        value +
        " e o número sorteado foi: " +
        choosen +
        " logo você " +
        status
    )
  );
  list.appendChild(item);
  i++;

  if (i >= 11) {
    i = 0;
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
}

function chooseWinner(value) {
  if (timerOn === false){
    return;
  }
  var choosen = Math.floor(Math.random() * 9) + 1;
  timer = -99;
  var numberButton = value;
  var status;
  console.log(choosen);

  if (choosen == value) {
    status = "Ganhou";

    points = points + 1000000;
  } else {
    status = "Perdeu";
    points = 0;
  }

  printLogging(choosen, value, status);
  updateStatus(status, numberButton);
}




function resetColor(){
  for (let i = 1; i <= 9; i++) {
    var button = "b" + i;
    document.getElementById(button).style.backgroundColor = "black";
    changeButtonImage(button, 'img/cat_default.png')

  }
}

let countdown;



async function startTimer() {
  let timer = 10;
  timerOn = true;

  const countdown = setInterval(() => {
    document.getElementById("timer").innerText = timer;
    timer--;

    if (timer < 0) {
      clearInterval(countdown);
      updateStatus("timeout");
      timerOn = false;
    }
  }, 1000);


  // function resetGame() {
  //   clearInterval(countdown);
  //   timerOn = false;
  // }
}



function updateStatus(status, numberButton) {
  resetColor();
  var buttonwin = "b" + parseInt(numberButton)
  console.log(buttonwin);
  if (status == "Ganhou") {
    document.getElementById("resultado").innerText = status;
    document.getElementById(buttonwin).style.backgroundColor = "green";
    changeButtonImage(buttonwin, 'img/cat_right.png')
    document.getElementById("resultado").style.color = "green";

  } else if (status == "Perdeu"){
    document.getElementById("resultado").innerText = status;
    document.getElementById(buttonwin).style.backgroundColor = "red";
    changeButtonImage(buttonwin, 'img/cat_wrong.png')

    document.getElementById("resultado").style.color = "red";
  }
  else {
    document.getElementById("resultado").innerText = "Timeout";
    // document.getElementById(button).style.backgroundColor = "red";
    document.getElementById("resultado").style.color = "red";
  }
}

function changeButtonImage(buttonId, newImagePath) {
  const button = document.getElementById(buttonId);
  const image = button.querySelector('img');
  image.src = newImagePath;
}
