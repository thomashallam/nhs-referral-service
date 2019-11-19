$('nav.sub-nav li a').click(function() {
    $('nav.sub-nav li a').removeClass('selected');
    $(this).addClass('selected');
    
    var target = $(this).attr('href');
    $('.tab').removeClass('active');
    $(target).addClass('active');
  });