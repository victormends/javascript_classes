function count() {
    var start = document.getElementById('txtstart')
    var end = document.getElementById('txtend')
    var pace = document.getElementById('txtpace')
    var res = document.getElementById('res')
    if (start.value.length == 0 || end.value.length == 0 || pace.value.length == 0) {
        window.alert('[ERROR] data is missing!')
    } else {
        res.innerHTML = 'Counting: <b><b>'
        let s = Number(start.value)
        let e = Number(end.value)
        let p = Number(pace.value)
        if (p <= 0) {
            p = 1
        }
        if(s < e) {
            for(let c = s; c <= e; c+=p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
            res.innerHTML += `\u{1F6D1}`
        } else {
            for(let c = s; c >= e; c-=p) {
                res.innerHTML += ` ${c} \u{27A1}`
            }
            res.innerHTML += `\u{1F6D1}`
        }
    }
}
