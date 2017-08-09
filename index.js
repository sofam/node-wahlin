

module.exports = {
  // Wåhlin encode word
  encode: function(word) {
    word = word.toUpperCase()
    var coding = ''
    for(var i = 0; i < word.length; i++) {
      letter = word[i]
      // Rule set A
      if (letter === 'A') {
        if(word[i+1] === 'E') {
          continue
        }
      }
      // Rule set C
      if (letter === 'C' && word[i+1] !== 'H') {
        if(word[i+1] === 'A' || 
          word[i+1] === 'O'  ||
          word[i+1] === 'U'  ||
          word[i+1] === 'L'  ||
          word[i+1] === 'S'  ||
          word[i+1] === 'R'  ||
          i === 0) {
            coding += 'K'
        }
        if(i === 1 && (
          word[i+1] === 'E' ||
          word[i+1] === 'I' ||
          word[i+1] === 'Y'
        )) {
            coding += 'S'
        }
      }
      // Rule set CH
      if (letter === 'C' && word[i+1] === 'H') {
        if(word[i+2] === 'R' ||
          word[i+2] === 'S'  ||
          word[i+2] === 'T') {
            coding += 'K'
          }
      }
      // Rule set D
      if (letter === 'D') {
        if (word[i+1] === 'J' || word[i+1] === 'T') {
          continue
        } else {
          coding += letter
        }
      }
      // Rule set F
      if (letter === 'F') {
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
      }
      // Rule set G
      if (letter === 'G') {
        if((word[i-1] === 'R') ||
          (i-1 === 0 && word[i+1] === 'E' ||
          word[i+1] === 'I' || 
          word[i+1] === 'Y' || 
          word[i+1] === 'Ö' )) {
            coding += 'J'
          }
      }
    }

    // Return coding
    return coding
  }
}