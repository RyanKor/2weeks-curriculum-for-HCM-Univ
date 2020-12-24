const inputVal = document.getElementById('onInput')

function callBackFunc(e){
    console.log(e)
    // console.log(e.type)
    // console.log(e.target.value)
}

//keypress is only in English, keydown, keyup
inputVal.addEventListener('keypress', callBackFunc)