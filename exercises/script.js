
function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var pic = window.document.getElementById('pic')
    var date = new Date()
    // var hour = date.getHours() + ':' + date.getMinutes();
var hour=11
    if (hour < 12) {
        msg.innerHTML = `Now we are at ${hour}am`
    } else {
        msg.innerHTML = `Now we are at ${hour}pm`
    } 

    if (hour >= 0 && hour < 12) {
        pic.src='pic-morning.png'
        document.body.style.background = '#d8d8d6'
    } else if (hour >= 12 && hour <= 18) {
        pic.src='pic-afternoon.png'
        document.body.style.background = '#b0d4ec'
    } else {
        pic.src='pic-night.png'
        document.body.style.background = '#183235'
    }
    
}


