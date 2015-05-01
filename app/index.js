'use strict';
var util = require('util'),
    path = require('path'),
    yeoman = require('yeoman-generator'),
    gitconfig = require('git-config');
var fs     = require('fs')
var pkg    = require('../package.json')

var NodejsGenerator = module.exports = function NodejsGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(NodejsGenerator, yeoman.generators.Base);

NodejsGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
//  console.log(this.yeoman);
  console.log(pkg.description + ' v' + pkg.version)

  var config      = gitconfig.sync();
  config.github   = config.github || {}
  config.user     = config.user   || {}
  var localGit    = process.cwd() + '/.git/config'
  var localConfig = (fs.existsSync(localGit)) ? gitconfig.sync(localGit) : {}
  localConfig.user        = localConfig.user || {}
  localConfig.github      = localConfig.github || {}
  localConfig.github.user = localConfig.github.user || {}
  var ghuser   = config.github.user || localConfig.github.user.name
  var username = config.user.name   || localConfig.user.name        || config.github.name  || localConfig.github.name  || ''
//  var email    = config.user.email  || localConfig.user.email       || config.github.email || localConfig.github.email || ''

  var keywords = this._.humanize(path.basename(process.cwd())) + ''
  keywords = keywords.toLowerCase()
  keywords = keywords.split(' ')

  var prompts = [
    {
      type: 'input',
      name: 'moduleName',
      message: 'node.js module name:',
      default: this._.slugify(path.basename(process.cwd()))
    },
    {
      type: 'input',
      name: 'moduleDesc',
      message: 'Module description',
      default: this._.humanize(path.basename(process.cwd()))
    },
    {
      type: 'input',
      name: 'keywords',
      message: 'Module keywords',
      default: keywords,
      filter:
        function (value) {
          if (typeof value === 'string') {
            value = value.split(',');
          }
          return value
            .map(function (val) {
              return val.trim();
            })
            .filter(function (val) {
              return val.length > 0;
            })
        }
    },
    {
      type: 'list',
      name: 'moduleType',
      message: 'Module Type',
      choices: ['basic', 'cli', 'middleware'],
      default: 'basic'
    },
    {
      type: 'confirm',
      name: 'useGrunt',
      message: 'Use grunt?',
      default: false
    },
    {
      type: 'list',
      name: 'testFramework',
      message: 'Testing framework',
      choices: ['mocha', 'tape', 'redtape'],
      default: 'mocha'
    },
    {
      type: 'list',
      name: 'assertionLibrary',
      message: 'Assertion Library',
      choices: ['chai.should', 'chai.expect', 'expect.js', 'none'],
      default: 'chai.should'
    },
    {
      type: 'input',
      name: 'githubName',
      message: 'Your github username',
      default: ghuser || username
    },
    {
      type: 'input',
      name: 'author',
      message: 'Author name',
      default: username
    }
  ];

  this.prompt(prompts, function (props) {
    this.moduleName = this._.slugify(props.moduleName);
    this.moduleVarName = this._.camelize(props.moduleName);
    this.moduleType    = props.moduleType
    this.moduleNameHuman = this._.humanize(props.moduleName);
    this.moduleDesc = props.moduleDesc;
    this.keywords = props.keywords;
    this.githubName = props.githubName;
    this.author = props.author;
    this.copyrightName = props.author.replace(/<[^>]*?>/gm, '').trim();
    this.testFramework = props.testFramework;
    this.assertionLibrary = props.assertionLibrary;
    this.useGrunt = props.useGrunt;
    this.builtByName = pkg.name;
    this.builtByVersion = pkg.version;
    this.builtByUrl = pkg.homepage;
    this.license = 'MIT';
    this.year = new Date().getFullYear();

    this.dequote = function (str) {
      return str.replace(/\"/gm, '\\"');
    };

    cb();
  }.bind(this));
};

NodejsGenerator.prototype.build = function build() {
  this.template('_package.json', 'package.json');

  if (this.useGrunt) {
    this.template('Gruntfile.js', 'Gruntfile.js');
  }
  this.copy('jshintrc', '.jshintrc');
  this.copy('jshintignore', '.jshintignore');
  this.copy('travis.yml', '.travis.yml');
  this.copy('gitignore', '.gitignore');
  this.template('LICENSE', 'LICENSE');
  this.template('README.md', 'README.md');
};

NodejsGenerator.prototype.testFrameworks = function mocha() {
  this.mkdir('test');
  this.mkdir('test/fixtures');
  if (this.moduleType == 'cli') {
    this.mkdir('bin')
    this.template('modules/basic.js', 'index.js'); // cli is a basic module plus a bin component
    this.template('modules/cli.js',   'bin/cli.js');
  } else {
    this.template('modules/' + this.moduleType + '.js', 'index.js');
  }

  switch (this.testFramework) {
    case 'mocha':
      this.template('mocha_test/' + this.assertionLibrary + '.js', 'test/index.js');
      break;

    case 'tape':
      this.template('test-tape.js', 'test/index.js');
      break;

    case 'redtape':
      this.template('test-redtape.js', 'test/index.js');
      break;

    default:
      break;
  }
};
