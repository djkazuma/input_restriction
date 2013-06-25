(function($) {
    /*
     * input only numbers
     * @name onlyNumeric
     * @example $('.num-only').onlyNumeric();
     *
     */
    $.fn.onlyNumeric = function(config) {
        var defaults = {
        }
        var options = $.extend(defaults, config);
        return this.each(function(){
            $(this).bind('keyup blur', function(){
                $(this).val($(this).val().replace(/[０-９]/g, function(s){return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
                }));
                $(this).val($(this).val().replace(/[^0-9]/g, ''));
            });
        });
    }

    /*
     * input only alphabet
     * @name onlyAlphabet
     * @example $('.aplphabet-only').onlyAlphabet();
     *
     */
    $.fn.onlyAlphabet = function(config) {
        var defaults = {
        }
        var options = $.extend(defaults, config);
        return this.each(function(){
            $(this).bind('keyup blur', function(){
                $(this).val($(this).val().replace(/[^a-zA-Z]/g, ''));
            });
        });
    }

    /*
     * input only alphabet or number
     * @name onlyAlphaNumeric
     * @example $('.aplpha-numeric-only').onlyAlphaNumeric();
     *
     */
    $.fn.onlyAlphaNumeric = function(config) {
        var defaults = {
        }
        var options = $.extend(defaults, config);
        return this.each(function(){
            $(this).bind('keyup blur', function(){
                $(this).val($(this).val().replace(/[^a-zA-Z0-9]/g, ''));
            });
        });
    }

    /*
     * input only hiragana
     * @name onlyHiragana
     * @example $('.hiragana-only').onlyHiragana();
     *
     */
    $.fn.onlyHiragana = function(config) {
        var defaults = {
        }
        var options = $.extend(defaults, config);
        return this.each(function(){
            $(this).bind('keyup blur', function(){
                $(this).val($(this).val().replace(/[^あ-ん゛゜ぁ-ぉゃ-ょー]/g, ''));
            });
        });
    }

    /*
     * input only katakana
     * @name onlyKana
     * @example $('.hiragana-only').onlyKana();
     *
     */
    $.fn.onlyKana = function(config) {
        var defaults = {
        }
        var options = $.extend(defaults, config);
        return this.each(function(){
            $(this).bind('keyup blur', function(){
                $(this).val($(this).val().replace(/[^ア-ン゛゜ァ-ォャ-ョー]/g, ''));
            });
        });
    }

    /*
     * input only hankaku katakana
     * @name onlyHankakuKana
     * @example $('.hankakukana-only').onlyHankakukana();
     *
     */
    $.fn.onlyHankakuKana = function(config) {
        var defaults = {
        }
        var options = $.extend(defaults, config);
        return this.each(function(){
            $(this).bind('keyup blur', function(){
                $(this).val($(this).val().replace(/[^ｱ-ﾝﾞﾟｦｧ-ｫｬ-ｮｯｰ]/g, ''));
            });
        });
    }

    /*
     * input numbers and '-' for phone number
     * @name phoneNumber
     * @example $('.phonenumber-only').onlyPhoneNumber();
     *
     */
    $.fn.onlyPhoneNumber = function(config) {
        var defaults = {}
        var options = $.extend(defaults, config);
        return this.each(function(){
            $(this).bind('keyup blur', function(){
                $(this).val($(this).val().replace(/[０-９]/g, function(s){return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
                }));
                $(this).val($(this).val().replace(/[^0-9\-]/g, ''));
            });
        });
    }
})(jQuery);
