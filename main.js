function check() {

    var question1 = "Eight";
    var question2 = "Nine";
    var question3 = "Seven";
    var correct = 0;
    var incorrect = 0;

    var questionBox = document.getElementById("question1Box");
        var answer1 = document.getElementById("answer1");
        var answer2 = document.getElementById("answer2");
        var answer3 = document.getElementById("answer3");
       

    var choice1 = $("#answer1").val()
    var choice2 = $("#answer2").val()
    var choice3 = $("#answer3").val()
    var choice4 = $("#answer4").val()

    

    

        if (question1 === choice1) {
            correct++;
        }
        else if (question1 != choice1) {
            incorrect++;
        };

        if (question2 === choice2) {
            correct++;
        }
        else if (question2 != choice2) {
            incorrect++;
        };

        if (question3 === choice3) {
            correct++;
        }
        else if (question3 != choice3) {
            incorrect++;
        };
        
       
    
// WHEN YOU'VE COMPLETED THE QUIZ...    

    // THE QUIZ AND TIMER DIVS DISAPPEAR
    document.getElementById("timerDisplayBox").style.visibility = "hidden";
    document.getElementById("questionDisplayBox").style.visibility = "hidden";

    // THE RESULT DIV APPEARS
    document.getElementById("results").style.visibility = "visible";

    document.getElementById("numberCorrect").innerHTML = "Correct Answers: " + correct;
    document.getElementById("numberIncorrect").innerHTML = "Incorect Answers: " + incorrect;
    };

    