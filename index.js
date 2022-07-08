var numberSelected = ''


function changeColor(number){
    numberSelected = number
    let listNumbers = document.querySelectorAll('.div-numbers-item')
    for (let index = 0; index < listNumbers.length; index++) {
        if(listNumbers[index].textContent == number)
            listNumbers[index].style.backgroundColor = "hsl(217, 12%, 63%)";
        else
        listNumbers[index].style.backgroundColor = "hsla(216, 12%, 54%, 0.24)";
    }
    
}

function callToAction(){
    let element = document.getElementById("rating-selected")
    element.textContent= ' '+numberSelected+' '
    document.getElementById("div-first").style.display='none'
    document.getElementById("div-end").style.display='flex'

}