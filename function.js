//Variables
var body = document.querySelector('body')
var countdownEl = document.querySelector('#countdown')
var title = document.getElementById('title') 
var container = document.getElementById('container')
var contents = document.getElementById('contents')
var lineOne = document.querySelector('.lineOne')
var lineTwo = document.querySelector('.lineTwo')
var start = document.getElementById('startBtn')
var userScore = 0;
var userScoreText
var i = 0 
var countdownInterval
var highScoreList = document.getElementsByClassName('high_score_list')
//Creates choice buttons
var choiceOne = document.createElement('button')
      choiceOne.setAttribute("class","answer",)
      choiceOne.setAttribute("id","btnOne")
      choiceOne.setAttribute("style","margin-top:10px; margin-left:5px;")
var choiceTwo = document.createElement('button')
      choiceTwo.setAttribute("class","answer")
      choiceTwo.setAttribute("id","btnTwo")
      choiceTwo.setAttribute("style","margin-top:10px; margin-left:5px;")
var choiceThree = document.createElement('button')
      choiceThree.setAttribute("class","answer")
      choiceThree.setAttribute("id","btnThree")
      choiceThree.setAttribute("style","margin-top:10px; margin-left:5px;")
var choiceFour = document.createElement('button')
      choiceFour.setAttribute("class","answer")
      choiceFour.setAttribute("id","btnFour")
      choiceFour.setAttribute("style","margin-top:10px; margin-left:5px;")
//Creates score submit form
var scoreSubmit = document.createElement('form')
      scoreSubmit.setAttribute("type","submit")
      scoreSubmit.setAttribute ("id","scoreSubmit")
//Creates user intial input box
var userIntinput = document.createElement('input')
      userIntinput.setAttribute("type","text")
      userIntinput.setAttribute("style","width:160px")
      userIntinput.setAttribute("placeholder","Your Name")
      userIntinput.setAttribute("id","userIntinput")     
//Questions
var questions =
[
  {
  question: "What does HTML stand for?",
  choices: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Higher Text Maker Language"],
  answer: "btnTwo"
  },
  {
  question: 'What is the correct HTML for inserting an image?',
  choices: ['<img alt="MyImage">image.gif</img>', '<image src="image.gif" alt="MyImage">', '<img src="image.gif" alt="MyImage">', '<img href="image.gif" alt="MyImage">'],
  answer: "btnThree"
  },
  {
  question: "What does CSS stand for?",
  choices: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
  answer: "btnTwo"
  },
  {
  question: "Which is the correct CSS syntax?",
  choices: ["{body:color=black;}", "body {color: black;}", "body:color=black;", "{body;color:black;}"],
  answer: "btnTwo"
  },
  {
  question: 'What does DOM stand for?',
  choices: ["Document object Media", "Document object Model", "Direct object Model", "Document operating Media"],
  answer: "btnOne"
  },
  {
  question: "Inside which HTML element do we put the JavaScript?",
  choices: ["<scripting>", "Hyper Text Markup Language", "Home Tool Markup Language", "Higher Text Maker Language"],
  answer: "btnTwo"
  },
  {
  question: 'Where is the correct place to insert a JavaScript?',
  choices: ['<scripting>', '<Javascript>', '<script>', '<scr>'],
  answer: "btnThree"
  },
  {
  question: "Which of the following is an advantage of using frames in web pages?",
  choices: ["Frames takes long to load, especially when they contain alot of pictures", "Frames adds to the creativity and aesthetic of a web site", "Not all web browsers supports frames", "Frames are used to display multiple web pages in one window"],
  answer: "btnTwo"
  },
  {
  question: "How can you make a bulleted list?",
  choices: ["<nl>", "<ul>", "<ol>", "<list>"],
  answer: "btnTwo"
  },
  {
  question: 'What is the purpose of using div tags in HTML?',
  choices: ["For creating different sections", "For adding headings", "For adding titles", "For creating Different styles"],
  answer: "btnOne"
  },
  {
  question : "end of qestions"
  }
];
// creates elements for user score history overlay
var highScoreListBox = document.createElement("div")
    highScoreListBox.setAttribute("class","high_score_list")
var scoreTitle = document.createElement('h2')
    scoreTitle.setAttribute("class","scoreTitle")
    scoreTitle.textContent = "User Score History"
var userScoreList = document.createElement('ul')
    userScoreList.setAttribute('class','userScoreList')
var fadeOut = document.createElement("div")
    fadeOut.setAttribute("Id","fadeOut")
var veiwHighScores = document.getElementById('highScores')
var exitBtn = document.createElement('button')
    exitBtn.setAttribute("class","exitBtn")
    exitBtn.setAttribute("id","exitBtn")
    exitBtn.textContent = "X"
var clearScoreListBtn = document.createElement('button')
    clearScoreListBtn.setAttribute("id","clearScoreBtn")
    clearScoreListBtn.textContent = "clear scores"


console.log(Date())

//save data to local storage
function storeUserAndScore() {
  var str = JSON.stringify(userHighScores)
  localStorage.setItem("userAndScore", str)
}

//get data from local storage
function getHighScores() {
  var str = localStorage.getItem("userAndScore")
  userHighScores = JSON.parse(str)
  if (!userHighScores) {
    userHighScores = []
  }
}

//get date and time
var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
var month = months[new Date().getMonth()]
var day = new Date().getDate()
var  year = new Date().getFullYear() 
var theTime = new Date().getHours() + ":"  + new Date().getMinutes()

//WHEN score history is clicked a list of users and scores is displayed
document.getElementById('highScores').onclick = highScores
function highScores() {
  container.style.filter = "blur(4px)"
  body.appendChild(highScoreListBox)
  highScoreListBox.appendChild(scoreTitle)
  scoreTitle.appendChild(userScoreList)
  body.appendChild(fadeOut)
  veiwHighScores.remove();
  body.appendChild(exitBtn)
  document.getElementById('exitBtn').onclick = exitOverlay

  //prints list of user scores
  for(var i = userHighScores.length - 1; i >= 0; i--) {
    var listItem = document.createElement("p")
    listItem.style.margin = "5px 5px"
    listItem.textContent = userHighScores[i].toUpperCase()
    userScoreList.appendChild(listItem)
  }

  userScoreList.appendChild(clearScoreListBtn)
  clearScoreListBtn.addEventListener('click', function clearScore() {
    userScoreList.remove()
    localStorage.clear();
  })

        
  function exitOverlay() {
    
    location.reload();
  }
}

//Game Over
function gameOver() {
  countdownEl.setAttribute('style','display:none;')
  clearInterval(countdownInterval)
  container.setAttribute("style","textalign:center;")
  contents.textContent = "Your Final Score Is: " + userScore
  choiceOne.remove()
  choiceTwo.remove()
  choiceThree.remove()
  choiceFour.remove()
  container.appendChild(scoreSubmit)
  scoreSubmit.appendChild(userIntinput)
  setTimeout(function() {
    contents.textContent = "enter your name below and press return to save your score"
  }, 2000); 
//WHEN the game is over THEN I can save my initials and score
document.getElementById("scoreSubmit").addEventListener('submit', function saveScore() {
  if (userIntinput.value === '') {
    userIntinput.value = "anonymous"
  }
  userScoreText = theTime + " " +
                  month + " " + day + " " + year + " " + 
                  userIntinput.value + ' ' + userScore + 'PTS'
  userHighScores.push(userScoreText)
  storeUserAndScore()
  location.reload();
})
}

getHighScores()
storeUserAndScore()

//WHEN I click the start button 
document.getElementById('startBtn').addEventListener('click', function quiz() {
  //a timer starts
  var countdown = 60
    countdownInterval = setInterval(function () {
    countdownEl.setAttribute('style','display:block;')
    countdownEl.textContent = "Time: " + countdown 
    countdown--
    //if countdown reaches zero
    if (countdown <= 0) {
      title.textContent = "You Ran Out Of Time!"
      gameOver();
    }
    }, 1000);
    //Ready, Set ....
    contents.textContent = '';
    start.remove()
    title.textContent = "Ready, Set, ..."
    //THEN I am presented with a question
    setTimeout(function() {
    title.textContent = questions[i].question;
    lineOne.appendChild(choiceOne);
    choiceOne.textContent = questions[i].choices[0];
    lineOne.appendChild(choiceTwo)
    choiceTwo.textContent = questions[i].choices[1];
    lineTwo.appendChild(choiceThree);
    choiceThree.textContent = questions[i].choices[2];
    lineTwo.appendChild(choiceFour);
    choiceFour.textContent = questions[i].choices[3];
    //get usersChoice
    document.getElementById('btnOne').onclick = whatWasChose
    document.getElementById('btnTwo').onclick = whatWasChose
    document.getElementById('btnThree').onclick = whatWasChose
    document.getElementById('btnFour').onclick = whatWasChose
  }, 1000); 
  
  //Runs everytime user clicks an answer
  function whatWasChose() {
      usersChoice =this.id;
      //When all questions are answered
      if (title.textContent === "What will the following code return: Boolean(10 > 9)") {
        (usersChoice === questions[i].answer) ? userScore++ : '';
        title.textContent = "You Made It!"
        gameOver();
      //When I answer correctly
      } else if (usersChoice === questions[i].answer){
      //add a point to score
      userScore++;
      //present next question
      i++;
      title.textContent = questions[i].question;
      choiceOne.textContent = questions[i].choices[0]; 
      choiceTwo.textContent = questions[i].choices[1];
      choiceThree.textContent = questions[i].choices[2];
      choiceFour.textContent = questions[i].choices[3];
      //WHEN I answer a question incorrectly
      } 
      else {
      //minus 10 seconds from timer
      countdown = countdown - 10;
      //present next question
      i++
      title.textContent = questions [i].question;
      choiceOne.textContent = questions[i].choices[0]; 
      choiceTwo.textContent = questions[i].choices[1];
      choiceThree.textContent = questions[i].choices[2];
      choiceFour.textContent = questions[i].choices[3]; 
      }
  } 
})
