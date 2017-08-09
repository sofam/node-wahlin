

module.exports = {
  // Wåhlin encode word
  encode: function(word) {
    const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']
    word = word.toUpperCase()
    var coding = ''
    for(var i = 0; i < word.length; i++) {
      letter = word[i]
      // Rule set A
      if (letter === 'A') {
        if(word[i+1] === 'E') {
          continue
        }
        else {
          coding += letter
        }
      }
      // Rule set C
      else if (letter === 'C' && word[i+1] !== 'H') {
        if(word[i+1] === 'A' || 
          word[i+1] === 'O'  ||
          word[i+1] === 'U'  ||
          word[i+1] === 'L'  ||
          word[i+1] === 'S'  ||
          word[i+1] === 'R'  ||
          i === 0) {
            coding += 'K'
        }
        else if(i === 1 && (
          word[i+1] === 'E' ||
          word[i+1] === 'I' ||
          word[i+1] === 'Y'
        )) {
            coding += 'S'
        }
        else {
          coding += letter
        }
      }
      // Rule set CH
      else if (letter === 'C' && word[i+1] === 'H') {
        if(word[i+2] === 'R' ||
          word[i+2] === 'S'  ||
          word[i+2] === 'T') {
            coding += 'K'
          }
      }
      // Rule set D
      else if (letter === 'D') {
        if (word[i+1] === 'J' || word[i+1] === 'T') {
          continue
        } else {
          coding += letter
        }
      }
      // Rule set F
      else if (letter === 'F') {
        if((word[i-1] === 'A' ||
          word[i-1] === 'E'  ||
          word[i-1] === 'I'  ||
          word[i-1] === 'O'  ||
          word[i-1] === 'U'  ||
          word[i-1] === 'Y'  ||
          word[i-1] === 'Å'  ||
          word[i-1] === 'F'  ||
          word[i-1] === 'L'  ||
          word[i-1] === 'R') ||
          (i === 0            ||
          word[i+1] === 'B'  ||
          word[i+1] === 'C'  ||
          word[i+1] === 'D'  ||
          word[i+1] === 'G'  ||
          word[i+1] === 'H'  ||
          word[i+1] === 'K'  ||
          word[i+1] === 'M'  ||
          word[i+1] === 'N'  ||
          word[i+1] === 'P'  ||
          word[i+1] === 'S'  ||
          word[i+1] === 'V')
        ) {
          coding += 'V'
        }
        else {
          coding += letter
        }
      }
      // Rule set G
      else if (letter === 'G') {
        if((word[i-1] === 'R') ||
          (i-1 === 0 && word[i+1] === 'E' ||
          word[i+1] === 'I' || 
          word[i+1] === 'Y' || 
          word[i+1] === 'Ö' )) {
            coding += 'J'
          }
          else {
            coding += letter
          }
          
      }
      // Rule set H
      else if (letter === 'H') {
        if (word[i-1] === 'T') {
          continue
        }
        else if (i === 0 || function() {
          for (var k = 0; k < consonants.length; k++) {
            if (consonants[k] == word[i+1]) {
              return true
            }
          }
        }) {
          continue
        }
        else {
          coding += letter
        }
      }
      // Rule set I
      else if (letter === 'I') {
        if (word[i-1] === 'H' && 
          (word[i+1] === 'A' ||
           word[i+1] === 'E' || 
           word[i+1] === 'O' || 
           word[i+1] === 'U' || 
           word[i+1] === 'Y' ||
           word[i+1] === 'Å' || 
           word[i+1] === 'Ö')) {
             coding += 'J'
           }
        else if (word[i-1] === 'A' ||
                 word[i-1] === 'E' ||
                 word[i-1] === 'O' ||
                 word[i-1] === 'Ö') {
                   coding += 'J'
                 }
        else if (word[i+1] === 'E' ||
                 word[i+1] === 'O' ||
                 word[i+1] === 'Y' ||
                 word[i+1] === 'Ö') {
                   coding += 'J'
                 }
        else {
          coding += letter
        }
      }
      // Rule set K
      else if (letter === 'K' && word[i+1] !== 'J') {
        if (i-1 === 0 && (word[i+1] === 'E' ||
                          word[i+1] === 'I' ||
                          word[i+1] === 'Y' ||
                          word[i+1] === 'Ö')) {
                            coding += '+'
                          }
        else {
          coding += letter
        }
      }
      // Rule set KJ
      else if (letter === 'K' && word[i+1] === 'J') {
        if (i-1 === 0) { // This might be needed but I don't know for certain yet, write the full ruleset and then test it
          coding += '+'
        }
      }
      // Rule set L
      else if (letter === 'L') {
        if (word[i+1] === 'J') {
          continue
        }
        else {
          coding += letter
        }
      }
      // Rule set PH
      else if (letter === 'P') {
        if (word[i+1] === 'H') {
          coding += 'F'
        }
        else {
          coding += letter
        }
      }
      // Rule set QU and Q
      else if (letter === 'Q') {
        if (word[i+1] === 'U') {
          coding += 'KV'
          i += 1
        }
        else {
          coding += 'K'
        }
      }
      // Rule set SJ, SCH, STJ, SKJ, SK
      else if (letter === 'S') {
        if (word[i+1] === 'J') {
          coding += '*'
          i += 1
        }
        else if (word[i+1] === 'C' && word[i+2] === 'H') {
          coding += '*'
          i += 2
        }
        else if (word[i+1] === 'T' && word[i+2] === 'J') {
          coding += '*'
          i += 2
        }
        else if (word[i+1] === 'K' && word[i+2] === 'J') {
          coding += '*'
          i += 2
        }
        else if (word[i+1] === 'K' && word[i+2] === 'Ö') {
          coding += '*'
          i += 1
        }
        else if (word[i+1] === 'K' && word[i+2] === 'E') {
          coding += '*'
          i += 1
        }
        else if (word[i+1] === 'K' && word[i+2] === 'I') {
          coding += '*'
          i += 1
        }
        else if (word[i+1] === 'K' && word[i+2] === 'Y') {
          coding += '*'
          i += 1
        }
        else {
          coding += letter
        }                                         
      }
      // Rule set TJ
      else if (letter === 'T' && word[i+1] === 'J' && i === 0) {
        coding += '+'
        i += 1
      }
      // Rule set U
      else if (letter === 'U' && word[i-1] === 'O') {
        continue
      }
      // Rule set W
      else if (letter === 'W') {
        coding += 'V'
      }
      // Rule set X
      else if (letter === 'X') {
        coding += 'KS'
      }
      // Rule set Y
      else if (letter === 'Y' && (word[i-1] == 'A' || word[i-1] == 'E' || word[i-1] == 'O' || word[i-1] == 'U')) {
        coding += 'J'
      }
      // Rule set Z
      else if (letter === 'Z') {
        coding += 'S'
      }
      // Rule set Å
      else if (letter === 'Å' && (word[i+1] === 'V' || (word[i+1] === 'N' && word[i+2] === 'G'))) {
        coding += 'O'
      }
      // Rule set Ä
      else if (letter === 'Ä') {
        coding += 'E'
      }
      else {
        coding += letter
      }
    }

    // Return coding
    return coding
  }
}