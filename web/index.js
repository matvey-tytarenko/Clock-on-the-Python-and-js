function Time()
{
    let time = new Date()

    document.getElementById('hour').innerHTML = time.getHours()
    document.getElementById('minutes').innerHTML = time.getMinutes()
    document.getElementById('seconds').innerHTML = time.getSeconds()

}

setInterval(Time, 1000)