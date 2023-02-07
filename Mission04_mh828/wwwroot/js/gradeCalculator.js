$("#btnCalculate").click(function () {
    // Pulling data from form and Initializing variables
    var percAssignments = parseFloat($("#percAssignments").val());
    percAssignments = percAssignments * 0.5;
    var percGP = parseFloat($("#percGP").val());
    percGP = percGP * 0.1;
    var percQuizzes = parseFloat($("#percQuizzes").val());
    percQuizzes = percQuizzes * 0.1;
    var percMidterm = parseFloat($("#percMidterm").val());
    percMidterm = percMidterm * 0.1;
    var percFinal = parseFloat($("#percFinal").val());
    percFinal = percFinal * 0.1;
    var percIntex = parseFloat($("#percIntex").val());
    percIntex = percIntex * 0.1;

    // Creating total percentage variable and returnString
    var total = percAssignments + percGP + percQuizzes + percMidterm + percFinal + percIntex;
    var returnString = "";

    // Letter grade logic and associated returnString
    if (total >= 94) {
        returnString = "Awesome! You have an A!";
    }
    else if (total >= 90) {
        returnString = "Awesome! You have an A-!";
    }
    else if (total >= 87) {
        returnString = "Nice! You have a B+!";
    }
    else if (total >= 84) {
        returnString = "Nice! You have a B!";
    }
    else if (total >= 80) {
        returnString = "Nice! You have a B-!";
    }
    else if (total >= 77) {
        returnString = "Careful! You have a C+!";
    }
    else if (total >= 74) {
        returnString = "Careful! You have a C!";
    }
    else if (total >= 70) {
        returnString = "Careful! You have a C-!";
    }
    else if (total >= 67) {
        returnString = "You'd better pick it up! You have a D+!";
    }
    else if (total >= 64) {
        returnString = "You'd better pick it up! You have a D!";
    }
    else if (total >= 60) {
        returnString = "You'd better pick it up! You have a D-!";
    }
    else {
        returnString = "You're failing! Talk to Professor Hilton ASAP!";
    }

    // Adding Final Grade at the end of returnString
    returnString += " (Final Grade: " + total + "%)";

    // Alerting to Screen
    alert(returnString);
})