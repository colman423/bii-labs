$(function () {
  var locale = localStorage.getItem('locale') || 'zh';
  setLocale(locale);

  $('.switch-locale').on('click', function (e) {
    e.preventDefault();
    var locale = $(this).data('locale');
    setLocale(locale);
  });
});

function setLocale(locale) {
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
  }
};
