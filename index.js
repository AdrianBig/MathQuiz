//Varables

let question = document.getElementById("question-element");
let input = document.getElementById("input-number");
// 1-9 random number
let randomNumber1 =  Math.round(Math.random() * 29 + 1);
let randomNumber2 =  Math.round(Math.random() * 29 + 1);


document.querySelector('#submit').addEventListener('click', function(event) {
    event.preventDefault();
  });

function startQuiz() {

    //Generate Answers
    question.innerHTML = randomNumber1 + "+" + randomNumber2;

    if (question == randomNumber1 + randomNumber2) {
        console.log("Noice");
    }
}
