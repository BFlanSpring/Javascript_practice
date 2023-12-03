function constructNote(message, letters) {
    const letterFreq = {};
  
    // Count the frequency of each letter in 'letters'
    for (let char of letters) {
      letterFreq[char] = (letterFreq[char] || 0) + 1;
    }
    for (let char of message) {
      if (!letterFreq[char]) {
        return false;
      }
      letterFreq[char]--;
    }
  
    return true;
  }
  