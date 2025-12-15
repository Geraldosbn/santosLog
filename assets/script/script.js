const form = document.querySelector('#form');
const espacoSelect = document.querySelector('#espacoCarga');
const kmInput = document.querySelector('#kmPercorrido');
const btnCalcular = document.querySelector('#btnCalcular');

function atualizarBotao() {
  const validoSelect = espacoSelect.value && espacoSelect.value !== 'select';
  const validoKm = kmInput.value && kmInput.value.trim() !== '';
  btnCalcular.disabled = !(validoSelect && validoKm);
  const resultado = document.querySelector('.resultado');
  if (btnCalcular.disabled && resultado.innerHTML.trim() === '') {
    resultado.classList.remove('show');
  }
}

atualizarBotao();
espacoSelect.addEventListener('change', atualizarBotao);
kmInput.addEventListener('input', atualizarBotao);

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const espacoCarga = event.target.querySelector('#espacoCarga').value;
  const kmPercorrido = event.target.querySelector('#kmPercorrido').value;

  if (espacoCarga == 'Exclusiva') {
    const valorKm = 10.0;
    const valorFinal = kmPercorrido * valorKm;
    const valorReal = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valorFinal);
    const msg = `O valor do seu frete é de: ${valorReal}`;
    const resultado = document.querySelector('.resultado');
    const msgContato = `Olá fiz um orçamento no seu site, de uma carga ${espacoCarga} com a distância de ${kmPercorrido} KM e ficou em ${valorReal} gostaria de fechar!`;

    resultado.innerHTML = `<p class="paragrafoResultado">${msg} <a target="_blank" id="contatoResultado"href="https://api.whatsapp.com/send?phone=5527998237731&text=${msgContato}">Clique aqui <img
                src="./assets/img/whatsapp.png" id="imgResultado">entre em contato conosco!</a></p>`;
    resultado.classList.add('show');
  } else if (espacoCarga == 'Compartilhada') {
    const valorKm = 7.6;
    const valorFinal = kmPercorrido * valorKm;
    const valorReal = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valorFinal);
    const msg = `O valor do seu frete é de: ${valorReal}`;
    const resultado = document.querySelector('.resultado');
    const msgContato = `Olá fiz um orçamento no seu site, de uma carga ${espacoCarga} com a distância de ${kmPercorrido} KM e ficou em ${valorReal} gostaria de fechar!`;

    resultado.innerHTML = `<p class="paragrafoResultado">${msg} <a target="_blank" id="contatoResultado"href="https://api.whatsapp.com/send?phone=5527998237731&text=${msgContato}">Clique aqui <img
                src="./assets/img/whatsapp.png" id="img">entre em contato conosco!</a></p>`;
    resultado.classList.add('show');
  } else {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    resultado.classList.remove('show');
    alert('Selecione o espaço necessario!');
    atualizarBotao();
  }
});
