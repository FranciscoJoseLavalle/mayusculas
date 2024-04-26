const text = document.querySelector('#text');
const resultContainer = document.querySelector('.result');
const button = document.querySelector('button');
const success = document.querySelector('.success_container');

text.addEventListener('input', (e) => {
    resultContainer.textContent = e.target.value;
})

button.addEventListener('click', () => {
    navigator.clipboard.writeText(resultContainer.textContent.toUpperCase()).then(() => {
        success.classList.add('success')
        success.textContent = "Texto copiado satisfactoriamente."
        setTimeout(() => {
            success.classList.remove('success')
            success.textContent = '';
        },3000)
    })
})