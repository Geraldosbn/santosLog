    const form = document.querySelector('#form')

    

    form.addEventListener('submit', function(event) {
        event.preventDefault()
            const espacoCarga = event.target.querySelector('#espacoCarga').value
            const kmPercorrido = event.target.querySelector('#kmPercorrido').value

            if (espacoCarga == "Exclusiva") {
                const valorKm = 5.20
                const valorFinal = kmPercorrido * valorKm
                const valorReal = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(valorFinal)
                const msg = `O valor do seu frete é de: ${valorReal}`
                const resultado = document.querySelector('.resultado')
                const msgContato = `Olá fiz um orçamento no seu site, de uma carga ${espacoCarga} com a distância de ${kmPercorrido} KM e ficou em ${valorReal} gostaria de fechar!`

                resultado.innerHTML = `<p class="paragrafoResultado">${msg} <a id="contatoResultado"href="https://api.whatsapp.com/send?phone=5527998237731&text=${msgContato}">Clique aqui <img 
                src="./assets/img/whatsapp.png" id="img">entre em contato conosco!</a></p>`

            } else if (espacoCarga == "Complemento de Carga") {
                const valorKm = 3.80
                const valorFinal = kmPercorrido * valorKm
                const valorReal = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(valorFinal)
                const msg = `O valor do seu frete é de: ${valorReal}`
                const resultado = document.querySelector('.resultado')
                const msgContato = `Olá fiz um orçamento no seu site, de uma carga ${espacoCarga} com a distância de ${kmPercorrido} KM e ficou em ${valorReal} gostaria de fechar!`

                resultado.innerHTML = `<p class="paragrafoResultado">${msg} <a id="contatoResultado"href="https://api.whatsapp.com/send?phone=5527998237731&text=${msgContato}">Clique aqui <img 
                src="./assets/img/whatsapp.png" id="img">entre em contato conosco!</a></p>`
            }
            else {
                alert('Selecione o Espaço necessario!')
            }


        })