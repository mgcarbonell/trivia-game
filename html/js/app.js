
console.log("The electric things have their life too. Paltry as those lives are.")


let timer = 20
function setTimer(twentySeconds){
  timer = twentySeconds
  const timerInterval = setInterval(() =>{
    if (timer === 0) {
      clearInterval(timerInterval)
    } else {
      timer--
      console.log(timer)
    }
    const timerText = document.getElementById('timer')
    timerText.innerHTML = `Timer: ${timer}`     
  }, 1000)
}
setTimer()
const game = {

  score: 0,
  round: 0,

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
      document.getElementById("question").innerHTML = ' ';
      setTimer(20)
      const newQ = this.questionBank[this.round].question
      document.getElementById("question").append(newQ)
      },

  
    getAnswers: function (){
      document.getElementById("answerA", ).innerHTML = ' ';
      document.getElementById("answerB").innerHTML = ' ';
      let answerA = game.questionBank[this.round].a
      let answerB = game.questionBank[this.round].b
      document.getElementById("answerA").append(answerA)
      document.getElementById("answerB").append(answerB)
      console.log(answerA, answerB)
  },
  nextRound: function (){
      // this.round++
      // Do I want this tied to an event listener? Should it be a standalone?
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
  
}

game.getQuestion() 
game.getAnswers()
const answerA = document.getElementById("answerA");
answerA.addEventListener("click", console.log("Hello!"));
// 


//  NOTES:

// can there be an eventListener to run the game.checkScore function. If value == game.questionBank[this.round].correctAnswer score++ round++ else if value != game.questionBank[this.round].correctAnswer round++
// Should I just scrap the event listener on clicking the right 'container'/'div' and utilize a radio button or some other sort of button? This would mean changing the layout again. Not a big deal. 

// CONCEPTS

function answerSelection(e){
  if (e.target.getElementById !== 'answer')
  console.log("Select answer")
  console.log(e.target)
}

// function handlePoke(e) {
//   if (e.target.className !== 'squares'){  
//     console.log('I poked a square')
//     console.log(e.target)
//     e.target.style.opacity = 0
//     console.log(e.target.style.backgroundColor)
//     if (e.target.style.backgroundColor === 'blue'){
//       score++
//       console.log(score)
//       document.querySelector('h1').innerHTML = `scoreboard ${score}`
//     } else {
//       score--
//       console.log(score)
//     }
//   } 
// }

// check if the element has been clicked every 2 seconds:
// function isElementClicked (){
//   console.log(elementIsClicked ? 'CLICKED' : 'NOT');
// }
// setInterval(isElementClicked, 2000);
// I could use this above method from stackoverflow, check to see if the div has been clicked every 2 seconds. Would give the user about 10 tries per round. Then I would need something that IF clicked answerA value === game.questionBank[game.round].correctAnswer score++ round++ else round++

// SCRAPS:

// shuffle: function () {
//   for(let i = game.questionBank.length -1; i > 0; i--){
//       const j = Math.floor(Math.random() * (i + 1));
//       const temp = game.questionBank[i];
//       game.questionBank[i] = game.questionBank[j];
//       game.questionBank[j] = temp;
//   }
// },
// game.getAnswers()
// aButton.addEventListener("click", function(eventObject){

//if(questions answered correctly < 50% modal to lose screen play sad trombone)
// if(questions answered correctly > 50% modal to win screen play Hail to the Chief)
// I'm going to need a couple of event listeners and two clicks.
// I need a way to assign answer a to a div space. Or if user clicks id a === game.questionBank.correctanswer a + score else next question no score.
// I need a way to assign answer b to a div space. Or if user clicks id b === game.questionBank.correcntanswer b +score else next question no score.
// If player clicks div space a and game
// game.shuffle()
  
// }
/* potentially use a forEach(question of the array) and display q&a
make answers clickable and then have index++ for next question.*/
// Keep track of how many times getQuestion gets called.


  /*getNextQuestion: function() {
  }
*/
  // timerReset: function() {
  //   game.timer = intervalTimer
  //   // const timerInternval = setInterval(() => {
  //   //   if(timer === 0){
  //   //     clearInterval(timerInternval)
  //   //     refresh to a new question
  //   //     } else {
  //   //       time--
  //   //       console.log(timer)
  //   //     }
  //   //     const timerText = document.getElementById('timer')
  //   //     timerText.innerHTML = `Timer: ${game.timer}s`
  //   //     }
  // }
  // /*
  // setUpRound: function (){ <- scrap
  //   if(current round < game.questionBank.length){
  //     Reset the elements to prep for getAnswer and getQuestion
  //     So sort of like the deal function?
  //     while(container.firstChild){
  //       container.firstChild.remove();
  //       newQuestion.setAttribute
  //       newAnswerA.setAttribute
  //       newAnswerB.setAttribute
  //     }
  //   } else if(current round >= game.questionBank.length){
  //     tally score?
  //     if(score < 7){
  //       modal lose screen play sadtrombone
  //     } else if (score > 7){
  //       modal win screen play Hail to the Chief
  //     }
  //   }

  //   This would infer that we need a question element, answerA and answerB element.
  // },
  // */