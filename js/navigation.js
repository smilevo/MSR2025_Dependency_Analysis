$(document).ready(function() {
       $('.home')[0].click()
});

$('.home').on('click', function() {
       console.log("here")
       $('#home').show();
       $('#about').hide();
       $('#download').hide();
       $('#details').hide();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').hide();
});

$('.about').on('click', function() {
       $('#home').hide();
       $('#about').show();
       $('#download').hide();
       $('#details').hide();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').hide();
});

$('.download').on('click', function() {
       $('#home').hide();
       $('#about').hide();
       $('#download').show();
       $('#details').hide();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').hide();
});

$('.details').on('click', function() {
       $('#home').hide();
       $('#about').hide();
       $('#download').hide();
       $('#details').show();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').hide();
});

$('.support').on('click', function() {
       $('#home').hide();
       $('#about').hide();
       $('#download').hide();
       $('#details').hide();
       $('#support').show();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').hide();
});

$('.contribute').on('click', function() {
       $('#home').hide();
       $('#about').hide();
       $('#download').hide();
       $('#details').hide();
       $('#support').hide();
       $('#contribute').show();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').hide();
});

$('.cite').on('click', function() {
       $('#home').hide();
       $('#about').hide();
       $('#download').hide();
       $('#details').hide();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').show();
       $('#publications').hide();
       $('#contact').hide();
});

$('.publications').on('click', function() {
       $('#home').hide();
       $('#about').hide();
       $('#download').hide();
       $('#details').hide();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').show();
       $('#contact').hide();
});

$('.contact').on('click', function() {
       $('#home').hide();
       $('#about').hide();
       $('#download').hide();
       $('#details').hide();
       $('#support').hide();
       $('#contribute').hide();
       $('#cite').hide();
       $('#publications').hide();
       $('#contact').show();
});
