let currentQuestionIndex = 0;
let score = 0;


const questionBlocks = document.querySelectorAll('.question-block');
const totalQuestions = questionBlocks.length;


const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const progressText = document.getElementById('progress');
const feedbackDiv = document.getElementById('feedback');
const scoreText = document.getElementById('score-text');

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', startQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    
    
    const allInputs = document.querySelectorAll('input[type="radio"]');
    allInputs.forEach(input => {
        input.checked = false;
        input.disabled = false;
    });

    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    showCurrentQuestion();
}

function showCurrentQuestion() {
    questionBlocks.forEach((block, index) => {
        if (index === currentQuestionIndex) {
            block.classList.remove('hidden');
            const radios = block.querySelectorAll('input[type="radio"]');
            radios.forEach(radio => radio.addEventListener('change', checkAnswer, { once: true }));
        } else {
            block.classList.add('hidden');
        }
    });

    progressText.innerText = `Domanda ${currentQuestionIndex + 1} di ${totalQuestions}`;
    
    
    feedbackDiv.classList.add('hidden');
    feedbackDiv.className = "feedback hidden";
    nextBtn.disabled = true;
}

function checkAnswer(event) {
    const currentBlock = questionBlocks[currentQuestionIndex];
    const correctAnswerIndex = parseInt(currentBlock.getAttribute('data-correct'));
    const selectedAnswerIndex = parseInt(event.target.value);
    
    const radios = currentBlock.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.disabled = true);

    const labels = currentBlock.querySelectorAll('.option');
    const correctText = labels[correctAnswerIndex].innerText.trim();

    if (selectedAnswerIndex === correctAnswerIndex) {
        score++;
        feedbackDiv.innerText = "Corretto! Ottimo lavoro.";
        feedbackDiv.classList.add('correct');
    } else {
        feedbackDiv.innerText = `Sbagliato! La risposta corretta era: ${correctText}`;
        feedbackDiv.classList.add('incorrect');
    }

    feedbackDiv.classList.remove('hidden');
    nextBtn.disabled = false; 
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < totalQuestions) {
        showCurrentQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    scoreText.innerText = `Hai risposto correttamente a ${score} domande su ${totalQuestions}.`;
}