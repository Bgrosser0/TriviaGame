function check() {

var question1 = document.quiz.question1.value;

var correct = 0;
var incorrect = 0;

    if (question1 == "4") {
        correct++;
    }

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("numberCorrect").innerHTML = "Correct Answers:" + correct;
document.getElementById("numberIncorrect").innerHTML = "Incorect Answers:" + incorrect;
}