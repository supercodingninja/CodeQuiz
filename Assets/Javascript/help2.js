var counter=0;
var questions = [{
    Q: "What's an instrument `'Fred'` plays?",

    choice1: "Trumpet",
    choice2: "`Fred` thinks all band members are geeks.",
    choice3: "`Fred` doesn't play `an` instrument, he plays several.",
    choice4: "Accordian",
    choice5: "Susaphone",
},{
    Q: "What's a good sandwich",

    choice1: "brat",
    choice2: "sub",
    choice3: "grilled cheese",
    choice4: "BLT",
    choice5: "tritip dip",

},{ 
    Q: "What's an instrument `'Fred'` plays?",

    choice1: "Trumpet",
    choice2: "`Fred` thinks all band members are geeks.",
    choice3: "`Fred` doesn't play `an` instrument, he plays several.",
    choice4: "Accordian",
    choice5: "Susaphone",

    A: "3",
}]

function more() {
    console.log(counter);
    console.log(questions[counter].Q)
    console.log(questions[counter].choice1)
    console.log(questions[counter].choice2)
    console.log(questions[counter].choice3)
    console.log(questions[counter].choice4)
    console.log(questions[counter].choice5)
    counter++;
    console.log(counter);
    console.log(questions[counter].Q)
    console.log(questions[counter].choice1)
    console.log(questions[counter].choice2)
    console.log(questions[counter].choice3)
    console.log(questions[counter].choice4)
    console.log(questions[counter].choice5)
    counter++;
}

more()
