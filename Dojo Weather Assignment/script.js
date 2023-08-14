function cityWeather() {
    alert('Loading weather report...')
}

function convertTemp(degrees) {
    let currentHigh = document.querySelectorAll('.high')
    let currentLow = document.querySelectorAll('.low')
    if(degrees.value == "°F"){
        for (i = 0; i < currentHigh.length; i++) {
            currentHigh[i].innerText = ((Number(currentHigh[i].innerText) * 9 / 5) + 32)
        }
        for (j = 0; j < currentLow.length; j++){
            currentLow[j].innerText = ((Number(currentLow[j].innerText) * 9 / 5) + 32)
        }
    }
    else {
        for (i = 0; i < currentHigh.length; i++) {
            currentHigh[i].innerText = Math.floor((Number(currentHigh[i].innerText) -32) * 5/9)
        }
        for (j = 0; j < currentLow.length; j++){
            currentLow[j].innerText = Math.floor((Number(currentLow[j].innerText) -32 ) * 5/9)
        }
    }
}


function removePolicy(element) {
    element = document.querySelector('#cookie')
    element.remove()
}
