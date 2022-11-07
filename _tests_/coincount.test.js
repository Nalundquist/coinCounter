import {coinCounter} from './../src/coincount.js'
import {lotsOMath} from './../src/lotsofmath.js'
import {coinCountClose} from './../src/lotsofmath.js'

describe (coinCounter, () => {
	test('Should take quarters from amount', () => {
		expect(coinCounter(3.41)).toEqual("Quarters: 13, Dimes: 1, Nickels: 1, Pennies: 1");
	})

  test('Should take quarters from amount', () => {
    expect(coinCounter(2.94)).toEqual("Quarters: 11, Dimes: 1, Nickels: 1, Pennies: 4");
    })

  test('Should take quarters from amount', () => {
    expect(coinCounter(15)).toEqual("Quarters: 60, Dimes: 0, Nickels: 0, Pennies: 0");
    })
  
  test('Should take quarters from amount', () => {
    expect(coinCounter(0)).toEqual("Quarters: 0, Dimes: 0, Nickels: 0, Pennies: 0");
    })

  test('Should take quarters from amount', () => {
    expect(coinCounter(0.19)).toEqual("Quarters: 0, Dimes: 1, Nickels: 1, Pennies: 4");
    })

  test('Should take quarters from amount', () => {
    expect(coinCounter("bacon")).toEqual("Error");
    })
})

describe (lotsOMath, () => {

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

  function step1(){
    const quarters = quarterCount(amount);
    amount = (amount % .25);
    return step2();
  }
  function step2(){
    const dimes = dimeCount(amount);
    amount = (amount % .10);
    return step3();
  }
  function step3(){
    const nickels = nickelCount(amount);
    amount = (amount % .05);
    return step4();
  }
  function step4(){
    const pennies = pennyCount(amount);
    return "Quarters: " + quarters + ", Dimes: " + dimes + ", Nickels: " + nickels + ", Pennies: " + pennies;
  }


	test('Should take coins from amount', () => {
		expect(lotsOMath(3.42)).toEqual("Quarters: 13, Dimes: 1, Nickels: 1, Pennies: 1");
	})

  test('Should take quarters from amount', () => {
		expect(lotsOMath(3.41)).toEqual("Quarters: 13, Dimes: 1, Nickels: 1, Pennies: 1");
	})

  test('Should take quarters from amount', () => {
    expect(lotsOMath(2.94)).toEqual("Quarters: 11, Dimes: 1, Nickels: 1, Pennies: 4");
    })

  test('Should take quarters from amount', () => {
    expect(lotsOMath(15)).toEqual("Quarters: 60, Dimes: 0, Nickels: 0, Pennies: 0");
    })
  
  test('Should take quarters from amount', () => {
    expect(lotsOMath(0)).toEqual("Quarters: 0, Dimes: 0, Nickels: 0, Pennies: 0");
    })

  test('Should take quarters from amount', () => {
    expect(lotsOMath(0.19)).toEqual("Quarters: 0, Dimes: 1, Nickels: 1, Pennies: 4");
    })

  // test('Should take quarters from amount', () => {
  //   expect(coinCounter("bacon")).toEqual("Error");
  //   })
}) 