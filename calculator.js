// here if we have a previous calculation stored in the localStorage we gon get that
    // if not we start with a empty string
    let calculation = String(localStorage.getItem('calculation')) || '';
    function input(value){
      // calculation = `${calculation}`;
      calculation += String(value);
      console.log(calculation);
      ShowCalculation(calculation);
      // at last to save the output in string format to the localStorage in each step.
      saveCalculation();
    }
    // Optional: you can also create a function in order
    // to reuse this code.
      function saveCalculation() {
        localStorage.setItem('calculation', String(calculation));
      }
      function ShowCalculation(calculation) {
        document.querySelector('.calculation').innerHTML = `${calculation}`;
      }
