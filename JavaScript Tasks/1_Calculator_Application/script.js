// Functions to clear the output box
/**
 * The function "clearScreen" removes all the characters from the text content of the result box
 * with the id "result".
 */
const clearScreen = () => {
  document.getElementById("result").value = "";
};

/**
 * The function "clearLastChar" removes the last character from the text content of the result box
 * with the id "result".
 */
const clearLastChar = () => {
  document.getElementById("result").value = document
    .getElementById("result")
    .value.slice(0, -1);
};

// Functions to display the entered value

/**
 * The function "display" appends a given value to the inner text of an HTML element with the id
 * "result".
 * @param value - The value parameter is the value that you want to display. It can be a
 * character (operator) or a number.
 */
const display = (value) => {
  document.getElementById("result").value += value;
};

/**
 * The function `signed` toggles the sign of a number displayed in the result box with the id
 * "result".
 */
const signed = () => {
  let p = document.getElementById("result").value;

  p[0] === "-"
    ? (document.getElementById("result").value = p.slice(1)) // issue here
    : (document.getElementById("result").value = "-" + p);
};

/**
 * The function calculates the result of an expression displayed in the result box
 * and handles error cases.
 */
const calculate = () => {
  let p = document.getElementById("result").value;
  if (p[0] === "*" || p[0] === "/" || p[0] === "%") {
    document.getElementById("result").value === "ERROR";
    setTimeout(clearScreen, 1000);
  }
  let q = eval(p);
  document.getElementById("result").value = q;

  if (q == "Infinity") {
    console.log(q);
    setTimeout(clearScreen, 1000);
  }
};

// Detecting Keyboard Presses
/* The code snippet `document.addEventListener("keydown", (e) => { ... })` is adding an event listener
to the `keydown` event of the `document` object. This event listener is triggered whenever a key is
pressed on the keyboard. */
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (isOperatorKey(key)) {
    display(key);
  } else if (isCalculateKey(key)) {
    calculate();
  } else if (isClearLastCharKey(key)) {
    clearLastChar();
  } else if (isClearScreenKey(key)) {
    clearScreen();
  } else if (key === "`") {
    signed();
  }
  resultBoxChange();
});

/**
 * The below code defines four functions in JavaScript to check if a given key is an operator key, a
 * calculate key, a clear last character key, or a clear screen key.
 * @param key - The `key` parameter represents the key that was pressed on the keyboard.
 * @returns The code is returning a boolean value indicating whether the given key is an operator key,
 * a calculate key, a clear last character key, or a clear screen key.
 */
const isOperatorKey = (key) => {
  return (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "%" ||
    key === "."
  );
};

const isCalculateKey = (key) => {
  return key === "=" || key === "Enter";
};

const isClearLastCharKey = (key) => {
  return key === "Backspace";
};

const isClearScreenKey = (key) => {
  return key === "Escape" || key === "C" || key === "c";
};

/**
 * The `headerRename` function swaps between the headings according to the screen height of the system
 */
const headerRename = () => {
  if (window.innerHeight <= 896 && window.innerWidth <= 768) {
    document.querySelectorAll(".header")[0].innerHTML = "Calculator";
  } else {
    document.querySelectorAll(".header")[0].innerHTML =
      "Calculator Application";
  }
};

/**
 * `window.onresize` triggers continously to check the change in size of the window screen
 * and invokes the `headerRename` function to manage responsiveness
 */
window.onresize = headerRename;

/**
 * this function is to handle the font size changes in the result box according to the length of the input
 */
const resultBoxChange = () => {
  const result = document.getElementById("result");
  const length = result.value.length;

  switch (true) {
    case length > 124:
      result.style.height = "72px";
      document.getElementById("result").style.overflow = "auto";
      break;
    case length > 40:
      result.style.fontSize = "15px";
      result.style.height = "48px";
      break;
    case length > 29:
      result.style.fontSize = "25px";
      result.style.height = "48px";
      break;
    default:
      result.style.fontSize = "36px";
      result.style.height = "48px";
      break;
  }
};
