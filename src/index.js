import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from "./exchange.service";



function makeExchange(response, moneyAmount) {
  if (response.result === 'success') {
    let moneyResult = moneyAmount * parseFloat(response.conversion_rate);
    $('#money-dollars').text(moneyAmount.toFixed(2));
    $('#money-exchanged').text(moneyResult.toFixed(2));
    $('#result').show();
    $('#show-errors').text("");
  } else if (response === "404") {
    $('#show-errors').text("The code you entered does not match any of our supported currencies");
    $('#result').hide();
  } else {
    $('#show-errors').text(`There was an error processing your request: ${response}`);
    $('#result').hide();
  }
}

async function makeApiCall(targetCurrency, moneyAmount) {
  const response = await CurrencyExchange.exchange(targetCurrency);
  makeExchange(response, moneyAmount);
}

$(document).ready(function () {
  $('#exchange-form').submit(function(event) {
    event.preventDefault();
    let targetCurrency = $('#target-currency').val();
    let moneyAmount = parseFloat($('#money-amount').val());
    if (isNaN(moneyAmount) || moneyAmount < 0) {
      $('#show-errors').text("Please enter a positive number (ex. 10)");
    } else {
      makeApiCall(targetCurrency, moneyAmount);
    }
  });
});