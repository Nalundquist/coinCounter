/*
export const coinCountClose = (coin) => {
	return (amount => {
		const coinTotal = (amount - (amount % coin)) / coin;
		amount = amount % coin;
		return coinTotal;
	})
}

const quarterCount = coinCountClose(.25);
const dimeCount = coinCountClose(.10);
const nickelCount = coinCountClose(.05);
const pennyCount = coinCountClose(.01);

// quarterCount(3.41);
// theoretical output [.41, 12];



/*
export const lotsOMath = (amount) => {
  console.log("hello")
  return function() {
  return step1()
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
} */
// export const lotsOMath = (amount) => {
//   return step1(amount);
//   }


//   function step1(amount){
//     const quarters = quarterCount(amount);
//     amount = (amount % .25);
//     return step2(amount);
//   }
//   function step2(amount){
//     const dimes = dimeCount(amount);
//     amount = (amount % .10);
//     return step3(amount);
//   }
//   function step3(amount){
//     const nickels = nickelCount(amount);
//     amount = (amount % .05);
//     return step4(amount);
//   }
//   function step4(amount){
//     const pennies = pennyCount(amount);
//     return "Quarters: " + quarters + ", Dimes: " + dimes + ", Nickels: " + nickels + ", Pennies: " + pennies;
//   }

  const coinCountClose = (coin) => {
    return (amount => {
      const coinTotal = (amount - (amount % coin)) / coin;
      amount = amount % coin;
      return coinTotal;
    })
  }
  const quarterCount = coinCountClose(.25)
  const dimeCount = coinCountClose(.10)
  const nickelCount = coinCountClose(.05)
  const pennyCount = coinCountClose(.01)
  /*

  export const lotsOMath = (amount) => {
    return function step1(){
      const quarters = quarterCount(amount);
      amount = (amount % .25);
      return function step2(quarters) {
        const dimes = dimeCount(amount);
        amount = (amount % .10);
        return function step3(dimes){
          const nickels = nickelCount(amount);
          amount = (amount % .05);
          return function step4(nickels){
            const pennies = pennyCount(amount);
            return "Quarters: " + quarters + ", Dimes: " + dimes + ", Nickels: " + nickels + ", Pennies: " + pennies;
          }
        }
      }
    }
  } */
  
  
export const lotsOMath = (amount) => {
  return (step1) => {
    const quarters = quarterCount(amount);
    amount = (amount % .25);
    return (step2) => {
      const dimes = dimeCount(amount);
      amount = (amount % .10);
      return (step3) => {
        const nickels = nickelCount(amount);
        amount = (amount % .05)
        return (step4) => {
          const pennies = pennyCount(amount);
          return "Quarters: " + quarters + ", Dimes: " + dimes + ", Nickels: " + nickels + ", Pennies: " + pennies;
        }
      }
    }
  }
}