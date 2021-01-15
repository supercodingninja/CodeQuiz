// <=============================================== Declaring Global Variables ==========================================> //
const instructEl = document.getElementById('instruct');
const introBtnEl = document.getElementById('knock');
const redoBtnEl = document.getElementById('redoBtn'); //JUST CALL FUNCTION BEGINQUIZ(); //
const topThemBtnEl = document.getElementById('top'); //JUST CALL FUNCTION BEGINQUIZ(); //
const quizEl = document.getElementById('quiz');
const timerCountdown = document.getElementById('quizTime');
const quizHeaderEl = document.getElementById('quizHeader');
const VerdictEl = document.getElementById('Verdict');
const correctEl = document.getElementById('correct');
const incorrectEl = document.getElementById('incorrect');
const endQuizEl = document.getElementById('endQuiz');
const totalEl = document.getElementById('total');
const signEl = document.getElementById('sign');
const goToScoreboardEl = document.getElementById('goToScoreboard');

const winner =  JSON.parse(localStorage.getItem('winner')) || [ ];

const leadersScoresEl = document.querySelector('#leadersScores');
const usersListEl = document.querySelector('#usersList');
const scoreContainerEl = document.querySelector('#scoreContainer');
const choices = document.querySelectorAll('.choices'); 

// Variables to created to help me render Questions and Options.  //
var QEl = document.getElementById('Q');
var choice1El = document.getElementById('choice1');
var choice2El = document.getElementById('choice2');
var choice3El = document.getElementById('choice3');
var choice4El = document.getElementById('choice4');
var choice5El = document.getElementById('choice5');

// Q & A: this is an array of objects; which the properties are my quiz questions, and various choices (including correct options as their own properties). //
let questions = [
    // Begin objects. //
    {
        Q: "What's an [instrument] 'Fred' plays; and does he like arrays?",

        choice1: "Saxophone, and [no], he doesn't!",
        choice2: "'Fred' thinks all band members are geeks.",
        choice3: "'Fred' doesn't play an instrument: he plays several; and it's a complicated [arr.]",
        choice4: "Accordian, no.",
        choice5: "Susaphone, YES!",

        A: 3,
    },

    {
        Q: "How many instruments can Fred play; and what's his function?",

        choice1: "Most saxophones, baritone, flute; and '++;'!",
        choice2: "Piano, guitar, drums; and 'function(){...};'!",
        choice3: "Anything he puts his mind to; and '=>'.",
        choice4: "6, 'Baby!' Arrow functions.",
        choice5: "3; and does 'Fred' function at all?",

        A: 3,
    },

    {
        Q: "How many 'times++;' has Fred been married?",

        choice1: "'Fred' got married: that's a joke!",
        choice2: "'Fred' is a priest, and not allowed to get married.",
        choice3: "'Fred' lives with his wife in the United States, has a wife in Djibouti, Singapore; and Cairns, Australia (Sydney is debatable, and not yet, proven by Common Wealth law).",
        choice4: "'Fred' has been married twice: his first wife was deported by higher command's orders, while serving in the Marines.",
        choice5: "'Fred' has only been married once (let times = time;), and plans to stay that way (one and done)!",

        A: 5,
    },

    {
        Q: "How does 'Fred' prefer to be <a>addressed</a>?",

        choice1: "Not late for dinner! betterFeed@me.com",
        choice2:"'Fred': hello, the game is named after him!  <a>Keep it simple, LOL!</a>",
        choice3: "'Turbo!' mightyMotto.com",
        choice4: "<a>'Fred' doesn't care, that's why he's a great guy!</a>",
        choice5: "Frederick 'https://www.linkedin.com/in/discoverfrederickthomas/'",

        A: 5,
    },
    
    {
        Q: "What is the nickname for <h1>'Fred'</h1>?",

        choice1: "<h1>Really?!</h1>",
        choice2: "<h1>derF",
        choice3: "Freddy</h1>",
        choice4: "<h1>Destroyer</h1>",
        choice5: "<h2>Fredd</h2>",
        
        A: 1,
    },
    
    {
        Q: "What is Frederick's <em>favorite</em> nickname?",

        choice1: "<EM>Fred</EM>",
        choice2: "<em>Turbo</em>",
        choice3: "<em>Motto</em>",
        choice4: "<e>Frederick, The Great!>",
        choice5: "<e>T-Time!</e>",

        A: 2,
    },

    {
        Q: "What is Frederick's = religion?",

        choice1: "Fred was a devout = muslim, since he served in the wars.  He met his wife in Baharain, while detached to a U. S. Naval base; and was converted to Christianity, when his father-in-law gave him a choice, 'Your religion, or my daughter.'",
        choice2: "Fred believes in = Christianity, Judaism, and Muslim (all from father Abraham).",
        choice3: "`'Frederick's Faith is'` === Christianity.",
        choice4: "Frederick is an !== atheist.",
        choice5: "Frederick is a !== budhist.",

        A: 3,
    },

    {
        Q: "'Fred's' favorite show ___ || ___.",

        choice1: "is Arrow || Season 4.",
        choice2: "is 'Stargate' || 'Alantis.'",
        choice3: "is 'The Mandolorian' || 'Cobra Kai.'",
        choice4: "is 'DudeDad' || 'Power Rangers!'",
        choice5: "is 'DryBar' || 'Comedy.'",

        A: 3,
    },

    {
        Q: "What is 'Fred's' favorite = show?",

        choice1: "'The Mandolorian' = show",
        choice2: "show = `'Star Wars: The Clone Wars'`",
        choice3: "Game of Horns = yes",
        choice4: "You've asked this question = show",
        choice5: "Power Rangers! = show",

        A: 2,
    },

    {
        Q: "How old is Fred = age?",

        choice1: "age = non3 0f your business.",
        choice2: "28 = age",
        choice3: "Who lik3s c8ke, anyway = age",
        choice4: "age = 35",
        choice5: "age = It's r38lly none of your busin3ss.",

        A: 3,
    },

    {
        Q: "'Fred' likes to ___.",

        choice1: "'Fred' != Skydive",
        choice2: "'Fred' == Surf",
        choice3: "'Fred' = Climb Mountains",
        choice4: "'Fred' == Pop balloons by his wife.",
        choice5: "'Fred' = ThrowSnowballs",

        A: 2,
    },

    {
        Q: "Fred' likes to ___.",

        choice1: "'Fred' == Climb Rockwalls",
        choice2: "'Fred' == Fish",
        choice3: "'Fred' != Run",
        choice4: "'Fred' != Swim with dolphins",
        choice5: "'Fred' == Make Yoda impressions",
        
        A: 1,
    },

    {
        Q: "Fred was engaged three times.",

        choice1: "alert( false || true ); // True",
        choice2: "alert( true || true ); // False",
        choice3: "alert( false || false ); // False, he was engaged twice",
        choice4: "alert( false || false ); // This is a personal question, really?!",
        choice5: "alert( true || false ); // He only bought a diamond ring for his wife.",

        A: 5,
    },

    {
        Q: "Fred likes to wear Captain America and Iron Man shirts, while working out.",

        choice1: "alert( true || true ); // True, he likes to where all tough Super Hero shirts, while working out.",
        choice2: "alert( false || false ); // False, Superman shirts before and after workout.",
        choice3: "alert( false || true ); // Are you serious: YES!",
        choice4: "alert( true || true ); // False, he likes Spider-Man.",
        choice5: "alert( false || true ); // False, He likes King Kong.",

        A: 2,
    }
];

// Variables for Scoring Functions and Operations. //
let score = 0;
let quizTakers = [ ];
let highScoresIndex = 0;
let timer = 300;
let timerID;
let qScore;
let count; // Will define in function. //

// These variables are created, in order to help me automatically randomize my array of questions. This will make the quiz more challenging, for those retaking the quiz (for higher score, or for competition with other users on same local machine being use (this is a static page, although I am trying to make a feel of dynamics, as much as possible). //
let randomQ = questions.sort(() => Math.random() - .5);
let QnAIndex = 0;
let qAsked;
let randomIndex = 0;

let userIndex = 0;


// Initial Page Load. //
instructEl.classList.remove('hideElement'); // Page's Indtruction. //
quizEl.classList.add('hideElement'); // Page's Quiz. //
quizHeaderEl.classList.add('hideElement'); // Highest Scores in Device + Timer + User's Score. //
endQuizEl.classList.add('hideElement'); // Page' Score List. //
totalEl.classList.add('hideElement'); // Submit Button. //
redoBtnEl.classList.add('hideElement'); // Redo Button. //
topThemBtnEl.classList.add('hideElement'); // Redo Button (Ego and Rank). //
signEl.classList.add('hideElement'); // Form for user's initials. //


// <=================================== Getting to the Functions' Definitions ===========================================> //
// Function for Timer Countdown. //
function countdown() { 
    timer -- ;
    quizHeaderEl.textContent = 'Timer: ' + timer;

    if (timer <= 0) {
        instructEl.classList.add('hideElement'); // Page's Indtruction. //
      
        endQuizEl.classList.add('hideElement'); // Page' Score List. //

        quizHeaderEl.remove('hideElement'); // Page's Quiz. //
       
        clearInterval(timerID);
        
        console.log(timer);
    };

    console.log(countdown);
};


// Function to render my Questions and Answers. //
function getQnA() {

    VerdictEl.classList.add('hideElement');
    
    let renderQnA = questions[QnAIndex];
    
    QEl.textContent = renderQnA.Q;
    choice1El.textContent = renderQnA.choice1;
    choice2El.textContent = renderQnA.choice2;
    choice3El.textContent = renderQnA.choice3;
    choice4El.textContent = renderQnA.choice4;
    choice5El.textContent = renderQnA.choice5; 
};


// Creating function to go the next question. //
function nextQuestion() {

    let dataNumber =  parseInt(this.getAttribute("data-number"));
      console.log(dataNumber, questions[QnAIndex].A);

      VerdictEl.classList.remove('hideElement');
        if (dataNumber === questions[QnAIndex].A) {
            
            // Rewards for scoring. //
            score += 5;
            timer += 10;              
            correctEl.classList.remove('hideElement');
          
        } 
        
        else {
            
            // Deductions for incorrect answer. //
            score -2;
            timer -= 5;
            incorrectEl.classList.remove('hideElement');
        }
   
    // // Appending the Quiz Taker's Score. DEFINATELY NEED TO TEST. //
    qScore.innerHTML = ('Score: ' + score);
    QnAIndex++;
    questions = questions.sort(()=> Math.random()-0.5);
    timerCountdown.classList.remove('hideElement'); // Timer Only //
    // setTimeout(getQnA, 1750)  
};


// Function to randomize quesions. | This function appears to be working: DON'T TOUCH! //
function newQ(randomQ, randomIndex) {
    
    // console.log(randomQ + "line-224"); | console.log(`${JSON.stringify(randomQ)} line-224`) //

    timerCountdown.classList.remove('hideElement'); // Timer Only //
    
    if (randomIndex >= randomQ.length) { 
        resetTimer(count);

        return;
    };

    let qAsked = randomQ[randomIndex];
    
    QEl.innerText = qAsked.Q;
    
    console.log(newQ);
};


// Function to start my quiz. //
function beginQuiz() {
    instructEl.classList.add('hideElement'); // Page's Indtruction. //
    quizEl.classList.remove('hideElement'); // Page's Quiz. //
    quizHeaderEl.classList.remove('hideElement'); // Highest Scores in Device + Timer + User's Score. //
    timerCountdown.classList.remove('hideElement'); // Timer Only //
    endQuizEl.classList.add('hideElement'); // Page' Score List. //
    totalEl.classList.add('hideElement'); // Submit Button. //
    redoBtnEl.classList.add('hideElement'); // Redo Button. //
    topThemBtnEl.classList.add('hideElement'); // Redo Button (Ego and Rank). //
    signEl.classList.add('hideElement'); // Form for user's initials. //
     
    // Calling my functions. //
    newQ(randomQ, randomIndex);
    getQnA();

    timerID = setInterval(countdown ,1000);

    console.log(beginQuiz);
}; 


// Sign Your Name! //
function johnHancock() {
    if (signEl.value < 1) {
        
        return;

    } else {

        qScore.textContent = score;

        // Maybe... DEFINATELY NEED TO TEST. //
        let scoreSubmittion = { // The user's final score being submitted to scoreboard. //
            user: signEl.value.toUpperCase(),
            
            // The total score is adding var 'score + timer': this is the user's score + the time left. //
            totalScore: score + timer,
            }

        winner.push(scoreSubmittion)
        // Ordering local users (quiz takers on same device). //
        winner.sort( (a,b) => b.totalScore - a.totalScore);

        winner.splice(5);

        localStorage.setItem('winner', JSON.stringify(winner));

        highscoreEl.classList.remove('hideElement');
        endQuizEl.classList.add('hideElement');

        quizTakers.forEach(() => {
            leaders = document.createElement('li');
            leaders.innerText = quizTakers[userIndex].user
            usersListEl.appendChild(leaders);
            userIndex++;
            
            leadersScores = document.createElement('li');
            leadersScores.innerText = quizTakers[highScoresIndex].totalScore;
            leadersScoresEl.appendChild(leadersScores);
            highScoresIndex++;
        });
    };

    console.log(johnHancock);
};


// <============================================ Adding Event Listeners. ================================================> //
// Begin Quiz Button. //
introBtnEl.addEventListener('click', beginQuiz); // Once this button is selected, the quiz will begin. //

// Event Listener for option User chooses. //
for (let i = 0; i < choices.length; i++) {
    
    choices[i].addEventListener('click', nextQuestion);

};

// Redo Quiz Button. //
redoBtnEl.addEventListener('click', beginQuiz);

// Higher Rank and Ego Button. //
topThemBtnEl.addEventListener('click', beginQuiz);

// This event listener will allow the user to store their score and add their initials. //
totalEl.addEventListener('click', johnHancock);

// Ranking Scores. //
goToScoreboardEl.addEventListener('click', () => {
    instructEl.classList.add('hideElement');
    quizEl.classList.add('hideElement'); // I may not need this line of code. //
    endQuizEl.classList.add('hideElement');
    scoreContainerEl.classList.remove('hideElement');

    quizTakers.forEach(() => {
        leaders = document.createElement('li');
        leaders.innerText = quizTakers[userIndex].user
        usersListEl.appendChild(leaders);
        userIndex++;
        
        leadersScores = document.createElement('li');
        leadersScores.innerText = quizTakers[highScoresIndex].totalScore;
        leadersScoresEl.appendChild(leadersScores);
        highScoresIndex++;
    });
});