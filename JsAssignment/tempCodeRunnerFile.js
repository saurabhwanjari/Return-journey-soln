function uniqueEle(arr) {
    var result = [];
  
    for (var i = 0; i < arr.length; i++) {
      var isUnique = true;
  
      for (var j = 0; j < result.length; j++) {
        if (arr[i] === result[j]) {
          isUnique = false;
          break;
        }
      }
  
      if (isUnique) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  
  // Example usage:
  var arr = [1, 2, 3, 4, 3, 2, 5];
  var uniqueArray = uniqueEle(arr);
  console.log(uniqueArray); 