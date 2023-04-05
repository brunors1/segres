// Selecionando os elementos do formulário
const form = document.querySelector('.form_custom form');
const email = document.getElementById('inputEmail4');
const password = document.getElementById('inputPassword4');
const address = document.getElementById('inputAddress');
const address2 = document.getElementById('inputAddress2');
const city = document.getElementById('inputCity');
const state = document.getElementById('inputState');
const zip = document.getElementById('inputZip');
const checkbox = document.getElementById('gridCheck');
const registerBtn = document.getElementById('register');

// Desabilitando o botão de cadastro
registerBtn.disabled = true;

// Função para habilitar o botão de cadastro após marcar o checkbox
function enableRegisterBtn() {
  if (checkbox.checked) {
    registerBtn.disabled = false;
  } else {
    registerBtn.disabled = true;
  }
}

// Adicionando evento de clique no checkbox para chamar a função de habilitar botão de cadastro
checkbox.addEventListener('click', enableRegisterBtn);

// Função para preencher os campos de endereço através do campo CEP
async function fillAddressByZip() {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${zip.value}/json/`);
    const data = await response.json();
    if (response.status === 200) {
      address.value = data.logradouro;
      city.value = data.localidade;
      state.value = data.uf;
    }
  } catch (error) {
    console.error(error);
  }
}

// Adicionando evento de saída do campo CEP para chamar a função de preencher endereço
zip.addEventListener('blur', fillAddressByZip);

// Função para salvar os dados no localStorage
function saveData() {
  const data = {
    email: email.value,
    password: password.value,
    address: address.value,
    address2: address2.value,
    city: city.value,
    state: state.value,
    zip: zip.value,
  };
  localStorage.setItem('userData', JSON.stringify(data));
}

// Adicionando evento de envio do formulário para chamar a função de salvar dados
form.addEventListener('submit', (event) => {
  event.preventDefault();
  saveData();
  // Alerta de cadastro efetuado com sucesso
  Swal.fire({
    icon: 'success',
    title: 'Cadastro efetuado com sucesso!',
  });
});

// Login na página
const formLogin = document.querySelector('#formLogin');

formLogin.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const inputEmail = document.querySelector('#inputEmail');
  const inputPassword = document.querySelector('#inputPassword');
  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');
  // Validação do email e senha
  if (inputEmail.value === email.value && inputPassword.value === password.value) {
   // Alerta de login efetuado com sucesso
   Swal.fire({
    icon: 'success',
    title: 'Login efetuado com sucesso!',
  });
  } else {
    // Alerta de login inválido
    Swal.fire({
      icon: 'error',
      title: 'E-mail ou senha inválidos!',
    });
  }
});

//Recuperar Senha
const resetPasswordButton = document.getElementById('resetPassword');

resetPasswordButton.addEventListener('click', (event) => {
  event.preventDefault();
  Swal.fire({
    title: 'Esqueceu sua senha?',
    text: 'Digite o e-mail abaixo para receber um link de recuperação',
    input: 'email',
    showCancelButton: true,
    confirmButtonText: 'Enviar',
    cancelButtonText: 'Cancelar',
  });
});