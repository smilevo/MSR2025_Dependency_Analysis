$(document).ready(function() {
       $('.home')[0].click()
});

$('.home').on('click', function() {
       console.log("here")
       $('#home').show();
       $('#about').hide();
       $('#download').hide();
       $('#details').hide();
       $('#protection').hide();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').hide();
       $('#paper1').hide();
});

$('.about').on('click', function() {
       $('#home').hide();
       $('#about').show();
       $('#download').hide();
       $('#details').hide();
       $('#protection').hide();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').hide();
       $('#paper1').hide();
});

$('.download').on('click', function() {
       $('#home').hide();
       $('#about').hide();
       $('#download').show();
       $('#details').hide();
       $('#protection').hide();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').hide();
       $('#paper1').hide();
});

$('.details').on('click', function() {
       $('#home').hide();
       $('#about').hide();
       $('#download').hide();
       $('#details').show();
       $('#protection').hide();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').hide();
       $('#paper1').hide();
});

$('.protection').on('click', function() {
       $('#home').hide();
       $('#about').hide();
       $('#download').hide();
       $('#details').hide();
       $('#protection').show();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').hide();
       $('#paper1').hide();
});

$('.support').on('click', function() {
       $('#home').hide();
       $('#about').hide();
       $('#download').hide();
       $('#details').hide();
       $('#protection').hide();
       $('#support').show();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').hide();
       $('#paper1').hide();
});

$('.contribute').on('click', function() {
       $('#home').hide();
       $('#about').hide();
       $('#download').hide();
       $('#details').hide();
       $('#protection').hide();
       $('#support').hide();
       $('#contribute').show();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').hide();
       $('#paper1').hide();
});

$('.cite').on('click', function() {
       $('#home').hide();
       $('#about').hide();
       $('#download').hide();
       $('#details').hide();
       $('#protection').hide();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').show();
       $('#publications').hide();
       $('#contact').hide();
       $('#paper1').hide();
});

$('.publications').on('click', function() {
       $('#home').hide();
       $('#about').hide();
       $('#download').hide();
       $('#details').hide();
       $('#protection').hide();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').show();
       $('#contact').hide();
       $('#paper1').hide();
});

$('.contact').on('click', function() {
       $('#home').hide();
       $('#about').hide();
       $('#download').hide();
       $('#details').hide();
       $('#protection').hide();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').show();
       $('#paper1').hide();
});

$('.paper1').on('click', function() {
       console.log("here")
       $('#paper1').show();
       $('#home').hide();
       $('#about').hide();
       $('#download').hide();
       $('#details').hide();
       $('#protection').hide();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').hide();
});