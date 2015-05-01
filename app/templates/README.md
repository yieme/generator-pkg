# <%= moduleName %>

<%= moduleDesc %>

<!-- [![build status](https://secure.travis-ci.org/<%= githubName %>/<%= moduleName %>.png)](http://travis-ci.org/<%= githubName %>/<%= moduleName %>) -->

## Installation

This module is installed via npm:

```sh
npm i <%= moduleName %> <%
if (moduleType == 'cli') {
  print('-g');
} else {
  print('--save');
}
%>
```

## Example Usage

```js
var <%= moduleVarName %> = require('<%= moduleName %>')
console.log(<%= moduleVarName %>)())
```

## Rights

Copyright (C) <%= year => by <%= author %>, License: MIT
