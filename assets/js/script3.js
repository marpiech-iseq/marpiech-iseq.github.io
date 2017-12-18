function update() {
  if ($(window).scrollTop() > 900) {
    $('.navbar').addClass("tlo-navbar");
    $('.logo-white.navbar-logo').css('opacity', '1');
    $('.media-box-1').addClass('white-bg-1');
    $('.media-box-2').addClass('white-bg-2');
    $('.media-box-3').addClass('white-bg-3');
    $('a.navi').attr('href', '#screen-2');
    $('a.navi-1').show();
  } else {
    $('.navbar').removeClass("tlo-navbar");
    $('.logo-white.navbar-logo').css('opacity', '0');
    $('.media-box-1').removeClass('white-bg-1');
    $('.media-box-2').removeClass('white-bg-2');
    $('.media-box-3').removeClass('white-bg-3');
    $('a.navi').attr('href', '#screen-1');
    $('a.navi-1').hide();
  }
  if ($(window).scrollTop() > 1980) {
    $('a.navi').attr('href', '#screen-3');
  }
  if ($(window).scrollTop() > 3060) {
    $('a.navi').attr('href', '#screen-5');
  }
  if ($(window).scrollTop() > 4140) {
    $('a.navi').attr('href', '#screen-6');
  }
  if ($(window).scrollTop() > 5220) {
    $('a.navi').attr('href', '#screen-7');
  }
  if ($(window).scrollTop() > 6000) {
    $('a.navi').attr('href', '#screen-8');
  }
}
setInterval(update, 1);

