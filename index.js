/*TODO
    create function stubs and handler (handleQuizApp)
        startQuiz() when begin is pressed (renderAQuestion)
        handleQuestions() checks if at end of questions list - if not, render new question
        handleSelectOption() to verify answers
        restartQuiz() at the end, brings us back to beginning
    implement each function
        startQuiz needs to hide start screen and load first question
        handleQuestions needs to check if at end of list and render next question
            renderQuestion() function needed
        handleSelectOption needs to give user feedback whether question is right or wrong
          updates currentQuestion and score. Called when #submit is pressed
        restartQuiz simply brings us to start menu, resetting score and questions-list to beginning


*/

function renderQuestion() {
    $(".question-form").removeClass("invisible");
    $(".right-answer").addClass("invisible");
    $(".wrong-answer").addClass("invisible");
    $(".question-and-score").removeClass("invisible");
    $(".right-or-wrong").addClass("invisible");
    
    if (STORE.currentQuestion >= STORE.questions.length) {
        finalScore();
    } else {
    let question = STORE.questions[STORE.currentQuestion].question;
    $(".question").text(question);
    let answerList = STORE.questions[STORE.currentQuestion].options;
    $("#answer-1-label").text(answerList[0]);
    $("#answer-1").val(answerList[0]);
    $("#answer-2-label").text(answerList[1]);
    $("#answer-2").val(answerList[1]);
    $("#answer-3-label").text(answerList[2]);
    $("#answer-3").val(answerList[2]);
    $("#answer-4-label").text(answerList[3]);
    $("#answer-4").val(answerList[3]);
    }
    $(".question-form").on("click","#next-question", function(event) {
        event.stopPropagation();
        event.preventDefault();
        console.log("am i here twice");
        
        
        verifyQuestion();
        nextQuestion();
        
    });
    
}

function nextQuestion() {
    STORE.currentQuestion++;
    $(".right-or-wrong").on("click", "#next-2", function(event) {
        event.stopPropagation();
        event.preventDefault();
        
        renderQuestion();
        
    });
}

function verifyQuestion() {
    let correctAnswer = STORE.questions[STORE.currentQuestion].answer;
    let radioChecked = $("input[name='question-answer']:checked").val();
    /*if (!radioChecked) {
        //throw error
    }*/
    //let radioAnswer = $(""
    console.log(radioChecked);
    if (radioChecked.toString() === correctAnswer) {
        STORE.score++;
        
        rightAnswer(); 
        console.log("hi");
        
    } else {
        
        wrongAnswer();
        console.log("hi-wrong");
        
    } 
    updateScore();
    return;
    
    //right/wrong answer hides the form and adds a page with the result
    
    //console.log(STORE.currentQuestion);
    /*$(".right-or-wrong").on("click", "#next-2", function(event) {
        event.stopPropagation();
        event.preventDefault();
        event.stopPropagation();
        
        renderQuestion();
        
    });*/
}

function updateScore() {
    $(".new-score").html(`New Score: ${STORE.score}`);
    $(".question-and-score").html(`Question: ${STORE.currentQuestion+1}
    <br/><br/> Score: ${STORE.score}`);
    console.log("here again");
        //STORE.currentQuestion++;
}

function rightAnswer() {
    //$(".question-form").addClass("invisible");
    $(".question-form").addClass("invisible");
    $(".right-answer").removeClass("invisible");
    $(".right-or-wrong").removeClass("invisible");
    $(".question-and-score").addClass("invisible");
    

}

function wrongAnswer() {
    $(".question-form").addClass("invisible");
    $(".right-or-wrong").removeClass("invisible");
    $(".wrong-answer").removeClass("invisible");
    $(".question-and-score").addClass("invisible");
    
}

function startQuiz() {
    $("#begin").on("click", function(event) {
        $(".intro-screen").addClass("invisible");
        $(".question-form").removeClass("invisible");
        $(".question-and-score").html(`Question: ${STORE.currentQuestion+1}
        <br/><br/> Score: ${STORE.score}`);
        $(".question-and-score").removeClass("invisible");
        renderQuestion();
    });
};

function handleQuizApp() {
    startQuiz();
    handleQuestions();
    handleSelectOption();
    restartQuiz();
}

$(handleQuizApp); //callback function