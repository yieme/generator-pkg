# generator-pkg

A node.js module scaffolding generator for [Yeoman](http://yeoman.io).

[![Build Status](https://secure.travis-ci.org/yieme/generator-pkg.png?branch=master)](https://travis-ci.org/yieme/generator-pkg)

### Installation

To install generator-pkg from npm, run:

```
$ npm install -g generator-pkg
```

Finally, initiate the generator:

```
$ yo nodejs
```

![generator-pkg screenshot](https://raw.github.com/yieme/generator-pkg/gh-pages/generator.gif)

This generator now supports [tape](https://github.com/substack/tape),
[mocha](https://github.com/visionmedia/mocha), and
[redtape](https://github.com/yieme/redtape) as test frameworks.

It also supports [expect.js](https://github.com/learnboost/expect.js),
[chai](https://github.com/chaijs/chai) and 'none' for assertion libraries for
BDD style tests.

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
* .travis.yml - set up so you can push and get [travis-ci](http://travis-ci.org)
   continous integration tests.
* .gitignore - ignore the usual cruft.
* LICENSE - MIT initialized with your details.
* README.md - Initialized with your details and travis-ci badges.
* index.js - Initial library file
* test/index.js - First unit test in the test framework of your choosing
  (ie. mocha, tape, or redtape)
