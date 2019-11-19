
  $('.service-details-link').click(function() {
    var target = $(this).attr('data-target');
 
    if($('#' + target).css('display') == "none")
    {
        $('#' + target).css('display', 'block');
    } else {
        $('#' + target).css('display', 'none');
    }
});