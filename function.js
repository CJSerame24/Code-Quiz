//Variables
var body = document.querySelector('body');
var countdownEl = document.querySelector('#countdown');
var title = document.getElementById("title");
var container = document.getElementById("container");
var contents = document.getElementById("contents");
var lineOne = document.querySelector('.lineOne');
var lineTwo = document.querySelector('.lineTwo');
var start = document.getElementById('startBtn');
var userScore = 0;
var userScoreText;
var i = 0;
var countdownEl;
var highScoreList = document.getElementsByClassName('high_score_list');

//Creates the choice buttons
var choiceOne = document.createElement('button')
    choiceOne.setAttribute("class", "answer",)
    choiceOne.setAttribute("id", "btnOne")
    choiceOne.setAttribute("style", "margin-top:10px; margin-left:5px;")
var choiceTwo = document.createElement('button')
    choiceTwo.setAttribute("class","answer",)
    choiceTwo.setAttribute("id","btnTwo")
    choiceTwo.setAttribute("style","margin-top:10px; margin-left:5px;")
var choiceThree = document.createElement('button')
    choiceThree.setAttribute("class","answer",)
    choiceThree.setAttribute("id","btnThree")
    choiceThree.setAttribute("style","margin-top:10px; margin-left:5px;")
var choiceFour = document.createElement('button')
    choiceFour.setAttribute("class","answer",)
    choiceFour.setAttribute("id","btnFour")
    choiceFour.setAttribute("style","margin-top:10px; margin-left:5px;")
// Creates the score submit form
var scoreSubmit = document.createElement("form")
    scoreSubmit.setAttribute("type", "submit")
    scoreSubmit.setAttribute("id", "scoreSubmit")
//Creaytes the user intial input box
var userInput = document.createElement('input')
    userInput.setAttribute("type", "text")
    userInput.setAttribute("style", "width:160px;")
    userInput.setAttribute("placeholder", "Your Name")
    userInput.setAttribute("id", "userInput")
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

//creates elements for user score history overlay
var highScoreListBox = document.createElement("div")
    highScoreListBox.setAttribute("class", "high_score_list")
var scoreTitle = document.createElement('h2')
    scoreTitle.setAttribute('class', 'scoreTitle')
    scoreTitle.textContent = "User Score History"
var userScoreList = document.createElement("ul")
    userScoreList.setAttribute('class', "userScoreList")
var fadeout = document.createElement("div")
    fadeout.setAttribute('Id', 'fadeOut')
var viewHighScores = document.getElementById('highScores')
var exitBtn = document.createElement('button')
    exitBtn.setAttribute('class', 'exitBtn')
    exitBtn.setAttribute('id', 'exitBtn')
    exitBtn.textContent = "X"
var clearScoreListBtn = document.createElement('button')
    clearScoreListBtn.setAttribute('id', 'clearScoreBtn')
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