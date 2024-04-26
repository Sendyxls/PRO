$('.partners-container').on('mouseenter', function() {
    $('.partners-slider').css('transform', 'translateX(-20%)'); // Измените значение в зависимости от ширины слайда
});

$('.partners-container').on('mouseleave', function() {
    $('.partners-slider').css('transform', 'translateX(0)');
});