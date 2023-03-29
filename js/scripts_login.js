<<<<<<< HEAD
class FormLogin {
    constructor(emailId, passwordId, submitId) {
      this.emailInput = document.querySelector(`#${emailId}`);
      this.passwordInput = document.querySelector(`#${passwordId}`);
      this.submitButton = document.querySelector(`#${submitId}`);
  
      // Adiciona evento de clique ao botão de login
      this.submitButton.addEventListener('click', this.handleLogin.bind(this));
    }
  
    handleLogin(event) {
      event.preventDefault();
  
      const email = this.emailInput.value;
      const password = this.passwordInput.value;
  
      if (!email || !password) {
        Swal.fire({
            icon: 'warning',
            title: 'Por favor, preencha os campos de e-mail e senha.',
          })
        return;
      }
  
      try {
        localStorage.setItem('email', email);
        localStorage.setItem('senha', password);
        this.convertToJson();
  
        // Alerta de login efetuado com sucesso
        Swal.fire({
            icon: 'success',
            title: 'Login efetuado com sucesso!',
          })
      } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Não foi possível salvar o usuário e a senha.',
          })
      }
    }
  
    convertToJson() {
      const email = localStorage.getItem('email');
      const senha = localStorage.getItem('senha');
  
      const userData = { email, senha };
      const jsonData = JSON.stringify(userData);
  
      console.log(jsonData);
    }
  }
  
  const form = new FormLogin('inputEmail', 'inputPassword', 'submitButton');
  
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
  
=======
//desafio 11

class formLogin {
    constructor(emailID, passwordID, submitID) {
        this.email = document.querySelector(`#${emailID}`);
        this.password = document.querySelector(`#${passwordID}`);
        this.submit = document.querySelector(`#${submitID}`);
        //adicionando evento de click ao botão de login, que chama a funcao pressSubmit (botao)
        this.submit.addEventListener('click', this.pressSubmit.bind(this));

        //chamando funcoes de validacao e funcao de converter os valores para JSON
        // localStorage.getItem('email') && localStorage.getItem('senha') != null ? this.atualizarValores() : alert("Sem usuário e senha");

        this.convertJson()
    }

    pressSubmit(event) {
        //preventDefault sendo usado para impedir o carregamento da página ao apertar o botao de login
        event.preventDefault();

        //Atribuindo valores para email e senha e armazenando no localStorage
        localStorage.setItem('email', this.email.value);
        localStorage.setItem('senha', this.password.value);

        //chamando as funcoes novamente para que seja feita a atualizacao apos o click no botao de login 
        this.convertJson()
    }

    atualizarValores() {
        this.email.value = `${localStorage.getItem('email')}`,
            this.password.value = `${localStorage.getItem('senha')}`
    }

    //funcao para transformar os dados do localStorage em um JSON
    convertJson(dadosAcesso) {
        let arrayDados = [
            { email: `${localStorage.getItem('email')}` },
            { senha: `${localStorage.getItem('senha')}` }
        ]
        dadosAcesso = JSON.stringify(arrayDados);
        console.log(dadosAcesso);
    }
}
//chamando a classe e definindo o valor dos parametros (ids)
const dataLogin = new formLogin('inputEmail', 'inputPassword', 'submitButton');

const resetPassword = document.getElementById('resetPassword');

resetPassword.addEventListener('click', (event) => {
    event.preventDefault();
    Swal.fire({
        title: 'Esqueceu sua senha?',
        text: 'Digite o e-mail abaixo para receber um link de recuperação',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Cancelar'
    }).then()

})
>>>>>>> c56a770f6fe7bb34020f602c794733e30b1a1890
