$("#btnCalculate").click(function () {
    // Checking for empty inputs
    let cont = true;
    if ($("#percAssignments").val() == "" || $("#percGP").val() == "" || $("#percQuizzes").val() == "" || $("#percMidterm").val() == "" || $("#percFinal").val() == "" || $("#percIntex").val() == "") {
        cont = false;
    }

    if (cont == false) {
        alert("Please enter numbers between 0 and 100")
    }
    else {
        // Pulling data from form and Initializing variables
        var percAssignments = parseFloat($("#percAssignments").val());
        var percGP = parseFloat($("#percGP").val());
        var percQuizzes = parseFloat($("#percQuizzes").val());
        var percMidterm = parseFloat($("#percMidterm").val());
        var percFinal = parseFloat($("#percFinal").val());
        var percIntex = parseFloat($("#percIntex").val());

        if (percAssignments > 100 || percAssignments < 0) {
            cont = false;
        }
        else if (percGP > 100 || percGP < 0) {
            cont = false;
        }
        else if (percQuizzes > 100 || percQuizzes < 0) {
            cont = false;
        }
        else if (percMidterm > 100 || percMidterm < 0) {
            cont = false;
        }
        else if (percFinal > 100 || percFinal < 0) {
            cont = false;
        }
        else if (percIntex > 100 || percIntex < 0) {
            cont = false;
        }

        if (cont == false) {
            alert("Please enter numbers between 0 and 100")
        }
        else {
            percAssignments = percAssignments * 0.5;
            percGP = percGP * 0.1;
            percQuizzes = percQuizzes * 0.1;
            percMidterm = percMidterm * 0.1;
            percFinal = percFinal * 0.1;
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
        }
    }
})