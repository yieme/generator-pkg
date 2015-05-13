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
  it('should load', function(done) {
    <%= moduleVarName %>()
    done();
  });

  var expected = ["hello", "world"]
  var expectedString = JSON.stringify(expected)
  it('should eaual ' + expectedString, function(done) {
    var test = <%= moduleVarName %>()
    var json = JSON.stringify(test)
    json.should.equal(expectedString);
    done();
  });
});
