
function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var pic = window.document.getElementById('pic')
    var date = new Date()
    var hour = date.getHours() + ':' + date.getMinutes();

    if (hour < 12) {
        msg.innerHTML = `Now we are at ${hour}am`
    } else {
        msg.innerHTML = `Now we are at ${hour}pm`
    } 

    if (hour < 12) {
        img.src='pic-morning.png'
    } else if (hour < 18) {
        img.src='pic-afternoon.png'
    } else {
        img.src='pic-night.png'
    }
    
}


