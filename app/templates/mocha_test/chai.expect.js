var expect = require('<%
    switch (assertionLibrary) {
      case 'chai.expect':
        print ("chai').expect");
        break;
      case 'expect.js':
      default:
        print ("expect.js')");
        break;
    }
%>,
    <%= moduleVarName %> = require('..');
describe('<%= moduleName %>', function() {
  it('should load', function(done) {
    <%= moduleVarName %>()
    done();
  });

  var expected = ["hello", "world"]
  var expectedString = JSON.stringify(expected)
  it('should eaual ' + expectedString, function(done) {
    var test = <%= moduleVarName %>(expected)
    var json = JSON.stringify(test)
    expect(json).to.equal(expectedString);
    done();
  });

});
