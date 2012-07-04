(function ($) {

    var gTranslations;

    var getLocale = function () {
        return window.navigator.language.substr(0, 2);
    };

    var getTranslation =  function (key) {

        if (gTranslations[key]) {
            return gTranslations[key].message;
        } else {
            return key.replace(/_/g,' ').toLowerCase().capitalize();
        }
    };

    $.extend({
        i18nTranslate: function () {
            $.getJSON("locales/" + getLocale() + "/messages.json", function (data) {
                gTranslations = data;
                $('[data-i18n-content]').each(function (index) {
                    this.innerHTML += getTranslation($(this).attr('data-i18n-content'));
                });
    
            });
            if (gTranslations === '') {
                $.getJSON("locales/en/messages.json", function (data) {
                        gTranslations = data;
                        $('[data-i18n-content]').each(function (index) {
                            this.innerHTML += getTranslation($(this).attr('data-i18n-content'));
                        });
                });
            }
        }
    });
})(jQuery);

String.prototype.capitalize = function(){
       return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
};