const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector(".login_form");

const validateInput = ({ target }) => { // target é o input
    if (target.value.length > 2){
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');
    
}

const handleSubmit = (event) => {
    event.preventDefault(); // bloquear compartamento padrão do formulário

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
}


input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);