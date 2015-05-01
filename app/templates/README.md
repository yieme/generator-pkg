# <%= moduleName %>

<%= moduleDesc %>

<!-- [![build status](https://secure.travis-ci.org/<%= githubName %>/<%= moduleName %>.png)](http://travis-ci.org/<%= githubName %>/<%= moduleName %>) -->

## Installation

This module is installed via npm:

```sh
npm i <%= moduleName %> <% if (moduleType == 'cli') { %>-g<% } else { %>--save<% } %>
```

## Example Usage

```js<% if (moduleType == 'basic') { %>
var <%= moduleVarName %> = require('<%= moduleName %>')
console.log(<%= moduleVarName %>)())
<% } else if (moduleType == 'cli') { %>
<%= moduleVarName %> --help
<% } else if (moduleType == 'middleware') { %>
var <%= moduleVarName %> = require('<%= moduleName %>')
var express = require('express')
var app = express()
app.use(<%= moduleVarName %>())
<% } %>```

## Rights

Copyright (C) <%= year %> by <%= dequote(author) %>, License: MIT
