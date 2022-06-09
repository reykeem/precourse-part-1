// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds(array) {
  // CODE HERE
  // returns array of odd nums in array
  // use filter on array to return an arr w only odds
  return array.filter((el) => {
    return el % 2 === 1
  })
}


// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens(array) {
  // CODE HERE
  // filter method to return arr of only evens
  return array.filter ((el) => {
    return el % 2 === 0
  })
}


// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax(array) {
  // CODE HERE
  // math.max method to return the max
  return Math.max(...array) //need to use rest syntax
}

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim(string) {
  // trim method on string
  return string.trim()
}

// under the hood, a JavaScript array is a specific type of object in which values are paired with sequentially numbered keys.
// the "Array" object also contains a number of methods that give arrays their functionality.
// the below function should return an empty object that has the behavior and functionality of an array. this object should have the following methods:
  // push(val) adds val to the end
  // pop() removes a value from the end and returns it
  // unshift(val) adds val to the beginning
  // shift() removes a value from the beginning and returns it
// the goal of this problem is to reverse engineer what array methods are actually doing and create an object that has those methods
function createArray() {
  let index = -1
  const methods = {
    push: (...val) => {
      for (let i = 0; i < val.length; i ++) {
        index++
        methods[index] = val[i]
      }
    },
    pop: () => {
      let curr = methods[index]
      delete methods[index]
      index--
      return curr
    },
    shift: () => {
      let curr = methods[0]
      for (let i = 0; i < index; i++) {
        methods[i] = methods[i + 1]
      }
      delete methods[index]
      index--
      return curr
    },
    unshift: (...val) => {
      index += val.length
      for (let i = index; i >= 0; i--) {
        if (i >= val.length) {
          methods[i] = methods[i - val.length]
        }
        else {
          methods[i] = val[i]
        }
      }
      return index
    }
  }
  return methods
}
