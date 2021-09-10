import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from "./exchange.service";



function makeExchange(response, moneyAmount) {
  if (response.result === 'success') {
    let moneyResult = moneyAmount * parseFloat(response.conversion_rate);
    $('#money-dollars').text(moneyAmount);
    $('#money-exchanged').text(moneyResult);
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
    makeApiCall(targetCurrency, moneyAmount);
  });


});