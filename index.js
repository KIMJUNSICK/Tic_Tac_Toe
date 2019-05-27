const body = document.querySelector("body");
const table = document.querySelector("table");
const victory = document.querySelector(".ttt__victory");

const line = [];
const container = [];
let turn = "X";
let full = "false";

const handleMark = (whatLine, whatCon) => {
  if (container[whatLine][whatCon].textContent === "") {
    container[whatLine][whatCon].textContent = turn;

    inspectRow(whatLine);
    inspectColumn(whatCon);
    inspectDiagonal1(whatLine, whatCon);
    inspectDiagonal2(whatLine, whatCon);
    handleVictory();
  } else {
    console.log("Nope");
  }
};

const handleClick = event => {
  let whatLine = line.indexOf(event.target.parentNode);

  let whatCon = container[whatLine].indexOf(event.target);

  handleMark(whatLine, whatCon);
};

for (let i = 1; i <= 3; i = i + 1) {
  let tr = document.createElement("tr");
  line.push(tr);
  container.push([]);
  for (let j = 1; j <= 3; j += 1) {
    let td = document.createElement("td");
    container[i - 1].push(td);
    td.addEventListener("click", handleClick);
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
body.appendChild(table);

const inspectRow = whatLine => {
  if (
    container[whatLine][0].textContent === turn &&
    container[whatLine][1].textContent === turn &&
    container[whatLine][2].textContent === turn
  ) {
    full = true;
  }
};

const inspectColumn = whatCon => {
  if (
    container[0][whatCon].textContent === turn &&
    container[1][whatCon].textContent === turn &&
    container[2][whatCon].textContent === turn
  ) {
    full = true;
  }
};

const inspectDiagonal1 = (whatLine, whatCon) => {
  if (whatLine === whatCon) {
    if (
      container[0][0].textContent === turn &&
      container[1][1].textContent === turn &&
      container[2][2].textContent === turn
    ) {
      full = true;
    }
  }
};

const inspectDiagonal2 = (whatLine, whatCon) => {
  if (Math.abs(whatLine - whatCon) === 2) {
    if (
      container[0][2].textContent === turn &&
      container[1][1].textContent === turn &&
      container[2][0].textContent === turn
    ) {
      full = true;
    }
  }
};

const handleTurn = () => {
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
};

const handleVictory = () => {
  if (full === true) {
    victory.innerText = "VICTORY";
  } else {
    handleTurn();
  }
};
