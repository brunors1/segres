//desafio 11

class formLogin {
    constructor(emailID, passwordID, submitID) {
        this.email = document.querySelector(`#${emailID}`);
        this.password = document.querySelector(`#${passwordID}`);
        this.submit = document.querySelector(`#${submitID}`);
        //adicionando evento de click ao botão de login, que chama a funcao pressSubmit (botao)
        this.submit.addEventListener('click', this.pressSubmit.bind(this));

        //chamando funcoes de validacao e funcao de converter os valores para JSON
        this.validation()
        this.convertJson()
    }

    pressSubmit(event) {
        //preventDefault sendo usado para impedir o carregamento da página ao apertar o botao de login
        event.preventDefault();

        //Atribuindo valores para email e senha e armazenando no localStorage
        localStorage.setItem('email', this.email.value);
        localStorage.setItem('senha', this.password.value);

        //chamando as funcoes novamente para que seja feita a atualizacao apos o click no botao de login 
        this.validation()
        this.convertJson()
    }

    validation() {
        //validando se o localStorage está vazio
        if (localStorage.getItem('email') && localStorage.getItem('senha') != null) {
            this.email.value = `${localStorage.getItem('email')}`;
            this.password.value = `${localStorage.getItem('senha')}`;
        }
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




