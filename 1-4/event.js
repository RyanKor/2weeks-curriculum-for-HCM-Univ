const clickMe = document.getElementById('click-me')

function onClick (){
    alert('This Is Click Event(Alert)')

    confirm('This Is Also Click Event(Confirm/Cancel)')
}

clickMe.addEventListener('click', onClick)