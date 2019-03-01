function gradeTotal() {

    var students = 10;
    var currRow = 1;
    var finalCell = 1;

    var counter = 0;

    do {

        var total = 0;

        var row = document.getElementsByClassName("gr" + currRow);
        var rowLength = row.length;
        var totalRow = document.getElementById("final" + finalCell);
        console.log("row length is: " + rowLength);

        for (var i = 0; i < rowLength; i++) {

            if (isNaN(row[i].value) | row[i].value == "" | row[i].value == "-0" | row[i].value < 0 | row[i].value > 100) {
                row[i].style.backgroundColor = "yellow";
                row[i].value = "-"
                counter++;
            } else {
                if (row[i].style.backgroundColor == "yellow") {
                    row[i].style.backgroundColor = "white";
                }
                total += parseInt(row[i].value);

            }

            //total += currAssignmentGrade(currRow, i, counter);
            console.log("running total: " + total);
        }

        total /= rowLength;
        console.log("unrounded total is: " + total);
        total = Math.round(total);
        console.log("rounded total is: " + total);

        totalRow.innerHTML = total + "%";
        totalRow.style = "text-align: right;";
        if (total < 40) {
            totalRow.style.backgroundColor = "red";
            totalRow.style.color = "white";
        }

        if (students > 1) {
            console.log("----------NEXT STUDENT----------");
        }
        students--;
        currRow++;
        finalCell++;
    }
    while (students >= 1 && currRow <= 10 && finalCell <= 10);
    console.log("Unsubmitted assignments: " + counter);
    document.getElementById("counter").innerHTML = counter;

    buttonClicked();
}

function buttonClicked() {
    var currRow = 1;

    do {

        var row = document.getElementsByClassName("gr" + currRow);
        var rowLength = row.length;

        for (var i = 0; i < rowLength; i++) {
            row[i].addEventListener("change", gradeTotal);
        }
        currRow++;
    }
    while (currRow <= 10);
}
