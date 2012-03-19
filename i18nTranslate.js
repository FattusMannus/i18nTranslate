(function ($) {

    var gTranslations;

    var getLocale = function () {
	return 'es';
        //return window.navigator.language.substr(0, 2);
    };

    var getTranslation =  function (key) {

        if (gTranslations[key]) {
            return gTranslations[key].message;
        } else {
            return key;
        }
    };

    $.extend({
        i18nTranslate: function () {
            $.getJSON("locales/" + getLocale() + "/messages.json", function (data) {
                gTranslations = data;
                $('[i18n-content]').each(function (index) {
                    this.innerHTML += getTranslation($(this).attr('i18n-content'));
                });
    
            });
            if (gTranslations === '') {
                $.getJSON("locales/en/messages.json", function (data) {
                        gTranslations = data;
                        $('[i18n-content]').each(function (index) {
                            this.innerHTML += getTranslation($(this).attr('i18n-content'));
                        });
                });
            }
        }
    });   
})(jQuery);
