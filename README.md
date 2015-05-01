# generator-pkg

NodeJS generator for multiple module types and testing frameworks

<!-- [![Build Status](https://secure.travis-ci.org/yieme/generator-pkg.png?branch=master)](https://travis-ci.org/yieme/generator-pkg) -->

## Contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
- [Installation](#installation)
- [Add your own module](#add-your-own-module)
- [License](#license)
- [Credits](#credits)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

To install generator-pkg from npm, run:

```
$ npm install -g generator-pkg
```

Finally, initiate the generator:

```
$ yo pkg
```

- Test frameworks: [mocha](https://github.com/visionmedia/mocha), [tape](https://github.com/substack/tape),
and
[redtape](https://github.com/eugeneware/redtape)
- BDD test libraries: [expect.js](https://github.com/learnboost/expect.js),
[chai](https://github.com/chaijs/chai) and 'none'
- Module types: Basic, Middleware (express) or CLI (submit a pull request with yours)

This generator will install the following files:

* package-json - initialized with the answers to all your questions.
* Gruntfile.js (if grunt is selected) - configured to use the following grunt modules:
    * grunt-complexity - show code complexity
    * grunt-contrib-jshint - run code through jshint
    * grunt-contrib-watch - watch for changes then run tests
    * grunt-mocha-cli (if mocha is selected as a test framework) - run mocha
      tests (because `mocha -w` sucks)
    * grunt-tape (if 'tape' or 'redtape' is selected as a test framework) - run
      tape tests
* .jshintrc - with some sane defaults (for me anyway!)
* .jshintignore - with some sane defaults (for me anyway!)
* .travis.yml - set up so you can push and get [travis-ci](http://travis-ci.org)
   continous integration tests.
* .gitignore - ignore the usual cruft.
* LICENSE - MIT initialized with your details.
* README.md - Initialized with your details and travis-ci badges.
* index.js - Initial library file
* test/index.js - First unit test for [mocha](https://github.com/visionmedia/mocha), [tape](https://github.com/substack/tape),
and
[redtape](https://github.com/eugeneware/redtape)

## Add your own module

- Fork
- Copy ```app/templates/modules/basic.js``` to ```app/templates/modules/YOUR_MODULE.js```
- Edit ```app/templates/modules/YOUR_MODULE.js```

## License

MIT

## Credits

A fork of [generator-nodejs](https://github.com/eugeneware/generator-nodejs) with a lot of mods
