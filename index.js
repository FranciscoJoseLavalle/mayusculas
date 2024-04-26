const textArea = document.querySelector('#text');
const result = document.querySelector('.result');
const copy_button = document.querySelector('.copy_text');
const success = document.querySelector('.success_container');
const types = document.querySelectorAll('.type');

let text = "";

textArea.addEventListener('input', (e) => {
    text = e.target.value;
})

types.forEach(element => {
    element.addEventListener('click', () => {
        switch (element.role) {
            case 'mayuscula':
                text = text.toUpperCase();
                result.textContent = text;
                break;
            case 'minuscula':
                text = text.toLowerCase();
                result.textContent = text;
                break;
            default:
                break;
        }
    })
})

copy_button.addEventListener('click', () => {
    navigator.clipboard.writeText(text).then(() => {
        success.classList.add('success')
        success.textContent = "Texto copiado satisfactoriamente."
        setTimeout(() => {
            success.classList.remove('success')
            success.textContent = '';
        }, 3000)
    })
})