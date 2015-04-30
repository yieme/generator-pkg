var should = require('<%
    switch (assertionLibrary) {
      case 'chai.should':
        print ("chai').should()");
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
    <%= moduleVarName %>().should.to.equal('Hello, world');
    done();
  });
});
