infinite_scroll
===============

Javascript Function to do Infinite Scroll retrieving remote data

Testing retrieving data from back-end in Laravel 4 PHP Framework

Dependecies
-----------
* JQuery
* Handlebars

Parameters
----------

Parameters are passed into a hash

* url: Url where retrieve data
* url_options: Options passed to url
* gif: DOM Element ID to be show when is loading
* appendTo: DOM element ID where will be attached the response,
* template: Handlebars Template for the response

Example
-------


```javascript
$(window).infinite_scroll({
	url: "localhost/players", 
	gif: '#loading-gif', 
	error: '#error-msg',
	appendTo: '#list-players',
	template: $('#player-tpl').html()
});
```
