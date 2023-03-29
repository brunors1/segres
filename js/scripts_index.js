function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

let inputSeuEmail = document.getElementById('input-seuEmail');
let buttonSeuEmail = document.getElementById('button-seuEmail');

buttonSeuEmail.addEventListener('click', () => {
    if (validarEmail(inputSeuEmail.value)) {
        Swal.fire({
            title: 'Sucesso!',
            icon: 'success',
            text: 'Cadastro efetuado.',
            confirmButtonText: 'Confirmar'
        })
    } else {
        Swal.fire({
            title: 'Erro',
            icon: 'error',
            text: 'Verifique o e-mail digitado',
            confirmButtonText: 'Confirmar'
        })
    }

})
