jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});

$('.lang_selector').click(function(){
  var clickedId = $(this).children(':first').attr('src');

  var lastChild = $('div#language-select > i:last-child');
  var lastLink = $('div#language-select > a:last-of-type');

  //Insert current clicked element to last position
  lastChild.before($(this));

  //Insert the element that was last before the first element
  $('div#language-select > a:first-of-type').before(lastLink);

});