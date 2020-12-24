const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const todo = document.getElementById("todo");

function showTime() {
  let today = new Date();

  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)}`;
  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setBackground() {
  let today = new Date();
  let hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage =
      "linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.8)),url('./images/morning.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 18) {
    document.body.style.backgroundImage =
      "linear-gradient(rgba(0,0,0,.3) ,rgba(0,0,0,.8)),url('./images/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    document.body.style.backgroundImage =
      "linear-gradient(rgba(0,0,0,.3) ,rgba(0,0,0,.8)),url('./images/night.jpg')";
    greeting.textContent = "Good Night";
  }
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "Enter you name";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    // Make sure Enter key
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      // name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

function getTodo() {
  if (localStorage.getItem("todo") === null) {
    todo.textContent = "Today what will you do";
  } else {
    todo.textContent = localStorage.getItem("todo");
  }
}

function setTodo(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("todo", e.target.innerText);
      todo.blur();
    }
  } else {
    localStorage.setItem("todo", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

todo.addEventListener("keypress", setTodo);
todo.addEventListener("blur", setTodo);

// Run Func
showTime();
setBackground();
getName();
getTodo();
