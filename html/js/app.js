
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
        let audio = new Audio('./sounds/hail_to_the_chief.mp3');
        audio.play();

        clearInterval(game.intervalHandle);

        let winQ = document.getElementById('question');
        winQ.remove();
        let winA = document.getElementById('a');
        winA.remove();
        let winB = document.getElementById('b');
        winB.remove();

        function winDisplay(){
          const newDiv = document.createElement('div');
          newDiv.innerHTML = `Congratulations! With a score of ${game.score} you pass with flying colors!`
          newDiv.className = 'div8';
          newDiv.style.backgroundColor = 'var(--blue)';
          newDiv.style.color = 'var(--white)';
          newDiv.style.fontSize = '1.5em';
          newDiv.style.borderRadius = '5px';
          newDiv.style.textAlign = 'center';
          newDiv.style.verticalAlign = 'middle';
          newDiv.style.boxShadow = '4px 10px 10px 0 rgba(0,0,0,0.4)';
          newDiv.style.position = 'relative';
          newDiv.style.margin = '0 auto;';
          newDiv.style.padding = '40px';
          document.getElementById('parent').appendChild(newDiv)
          }
          winDisplay()
      } else if ( this.score < 6 ){

        let audio = new Audio('./sounds/sadtrombone.swf.mp3');
        audio.play();

        clearInterval(game.intervalHandle);

        let loseQ = document.getElementById('question');
        loseQ.remove();
        let loseA = document.getElementById('a');
        loseA.remove();
        let loseB = document.getElementById('b');
        loseB.remove();

        function loseDisplay(){
          const newDiv = document.createElement('div');
          newDiv.innerHTML = `Ouch you can't pass with a score of ${game.score}. Better luck next time!`;
          newDiv.className = 'div8';
          newDiv.style.backgroundColor = 'var(--blue)';
          newDiv.style.color = 'var(--white)';
          newDiv.style.fontSize = '1.5em';
          newDiv.style.borderRadius = '5px';
          newDiv.style.textAlign = 'center';
          newDiv.style.verticalAlign = 'middle';
          newDiv.style.boxShadow = '5px 10px 10px 0 rgba(0,0,0,0.4)';
          newDiv.style.position = 'relative';
          newDiv.style.margin = '0 auto;';
          newDiv.style.padding = '40px';
          document.getElementById('parent').appendChild(newDiv)
          }
          loseDisplay()
      }   
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

// NOTES:

// best time for modals are sign ups (if the user wants it)
// Other options: Toast -> 
// Frontend frameworks (bootstrap)