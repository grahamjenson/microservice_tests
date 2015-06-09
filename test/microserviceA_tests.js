var chai = require('chai')
var expect = chai.expect

var bluebird = require('bluebird')
bluebird.Promise.longStackTraces();

var needle = bluebird.promisifyAll(require('needle'))

var valid_responses = ["Hello World", "Hello Alice", "Go Away Alice", "Go Away Bob"]

describe('service A', function(){  
  it('should return a valid response', function(){
    return needle.getAsync("http://localhost:8081")
    .spread( function(res, body){
      expect(valid_responses).to.contain(body.toString())
    })
  })
})