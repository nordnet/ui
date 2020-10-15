# Spinner component

A spinner!

## Props

`size` - a multiple of the `unit`.

`color` - a function to grab a color value from theme, like so: `t => t.color.warning`.

`id` - a _globally_ unique id for the spinner. Tip: make it something descriptive that's unique for the page, e.g.: `"marketCardSpinner"`... or just `"asdasdsfdsgdfsrarerd"`, as long as it's unique.

`delay` - set to false to disable the default delay, or a number to set the delay specifically. The delay is there to prevent loading the spinner for quicker operations, where a spinner would just worsen the perceived performance.

## Some examples

```javascript
<Spinner id="defaultSpinner" />
<Spinner size={8} id="largerSpinner" />
<Spinner size={8} id="largerSpinner" delay={false} />
```
