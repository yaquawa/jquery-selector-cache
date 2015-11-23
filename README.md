This is a little function to help us cache the jQuery selector(jQuery object).

Everybody knows cache the jQuery selector is a good practice.

```js
var $button = $('.button');

$button.on('click', function () {
    // ...
});

$button.on('mouseenter', function () {
    // ...
});
```

However, sometimes it's a little cumbersome...  
So you can cache a selector by using this little util function like this:

```js
$$button.on('click', function () {
    $$(this).text('cache me');
    // ...
});
```


##Installation
To install via the npm, enter the following:  
`npm install jquery-selector-cache`

or just use the `src/jquery-selector-cache.js` from git repository.

Feel free to use either AMD or CommonJS to require this function.

##Usage
To cache a jQuery object Simply replace `$` with `$$`.

```js
if ($$('h1') === $$('h1')) {
    console.log('css selector cached!');
}
$$('h1').on('click', function () {
    if ($$(this) === $$(this)) {
        console.log('DOM object cached!');
    }
});
```

To update the cache, pass `true` to the second argument. 

```js
$$('.button',true)
```