
// Circular Progressbar Start 

$(document).ready(function ($) {
    function animateElements() {
        $('.progressbar1').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle1').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);

                $(this).find('.circle1').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 250,
                    thickness: 5,
                    emptyFill: "rgb(0,0,0,0)",
                    fill: {
                        color: '#FF9781'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
                }).stop();
            }
        });



        $('.progressbar2').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle2').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);

                $(this).find('.circle2').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 218,
                    thickness: 5,
                    emptyFill: "rgb(0,0,0,0)",
                    fill: {
                        color: '#C2EED8'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
                }).stop();
            }
        });

        $('.progressbar3').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle3').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);

                $(this).find('.circle3').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 188,
                    thickness: 5,
                    emptyFill: "rgb(0,0,0,0)",
                    fill: {
                        color: '#FFBA69'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
                }).stop();
            }
        });

        $('.progressbar4').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle4').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);

                $(this).find('.circle4').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    size: 158,
                    thickness: 5,
                    emptyFill: "rgb(0,0,0,0)",
                    fill: {
                        color: '#C0EEF5'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
                }).stop();
            }
        });

    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);




}); 

// Circular Progressbar end 