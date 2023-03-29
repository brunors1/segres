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
  