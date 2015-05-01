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
    <%= moduleVarName %> = require('..')
;

describe('<%= moduleName %>', function() {
  it('should say hello', function(done) {
    var test = <%= moduleVarName %>()
    test.value.should.equal('Hello, world');
    done();
  });
});
