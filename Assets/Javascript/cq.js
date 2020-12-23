// Note to self: for this repository, try to stick to Vanilla Javascript so that things become clearer (a lot of moving parts):
// Define global var
// Function var
// Call function
// Event listeners
// This will make it easier to get assistance on any area(s) with issues. //

// Introduction page: I want my quiz to render new look and data, as the demo introduced, so that everything is on one page.  This is the of first set of data the page will render; and I want this data to render new data (questions and choices, etc.).  I created a button, along with an event listener to help me accomplish this.  I prefer to have all event listeners at the end of my work (Vanilla Javascript); but I seem to be having issues implementing my thoughts to the machine: so, in order for me to achieve my desire outcome, I created my event listener for my button //
const instructEl = document.getElementById('instruct');
const introBtnEl = document.getElementById('knock');
introBtnEl.addEventListener('click', beginQuiz); // Once this button is selected, the quiz will begin. //

// Q & A: these are my quiz questions, answers (including correct options to select). //
const QEl = document.getElementById('Q');
const quizEl = document.getElementById('quiz');
const questions = [{
    Q: "What instrument does `'Fred'` play?",

    choice1: "Saxophone",
    choice2: "`Fred` thinks all band members are geeks.",
    choice3: "`Fred` doesn't play `an` instrument.",

    A: "3",
},{
    Q: "How many instruments can `Fred` play?",

    choice1: "Most saxophones, baritone, flute.",
    choice2: "Piano, guitar, drums.",
    choice3: "Anything he puts his mind to.",

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

    A: 1,
},{
    Q: "What is `Frederick's` favorite nickname?",

    choice1: "`Fred`",
    choice2: "Turbo",
    choice3: "Motto",

    A: 2,
},{
    Q: "What is `Frederick's` religion?",

    choice1: "`Fred` was a devout Muslim, since he served in the wars.  He met his wife in Baharain, while detached to a U. S. Naval base; and was converted to Christianity, when his father-in-law gave him a choice, `Your religion, or my daughter.`",
    choice2: "`Fred` believes in Christianity, Judaism, and Muslim (all from father Abraham).",
    choice3: "`Frederick's` Faith is Christianity.",

    A: 3,
},{
    Q: "`Fred's` favorite show ___.",

    choice1: "is Arrow, Season 4",
    choice2: "is Stargate: Alantis",
    choice3: "is The Mandolorian",
    choice4: "is DudeDad",
    choice5: "is DryBar Comedy",
    choice6: "is Corbra Kai",
    choice7: "is Stargate SG-6",
    choice8: "is Star Trek: Borg Wars",
    choice9: "is Mighty Morphing Power Rangers",
    choice10: "is Star Wars",

    A: 3,
},{
    Q: "What is `Fred's` favorite show?",

    choice1: "The Mandolorian",
    choice2: "Star Wars: The Clone Wars",
    choice3: "Game of Horns",

    A: 2,
},{
    Q: "How old is `Fred`?",

    choice1: "non3 0f your business.",
    choice2: "28",
    choice3: "Who lik3s c8ke, anyway:",
    choice4: "35",
    choice5: "It's r38lly none of your busin3ss.",
    choice6: "37",
    choice7: "4 the last time, non3 of your business!",

    A: 3,
},{
    Q: "`Fred` likes to ___.",

    choice1: "Skydive",
    choice2: "Surf",
    choice3: "Climb Mountains",

    A: 2,
},{
    Q: "`Fred` likes to ___.",

    choice1: "Climb Rockwalls",
    choice2: "Fish",
    choice3: "Run",

    A: 1,
},{
    Q: "`Fred` was engaged three times.",

    choice1: "True",
    choice2: "False",

    A: 1,
},{
    Q: "`Fred` likes to wear Captain America and Iron Man shirts, while working out.",

    choice1: "True",
    choice2: "False",

    A: 2,
},]
const choices = Array.from(document.querySelectorAll('.choices'));

// This is to automatically randomize my array of questions. This will make the quiz more challenging, for those retaking the quiz (for higher score, or for competition with other users on same local machine being use (this is a static page, although I am trying to make a feel of dynamics, as much as possible). //
let qAsked;
let randomIndex;
let randomQ;

// This is to inform the quiz taker whether their choice selected was correct or not. //
const correctEl = document.getElementById('correct');
const incorrectEl = document.getElementById('incorrect');
const VerdictEl = document.getElementById('Verdict');

// Variables for Scoring Functions and Operations. //
// This may be where my problem is: I'm losing train of thought here, constantly; so check for naming conflicts, repeated expression/functions/thoughts for accomplishing same end result, etc. //
var score = 0;
const chapsScoresEl = document.querySelector('#chapsScores');
const chaplistEl = document.querySelector('#chaplist');

const goToScoreboardEl = document.getElementById('goToScoreboard');
const scoreContainerEl = document.querySelector('#scoreContainer');

const winner =  JSON.parse(localStorage.getItem('winner')) || [];
var quizTakers = [];
let quizTakers = quizTakers.concat(winner); // I am having trouble with this part.  I want to store a list of the highest scores of the local users aka "quizTakers."  I feel ike I already accomplished what I want in my thought process; or I am still, not communicating what I hope to accomplish, which is taking the quizntaker's score, placing it on a scoreboard; and eventually, with another function, rank all quiz takers' scores in highest to lowest order. //
let chapsIndex = 0;
let chapsScoreIndex = 0;

// Own It and Sign It: these are the variables to the buttons for submitting results for quiz, and ability to redo the quiz; also SIGNING YOUR JOHN HANCOCK- Do You Know Me, LOL! //
const totalEl = document.getElementById('total');
const redoBtnEl = document.getElementById('redoBtn');
const signEl = document.querySelector('#sign');
const endQuizEl = document.getElementById('endQuiz');

// I want to make this a way for the users to try and top each other's high scores on the same local, after they see the highest quiz scores, in ranking order.  This is my button I created to retake the quiz, AFTER, they had sign their initials to the quiz. //
const topEl = document.querySelector('#top');

// Declaring the Timer. //
const timerCountdown = document.getElementById('timer');
let count; // Will define in function. //
let timer = 100;


// Getting to the Functions... //
function countdown() { // Function for Timer Countdown. //
    count = setTimer(function() {
        if (timer <= 0) {
           resetTimer(timer = 0);
           
           instructEl.classList.add('outOfSight');
           quizEl.classList.remove('outOfSight');
           endQuizEl.classList.add('outOfSight');
        };

        timerCountdown.innerHTML = ('Timer: ' + timer);
        timer -= 1;
    },
    1000);
};

// Function to start my quiz.  THE QUIZ BETTER SHOW (instructions suppose to disappear). //
function beginQuiz() {
    instructEl.classList.add('outOfSight');
    quizEl.classList.remove('outOfSight');
    endQuizEl.classList.add('outOfSight');

    // DON'T FORGET to Call countdown timer. //
    countdown();

    // Randomize questions. //
    randomIndex = 0;
    randomQ = questions.sort(() => Math.random() - .3);
    newQ(randomQ, randomIndex);
};

function newQ(randomQ, randomIndex) {
    if (randomIndex >= randomQ.length) {
        resetTimer(count)
        quizEl.classList.add('outOfSight');
        endQuizEl.classList.remove('outOfSight')
        return;
    };
    
    var qAsked = randomQ[randomIndex];
    questionEl.innerText = qAsked.question;
    
    choices.forEach(choiceMade => {
        const number = choiceMade.dataset['number'];
        choiceMade.innerText = number + '. ' + qAsked['choiceMade' + number];
    })
};

// Function for Scoring. DEFINATELY NEED TO TEST. //
qScore.innerHTML = ('Score: ' + score);
        score += 1;

// Evaluation of User Choices. //
choices.forEach(choiceMade => {
    choiceMade.addEventListener('click', event => {
        event.preventDefault();
        const userChoice = event.target.dataset.number

        if (userChoice == questions[randomIndex].A) {
            VerdictEl.classList.remove('outOfSight');
            correctEl.classList.remove('outOfSight');
            
            // Rewards for scoring. //
            score ++;
            timer+=3;
            
            pause(() => {
                VerdictEl.classList.add('outOfSight');
                correctEl.classList.add('outOfSight');
            },
            
            1000);

            randomIndex++;
            newQ(randomQ, randomIndex);

        } else if (userChoice != questions[randomIndex].A) { // Needed to make conditional statement for incorrect answer. //
            VerdictEl.classList.remove('outOfSight');
            incorrectEl.classList.remove('outOfSight');

            // What happens if they answer incorrectly: Lost of time- thought you knew me, LOL! //
            score --;
            timer-=3;
            
            pause(() => {
                VerdictEl.classList.add('outOfSight');
                incorrectEl.classList.add('outOfSight');
            },
            
            1000);
        }
    })    
});

// Sign Your Name! //
function johnHancock() {
    if (signEl.value < 1) {
        
        return;

    } else {

        qScore.textContent = score;

        // Maybe... DEFINATELY NEED TO TEST. //
        let scoreSubmittion = {
            chap: signEl.value.toUpperCase(),
            
            // The total score is adding var 'score + timer': this is the user's score + the time left. //
            totalScore: score + timer,
            }

        winner.push(scoreSubmittion)

        // Ordering local users (lu). //
        winner.sort( (a,b) => b.totalScore - a.totalScore);
        
        winner.splice(5);

        localStorage.setItem('winner', JSON.stringify(winner));

        highscoreEl.classList.remove('outOfSight');
        endQuizEl.classList.add('outOfSight');

        quizTakers.forEach(() => {
            chaps = document.createElement('li');
            chaps.innerText = quizTakers[chapsIndex].chap;
            chaplistEl.appendChild(chaps);
            chapsIndex++;
            
            chapsScores = document.createElement('li');
            chapsScores.innerText = quizTakers[chapsScoreIndex].totalScore;
            chapsScoresEl.appendChild(chapsScores);
            chapsScoreIndex++;
        });
        
    }

};

function redoQuiz() {
    location.redo();
    return;
};

// Add Event Listeners, here. //	
// Redo Quiz. //
redoBtnEl.addEventListener('click', redoQuiz);
topEl.addEventListener('click', redoQuiz);

// This event listener will allow the user to store their score and add their initials. //
totalEl.addEventListener('click', johnHancock);

goToScoreboardEl.addEventListener('click', () => {
    instructEl.classList.add('outOfSight');
    quizEl.classList.add('outOfSight');
    endQuizEl.classList.add('outOfSight');
    scoreContainerEl.classList.remove('outOfSight');

    quizTakers.forEach(() => {
        chaps = document.createElement('li');
        chaps.innerText = quizTakers[chapsIndex].chap;
        chaplistEl.appendChild(chaps);
        chapsIndex++;
        
        chapsScores = document.createElement('li');
        chapsScores.innerText = quizTakers[chapsScoreIndex].totalScore;
        chapsScoresEl.appendChild(chapsScores);
        chapsScoreIndex++;
    });
});
