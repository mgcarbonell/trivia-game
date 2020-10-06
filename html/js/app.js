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
const game = {
  timer: 30,
  score: 0,
  questionBank: [
    {Question: "The US Electoral College is...",
      a: "An assembly that formally elects the President.",
      b: "An assembly that formally supervsies and puts on the Presidential debates.",
      correctAnswer: this.a
       
  }
  ]
}