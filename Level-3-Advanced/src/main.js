// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// const callback = function(element, index, array) {
//   console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, callback) {
  // declare an empty arr
  const result = []
  // iterate thru arr
  for (let i = 0; i < array.length; i++) {
    // pass each el in cb w args (el, index, arr)
    result.push(callback(array[i], i, array))
  }
  return result
}

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map
function map(array, callback) {
  // declare an output arr
  const output = []
  // iterate thru array
  array.forEach (el => {
    // push the esult of passing el to cb into an output arr 
    output.push(callback(el))
  })
  return output
}

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter(collection, callback) {
  // declare an output arr
  const output = []
  // iterate thru collection array
  collection.forEach (el => {
    // if the result of running el in arr to cb is true
    if (callback(el)) {
      // push the el into output arr
      output.push(el)
    }
  })
  // return output
  return output
}

// Removes all elements from array that callback returns truthy for and returning a collection of elements that did not pass the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [1,3]
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return value % 2 !== 0;
// }); → {b:2, d:4}
// Challenge: use filter
function reject(collection, callback) {
  // returns an obj or array with falsy values
  // use filter method on collection arr
    const falsyArr = collection.filter(el => callback(el) === false)
    if (Array.isArray(collection)) {
      return falsyArr
    } else {
      // empty obj of falsies
      const falsyObj = {}
      //iterate thru collection obj
      for(let key in collection) {
        // if the value of the obj is included in the falsy array
        if (falsyArr.includes(collection[key])) {
          // add it to falsyobj and assign val to collection[key]
          falsyObj[key] = collection[key]
        }
      }
      // return falsyobj
      return falsyObj
    }
}

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
// function uniq(array) {
//   let i = 0
//   for (let j = 1; j < array.length; j++){
//     if (array[i] !== array[j]) {
//       i++
//       array[i] = array[j]
//     }
//   }
//   return array.slice(0,i)
// }
// function uniq(arr) {
//   // declare empty obj tracks frequency of el in arr
//   const obj = {}
//   // iterate thru arr
//   arr.forEach (el => {
//     // if the el does not exist in obj
//     if (!obj[el]) {
//       // add as key and val to 1
//       obj[el] = 1
//     }
//     // else
//     else {
//       // increment the key's val by 1
//       obj[el] ++
//     }
//   })
//   // declare result arr
//   const result = []
//   // iterate thru the obj
//   for (let key in obj) {
//     // if the value of the key is 1
//     if (obj[key] === 1) {
//       // push the key to result arr
//       result.push(key)
//     }
//   }
//   // return result arr
//   return result
// }

function uniq (arr) {
  // declare an empty arr
  const result = []
  // iterate thru arr
  arr.forEach (el => {
    // if arr does not include the el
    if (!result.includes(el))
      // push the el into arr
      result.push(el)
  })
  // return result arr
  return result
}

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
  // iterate thru array
  for (let i = 0; i < array.length; i ++) {
    // if arr[i] is value
    if (array[i] === value) {
      // return i
      return i
    }
  }
  // return -1
  return -1
}


// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
function once(func) {
  // declare a cache result
  let cache
  // declare a count
  let count = 0
  // returns a func that is restricted to invoking func once
  return function (arg) {
    // increment count when called
    count++
    // if count is less than or eq to 1
    if (count <= 1) {
      // return func(arg)
      cache = func(arg)
      return cache
    }
    // else
    else {
      // return func(arg)
      return cache
    }
  }
}

// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {
  // declare starting index initialized to 0
  let index = 0
  // declare acc
  let acc
  // if the initial is not defined
  if (start === undefined) {
    // acc assigned to array[0]
    acc = array[0]
    // increment the index
    index++
  }
  // otherwise
  else {
    // acc assigned to initial
    acc = start
  }
  // iterate thru array
  for (let i = index; i < array.length; i++) {
    // reassign acc to result of cb passing in acc and el
    acc = callback(acc, array[i])
  }
  // return acc
  return acc
}


// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
// every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// });  -> true
// every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// });  -> false
// BONUS: use reduce in your answer
function every(array, func) {
  // iterate thru arr
  for (let i = 0; i < array.length; i ++) {
    // if result of run each el in func is false
    if (!func(array[i])) {
      // return false
      return false
    }
  }
  // return true
  return true
}

// Flattens a nested array.
// flatten([1, [2, 3, [4]]]); → [1, 2, 3, [4]]
function flatten(array) {
  return array.flat()
}

// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {
  //declare an empty array
  let result = []
  // iterate thru array
  array.forEach (el => {
    // if the element is an array
    if (Array.isArray(el)) {
      // reassign flat array to result array concatted w flattenDeep passing in el
      result = result.concat(flattenDeep(el))
    }
    // else
    else {
      // push the el to result array
      result.push(el)
    }
  })
  // return result
  return result
}
