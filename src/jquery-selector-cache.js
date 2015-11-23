(function () {

    function _factory($) {
        var selectorPool = {},
            objPool      = [];

        return function $$(selector, update) {
            var $elem;

            // if selector is string
            if (typeof selector === 'string') {
                if (update) {
                    return selectorPool[selector] = $(selector);
                }

                $elem = selectorPool[selector];
                if ($elem === undefined) {
                    $elem = selectorPool[selector] = $(selector);
                }
                return $elem;
            }

            // if selector is DOM object or jQuery object

            var obj = objPool.find(function (obj) {
                return obj.elem === selector;
            });

            if (obj !== undefined) {
                return obj.$elem;
            }

            $elem = $(selector);
            objPool.push({
                elem: selector,
                $elem: $elem
            });

            return $elem;
        };
    }

    /*------------------------------------*\
     # UMD
     \*------------------------------------*/
    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define(['module', 'jquery'], factory);
        } else if (typeof module === 'object' && typeof module.nodeName !== 'string') {
            // CommonJS
            factory(module, require('jquery'));
        } else {
            // Browser globals
            if (typeof root.jQuery !== 'function' || (root.$$ !== undefined)) {
                return false;
            }
            root.$$ = _factory(root.jQuery);
        }
    }(this, function (module, jQuery) {
        module.exports = _factory(jQuery);
    }));

})();