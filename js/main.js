const timer = document.querySelector('.timer');
let second = 0;
let control;


document.addEventListener('click',function(event){
    const element = event.target;

    if(element.classList.contains('start'))
    {
        clearInterval(control);
        addSecond()
        timer.classList.remove('red');
    }

    if(element.classList.contains('pause'))
    {
        clearInterval(control);
        timer.classList.add('red');
    }

    if(element.classList.contains('reset'))
    {
        clearInterval(control);
        second = 0
        timer.classList.remove('red');
        timer.innerHTML = '00:00:00';
    }

});

function addSecond()
{
    control = setInterval(function () {
        second++;
        timer.innerHTML = setHourSeconds(second);
    }, 1000)
}
function setHourSeconds(second) {
    const date_ = new Date(second * 1000);
    return date_.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}