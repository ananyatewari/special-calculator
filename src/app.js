// Progression 1: Create special addition

function specialAddition(numberOne, numberTwo){
  if (numberOne < 0 || numberTwo < 0){
    // console.log("Negative numbers are not allowed")
    // return undefined
    return "Negative numbers are not allowed"
  }
  return Math.abs(numberOne - numberTwo)
}

// Progression 2: Create simple division
function simpleDivision(numberOne, numberTwo){
  if (numberOne < 0 || numberTwo < 0){
    return "Negative numbers are not allowed"
  }
  if (numberTwo > numberOne) {
    return "Cannot divide a smaller number by a larger number"
  }
  if (numberTwo == 0){
    return "Not a number"
  }
  return numberOne/numberTwo
}

// Progression 3: Create the special calculator

function specialCalculator(numberOne, numberTwo, operation){
  // if (operation == 'specialAddition'){
  //   return specialAddition(numberOne, numberTwo)
  // }
  // if (operation == 'simpleDivision'){
  //   return simpleDivision(numberOne, numberTwo)
  // }

  return operation(numberOne, numberTwo)
  
}