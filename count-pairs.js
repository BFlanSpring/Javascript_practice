function countPairs(arr, target) {
    let count = 0;
    const numSet = new Set(arr);
  
    for (let num of arr) {
      if (numSet.has(target - num)) {
        count++;
        numSet.delete(num);
      }
    }
  
    return count;
  }
  