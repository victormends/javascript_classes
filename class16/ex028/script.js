let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flist')
let res = document.querySelector('div#res')
let values = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
    return true
} else {
    return false
}
}

function add() {
    if(isNum(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `value ${num.value} added`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('invalid value or already in the list')
    }
    num.value = ''
    num.focus()
    if (values.length == 0) {
        window.alert('add values before finalizing')
    } else {
        let tot = values.length
        let big = values[0]
        let small = values[0]
        let sum = 0
        let mean = 0
        for(let pos in values) {
            sum += values[pos]
            if (values[pos] > big)
            big = values[pos]
            if (values[pos] < small)
            small = values[pos]
        }
        mean = sum / tot
        res.innerHTML = ''
        res.innerHTML += `<p>there are ${tot} numbers in this list</p>`
        res.innerHTML += `<p>the biggest value is ${big}</p>`
        res.innerHTML += `<p>the smallest value is ${small}</p>`
        res.innerHTML += `<p>the sum of all the values is ${sum}</p>`
        res.innerHTML += `<p>the mean is ${mean}</p>`

}

    }

    let tot = values.length
    let big = values[0]
    let small = values[0]
    let sum = 0
    let mean = 0
    for(let pos in values) {
        sum += values[pos]
        if (values[pos] > big)
        big = values[pos]
        if (values[pos] < small)
        small = values[pos]
    }
    mean = sum / tot
    res.innerHTML = ''
    res.innerHTML += `<p>there are ${tot} numbers in this list</p>`
    res.innerHTML += `<p>the biggest value is ${big}</p>`
    res.innerHTML += `<p>the smallest value is ${small}</p>`
    res.innerHTML += `<p>the sum of all the values is ${sum}</p>`
    res.innerHTML += `<p>the mean is ${mean}</p>`



