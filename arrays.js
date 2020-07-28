var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray(array, element){
 var newArray = array
 newArray.unshift(element)
  return newArray
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift();
  return array;
}
function addElement
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}