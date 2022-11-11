function verify() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'pic')
    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        window.alert('[ERROR] verify your data!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var gender = ''
        if (fsex[0].checked) {
            gender = 'male'
            if (age >=0 && age <12) {
                img.setAttribute('src', 'm-baby.png')
            } else if (age >=12 && age <21) {
                img.setAttribute('src', 'm-young.png')
            } else if (age >=21 && age <=55) {
                img.setAttribute('src', 'm-adult.png')
            } else {
                img.setAttribute('src', 'm-old.png')
            }
        } else if (fsex[1].checked) {
            gender = 'female'
            if (age >=0 && age <12) {
                img.setAttribute('src', 'f-baby.png')
            } else if (age >=12 && age <21) {
                img.setAttribute('src', 'f-young.png')
            } else if (age >=21 && age <=55) {
                img.setAttribute('src', 'f-adult.png')
            } else {
                img.setAttribute('src', 'f-old.png')
            }
        } 
        res.innerHTML = `we've detected a ${gender} with the age of ${age} years.`
        res.appendChild(img)
    }
}