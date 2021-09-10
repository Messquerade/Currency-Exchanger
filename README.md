# Currency Exchanger

#### This website will convert amounts in US dollars to numerous other currencies

#### By Anna Clarke

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_
* _Bootstrap_
* _webpack_
* _jest_
* _babel_
* _popper_
* _eslint_
* _ExchangeRate-API_

## Description
Users can use this website to quickly and easily convert money in US dollars to any supported currency. From Norwegian Krone to Tanzanian Shilling, currencies are selected via  ISO 4217 code. The user can look up which code they need in an updated table of supported currencies.

## Setup/Installation Requirements

* Clone this repository to your desktop
* Open in text editor
* If you are using a Mac: open the package.json and find the scripts property,
change the line "start": "npm run build & webpack-dev-server --open --mode development",
to "start": "npm run build; webpack-dev-server --open --mode development",
* Navigate to the top directory and type, `$ npm install`, into terminal
* Go to [ExchangeRate-API](https://www.exchangerate-api.com/) and generate a free API key
* Create a .env file and save your API key as API_KEY={your key here}
* type, `$ npm run build`, to build your environment
* type, `$ npm run start`, to open in your browser

## Known Bugs

* _Only takes codes not names of countries_
* _Only converts dollars as base currency_

## License

_[MIT](https://opensource.org/licenses/MIT)_

Copywrite(c)2021 Anna Clarke

## Contact Information

Anna Clarke: anclarkie@gmail.com