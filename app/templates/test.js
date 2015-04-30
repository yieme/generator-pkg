var expect = require('<%
    switch (assertionLibrary) {
      case 'chai':
        print ("chai').should");
        break;

      case 'expect.js':
      default:
        print ("expect.js')");
        break;
    }
%>,
    <%= moduleVarName %> = require('..');

describe('<%= moduleName %>', function() {
  it('should say hello', function(done) {
    <%= moduleVarName %>().to.equal('Hello, world');
    done();
  });
});
