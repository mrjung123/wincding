// Functions: three ways to write them

function uitkomsta(number1, number2) {
    const number3 = (number1 * number1) + (number2 * number2);
    const number4 = number3 * number3;
        return number4;
  }
  const antwoorda = uitkomsta(5, 6); 
  console.log(antwoorda);





const uitkomstb = function (number1, number2) {
    const number3 = (number1 * number1) + (number2 * number2);
    const number4 = number3 * number3;
        return number4;
  }; 
    const antwoordb = uitkomstb(5, 6); 
    console.log(antwoordb);



  const uitkomstc = (number1, number2) => {
    const number3 = (number1 * number1) + (number2 * number2);
    const number4 = number3 * number3;
        return number4;
  };
  const antwoordc = uitkomstc(5, 6); 
  console.log(antwoordc);