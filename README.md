input_restriction
=================

This is jQuery Plugin.
This Plugin performs input control for input form.

This Plugin supports jQuery2.0.2.

[linkref]: http://techracho.bpsinc.jp/?p=8732 "Japanese" 

Include Plugin
    
    <script type='text/javascript' src='input_restriction.js' charset='utf-8'> </script>
##Usage Example

###Only Numbers(full-width numbers convert to  half-width numbers)
javascript

    $('.only-num').onlyNumeric();

html

    <input type="text" name="num" class="only-num" />

###Only Alphabets
javascript

    $('.only-alphabet').onlyAlphabet();

html

    <input type="text" name="num" class="only-alphabet" />


###Only Alphabets AND Numbers
javascript

    $('.only-alphanum').onlyAlphaNumeric();

html

    <input type="text" name="num" class="only-alphanum" />

###Only Hiragana
javascript

    $('.only-hiragana').onlyHiragana();

html

    <input type="text" name="num" class="only-hiragana" />

###Only Katakana
javascript

    $('.only-kana').onlyKana();

html

    <input type="text" name="num" class="only-kana" />

###Only half-width Katakana
javascript

    $('.only-hankakukana').onlyHankakuKana();

html

    <input type="text" name="num" class="only-hankakukana" />

###Only Numbers and '-'</h3>
javascript

    $('.only-phonenumber').onlyPhoneNumber();

html

    <input type="text" name="num" class="only-phonenumber" />

