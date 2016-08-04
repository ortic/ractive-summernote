# Summernote plugin for Ractive.js

## Usage

Let's have a look at a simple example. We have to install a number of packages, first install the components we need for our web application.
```
npm install jquery ractive summernote ractive-summernote bootstrap
```

The next step isn't mandatory, there are other ways to achieve the same, but since we already use npm to install our packages, we can also use `require` as if we are working with node.js. To do this, make sure you've got `browserify` installed:

```
npm install -g browserify
```

Let's have a look at the script to initialize our JavaScript. Below is the content of our file called `script.js`:

```javascript
$ = jQuery = require('jquery');
var Ractive = require('ractive');
var bootstrap = require('bootstrap');
var summernote = require('summernote');
require('ractive-summernote');

var ractive = new Ractive({
  el: '#container',
  template: '#template',
});
```

In order to get a JavaScript file that works in a browser, we have to convert it:

```
browserify script.js > index.js
```

Now that we have our JavaScript, we need to create another file with our HTML structure;

```
<html>
<head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.1/summernote.css" />
</head>
<body>
	<div id="container"></div>
	<script id="template" type="text/ractive">
		<summernote value="{{code}}"></summernote>
		Hello, here's your code:
		<pre><code>{{code}}	</code></pre>
	</script>
	<script src="index.js"></script>
</body>
</html>
```

Open the HTML file and you can type code in summernote and immediately see the code in the HTML container below.

## License

Ractive summernote may be freely distributed under the MIT license.

Created with the [Ractive.js plugin template](https://github.com/ractivejs/plugin-template) for Grunt.