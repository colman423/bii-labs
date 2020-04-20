$(function () {
  var locale = localStorage.getItem('locale') || 'zh';
  setLocale(locale);
  setNavActive();

  $('.switch-locale').on('click', function (e) {
    e.preventDefault();
    var locale = $(this).data('locale');
    setLocale(locale);
  });

  function setNavActive() {
    var pathnames = location.pathname.split('/');
    var pathname = pathnames[pathnames.length-1] || "index";
    console.log("pathname", pathnames, pathname, $('a.nav-link[href="'+pathname+'"]'))
    $('a.nav-link[href="'+pathname+'"]').addClass('active')

  }
});

function setLocale(locale) {
  console.log("setLocale", locale)
  if (locale) {
    // console.log("locale", locale)
    $.i18n().load('i18n/' + locale + '.json', locale).done(
      function () {
        // console.log("locale2", locale)
        $.i18n().locale = locale;
        $('body').i18n();
      }
    );

    localStorage.setItem('locale', locale);
    $('.switch-locale').show();
    var localeText = $('.switch-locale[data-locale="'+locale+'"]').hide().text();
    $('.lang-selector').text(localeText);
  }
};
