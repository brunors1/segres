// Cadastro do usuário

const emailInput = document.querySelector('#cadastro-form__email');
const senhaInput = document.querySelector('#cadastro-form__senha');
const enderecoInput = document.querySelector('#cadastro-form__endereço');
const endereco2Input = document.querySelector('#cadastro-form__endereço2');
const cidadeInput = document.querySelector('#cadastro-form__cidade');
const estadoInput = document.querySelector('#cadastro-form__estado');
const cepInput = document.querySelector('#cadastro-form__cep');
const infoVerdadeirasInput = document.querySelector('#cadastro-form__info-verdadeiras');

// função para salvar dados do formulário no LocalStorage
function salvarDados() {
  const dados = {
    email: emailInput.value,
    senha: senhaInput.value,
    endereco: enderecoInput.value,
    endereco2: endereco2Input.value,
    cidade: cidadeInput.value,
    estado: estadoInput.value,
    cep: cepInput.value,
    infoVerdadeiras: infoVerdadeirasInput.checked
  };

  localStorage.setItem('dados', JSON.stringify(dados));
}

// função para carregar dados do formulário do LocalStorage
function carregarDados() {
  const dados = JSON.parse(localStorage.getItem('dados'));

  if (dados) {
    emailInput.value = dados.email;
    senhaInput.value = dados.senha;
    enderecoInput.value = dados.endereco;
    endereco2Input.value = dados.endereco2;
    cidadeInput.value = dados.cidade;
    estadoInput.value = dados.estado;
    cepInput.value = dados.cep;
    infoVerdadeirasInput.checked = dados.infoVerdadeiras;
  }
}

// evento para salvar dados do formulário quando o botão for clicado
const botaoCadastro = document.getElementById('cadastro-form__button-cadastrese');
botaoCadastro.addEventListener('submit-cadastro', (event) => {
  event.preventDefault();
  salvarDados();
});

// carrega dados do formulário quando a página é carregada
carregarDados();
