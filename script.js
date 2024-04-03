const logList = []; // Array of the results

const points = 0; // Players points

let timer = 30;

function printLogging(choosen, value, status) {
  // document.add
  console.log(
    "Você escolheu o número: " +
      value +
      " e o número sorteado foi: " +
      choosen +
      " logo você " +
      status
  );

  // Add the result of the round
  logList.push(status);
}

function chooseWinner(value) {
  var choosen = Math.floor(Math.random() * 9) + 1;
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
}

function gameTimer() {
    document.getElementById('timer').innerText = timer;
    
    timer--;
    if (timer < 0) {
        clearInterval(interval);
        document.getElementById('timer').innerText = 'Vapo papai!!';
    }

}

let interval = setInterval(gameTimer, 1000);
