$(document).ready(readyNow);


let buttonCounter = 0;
function createDiv(){
    let divDisplay = `
    <div id="generatedDiv" class="red">
        <p>${buttonCounter++}</p>
        <button class="swap">Swap</button>
        <button class="delete">Delete</button>
    </div>`
    
    $('#container').append(divDisplay);
}

function swapColors(){
    if($(this).parent().attr('class') == 'red'){
        $(this).parent().removeClass('red');
        $(this).parent().addClass('yellow');
    } else if ($(this).parent().attr('class') === 'yellow') {
        $(this).parent().removeClass('yellow');
        $(this).parent().addClass('red');
    }
}

function deleteDiv(){
    $(this).parent().remove();
}

function readyNow() {
    $('#generateDiv').on('click', createDiv);
    $('#container').on('click', '.swap', swapColors);
    $('#container').on('click', '.delete', deleteDiv);
}

