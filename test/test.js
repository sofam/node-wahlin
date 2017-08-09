var assert = require('assert')
var wahlin = require('../index.js')

describe("encode()", function () {
  it('Encodes Ca to K', function () {
    assert.equal('K',wahlin.encode('Ca'))
  })
})

describe("encode()", function () {
  it('Encodes Ace to S', function () {
    assert.equal('S',wahlin.encode('Ace'))
  })
})

describe("encode()", function () {
  it('Encodes Chr to K', function () {
    assert.equal('K',wahlin.encode('Chr'))
  })
})