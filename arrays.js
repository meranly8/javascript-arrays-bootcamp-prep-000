var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function addElementToBeginningOfArray(array, element) {
    array = [element,...array]
    return array
  }
  
  function destructivelyAddElementToBeginningOfArray (array,element) {
    array.unshift(element)
  }
  
  function addElementToEndofArray(array,element) {
    array = [...array,element]
    return array
  }
  
  function destructivelyAddElementToEndOfArray(array,element) {
    
  }
  