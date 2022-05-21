    const form = document.querySelector('#form')

    

    form.addEventListener('submit', function(event) {
        event.preventDefault()
            const espacoCarga = event.target.querySelector('#espacoCarga').value
            const kmPercorrido = event.target.querySelector('#kmPercorrido').value

            if (espacoCarga == 1) {
                const valorKm = 3
                const valorFinal = kmPercorrido * valorKm
                const valorReal = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(valorFinal)
                const msg = `O valor do seu frete é: ${valorReal}`
                const resultado = document.querySelector('.resultado')
                
                resultado.innerHTML = `<p class="paragrafoResultado">${msg} <a id="contatoResultado"href="https://api.whatsapp.com/send?phone=5527998237731">Clique aqui e entre em contato conosco!</a></p>`
                
                console.log(valorFinal)

            } else if (espacoCarga == 2) {
                const valorKm = 2.60
                const valorFinal = kmPercorrido * valorKm
                const valorReal = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(valorFinal)
                const msg = `O valor do seu frete é: ${valorReal}`
                const resultado = document.querySelector('.resultado')
                
                resultado.innerHTML = `<p class="paragrafoResultado">${msg} <a id="contatoResultado"href="https://api.whatsapp.com/send?phone=5527998237731">Clique aqui e entre em contato conosco!</a></p>`
                
                console.log(valorFinal)
            }


        })