// Wait until all the HTML elements are loaded

$(document).ready(function(){

  $('#slider').slick({
    prevArrow: "#featured_prev",
    nextArrow: "#featured_next"
  });

  $('#menu_toggle').on('click', function () {
    const isOpen = $(this).attr('aria-expanded') === 'true';

    $(this)
      .attr('aria-expanded', String(!isOpen))
      .attr('aria-label', isOpen ? 'Open menu' : 'Close menu')
      .toggleClass('is-open', !isOpen);

    $('#menu').toggleClass('is-open', !isOpen);
  });

  $('#menu a').on('click', function () {
    $('#menu_toggle')
      .attr('aria-expanded', 'false')
      .attr('aria-label', 'Open menu')
      .removeClass('is-open');
    $('#menu').removeClass('is-open');
  });

  $(document).on('keydown', function (event) {
    if (event.key === 'Escape') {
      $('#menu_toggle')
        .attr('aria-expanded', 'false')
        .attr('aria-label', 'Open menu')
        .removeClass('is-open');
      $('#menu').removeClass('is-open');
    }
  });

  $(window).on('resize', function () {
    if (window.innerWidth > 640) {
      $('#menu_toggle')
        .attr('aria-expanded', 'false')
        .attr('aria-label', 'Open menu')
        .removeClass('is-open');
      $('#menu').removeClass('is-open');
    }
  });

});

// onLoad; wait until all multimedia assets are loaded 
$(window).on("load", function(){


})