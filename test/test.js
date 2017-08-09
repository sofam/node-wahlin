var assert = require('assert')
var wahlin = require('../index.js')

describe("encode() C rules", function () {
  it('Encodes Ca to K', function () {
    assert.equal('KA',wahlin.encode('Ca'))
  })
  it('Encodes Co to K', function () {
    assert.equal('KO',wahlin.encode('Co'))
  }) 
  it('Encodes Ace to S', function () {
    assert.equal('ASE',wahlin.encode('Ace'))
  })
})

describe("encode() CH rules", function () {
  it('Encodes Chr to K', function () {
    assert.equal('KR',wahlin.encode('Chr'))
  })
})

describe("encode() D rules", function () {
  it('Encodes Ddt to D', function () {
    assert.equal('DT',wahlin.encode('Ddt'))
  })
})

describe("encode() F rules", function () {
  it('Encodes Af to V', function () {
    assert.equal('AV',wahlin.encode('Af'))
  })
  it('Encodes Fa to V', function () {
    assert.equal('VA',wahlin.encode('Fa'))
  })
  it('Encodes zFb to V', function () {
    assert.equal('ZVB',wahlin.encode('zFb'))
  })
})

describe("encode() G rules", function () {
  it('Encodes Rg to J', function () {
    assert.equal('RJ',wahlin.encode('Rg'))
  })
  it('Encodes vRe to J', function () {
    assert.equal('VRJ',wahlin.encode('vRg'))
  })
})

describe("encode() H rules", function () {
  it('Encodes Ath to AT', function () {
    assert.equal('AT',wahlin.encode('Ath'))
  })
  it('Encodes HA to A', function () {
    assert.equal('A',wahlin.encode('HA'))
  })
  it('Encodes HB to B', function () {
    assert.equal('B',wahlin.encode('HB'))
  })
})

describe("encode() I rules", function () {
  it('Encodes Hie to HJE', function () {
    assert.equal('JE',wahlin.encode('Hie'))
  })
  it('Encodes Ei to Ej', function () {
    assert.equal('EJ',wahlin.encode('Ei'))
  })
  it('Encodes Iy to JY', function () {
    assert.equal('JY',wahlin.encode('Iy'))
  })
})

describe("encode() K rules", function () {
  it('Encodes Sket to S+ET', function () {
    assert.equal('S+ET',wahlin.encode('Sket'))
  })
})

describe("encode() KJ rules", function () {
  it('Encodes Skjut to S+UT', function () {
    assert.equal('S+JUT',wahlin.encode('Skjut'))
  })
})

describe("encode() K rules", function () {
  it('Encodes Ljug to JUG', function () {
    assert.equal('JUG',wahlin.encode('Ljug'))
  })
})