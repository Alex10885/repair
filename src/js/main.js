// var button = document.querySelector('#button');
// var modal = document.querySelector('#modal');
// var close = document.querySelector('#close');

// button.addEventListener('click', function () {
//     modal.classList.add('modal_active');
// });

// close.addEventListener('click', function () {
//     modal.classList.remove('modal_active');
// });

$(document).ready(function () {


    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');

    button.on('click', function () {
        modal.addClass('modal_active');
    });

    close.on('click', function () {
        modal.removeClass('modal_active');
    });

    // $('h1').click(function () {
    //     alert('Ты кликнул по заголовку');
    // });


    // $('.hero-list__image').delay('slow').hide('fast').delay(1000).show(1000);
    // $('.hero-list__image').delay('slow').hide('fast').delay(1000).show(1000);

});