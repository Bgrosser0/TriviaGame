var number = 6;
var intervalId;

function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {

    number--;

    $("#show-number").html("<h2>" + number + "</h2>" + "<h2>" + "Seconds Left" + "</h2>");

    if (number === 0) {

        check();
    }
}

run();