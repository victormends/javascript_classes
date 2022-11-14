function table() {
    var s = document.getElementById('txtstart')
    var t = document.getElementById('seltab')
    if (s.value.length == 0) {
        window.alert('type a number')
    } else {
        var n = Number(s.value)
        let c = 1
        t.innerHTML = ''
        while (c <= 10) {
            let i = document.createElement('option') 
            i.text = `${n} x ${c} = ${n*c}` 
            t.appendChild(i)
            c++
    }
}
}
