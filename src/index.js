import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from "./exchange.service";



function makeExchange(response) {
  if (response.result === 'success') {
    let moneyResult = 
  } else if (response === "404") {
    $('#show-errors').text("The code you entered does not match any of our supported currencies");
  } else {
    $('#show-errors').text(`There was an error processing your request: ${response}`);
  }
}

async function makeApiCall(targetCurrency) {
  const response = await CurrencyExchange.exchange(targetCurrency);
  makeExchange(response);
}

$(document).ready(function () {
  $('#exchange-form').submit(function(event) {
    event.preventDefault();
    let targetCurrency = $('#target-currency').val();
    let moneyAmount = parseFloat($('money-amount').val());
    makeApiCall(targetCurrency);
  });


});