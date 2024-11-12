$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            veiculoInteresse: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: {
                required: 'Por favor, informe seu nome',
                minlength: 'O nome precisa ter pelo menos 3 caracteres'
            },
            telefone: {
                required: 'Por favor, informe seu telefone'
            },
            email: {
                required: 'Por favor, informe seu e-mail',
                email: 'Por favor, informe um e-mail válido'
            },
            mensagem: {
                required: 'Por favor, informe a mensagem'
            }
        },
        submitHandler: function (form) {
            alert('Formulário enviado com sucesso!')
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos >= 0) {
                alert(`Extistem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function () {
        const destino = $('#contato')
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})