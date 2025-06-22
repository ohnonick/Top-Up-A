/*
[CS491] Top-Up A
Nicky Victoriano | 21 June 2025
*/

// CSS Stylesheet
const stylesheet = document.createElement('style');
stylesheet.textContent = `
  .red {
    font-weight: bold;
    color: red;
  }
  button {
    background-color: white;
    color: black;
  }
  button:hover {
    background-color: dimgrey;
    color: white;
  }
`;
document.head.appendChild(stylesheet);

// Hello
const helloText = document.createElement('p');
helloText.classList.add('red');
helloText.textContent = 'Hello ';

// [Professor]
const professorButton = document.createElement('button');
professorButton.textContent = 'Professor';
professorButton.onclick = myName;

// Hello [Professor]
helloText.appendChild(professorButton);
document.body.appendChild(helloText);

// This is Nicky!
async function myName(){
  await delay(1);
  alert('This is Nicky!');
}

// Reuseed from Tic-Tac-Toe
function delay(seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}
