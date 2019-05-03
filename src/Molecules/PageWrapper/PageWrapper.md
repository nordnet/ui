# Page Wrapper

This component aligns page contents vertically throughout our different breakpoints.

## Usage

Simply just wrap your components with this component.

```javascript
<PageWrapper>page content here</PageWrapper>
```

### With a custom background color

If you would like to have a section on your page where you have a background-color going all the way horizontally then pass in the wanted color to the `background` prop.

```javascript
<PageWrapper background={t => t.color.background}>page content here</PageWrapper>
```
