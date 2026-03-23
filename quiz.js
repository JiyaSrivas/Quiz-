const questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Giraffe",correct:false},
            {text:"Elephant",correct:false}
        ]
    },
    {
        question:"What is the capital of India?",
        answers:[
            {text:"Mumbai",correct:false},
            {text:"New Delhi",correct:true},
            {text:"Kolkata",correct:false},
            {text:"Chennnai",correct:false}
        ]
    },
    {
        question:"Which planet is known as the Red Planet?",
        answers:[
            {text:"Mercury",correct:false},
            {text:"Jupiter",correct:false},
            {text:"Mars",correct:true},
            {text:"Earth",correct:false}
        ]
    },
    {
        question:"How many days are there in a leap year?",
        answers:[
            {text:"364",correct:false},
            {text:"367",correct:false},
            {text:"365",correct:false},
            {text:"366",correct:true}
        ]
    },
    {
        question:"Who invented the telephone?",
        answers:[
            {text:"Alexander Graham Bell",correct:true},
            {text:"Nikola Tesla",correct:false},
            {text:"Thomas Edison",correct:false},
            {text:"Isaac Newton",correct:false}
        ]
    },
    {
        question:"Which is the largest ocean in the world?",
        answers:[
            {text:"Artic Ocean",correct:false},
            {text:"Indian Ocean",correct:false},
            {text:"Atlantic Ocean",correct:false},
            {text:"Pacific Ocean",correct:true}
        ]
    },
    {
        question:"What is the chemical symbol of Gold?",
        answers:[
            {text:"Go",correct:false},
            {text:"Gd",correct:false},
            {text:"Au",correct:true},
            {text:"Ag",correct:false}
        ]
    },
    {
        question:"Which gas do plants absorb from the atmosphere?",
        answers:[
            {text:"Carbon Dioxide",correct:true},
            {text:"Nitrogen",correct:false},
            {text:"Oxygen",correct:false},
            {text:"Helium",correct:false}
        ]
    },
    {
        question:"What is the hardest natural substance?",
        answers:[
            {text:"Gold",correct:false},
            {text:"Aluminium",correct:false},
            {text:"Diamond",correct:true},
            {text:"Bauxite",correct:false}
        ]
    },
    {
        question:"Which country hosted the first modern Olympic Games?",
        answers:[
            {text:"Germany",correct:false},
            {text:"Greece",correct:true},
            {text:"France",correct:false},
            {text:"China",correct:false}
        ]
    },
    {
        question:"What is the smallest bone in the human body?",
        answers:[
            {text:"Femur",correct:false},
            {text:"Stapes",correct:true},
            {text:"Tibia",correct:false},
            {text:"Radius",correct:false}
        ]
    },
    {
        question:"What is the SI unit of electric current?",
        answers:[
            {text:"Volt",correct:false},
            {text:"Ampere",correct:true},
            {text:"Watt",correct:false},
            {text:"ohm",correct:false}
        ]
    },
    {
        question:"Which country is known as the Land of the Rising Sun?",
        answers:[
            {text:"Nepal",correct:false},
            {text:"Thailand",correct:false},
            {text:"China",correct:false},
            {text:"Japan",correct:true}
        ]
    },
    {
        question:"Who wrote the national anthem of India?",
        answers:[
            {text:"Subhas Chandra Bose",correct:false},
            {text:"Rabindranath Tagore",correct:true},
            {text:"Bankim Chandra Chatterjee",correct:false},
            {text:"Sarojini Naidu",correct:false}
        ]
    },






];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;


function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();


}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question


    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    })
}
function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    selectedButton=e.target;
    const isCorrect=selectedButton.dataset.correct ==="true";
    if (isCorrect){
        selectedButton.classList.add("correct")
        score++

    }else{
        selectedButton.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button=>{
        if (button.dataset.correct==="true"){
            button.classList.add("correct");
            

        }
        button.disabled = true;;
    });
    nextButton.style.display="block"

}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"

}

function handleNextButton(){
    currentQuestionIndex++
    if (currentQuestionIndex<questions.length){
        showQuestion()
    }else{
        showScore()
    }
}


nextButton.addEventListener("click",()=>{
    if (currentQuestionIndex<questions.length){
        handleNextButton()
    }else{
        startQuiz();
    }

})
startQuiz()