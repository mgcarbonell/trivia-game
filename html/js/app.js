
console.log("Do androids dream? Rick asked himself.")

// const openModal = document.querySelectorAll("[data-open]");
// const isVisible = "is-visible"
// for(const el of openModal){
//   el.addEventListener('click', function(){
//     const modalId = this.dataset.open;
//     document.getElementById(modalId).classList.add(isVisible)
//   })


const game = {

  score: 0,
  round: 0,
  timer: 20,
  intervalHandle: null,

  questionBank: [
      {
        question: "The U.S. Electoral College is...",

        a: "An assembly that formally elects the President.",
        b: "An assembly that formally supervsies and puts on the     Presidential debates.",
        
        correctAnswer: "a",
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
      const newQ = this.questionBank[this.round].question;
      document.getElementById("question").append(newQ);
      },

    getAnswers: function (){
      document.getElementById("a", ).innerHTML = ' ';
      document.getElementById("b").innerHTML = ' ';
      let answerA = game.questionBank[this.round].a;
      let answerB = game.questionBank[this.round].b;
      document.getElementById("a").append(answerA);
      document.getElementById("b").append(answerB);
  },

  setTimer: function (duration) {
    this.timer = duration;
    this.intervalHandle = setInterval(() =>{
          if(this.timer <= 0){
              clearInterval(this.intervalHandle);
              this.nextRound();
          } else {
              this.timer--;
          }
              const timerText = document.getElementById('timer');
              timerText.innerHTML = `Timer: ${this.timer}`;     
    }, 1000);
  },

  updateScore: function () {
    this.score++;
    const updateScore = document.getElementById('score');
    updateScore.innerHTML = `Score ${game.score}`;
    },

  nextRound: function (){
    this.round++;
    if(this.round == 10){
        this.gameFinish();
      } else {
        this.getQuestion();
        this.getAnswers();
        clearInterval(this.intervalHandle);  
        this.setTimer(20);
      }
  },

  gameFinish: function() {
      if( this.score >= 6 ){
        // alert("You win!") // toggle the modal class
        let audio = new Audio('./sounds/hail_to_the_chief.mp3')
        audio.play()
        clearInterval(this.intervalHandle);
        // document.getElementById("modal1").style.visibility = "visible";
        // docuement.getElementbyId("modal1").appendChild
       // play html/sounds/hail_to_the_chief.mp3
      } else if ( this.score < 6 ){
        // alert("Oh no :( better try again!") // stand in for modal
        let audio = new Audio('./sounds/sadtrombone.swf.mp3')
        audio.play()
        clearInterval(this.intervalHandle);
        document.getElementById("modal1").style.visibility = "visible";

      }    // play html/sounds/sadtrombone.swf.mp3
  }  
}

game.setTimer(20)

game.getQuestion() 

game.getAnswers()

const answerA = document.getElementById("a");
answerA.addEventListener("click", (event) => {
    if(event.target.id === game.questionBank[game.round].correctAnswer){
      game.updateScore()
      game.nextRound()
    } else if(event.target.id !== game.questionBank[game.round].correctAnswer){
      game.nextRound()
    }
});

const answerB = document.getElementById("b");
answerB.addEventListener("click", (event) => {
  if (event.target.id === game.questionBank[game.round].correctAnswer){
      game.updateScore()
      game.nextRound()
  }else if (event.target.id !== game.questionBank[game.round].correctAnswer){
      game.nextRound()
  }
});