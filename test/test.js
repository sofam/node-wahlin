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
  it('Encodes Censorn to SENSORN', function () {
    assert.equal('SENSORN',wahlin.encode('Censorn'))
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
  it('Encodes Fa to VA', function () {
    assert.equal('VA',wahlin.encode('Fa'))
  })
  it('Encodes zFb to SVB', function () {
    assert.equal('SVB',wahlin.encode('zFb'))
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
  it('Encodes Hand to HAND', function () {
    assert.equal('HAND',wahlin.encode('Hand'))
  })
})

describe("encode() I rules", function () {
  it('Encodes Hie to HJE', function () {
    assert.equal('HJE',wahlin.encode('Hie'))
  })
  it('Encodes Ei to Ej', function () {
    assert.equal('EJ',wahlin.encode('Ei'))
  })
  it('Encodes Iy to JY', function () {
    assert.equal('JY',wahlin.encode('Iy'))
  })
})

describe("encode() K rules", function () {
  it('Encodes Skita to *ITA', function () {
    assert.equal('*ITA',wahlin.encode('Skita'))
  })
  it('Encodes Kemi to +EMI', function () {
    assert.equal('+EMI',wahlin.encode('Kemi'))
  })
  it('Encodes Körkort to +ÖRKORT', function () {
    assert.equal('+ÖRKORT',wahlin.encode('Körkort'))
  })
  it('Encodes Krossa to KROSSA', function () {
    assert.equal('KROSSA',wahlin.encode('Krossa'))
  })
})

describe("encode() KJ rules", function () {
  it('Encodes skalkeskjulet to SKALKE*JULET', function () {
    assert.equal('SKALKE*ULET',wahlin.encode('skalkeskjulet'))
  })
  it('Encodes kjol to +OL', function () {
    assert.equal('+OL',wahlin.encode('kjol'))
  })
})

describe("encode() L rules", function () {
  it('Encodes Ljug to JUG', function () {
    assert.equal('JUG',wahlin.encode('Ljug'))
  })
})

describe("encode() PH rules", function () {
  it('Encodes Philadelphia to FILADELFJA', function () {
    assert.equal('FILADELFJA',wahlin.encode('Philadelphia'))
  })
  it('Encodes Upphettningen to UPPHETTNINGEN', function() {
    assert.equal('UPPHETTNINGEN',wahlin.encode('Upphettningen'))
  })
})

describe("encode() Q and QU rules", function () {
  it('Encodes Quinoa to KVINOA', function () {
    assert.equal('KVINOA',wahlin.encode('Quinoa'))
  })
  it('Encodes Quiz to KVIS', function () {
    assert.equal('KVIS',wahlin.encode('Quiz'))
  })
})

describe("encode() SJ, SCH, STJ, SKJ, SKÖ, SKE, SKI, SKY rules", function () {
  it('Encodes Själ to *EL', function () {
    assert.equal('*EL',wahlin.encode('Själ'))
  })
  it('Encodes Stjärna to *ERNA', function () {
    assert.equal('*ERNA',wahlin.encode('Stjärna'))
  })
  it('Encodes Sköterska to *ÖTERSKA', function () {
    assert.equal('*ÖTERSKA',wahlin.encode('Sköterska'))
  })
  it('Encodes Skidor to *IDOR', function () {
    assert.equal('*IDOR',wahlin.encode('Skidor'))
  })
  it('Encodes Sked to *ED', function () {
    assert.equal('*ED',wahlin.encode('Sked'))
  })
  it('Encodes Schema to *EMA', function () {
    assert.equal('*EMA',wahlin.encode('Schema'))
  })
  it('Encodes Skjut to *UT', function () {
    assert.equal('*UT',wahlin.encode('Skjut'))
  })
})

describe("encode() TJ rules", function () {
  it('Encodes Tjuven to +UVEN', function () {
    assert.equal('+UVEN',wahlin.encode('Tjuven'))
  })
})

describe("encode() U rules", function () {
  it('Encodes Moussera to MOSSERA', function () {
    assert.equal('MOSSERA',wahlin.encode('Moussera'))
  })
})

describe("encode() W rules", function () {
  it('Encodes Wikström to VIKSTRÖM', function () {
    assert.equal('VIKSTRÖM',wahlin.encode('Wikström'))
  })
})

describe("encode() X rules", function () {
  it('Encodes Alexander to ALEKSANDER', function () {
    assert.equal('ALEKSANDER',wahlin.encode('Alexander'))
  })
})

describe("encode() Y rules", function () {
  it('Encodes Ay to AJ', function () {
    assert.equal('AJ',wahlin.encode('Ay'))
  })
})

describe("encode() Z rules", function () {
  it('Encodes Zebra to SEBRA', function () {
    assert.equal('SEBRA',wahlin.encode('Zebra'))
  })
})

describe("encode() Å rules", function () {
  it('Encodes Ångpanna to ONGPANNA', function () {
    assert.equal('ONGPANNA',wahlin.encode('Ångpanna'))
  })
  it('Encodes Håv to HOV', function () {
    assert.equal('HOV',wahlin.encode('HÅV')) // Broken test, needs to work, unsure if HOV is correct
  })
})


