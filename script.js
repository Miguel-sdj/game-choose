const logList = []; // Array of the results

let points = 0; // Players points

let timer = 5;

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

async function startTimer() {
  document.getElementById("button").disabled = true;
  document.getElementById("timer").innerText = "BO JOGAR????";

  while (timer >= 0) {
    document.getElementById("timer").innerText = timer;
    timer = timer - 1;
    await sleep(1000);
  }

  document.getElementById("timer").innerText = "Vapo papai!!";
  timer = 5;
  document.getElementById("button").disabled = false;
}
