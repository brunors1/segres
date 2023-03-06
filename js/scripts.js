class Calculator {
    constructor(total) {
        this.check = document.getElementsByName("checkbox");
        this.total = total;
    }
    // Calculando o total de acordo com o checkbox selecionado na página "Orcamento.html"
    calcularTotal() {
        this.total = 500;
        for (var i = 0; i < this.check.length; i++) {
            if (this.check[i].checked) {
                this.total += parseInt(this.check[i].value);//Somando o valor de cada checkbox ao total
            }
        }
        //Convertendo o valor final em moeda
        const opcoes = { style: 'currency', currency: 'BRL' };
        const valorFormatado = this.total.toLocaleString('pt-BR', opcoes);
        console.log(valorFormatado);

    }
}

const valorAtualizado = new Calculator();

//atividade 06 

class FormValue {
    // O construtor da classe recebe formId e btnId e busca os elementos do formulário e botão na página HTML
    constructor(formId, btnId) {
        this.form = document.querySelector(`#${formId}`);
        this.btn = document.querySelector(`#${btnId}`);
        // Adiciona um ouvinte de eventos ao botão que chama a função formSubmit() quando o botão é clicado
        this.btn.addEventListener('click', this.formSubmit.bind(this));
    }

    // A função formSubmit() é chamada quando o botão é clicado
    formSubmit(event) {
        // PreventDefault() evita que o envio do formulário atualize a página
        event.preventDefault();
        // FormData() coleta os dados do formulário
        const formData = new FormData(this.form);
        // entries() retorna um objeto contendo todos os campos do formulário e seus valores
        // fromEntries() converte o objeto iterável em um objeto
        const formValues = Object.fromEntries(formData.entries());
        // values() extrai apenas os valores do objeto formValues e cria um array com esses valores
        const formArray = Object.values(formValues);
        console.log(formArray);
    }
}
const formHandler = new FormValue('myForm', 'btn');
