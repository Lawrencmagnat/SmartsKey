// I created an array of questions 
const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    // Add more questions as needed

    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },

    {
        question: "In which year did World War II end?",
        answers: [
            { text: "1943", correct: false },
            { text: "1945", correct: true },
            { text: "1948", correct: false },
            { text: "1950", correct: false }
        ]
    },

    {
        question: "What is the largest mammal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Polar Bear", correct: false }
        ]
    },

    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Homer", correct: false }
        ]
    },

    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Homer", correct: false }
        ]
    },

    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Perth", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Gold", correct: false },
            { text: "Silver", correct: false },
            { text: "Iron", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the square root of 144?",
        answers: [
            { text: "12", correct: true },
            { text: "10", correct: false },
            { text: "14", correct: false },
            { text: "16", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "South Korea", correct: false },
            { text: "Japan", correct: true },
            { text: "Vietnam", correct: false }
        ]
    },

    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "South Korea", correct: false },
            { text: "Japan", correct: true },
            { text: "Vietnam", correct: false }
        ]
    },
    {
        question: "What is the speed of light?",
        answers: [
            { text: "299,792 kilometers per second", correct: true },
            { text: "150,000 kilometers per second", correct: false },
            { text: "200,000 kilometers per second", correct: false },
            { text: "250,000 kilometers per second", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        answers: [
            { text: "Charles Babbage", correct: true },
            { text: "Alan Turing", correct: false },
            { text: "Ada Lovelace", correct: false },
            { text: "Steve Jobs", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Southern Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Helium", correct: false }
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Stephen Hawking", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Won", correct: false },
            { text: "Yuan", correct: false },
            { text: "Yen", correct: true },
            { text: "Ringgit", correct: false }
        ]
    },
    {
        question: "Which is the smallest prime number?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water in Celsius?",
        answers: [
            { text: "100°C", correct: true },
            { text: "0°C", correct: false },
            { text: "50°C", correct: false },
            { text: "-10°C", correct: false }
        ]
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        answers: [
            { text: "F. Scott Fitzgerald", correct: true },
            { text: "Ernest Hemingway", correct: false },
            { text: "J.K. Rowling", correct: false },
            { text: "George Orwell", correct: false }
        ]
    },

    {
        question: "Which famous scientist developed the three laws of motion?",
        answers: [
            { text: "Isaac Newton", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Albert Einstein", correct: false },
            { text: "Stephen Hawking", correct: false }
        ]
    },

    {
        question: "In what year did the United States declare its independence?",
        answers: [
            { text: "1776", correct: true },
            { text: "1789", correct: false },
            { text: "1801", correct: false },
            { text: "1812", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "J.K. Rowling", correct: false },
            { text: "Harper Lee", correct: true },
            { text: "George Orwell", correct: false },
            { text: "F. Scott Fitzgerald", correct: false }
        ]
    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            { text: "Sahara Desert", correct: true },
            { text: "Arctic Desert", correct: false },
            { text: "Gobi Desert", correct: false },
            { text: "Antarctic Desert", correct: false }
        ]
    },
    {
        question: "Who painted 'Starry Night'?",
        answers: [
            { text: "Claude Monet", correct: false },
            { text: "Vincent van Gogh", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: false }
        ]
    },
    {
        question: "Which programming language was created by James Gosling and Mike Sheridan?",
        answers: [
            { text: "Python", correct: false },
            { text: "Java", correct: true },
            { text: "C++", correct: false },
            { text: "Ruby", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false }
        ]
    },
    {
        question: "Who wrote 'The Odyssey'?",
        answers: [
            { text: "Homer", correct: true },
            { text: "Virgil", correct: false },
            { text: "Sophocles", correct: false },
            { text: "Aristotle", correct: false }
        ]
    },
    {
        question: "What is the largest moon in our solar system?",
        answers: [
            { text: "Europa", correct: false },
            { text: "Ganymede", correct: true },
            { text: "Titan", correct: false },
            { text: "Callisto", correct: false }
        ]
    },
    {
        question: "Which country is known as the 'Land of the Midnight Sun'?",
        answers: [
            { text: "Norway", correct: true },
            { text: "Canada", correct: false },
            { text: "Russia", correct: false },
            { text: "Sweden", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "Who wrote '1984'?",
        answers: [
            { text: "Aldous Huxley", correct: false },
            { text: "George Orwell", correct: true },
            { text: "Ray Bradbury", correct: false },
            { text: "H.G. Wells", correct: false }
        ]
    },
    {
        question: "What is the capital of South Korea?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: false },
            { text: "Seoul", correct: true },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'Fe'?",
        answers: [
            { text: "Iron", correct: true },
            { text: "Gold", correct: false },
            { text: "Silver", correct: false },
            { text: "Copper", correct: false }
        ]
    },
    {
        question: "Who discovered penicillin?",
        answers: [
            { text: "Marie Curie", correct: false },
            { text: "Alexander Fleming", correct: true },
            { text: "Louis Pasteur", correct: false },
            { text: "Joseph Lister", correct: false }
        ]
    },
    {
        question: "What is the speed of sound in air?",
        answers: [
            { text: "343 meters per second", correct: true },
            { text: "220 meters per second", correct: false },
            { text: "500 meters per second", correct: false },
            { text: "700 meters per second", correct: false }
        ]
    },
            
    {
        question: "What is the capital of Brazil?",
        answers: [
            { text: "Sao Paulo", correct: false },
            { text: "Rio de Janeiro", correct: false },
            { text: "Brasilia", correct: true },
            { text: "Salvador", correct: false }
        ]
    },


    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false }
        ]
    },

    {
        question: "Who is the President of Nigeria?" ,
        answers: [
            { text: "Sir. Obasanjo", correct: false },
            { text: "Sir. Tinumbu", correct: false },
            { text: "Sir. Tinubu", correct: true },
            { text: "Sir. Goodluck Jonathan", correct: false }
        ]
    }
];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let selectedAnswers = new Array(questions.length).fill(null);

const questionContainer = document.getElementById("question-container");
const answerButtonsContainer = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const timerDisplay = document.getElementById("timer");

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.remove("hide");
    prevButton.classList.add("hide");
    showQuestion(questions[currentQuestionIndex]);
    startTimer(30 * 60); // 30 minutes timer
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    resetAnswerButtons();

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");

        // Check if the answer was previously selected
        if (selectedAnswers[currentQuestionIndex] === index) {
            button.classList.add("btn-selected");
        }

        button.addEventListener("click", () => selectAnswer(answer, button, index));
        answerButtonsContainer.appendChild(button);
    });

    // Disable the "Next" button until an answer is selected
    nextButton.disabled = true;
}

function resetAnswerButtons() {
    while (answerButtonsContainer.firstChild) {
        answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
    }
}

function selectAnswer(answer, selectedButton, index) {
    // Store the selected answer index for the current question
    selectedAnswers[currentQuestionIndex] = index;

    const correct = answer.correct;
    if (!correct) {
        selectedButton.classList.add("btn-incorrect");
    } else {
        score++;
    }

    // Disable buttons after an answer is selected
    const allButtons = document.querySelectorAll(".btn");
    allButtons.forEach(button => {
        button.disabled = true;
    });

    // Highlight the selected answer
    selectedButton.classList.add("btn-selected");

    // Enable the "Next" button after an answer is selected
    nextButton.disabled = false;
    prevButton.classList.remove("hide");
}

function endGame() {
    clearInterval(timer);
    questionContainer.innerText = `Your final score is ${score} out of ${questions.length}. Quiz completed!`;
    nextButton.innerText = "Reset";
}

function startTimer(durationInSeconds) {
    let timerValue = durationInSeconds;
    timer = setInterval(() => {
        const minutes = Math.floor(timerValue / 60);
        const seconds = timerValue % 60;
        timerDisplay.innerText = `Time Left: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (--timerValue < 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function resetQuiz() {
    clearInterval(timer);
    nextButton.innerText = "Next";
    selectedAnswers = new Array(questions.length).fill(null);
    startGame();
}

function nextOrReset() {
    if (nextButton.innerText === "Next") {
        nextQuestion();
    } else {
        resetQuiz();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        endGame();
    } else {
        showQuestion(questions[currentQuestionIndex]);
    }
}

function prevQuestion() {
    currentQuestionIndex--;
    
    // Ensure the current question index stays within bounds
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    showQuestion(questions[currentQuestionIndex]);

    // Enable the "Next" button after going back
    nextButton.disabled = false;
    nextButton.classList.remove("hide");
}


startGame();


// Am finding it difficult to add the prev button, feel free to correct me, Due to time, 
// debugging it will take a lot of time