(function ($) {

    var gTranslations;

    var getLocale = function () {
        return return window.navigator.language.substr(0, 2);
    };
    var getTranslation = function (key) {
        if (gTranslations[key]) {
            return gTranslations[key].message;
        } else {
            return key;
        }
    };

    $.extend({
        i18n: function () {

            if (!gTranslations){
                
                $.ajaxSetup( { "async": false } );

                $.getJSON("locales/" + getLocale() + "/messages.json", function (data) {
                
                    gTranslations = data;

                    if (gTranslations === '') {
  
                        $.getJSON("locales/en/messages.json", function(data){
                            gTranslations = data;
                        });
                        
                    }

                });
                $.ajaxSetup( { "async": true } );
            }
            if (arguments.length===0){
                $('[i18n-content]').each(function (index) {
                    this.innerHTML += getTranslation($(this).attr('i18n-content'));
                });
            }else{

                return getTranslation(arguments[0]);
            }
           
        }
    });

})(jQuery);
