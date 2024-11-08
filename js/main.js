$(document).ready(function() {
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: "(00) 00000-0000"
    });  

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            $('#form').on('submit', function(event) { 
                event.preventDefault(); // Impede o envio padrão do formulário
                console.log(form); // Aqui você pode realizar ações adicionais ou enviar via AJAX, por exemplo.
                location.reload(); // Recarrega a página (remova esta linha se não desejar o recarregamento)
            });
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    $('.lista-hamburguers button').click(function() {
        const destino = $('#contato');
        const nomeHamburguer = $(this).parent().find('h3').text();

        $('#tipo-de-hamburguer').val(nomeHamburguer);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});