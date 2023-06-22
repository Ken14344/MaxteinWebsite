function checkAnswers() {
    var q6 = document.getElementById("q6").value;
    var q7 = document.getElementById("q7").value;
    var q8 = document.getElementById("q8").value;
    var q9 = document.getElementById("q9").value;
    var q10 = document.getElementById("q10").value;
    var score = 0;

    if (q6.toLowerCase() === "1/6") {
        score++;
    }

    if (q7.toLowerCase() === "0.39") {
        score++;
    }

    if (q8.toLowerCase() === "3/51") {
        score++;
    }

    if (q9.toLowerCase() === "5/12") {
        score++;
    }

    if (q10.toLowerCase() === "0.40" || "40%") {
        score++;
    }

    if (score === 5) {
        swal("Congratulations!", "You got all the answers correct!", "success");
    } else {
        swal("Oops!", "You have " + score + " correct answer(s). Please try again.", "error");
    }
}
