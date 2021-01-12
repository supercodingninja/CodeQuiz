// I Taking A Vanilla Javascript Approach. //
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

const choices = document.querySelectorAll('.choices');
const leadersScoresEl = document.querySelector('#leadersScores');
const usersListEl = document.querySelector('#usersList');
const scoreContainerEl = document.querySelector('#scoreContainer');

// Q & A: these are my quiz questions, answers (including correct options to select). //
const questions = [{
    Q: "What's an instrument `'Fred'` plays?",

    choice1: "Trumpet",
    choice2: "`Fred` thinks all band members are geeks.",
    choice3: "`Fred` doesn't play `an` instrument, he plays several.",
    choice4: "Accordian",
    choice5: "Susaphone",

    A: "3",
},{
    Q: "How many instruments can `Fred` play?",

    choice1: "Most saxophones, baritone, flute.",
    choice2: "Piano, guitar, drums.",
    choice3: "Anything he puts his mind to.",
    choice4: "6",
    choice5: "3",

    A: 3,
},{
    Q: "How many times has `Fred` been married?",

    choice1: "`Fred` got married: that's a joke!",
    choice2: "`Fred` is a priest, and not allowed to get married.",
    choice3: "`Fred` lives with his wife in the United States, has a wife in Djibouti, Singapore; and Cairns, Australia (Sydney is debatable, and not yet, proven by Common Wealth law).",
    choice4: "`Fred` has been married twice: his first wife was deported by higher command's orders, while serving in the Marines.",
    choice5: "`Fred` has only been married once, and plans to stay that way (one and done)!",

    A: 5,
},{
    Q: "How does `Fred` prefer to be addressed?",

    choice1: "Not late for dinner!",
    choice2:"`Fred`: hello, the game is named after him!  Keep it simple, LOL!",
    choice3: "Turbo!",
    choice4: "`Fred` doesn't care, that's why he's a great guy!",
    choice5: "Frederick",

    A: 5,
},{
    Q: "What is the nickname for `Fred`?",

    choice1: "Really?!",
    choice2: "derF",
    choice3: "Freddy",
    choice4: "Destroyer",
    choice5: "Fredd",
    
    A: 1,
},{
    Q: "What is `Frederick's` favorite nickname?",

    choice1: "`Fred`",
    choice2: "Turbo",
    choice3: "Motto",
    choice4: "Frederick, The Great!",
    choice5: "T-Time!",

    A: 2,
},{
    Q: "What is `Frederick's` religion?",

    choice1: "`Fred` was a devout muslim, since he served in the wars.  He met his wife in Baharain, while detached to a U. S. Naval base; and was converted to Christianity, when his father-in-law gave him a choice, `Your religion, or my daughter.`",
    choice2: "`Fred` believes in Christianity, Judaism, and Muslim (all from father Abraham).",
    choice3: "`Frederick's` Faith is Christianity.",
    choice4: "`Frederick is an atheist.",
    choice5: "`Frederick is a budhist.",

    A: 3,
},{
    Q: "`Fred's` favorite show ___.",

    choice1: "is Arrow, Season 4",
    choice2: "is Stargate: Alantis",
    choice3: "is The Mandolorian",
    choice4: "is DudeDad",
    choice5: "is DryBar Comedy",

    A: 3,
},{
    Q: "What is `Fred's` favorite show?",

    choice1: "The Mandolorian",
    choice2: "Star Wars: The Clone Wars",
    choice3: "Game of Horns",
    choice4: "You've asked this question.",
    choice5: "Power Rangers!",

    A: 2,
},{
    Q: "How old is `Fred`?",

    choice1: "non3 0f your business.",
    choice2: "28",
    choice3: "Who lik3s c8ke, anyway:",
    choice4: "35",
    choice5: "It's r38lly none of your busin3ss.",

    A: 3,
},{
    Q: "`Fred` likes to ___.",

    choice1: "Skydive",
    choice2: "Surf",
    choice3: "Climb Mountains",
    choice4: "Pop balloons by his wife.",
    choice5: "Throw snowballs",

    A: 2,
},{
    Q: "`Fred` likes to ___.",

    choice1: "Climb Rockwalls",
    choice2: "Fish",
    choice3: "Run",
    choice4: "Swim with dolphins",
    choice5: "Make Yoda impressions",
    
    A: 1,
},{
    Q: "`Fred` was engaged three times.",

    choice1: "True",
    choice2: "False",
    choice3: "False, he was engaged twice",
    choice4: "This is a personal question, really?!",
    choice5: "True, but he only bought a diamond ring for his wife.",

    A: 5,
},{
    Q: "`Fred` likes to wear Captain America and Iron Man shirts, while working out.",

    choice1: "True, he likes to where all tough Super Hero shirts, while working out.",
    choice2: "False, Superman shirts before and after workout.",
    choice3: "Are you serious: YES!",
    choice4: "False, he likes Spider-Man.",
    choice5: "False, He likes King Kong.",

    A: 2,
}]

var QEl = document.getElementById('Q');
var choice1El = document.getElementById('choice1');
var choice2El = document.getElementById('choice2');
var choice3El = document.getElementById('choice3');
var choice4El = document.getElementById('choice4');
var choice5El = document.getElementById('choice5');

// Variables for Scoring Functions and Operations. //
const winner =  JSON.parse(localStorage.getItem('winner')) || [ ];
let score = 0;
let quizTakers = [ ];
let highScoresIndex = 0;
let timer = 300;
let timerID;
let qScore;
let count; // Will define in function. //

// These variables are created, in order to help me automatically randomize my array of questions. This will make the quiz more challenging, for those retaking the quiz (for higher score, or for competition with other users on same local machine being use (this is a static page, although I am trying to make a feel of dynamics, as much as possible). //
let QnAIndex = 0;
let qAsked = randomQ[randomIndex];
let randomIndex = 0;
let randomQ = questions.sort(() => Math.random() - .3);
let userIndex = 0;


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
    let renderQnA = questions[QnAIndex];
    QEl.textContent = renderQnA.Q;
    choice1El.textContent = renderQnA.choice1;
    choice2El.textContent = renderQnA.choice2;
    choice3El.textContent = renderQnA.choice3;
    choice4El.textContent = renderQnA.choice4;
    choice5El.textContent = renderQnA.choice5; 
};


// Function to randomize quesions. | This function appears to be working: DON'T TOUCH! //
function newQ(randomQ, randomIndex) {
    
    // console.log(randomQ + "line-224"); | console.log(`${JSON.stringify(randomQ)} line-224`) //
    
    if (randomIndex >= randomQ.length) { 
        resetTimer(count);

        return;
    };
    
    QEl.innerText = qAsked.Q;
    
    console.log(newQ);
};


// Function to start my quiz. //
function beginQuiz() {
    instructEl.classList.add('hideElement'); // Page's Indtruction. //
    quizEl.classList.remove('hideElement'); // Page's Quiz. //
    endQuizEl.classList.add('hideElement'); // Page' Score List. //
    quizHeaderEl.classList.remove('hideElement'); // 
    // DON'T FORGET to Call countdown timer. //
     
    // Calling my functions. //
    newQ(randomQ, randomIndex);
    getQnA();

    timerID = setInterval(countdown ,1000);

    // console.log(beginQuiz); //
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

 
// Evaluation of User Choices. //
choices.forEach(choiceMade => {
    let number = choiceMade.dataset['number'];
    choiceMade.innerText = number + ' ' + qAsked[`choiceMade${number}`];
});

choices.forEach(choiceMade => {
    choiceMade.addEventListener('click', event => {
        event.preventDefault();
        const userChoice = event.target.dataset.number;
        console.log(`Button pressed ${userChoice}`);

        if (userChoice == questions[randomIndex].A) {
            VerdictEl.classList.remove('hideElement');
            correctEl.classList.remove('hideElement');
            
            // Rewards for scoring. //
            score += 2;
            // score ++; //
            timer += 3;
            
            // Hold the press: was the user right, or WRAAAANG, LOL! //
            pause(() => {
                VerdictEl.classList.add('hideElement');
                correctEl.classList.add('hideElement');

                console.log(pause);
            });

            randomIndex++;
            newQ(randomQ, randomIndex);
        } else if (userChoice != questions[randomIndex].A) { // Needed to make conditional statement for incorrect answer. //
            VerdictEl.classList.remove('hideElement');
            incorrectEl.classList.remove('hideElement');

            // What happens if they answer incorrectly: Lost of time- thought you knew me- WRAAANG, LOL! //
            score --;
            timer -= 3;
            
            pause(() => {
                VerdictEl.classList.add('hideElement');
                incorrectEl.classList.add('hideElement');

                console.log(pause);
            },
            
            1000);
        }
    })    
});


// // Appending the Quiz Taker's Score. DEFINATELY NEED TO TEST. //
// qScore.innerHTML = ('Score: ' + score);


// <============================================ Adding Event Listeners. ================================================> //
// Begin Quiz Button. //
introBtnEl.addEventListener('click', beginQuiz); // Once this button is selected, the quiz will begin. //

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
