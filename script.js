// --- Quiz Data (American English Vowels & Diphthongs) ---
// Note: Only the 'word', 'ipa', and 'correctSymbol' are required for this version.
const rawQuizData = [
    // Monophthongs: Tense/Long Vowels
    { word: "FEEL", ipa: "/f**i**l/", correctSymbol: "i", wrongSymbols: ["ɪ", "eɪ", "æ"] },
    { word: "FOOD", ipa: "/f**u**d/", correctSymbol: "u", wrongSymbols: ["ʊ", "oʊ", "ʌ"] },
    { word: "CAR", ipa: "/k**ɑ**r/", correctSymbol: "ɑ", wrongSymbols: ["æ", "ʌ", "ɔ"] }, 
    { word: "CAT", ipa: "/k**æ**t/", correctSymbol: "æ", wrongSymbols: ["ʌ", "ɑ", "eɪ"] }, 
    { word: "CAUGHT", ipa: "/k**ɔ**t/", correctSymbol: "ɔ", wrongSymbols: ["ɑ", "oʊ", "ʊ"] },

    // Monophthongs: Lax/Short Vowels
    { word: "SIT", ipa: "/s**ɪ**t/", correctSymbol: "ɪ", wrongSymbols: ["i", "eɪ", "æ"] },
    { word: "PUT", ipa: "/p**ʊ**t/", correctSymbol: "ʊ", wrongSymbols: ["u", "oʊ", "ɔ"] },
    { word: "RED", ipa: "/r**ɛ**d/", correctSymbol: "ɛ", wrongSymbols: ["æ", "eɪ", "ɪ"] },
    { word: "SUN", ipa: "/s**ʌ**n/", correctSymbol: "ʌ", wrongSymbols: ["ɑ", "ə", "oʊ"] }, 
    { word: "ABOUT", ipa: "/**ə**bɑʊt/", correctSymbol: "ə", wrongSymbols: ["ʌ", "oʊ", "ɪ"] }, 
    { word: "BIRD", ipa: "/b**ɝ**d/", correctSymbol: "ɝ", wrongSymbols: ["ə", "ʌ", "ɪə"] },
    
    // Diphthongs and Vowel+R
    { word: "HIGH", ipa: "/h**aɪ**/", correctSymbol: "aɪ", wrongSymbols: ["ɪ", "eɪ", "æ"] },
    { word: "DAY", ipa: "/d**eɪ**/", correctSymbol: "eɪ", wrongSymbols: ["i", "aɪ", "ɛ"] },
    { word: "BOY", ipa: "/b**ɔɪ**/", correctSymbol: "ɔɪ", wrongSymbols: ["oʊ", "u", "aɪ"] },
    { word: "GO", ipa: "/g**oʊ**/", correctSymbol: "oʊ", wrongSymbols: ["u", "ɔ", "aʊ"] },
    { word: "NOW", ipa: "/n**aʊ**/", correctSymbol: "aʊ", wrongSymbols: ["oʊ", "ʌ", "ɔ"] },
    { word: "NEAR", ipa: "/n**ɪr**/", correctSymbol: "ɪr", wrongSymbols: ["i", "eɪ", "ɛr"] }, 
    { word: "SQUARE", ipa: "/skw**ɛr**/", correctSymbol: "ɛr", wrongSymbols: ["eɪ", "ɪr", "e"] }, 
    
    // Additional Words for 30 questions
    { word: "GRASS", ipa: "/gr**æ**s/", correctSymbol: "æ", wrongSymbols: ["ʌ", "ɑ", "eɪ"] },
    { word: "FULL", ipa: "/f**ʊ**l/", correctSymbol: "ʊ", wrongSymbols: ["u", "oʊ", "ɔ"] },
    { word: "GREEN", ipa: "/gr**i**n/", correctSymbol: "i", wrongSymbols: ["ɪ", "eɪ", "æ"] },
    { word: "MUD", ipa: "/m**ʌ**d/", correctSymbol: "ʌ", wrongSymbols: ["ɑ", "ə", "oʊ"] },
    { word: "WOMAN", ipa: "/w**ʊ**mən/", correctSymbol: "ʊ", wrongSymbols: ["u", "oʊ", "ɔ"] },
    { word: "WAIT", ipa: "/w**eɪ**t/", correctSymbol: "eɪ", wrongSymbols: ["i", "aɪ", "ɛ"] },
    { word: "VOICE", ipa: "/v**ɔɪ**s/", correctSymbol: "ɔɪ", wrongSymbols: ["oʊ", "u", "aɪ"] },
    { word: "ROUND", ipa: "/r**aʊ**nd/", correctSymbol: "aʊ", wrongSymbols: ["oʊ", "ʌ", "ɔ"] },
    { word: "TURN", ipa: "/t**ɝ**n/", correctSymbol: "ɝ", wrongSymbols: ["ə", "ʌ", "ɪə"] }, 
    { word: "PERMIT", ipa: "/p**ɚ**mɪt/", correctSymbol: "ɚ", wrongSymbols: ["ə", "ʌ", "e"] }, 
    { word: "DRY", ipa: "/dr**aɪ**/", correctSymbol: "aɪ", wrongSymbols: ["ɪ", "eɪ", "æ"] },
    { word: "HATE", ipa: "/h**eɪ**t/", correctSymbol: "eɪ", wrongSymbols: ["i", "aɪ", "ɛ"] },
    { word: "SURE", ipa: "/ʃ**ʊr**/", correctSymbol: "ʊr", wrongSymbols: ["u", "oʊ", "ɔ"] },
];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// --- DOM Elements ---
const wordToGuessEl = document.getElementById('word-to-guess');
const optionsContainer = document.getElementById('options-container');
const currentQEl = document.getElementById('current-q');
const totalQEl = document.getElementById('total-q');
const nextBtn = document.getElementById('next-btn');
const audioBtn = document.getElementById('audio-btn');
const showIpaBtn = document.getElementById('show-ipa-btn');
const ipaTranscriptionEl = document.getElementById('ipa-transcription');
const feedbackTextEl = document.getElementById('feedback-text');
const ipaRevealContainerEl = document.getElementById('ipa-reveal-container');
const quizEl = document.getElementById('quiz');
const resultScreenEl = document.getElementById('result-screen');
const finalScoreEl = document.getElementById('final-score');
const maxScoreEl = document.getElementById('max-score');
const restartBtn = document.getElementById('restart-btn');


// --- Helper Functions ---

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Get the correct answer and three random wrong answers for options
function getQuizOptions(question) {
    const correctSymbol = question.correctSymbol;
    
    // Use the stored wrongSymbols list
    let allSymbols = [correctSymbol, ...question.wrongSymbols];
    
    // Shuffle and ensure only 4 options are used
    shuffleArray(allSymbols);
    return allSymbols.slice(0, 4);
}

// Function to generate and play audio for the word
function speakWord(word) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US'; 
        speechSynthesis.speak(utterance);
    } else {
        // Fallback for browsers without API
        console.warn("Speech Synthesis API not supported.");
    }
}

// --- Quiz Logic ---

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    
    // 1. Update UI
    wordToGuessEl.textContent = currentQuestion.word;
    currentQEl.textContent = currentQuestionIndex + 1;
    totalQEl.textContent = questions.length;
    nextBtn.disabled = true;
    
    // 2. Reset feedback and reveal area
    feedbackTextEl.textContent = '';
    feedbackTextEl.className = '';
    ipaTranscriptionEl.textContent = currentQuestion.ipa;
    ipaRevealContainerEl.classList.add('hidden');
    showIpaBtn.textContent = 'Show Full IPA';
    
    // 3. Clear and display options
    optionsContainer.innerHTML = '';
    const options = getQuizOptions(currentQuestion);
    
    options.forEach(symbol => {
        const button = document.createElement('button');
        button.textContent = symbol;
        button.classList.add('option-btn');
        // Attach click handler for immediate feedback
        button.addEventListener('click', () => handleAnswer(button, symbol, currentQuestion));
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(clickedButton, selectedSymbol, currentQuestion) {
    // Disable all option buttons immediately to prevent multiple clicks
    Array.from(optionsContainer.children).forEach(btn => btn.disabled = true);
    
    const correctSymbol = currentQuestion.correctSymbol;
    
    // 1. Check and give feedback
    if (selectedSymbol === correctSymbol) {
        score++;
        clickedButton.classList.add('correct');
        feedbackTextEl.textContent = 'Correct! Great job.';
        feedbackTextEl.classList.add('correct-feedback');
    } else {
        clickedButton.classList.add('incorrect');
        feedbackTextEl.textContent = 'Incorrect. Try to identify the correct sound for the next one!';
        feedbackTextEl.classList.add('incorrect-feedback');
        
        // Highlight the correct answer
        Array.from(optionsContainer.children).find(btn => btn.textContent === correctSymbol).classList.add('correct');
    }
    
    // 2. Enable Next button
    nextBtn.disabled = false;
    
    // 3. Show the full IPA reveal option
    ipaRevealContainerEl.classList.remove('hidden');
}

function showResults() {
    quizEl.classList.add('hidden');
    resultScreenEl.classList.remove('hidden');
    finalScoreEl.textContent = score;
    maxScoreEl.textContent = questions.length;
}

function nextQuestion() {
    if (nextBtn.disabled) return; 
    
    currentQuestionIndex++;
    
    // Reset buttons and load next question
    optionsContainer.innerHTML = '';
    loadQuestion();
}

function initializeQuiz() {
    // 1. Shuffle the quiz data and slice to ensure 30 questions
    questions = [...rawQuizData];
    shuffleArray(questions);
    if (questions.length > 30) {
        questions = questions.slice(0, 30);
    }

    // 2. Reset state
    currentQuestionIndex = 0;
    score = 0;

    // 3. Show quiz, hide results
    quizEl.classList.remove('hidden');
    resultScreenEl.classList.add('hidden');
    
    // 4. Load first question
    loadQuestion();
}

// --- Event Listeners ---
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', initializeQuiz);
audioBtn.addEventListener('click', () => speakWord(wordToGuessEl.textContent));

showIpaBtn.addEventListener('click', () => {
    // Toggles the visibility of the IPA transcription text
    ipaTranscriptionEl.classList.toggle('hidden');
    if (ipaTranscriptionEl.classList.contains('hidden')) {
        showIpaBtn.textContent = 'Show Full IPA';
    } else {
        showIpaBtn.textContent = 'Hide Full IPA';
    }
});

// --- Start the Quiz ---
initializeQuiz();