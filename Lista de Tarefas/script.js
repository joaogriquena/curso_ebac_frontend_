$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault()
        const taskName = $('#task-input').val()
        if (taskName) {
            $('<li>').text(taskName).appendTo('#task-list')
            $('#task-input').val('')
        }
        $('#task-list li').on('click', function () {
            $(this).addClass('completed')// Adiciona a classe 'destacado' ao item clicado
        })
    })
})
