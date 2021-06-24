
// var timer = moment().format('MMMM Do YYYY, h:mm:ss a');
// timer.innerHtml = moment;

// console.log(moment)
var timeDisplayEl = document.querySelector('#moment-js')


function displayTimer() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

setInterval(displayTimer, 1000);