var assert = require('assert')
var wahlin = require('../index.js')

describe("encode() C rules", function () {
  it('Encodes Ca to K', function () {
    assert.equal('K',wahlin.encode('Ca'))
  })
  it('Encodes Co to K', function () {
    assert.equal('K',wahlin.encode('Co'))
  }) 
  it('Encodes Ace to S', function () {
    assert.equal('S',wahlin.encode('Ace'))
  })
})


describe("encode() CH rules", function () {
  it('Encodes Chr to K', function () {
    assert.equal('K',wahlin.encode('Chr'))
  })
})

describe("encode() D rules", function () {
  it('Encodes Ddt to D', function () {
    assert.equal('D',wahlin.encode('Ddt'))
  })
})

describe("encode() F rules", function () {
  it('Encodes Af to V', function () {
    assert.equal('V',wahlin.encode('Af'))
  })
  it('Encodes Fa to V', function () {
    assert.equal('V',wahlin.encode('Fa'))
  })
  it('Encodes zFb to V', function () {
    assert.equal('V',wahlin.encode('zFb'))
  })
})
