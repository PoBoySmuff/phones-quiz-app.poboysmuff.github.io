/*TODO
    create function stubs and handler (handleQuizApp)
        startQuiz() when begin is pressed
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



function handleQuizApp() {
    startQuiz();
    handleQuestions();
    handleSelectOption();
    restartQuizz();
}

$(handleQuizApp); //callback function