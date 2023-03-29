//Capturar os dados do formulário e armazenar no localStorage, em seguida enviar alert confirmando o envio do formulário.

function enviarFormulario() {
  const formulario = {
    nome: document.getElementById('nome_form').value,
    email: document.getElementById('email_form').value,
    solicitacao: document.getElementById('solicitacao_form').value,
    comentario: document.getElementById('comentario_form').value
  };

  localStorage.setItem('formulario', JSON.stringify(formulario));

  Swal.fire({
    title: 'Formulário enviado com sucesso!',
    icon: 'success',
    confirmButtonText: 'OK'
  });
}

const formularioSalvo = JSON.parse(localStorage.getItem('formulario'));

if (formularioSalvo) {
  document.getElementById('nome_form').value = formularioSalvo.nome;
  document.getElementById('email_form').value = formularioSalvo.email;
  document.getElementById('solicitacao_form').value = formularioSalvo.solicitacao;
  document.getElementById('comentario_form').value = formularioSalvo.comentario;
}