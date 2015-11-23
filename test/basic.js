var $$ = require('jquery-selector-cache'),
    $  = require('jquery');

describe('Test if cached', function () {
    it('cache a css selector', function () {
        var selector = 'body';
        expect($$(selector)).toBe($$(selector));
    });

    it('cache a DOM object', function () {
        expect(window).toBe(window);
    });

    it('update a css selector', function () {
        var selector = 'body';
        expect($$(selector)).not.toBe($$(selector, true));
    });
});