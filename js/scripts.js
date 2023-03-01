//função para calcular os checkbox / total//
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