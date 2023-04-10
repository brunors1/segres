//Faz o calculo baseado nos checkboxes marcados
class Calculator {
    constructor(total) {
      this.check = document.getElementsByName("checkbox");
      this.total = total;
    }
    
    calcularTotal() {
      this.total = 500;
      for (var i = 0; i < this.check.length; i++) {
        if (this.check[i].checked) {
          this.total += parseInt(this.check[i].value);
        }
      }
      const opcoes = { style: 'currency', currency: 'BRL' };
      const valorFormatado = this.total.toLocaleString('pt-BR', opcoes);
      const inputValor = document.getElementById("totalValue");
      inputValor.innerText = ` ${valorFormatado}`
      localStorage.setItem("totalValor", valorFormatado);
    }
  }
  
  const valorAtualizado = new Calculator();
  
  class FormValue {
    constructor(formId, btnId) {
      this.form = document.querySelector(`#${formId}`);
      this.btn = document.querySelector(`#${btnId}`);
      this.btn.addEventListener('click', this.formSubmit.bind(this));
    }
  
    formSubmit(event) {
      event.preventDefault();
      const formData = new FormData(this.form);
      const formValues = Object.fromEntries(formData.entries());
      const formArray = Object.values(formValues);
      console.log(formArray);
    }
  }
  
  const formHandler = new FormValue('myForm', 'btn-submit');
  //Salva os dados pessoais
  const form = document.getElementById("myForm");
  const btnSubmit = document.getElementById("btn-submit");
  
  btnSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Verifica se todos os campos de input foram preenchidos
    if (form.elements["input"].value &&
        form.elements["input1"].value &&
        form.elements["input2"].value &&
        form.elements["input3"].value &&
        form.elements["input4"].value) {
        
      // Se todos os campos foram preenchidos, salva os valores no localStorage
      localStorage.setItem("nome", form.elements["input"].value);
      localStorage.setItem("cpf", form.elements["input1"].value);
      localStorage.setItem("telefone", form.elements["input2"].value);
      localStorage.setItem("email", form.elements["input3"].value);
      localStorage.setItem("valor_residencia", form.elements["input4"].value);
      
      Swal.fire({
        icon: 'success',
        title: 'Orçamento efetuado com sucesso!',
        text: 'Agradecemos o interesse, logo um especialista irá entrar em contato com você para falar sobre seu orçamento.',
      });
      
    } else {
      
      // Se algum campo não foi preenchido, exibe uma mensagem de erro
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Preencha todos os campos antes de enviar o formulário.',
      });
      
    }
  });