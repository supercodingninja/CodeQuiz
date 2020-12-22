// Note to self: for this repository, try to stick to Vanilla Javascript so that things become clearer (a lot of moving parts):
// Define global var
// Function var
// Call function
// Event listeners
// This will make it easier to get assistance on any area(s) with issues. //

// Intro. //
const introBtnEl = document.getElementById('knock');
const instructEl = document.getElementById('instruct');

// Q & A //
const questions = [{
    Q: "What instrument does `'Fred'` play?"

    choice1: "Saxophone!"
    choice2: "`Fred` thinks all band members are geeks."
    choice3: "`Fred` doesn't play `an` instrument."

    A: 3,
},{
    Q: "How many instruments can `Fred` play?"

    choice1: "Most saxophones, baritone, flute."
    choice2: "Piano, guitar, drums."
    choice3: "Anything he puts his mind to."

    A: 3,
},{
    Q: "How many times has `Fred` been married?"

    choice1: "`Fred` got married: that's a joke!"
    choice2: "`Fred` is a priest, and not allowed to get married."
    choice3: "`Fred` lives with his wife in the United States, has a wife in Djibouti, Singapore; and Cairns, Australia (Sydney is debatable, and not yet, proven by Common Wealth law)."
    choice4: "`Fred` has been married twice: his first wife was deported by higher command's orders, while serving in the Marines."
    choice5: "`Fred` has only been married once, and plans to stay that way (one and done)!"

    A: 5,
},{
    Q: "How does `Fred` prefer to be addressed?"

    choice1: "Not late for dinner!"
    choice2:"`Fred`: hello, the game is named after him!  Keep it simple, LOL!"
    choice3: "Turbo!"
    choice4: "`Fred` doesn't care, that's why he's a great guy!"
    choice5: "Frederick"

    A: 5,
},{
    Q: "What is the nickname for `Fred`?"

    choice1: "Really?!"
    choice2: "derF"
    choice3: "Freddy"

    A: 1,
},{
    Q: "What is `Frederick's` favorite nickname?"

    choice1: "`Fred`"
    choice2: "Turbo"
    choice3: "Motto"

    A: 2,
},{
    Q: "What is `Frederick's` religion?"

    choice1: "`Fred` was a devout Muslim, since he served in the wars.  He met his wife in Baharain, while detached to a U. S. Naval base; and was converted to Christianity, when his father-in-law gave him a choice, `Your religion, or my daughter.`"
    choice2: "`Fred` believes in Christianity, Judaism, and Muslim (all from father Abraham)."
    choice3: "`Frederick's` Faith is Christianity."

    A: 3,
},{
    Q: "`Fred's` favorite show ___."

    choice1: "is Arrow, Season 4"
    choice2: "is Stargate: Alantis"
    choice3: "is The Mandolorian"
    choice4: "is DudeDad"
    choice5: "is DryBar Comedy"
    choice6: "is Corbra Kai"
    choice7: "is Stargate SG-6"
    choice8: "is Star Trek: Borg Wars"
    choice9: "is Mighty Morphing Power Rangers"
    choice10: "is Star Wars"

    A: 3,
},{
    Q: "What is `Fred's` favorite show?"

    choice1: "The Mandolorian"
    choice2: "Star Wars: The Clone Wars"
    choice3: "Game of Horns"

    A: 2,
},{
    Q: "How old is `Fred`?"

    choice1: "non3 0f your business."
    choice2: "28"
    choice3: "Who lik3s c8ke, anyway:"
    choice4: "35"
    choice5: "It's r38lly none of your busin3ss."
    choice6: "37"
    choice7: "4 the last time, non3 of your business!"

    A: 3,
},{
    Q: "`Fred` likes to ___."

    choice1: "Skydive"
    choice2: "Surf"
    choice3: "Climb Mountains"

    A: 2,
},{
    Q: "`Fred` likes to ___."

    choice1: "Climb Rockwalls"
    choice2: "Fish"
    choice3: "Run"

    A: 1,
},{
    Q: "`Fred` was engaged three times."

    choice1: "True"
    choice2: "False"

    A: 1,
},{
    Q: "`Fred` likes to wear Captain America and Iron Man shirts, while working out."

    choice1: "True"
    choice2: "False"

    A: 2,
},]

const QEl = document.getElementById('Q');
const quizEl = document.getElementById('quiz');

const choices = Array.from(document.querySelectorAll('.choices'));

const correctEl = document.getElementById('correct');
const incorrectEl = document.getElementById('incorrect');
const VerdictEl = document.getElementById('Verdict');

let qAsked;
let randomIndex;
let randomQ;

// Scoring and End of Quiz //
const chapsScoresEl = document.querySelector('#chapsScores');
const chaplistEl = document.querySelector('#chaplist');
const scoreContainerEl = document.querySelector('#scoreContainer');
const signEl = document.querySelector('#sign');
const topEl = document.querySelector('#top');
const endQuizEl = document.getElementById('endQuiz');
const totalEl = document.getElementById('total');
const redoBtnEl = document.getElementById('redoBtn');
const winner =  JSON.parse(localStorage.getItem('winner')) || [];
const goToScoreboardEl = document.getElementById('goToScoreboard');
quizTakers = quizTakers.concat(winner);

var score = 0;

// Having trouble with this part.  I want to store a list of the highest scores of local users (lu) aka "chaps." //
let quizTakers = [];
let chapsIndex = 0;
let chapsScoreIndex = 0;

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
            chapsScoresEl.appendChild(chapsScores)
            chapsScoreIndex++
        });
        
    }

};

function redoQuiz() {
    location.redo();
    return;
};

// Add Event Listeners, here. //
