const questions = [
    {
        location: "Giza Pyramids, Egypt",
        question: "Solve the puzzle: What is the shape of the base of the Great Pyramid?",
        options: ["Square", "Triangle", "Circle", "Hexagon"],
        answer: 0
    },
    {
        location: "Stonehenge, England",
        question: "What is the primary material used in the construction of Stonehenge?",
        options: ["Granite", "Sandstone", "Limestone", "Bluestone"],
        answer: 3
    },
    {
        location: "Colosseum, Rome",
        question: "What was the Colosseum primarily used for?",
        options: ["Chariot races", "Gladiator contests", "Religious ceremonies", "Royal meetings"],
        answer: 1
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("location").innerText = `Location: ${questionData.location}`;
    document.getElementById("question").innerText = questionData.question;
    const options = document.querySelectorAll("#options button");
    options.forEach((button, index) => {
        button.innerText = questionData.options[index];
    });
    document.getElementById("result").innerText = "";
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer(selectedOption) {
    const questionData = questions[currentQuestionIndex];
    const result = document.getElementById("result");
    if (selectedOption === questionData.answer) {
        result.innerText = "Correct! You've found an artifact.";
    } else {
        result.innerText = "Wrong! Try again.";
    }
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        alert("Congratulations! You've discovered all the artifacts.");
        currentQuestionIndex = 0;
    }
    loadQuestion();
}

window.onload = loadQuestion;
