let root = document.getElementById('root')
let input = document.createElement('input')
let button = document.createElement('button')
let ul =  document.createElement('ul')

root.append(input)
root.append(button)
root.append(ul)

button.textContent = 'Click me'

button.onclick = function() {
    if (input.value) {
        // input.style = null
        // if (input.getAttribute('style')) input.removeAttribute('style')
        input.classList.remove('error')
        let li = document.createElement('li')
        ul.append(li)
        li.textContent = input.value
        input.value = ""
    } 
    else {
        // alert('Нет текста')
        // input.style.borderColor = 'red'
        input.classList.add('error')
    }
}