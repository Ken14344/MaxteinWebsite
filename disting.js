function checkAnswers() {
    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2").value;
    var q3 = document.getElementById("q3").value;
    var q4 = document.getElementById("q4").value;
    var q5 = document.getElementById("q5").value;
    var score = 0;

    if (q1.toLowerCase() === "1/3") {
        score++;
    }

    if (q2.toLowerCase() === "0.2") {
        score++;
    }

    if (q3.toLowerCase() === "0.167") {
        score++;
    }

    if (q4.toLowerCase() === "0.724") {
        score++;
    }

    if (q5.toLowerCase() === "1/6") {
        score++;
    }

    if (score === 5) {
        swal("Congratulations!", "You got all the answers correct!", "success");
    } else {
        swal("Oops!", "You have " + score + " correct answer(s). Please try again.", "error");
    }
}
