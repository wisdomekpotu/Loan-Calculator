//first we get the form den we call all the input filoeds by using a mix of the selectors

const form = document.getElementById('form').addEventListener('submit', calculateResult)
function calculateResult(e) {
  //bring in the inputs
  const Principal = document.querySelector('#principal').value
  const Rate = document.querySelector('#rate').value
  const Time = document.querySelector('#time').value
  const totalpayment = document.getElementById('total-payment')
  const monthlypayment = document.getElementById('monthly-payment')
  const totalinterest = document.getElementById('total-interest')

  // The equation is for compound interest is A = p * [[1 + (r/n)] ^ nt]
  // const CalculatedInterest = (Principal * Math.pow((1 + (Rate / (12 * 100))), (12 * Time)));
  futureValue = Principal * (Math.pow(1 + Rate, Time) - 1) / monthlyRate;

  // toFixed is used for rounding the amount with two decimal places.
  monthlypayment.value = (CalculatedInterest.toFixed(2) - Principal).toFixed(2);
  totalpayment.value = CalculatedInterest.toFixed(2);

  e.preventDefault()
}
