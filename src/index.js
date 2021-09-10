import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from "./exchange.service";


function getConversionRates(response) {
  if (response) {
    $('#choose-exchange').show();
    $('#choose-base').hide();
    return response;
  } else if (response === "404") {
    $('#base-show-errors').text("The code you entered does not match any of our supported currencies");
  } else {
    $('#base-show-errors').text(`There was an error processing your request: ${response}`);
  }
}

async function makeApiCall(baseCurrency) {
  const response = await CurrencyExchange.exchange(baseCurrency);
  return getConversionRates(response);
}

$(document).ready(function () {
  $('#base-currency-form').submit(function(event) {
    event.preventDefault();
    let baseCurrency = $('#base-currency').val();
    let response = makeApiCall(baseCurrency);
    console.log(response);
  });


});