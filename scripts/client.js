$(document).ready(readyNow);

function createDiv() {
    $('#container').append(`<div></div>`);
}











function readyNow() {
    $('#generateDiv').on('click', createDiv);
}

