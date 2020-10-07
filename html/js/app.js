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
  
  questionBank: 
    [
      {
        question: "The U.S. Electoral College is...",
        a: "An assembly that formally elects the President.",
        b: "An assembly that formally supervsies and puts on the     Presidential debates.",
        correctAnswer: "a",
      //   getCorrectAnswer: function (){
      //     return this.a
      // }
      },
      {
        question: "Which of the following rights is guaranteed by the 5th Amendment?",
        a: "The right to privacy.",
        b: "The right to remain silent.",
        correctAnswer: "b"
      },
      {
        question: "Which of the following rights is guaranteed by the 1st Amendment?",
        a: "The right of free speech.",
        b: "The right to privacy.",
        correctAnswer: "a",
      },
      {
        question: "A filibuster in the U.S. Senate can be used to prevent legislation from coming to a vote. \n Of the 100 U.S. Senators, how many votes are needed to end a filibuster?",
        a: "51 votes.",
        b: "60 votes.",
        correctAnswer: "b"
      },
      {
        question: "The Federalist Papers supported the passage of the U.S. Constitution. Which of these two men was an author?",
        a: "John Adams",
        b: "John Jay",
        correctAnswer: "b"
      },
      {
        question: "If both the President and the Vice President can no longer serve, who becomes the President?",
        a: "The President Pro Tempore of the Senate.",
        b: "The Speaker of the House of Representatives.",
        correctAnswer: "b"
      },
      {
        question: "How many Amendments are there to the U.S. Constitution?",
        a: "27.",
        b: "25.",
        correctAnswer: "a"
      },
      {
        question: "In the case of a tie in the U.S. Senate, the deciding vote is cast by...",
        a: "The Vice President of the United States.",
        b: "The President Pro Tempore of the Senate.",
        correctAnswer: "a"
      },
      {
        question: "How is the number of terms a President can serve determined?",
        a: "The 22nd Amendment of the U.S. Constitution.",
        b: "Article II of the U.S. Constitution.",
        correctAnswer: "a"
      },
      {
        question: "We elect U.S. Senators for how many years?",
        a: "Four years",
        b: "Six years.",
        correctAnswer: "b"
      }
    ],

  getQuestion: function () {
    const newQ = this.questionBank.question.find(question => [this.questionBank.question]); 
    // for(let i = 0; i < game.questionBank.length; i++){
    //   let question = game.questionBank[i].question;
    //   for(let i = 0; i < question.length; i++){
    //     console.log(question[i])
    //   // let newQuestion = game.questionBank[i].question
        document.getElementById("question").append(newQ)
      // console.log(newQuestion)
      // once an answer is chosen -> next question
      // let's try a forEach(game.questionBank.question) loop rather than iterating up++
         // maybe I need to loop back through to return a single object?
      /* append to document on question element*/
      // }
    },

  getAnswers: function (){
    // for(let i = 0; i < game.questionBank.length; i++){
      // maybe I need to loop back through to return a single object?
      this.questionBank.forEach()
      let answerA = game.questionBank[i].a
      let answerB = game.questionBank[i].b
      document.getElementById("a").append(answerA)
      document.getElementById("b").append(answerB)
      console.log(answerA)
    /* append answer A to container A
    append question B to container B */
    // }
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
    /*if(player clicks == correct answer){
    score++
    } else if {
      timerReset()
      setUpRound()
    }
    if ()
    timer reset? goes here? Function does 1 thing and does it well?
    Can I lump in a screen refresh?
    */
  },
  /*getNextQuestion: function() {
  }
*//*
  timerReset: function() {
    game.timer = intervalTimer
    const timerInternval = setInterval(() => {
      if(timer === 0){
        clearInterval(timerInternval)
        refresh to a new question
        } else {
          time--
          console.log(timer)
        }
        const timerText = document.getElementById('timer')
        timerText.innerHTML = `Timer: ${game.timer}s`
        }
      }
  },
  setUpRound: function (){ <- scrap
    if(current round < game.questionBank.length){
      Reset the elements to prep for getAnswer and getQuestion
      So sort of like the deal function?
      while(container.firstChild){
        container.firstChild.remove();
        newQuestion.setAttribute
        newAnswerA.setAttribute
        newAnswerB.setAttribute
      }
    } else if(current round >= game.questionBank.length){
      tally score?
      if(score < 7){
        modal lose screen play sadtrombone
      } else if (score > 7){
        modal win screen play Hail to the Chief
      }
    }

    This would infer that we need a question element, answerA and answerB element.
  },
  */
}

// I'm going to need a couple of event listeners and two clicks.
// I need a way to assign answer a to a div space.
// I need a way to assign answer b to a div space.
// If player clicks div space a and game
game.shuffle()
game.getQuestion()
game.getAnswers()
// aButton.addEventListener("click", function(eventObject){
  
// }
// Notes:
/* potentially use a forEach(question of the array) and display q&a
make answers clickable and then have index++ for next question.*/