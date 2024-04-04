const logList = []; // Array of the results

let points = 0; // Players points

let timer = 5;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function printLogging(choosen, value, status) {

  let list = document.getElementById("logging");
  let item = document.createElement("li");
  item.appendChild(document.createTextNode("Você escolheu o número: " + value + " e o número sorteado foi: " + choosen + " logo você " + status));
  list.appendChild(item);

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

function startTimer() {

  while (timer >= 0) {
    document.getElementById("timer").innerText = timer;
    timer = timer - 1;
    console.log()
  }

  document.getElementById("timer").innerText = "Vapo papai!!";
  timer = 5;
}
