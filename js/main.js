$(function () {
  var locale = localStorage.getItem('locale') || 'zh';
  setLocale(locale);
  setNavActive();

  $(window).scroll(tryShowToTopBtn);
  tryShowToTopBtn();
  $('.back-to-top-btn').on('click', scrollToTop);

  function scrollToTop(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  };

  function tryShowToTopBtn() {
    if ($(window).scrollTop() > 100) {
      $('.back-to-top-btn').addClass('show');
    } else {
      $('.back-to-top-btn').removeClass('show');
    }
  };

  $('.switch-locale').on('click', function (e) {
    e.preventDefault();
    var locale = $(this).data('locale');
    setLocale(locale);
  });

  function setNavActive() {
    var pathnames = location.pathname.split('/');
    var pathname = pathnames[pathnames.length - 1] || "index";
    console.log("pathname", pathnames, pathname, $('a.nav-link[href="' + pathname + '"]'))
    $('a.nav-link[href="' + pathname + '"]').addClass('active')

  }
});

function setLocale(locale) {
  console.log("setLocale", locale)
  $('.lang-selector').html('<span class="spinner-border" role="status" aria-hidden="true" style="width: 1.5rem; height: 1.5rem;"></span>  <span class="sr-only">Loading...</span>').prop("disabled", true);

  if (locale) {
    localStorage.setItem('locale', locale);

    $.i18n().load('i18n/' + locale + '.json', locale).done(
      function () {
        $.i18n().locale = locale;
        $('body').i18n();
        $('object').contents().find('svg').find('text[data-i18n]').each(function (idx, item) {
          var $dom = $(item)
          var text = $.i18n($dom.data('i18n'))
          $dom.html(text)
        })

        $('.switch-locale').show();
        var localeText = $('.switch-locale[data-locale="' + locale + '"]').hide().text();
        $('.lang-selector').html(localeText).prop("disabled", false);

        if (window.setLocaleCallback) window.setLocaleCallback()
      }
    );
  }
};
