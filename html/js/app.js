// DOM manipulation to create the game page will go here.
// Refer to high card and poke-a-square

// Here there be game objects
// How do I want to go about this?
// Ideally we'll have our questionBank be an array so that I can 
// for(let i = 0; i < questionBank.length; i++){
//   /*pick a question*/
//   if(response == questionBank[i].correctAnswer){
//     score++
//   }else{
//     next question
//     timer reset
//   }
// }
//if(questions answered correctly < 50% modal to lose screen play sad trombone)
// if(questions answered correctly > 50% modal to win screen play Hail to the Chief)
console.log("The electric things have their life too. Paltry as those lives are.")

const game = {
  timer: 30,
  score: 0,
  questionBank: [
  {question: "The U.S. Electoral College is...",
    a: "An assembly that formally elects the President.",
    b: "An assembly that formally supervsies and puts on the Presidential debates.",
    correctAnswer: this.a
  },
  {question: "Which of the following rights is guaranteed by the 5th Amendment?",
    a: "The right to privacy.",
    b: "The right to remain silent.",
    correctAnswer: this.b
  },
  {question: "Which of the following rights is guaranteed by the 1st Amendment?",
    a: "The right of free speech.",
    b: "The right to privacy.",
    correctAnswer: this.a,
  },
  {question: "A filibuster in the U.S. Senate can be used to prevent legislation from coming to a vote. \n Of the 100 U.S. Senators, how many votes are needed to end a filibuster?",
    a: "51 votes.",
    b: "60 votes.",
    correctAnswer: this.b
  },
  {question: "The Federalist Papers supported the passage of the U.S. Constitution. Which of these two men was an author?",
    a: "John Adams",
    b: "John Jay",
    correctAnswer: this.b
  },
  {question: "If both the President and the Vice President can no longer serve, who becomes the President?",
    a: "The President Pro Tempore of the Senate.",
    b: "The Speaker of the House of Representatives.",
    correctAnswer: this.b
  },
  {question: "How many Amendments are there to the U.S. Constitution?",
    a: "25.",
    b: "27.",
    correctAnswer: this.b
  },
  {question: "In the case of a tie in the U.S. Senate, the deciding vote is cast by...",
    a: "The Vice President of the United States.",
    b: "The President Pro Tempore of the Senate.",
    correctAnswer: this.a
  },
  {question: "How is the number of terms a President can serve determined?",
    a: "The 22nd Amendment of the U.S. Constitution.",
    b: "Article II of the U.S. Constitution.",
    correctAnswer: this.a
  },
  {question: "We elect U.S. Senators for how many years?",
    a: "Six years.",
    b: "Four years.",
    correctAnswer: this.a
  }],
  getQuestion: function (){
    for(let i = 0; i < game.questionBank.length; i++){
      console.log(game.questionBank[i].question)
    }
  },
  getAnswers: function (){
    for(let i = 0; i < game.questionBank.length; i++){
    console.log(game.questionBank[i].a, game.questionBank[i].b)
    }
  },
  shuffle: function () {
    for(let i = game.questionBank.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = game.questionBank[i];
        game.questionBank[i] = game.questionBank[j];
        game.questionBank[j] = temp;
    }
  },
  getScore: function () {
    /*if(player clicks == correct answer)
    score++
    timer reset? goes here? Function does 1 thing and does it well?
    Can I lump in a screen refresh?
    */
  },
  /*getNextQuestion: functio() {

  }
  /*timerReset: function() {
    Is this even needed? Can I have this wrapped in somewhere else?
    When the player selects the correct answer the timer resets
    This might be better in the get score function?
  }, */
}

// I'm going to need a couple of event listeners and two clicks.
// I need a way to assign answer a to a div space.
// I need a way to assign answer b to a div space.
// If player clicks div space a and game
game.shuffle()
game.getQuestion()
game.getAnswers()
