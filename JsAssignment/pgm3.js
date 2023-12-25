function commonelem(arr1, arr2) {
    var commonElements = [];
  
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          commonElements.push(arr1[i]);
          break; 
        }
      }
    }
  
    return commonElements;
  }
  
  

  var array1 = [1, 2, 3, 4, 5];
  var array2 = [3, 4, 5, 6, 7];
  
  var commonElementsArray = commonelem(array1, array2);
  console.log(commonElementsArray);
  