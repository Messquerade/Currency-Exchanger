import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import HelloWorld from "./business";

$("#click-me").click(function () {
  let message = HelloWorld();
  $("h2").text(message);
});