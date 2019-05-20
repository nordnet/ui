# Number component

The number component provides intl-formatting of a number, and support for displaying currency and percentage numbers. It uses react-intl and must be wrapped in the `IntlProvider`, see example [here](https://github.com/yahoo/react-intl#example).

## Props

`value` - the number value to format.

`decimals` - the number of decimals to show (with rounding).

`ticks` - determine the decimal formatting from a tick size table. See the tick size story. The decimals for a traded instrument can vary according to the instrument price, read more on [wikipedia](https://en.wikipedia.org/wiki/Tick_size).

`percentage` - displays the number with a percentage sign afterwards.

`currency` - displays the number with a currency.

`sign` - whether to always show the sign of the number, or only the minus sign.

## Some examples

```javascript
<div><Number value={1000000}/></div>
<div><Number value={3400} currency="SEK" /></div>
```