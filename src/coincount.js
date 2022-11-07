export const coinCounter = (amount, quarters, dimes, nickels, pennies, convertedValue) => {
	if (isNaN(amount)){
		return "Error";
	}
  if (convertedValue != true) {
    amount = amount * 100;
    quarters = 0;
    dimes = 0;
    nickels = 0;
    pennies = 0;
    convertedValue = true;
  }
	if (amount >= 25){
		amount -= 25;
		quarters ++;
		return coinCounter(amount, quarters, dimes, nickels, pennies, convertedValue);
	} else if (amount >= 10){
		amount -= 10;
		dimes ++;
		return coinCounter(amount, quarters, dimes, nickels, pennies, convertedValue);
	} else if (amount >= 5){
		amount -= 5;
		nickels ++;
		return coinCounter(amount, quarters, dimes, nickels, pennies, convertedValue);
  } else if (amount >= 1){
		amount -= 1;
		pennies ++;
		return coinCounter(amount, quarters, dimes, nickels, pennies, convertedValue);
  } else {
    return "Quarters: " + quarters + ", Dimes: " + dimes + ", Nickels: " + nickels + ", Pennies: " + pennies 
  }
}

const coinCountClose = (coin) => {
	return (amount => {
		const coinTotal = (amount - (amount % coin)) / coin;
		return coinTotal;
	})
}

const quarterCount = coinCountClose(.25);
const dimeCount = coinCountClose(.10);
const nickelCount = coinCountClose(.05);
const pennyCount = coinCountClose(.01);

// quarterCount(3.41);
// theoretical output [.41, 12];



export const lotsOMath = (amount) => {
  return function() {
    console.log("hello")
    const quarters = quarterCount(amount)
    amount = (amount % .25)
    // determine quarters
    return function() {
      const dimes = dimeCount(amount)
      amount = (amount % .1)
      // determine dimes
      return function() {
        const nickels = nickelCount(amount)
        amount = (amount % .05)
        // determine nickels
        return function (){
          const pennies = pennyCount(amount)
          //amount = (amount % .01)
          // determine pennies
          return "Quarters: " + quarters + ", Dimes: " + dimes + ", Nickels: " + nickels + ", Pennies: " + pennies 
        }
      }
    }
  }
}











/*
how many coins sljdflsjf

	if (amount = 0){    
    if (typeof quarters != "undefined"){
      output 
    }
    // object exists
    else
    // object does not exist
	}
}

while amount >= .25
amount -= .25
quarters ++

output = quarters + "quarters"

const coinDivider = (coin) => {
	if (amount % coin >= 0){

	}
}


3.24 % .25
3.24 / .25


declare function (amount) => {
  determine if Number
    return
  
  actual junk
  quarter math (>.25)
    const quarters = amount / .25
    function (amount %.25)
} */