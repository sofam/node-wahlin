

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
      else {
        coding += letter
      }
    }

    // Return coding
    return coding
  }
}