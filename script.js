const catDiv = document.querySelector('div')
const catImg = document.querySelector('.cat')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')

const revealCat = () => {
    catDiv.classList.toggle('reveal')
    if (catDiv.classList.contains('reveal')) {
        btn1.style.backgroundColor = 'tomato'
        btn1.textContent = 'Hide cat'
    } else {
        btn1.style.backgroundColor = 'green'
        btn1.textContent = 'Reveal cat'
    }
}

const reset = () => {
    catDiv.classList.remove('reveal')
    btn1.style.backgroundColor = 'white'
    btn1.textContent = 'Start'
}

const darkMode = () => {
    document.body.classList.toggle('darkMode')
    if (document.body.classList.contains('darkMode')) {
        btn3.classList.add('darkBtn')
    } else {
        btn3.classList.remove('darkBtn')
    }
}

btn1.addEventListener('click', revealCat)
btn2.addEventListener('click', reset)
btn3.addEventListener('click', darkMode)