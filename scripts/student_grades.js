function gradeTotal() {

    var students = 10;
    var currRow = 1;
    var finalRow = 1;

    do {

        var total = 0;
        var row1Length = document.getElementsByClassName("gr" + currRow).length;
        console.log("row length is: " + row1Length);

        for (var i = 0; i < row1Length; i++) {

            var row1 = document.getElementsByClassName("gr" + currRow)[i].value;

            /*if (isNaN(row1)) {
                row1 = 0;
            } else {
                row1 = parseInt(row1);
            }*/

            row1 = parseInt(row1);
            total += row1;
            console.log("running total: " + total);
        }

        total /= row1Length;
        console.log("unrounded total is: " + total);
        total = Math.round(total);
        console.log("rounded total is: " + total);
        if (isNaN(total)) {
            alert("Assignment grade records incomplete - please ensure grades for all assignments are entered.");
            return;
        } else {
            document.getElementById("final" + finalRow).innerHTML = total + "%";
            document.getElementById("final" + finalRow).style="text-align: right;";
        }

        if (students > 1) {
            console.log("----------NEXT STUDENT----------");
        }
        students--;
        currRow++;
        finalRow++;
    }
    while (students >= 1 && currRow <= 10 && finalRow <= 10);
}
