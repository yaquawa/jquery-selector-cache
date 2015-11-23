(function () {

    function _factory($) {
        var $$ = (function () {
            var selectorPool = {},
                objPool      = [];

            return function (selector) {
                var $elem;

                // if selector is string
                if (typeof selector === 'string') {
                    $elem = selectorPool[selector];
                    if ($elem === undefined) {
                        $elem = selectorPool[selector] = $(selector);
                    }
                    return $elem;
                }

                // if selector is DOM object or jQuery object
                var index = objPool.indexOf(selector);
                if (index !== -1) {
                    return objPool[index];
                }
                $elem = $(selector);
                objPool.push($elem);
                return $elem;
            };
        })();

        return $$;
    }

    /*------------------------------------*\
     # UMD
     \*------------------------------------*/
    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define(['exports', 'jquery'], factory);
        } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
            // CommonJS
            factory(exports, require('jquery'));
        } else {
            // Browser globals
            if (typeof jQuery !== 'function' || ($$ !== undefined)) {
                return false;
            }
            root.$$ = _factory(root.jQuery);
        }
    }(this, function (exports, jQuery) {
        exports.$$ = _factory(jQuery);
    }));

})();