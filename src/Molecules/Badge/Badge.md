# Badge

This component(s) is used to display a number, label, or icon/illustration on a colored and rounded/rectangular background. It is split up into several components, each with their specific use cases and design system:

### Base Badge (Badge.Base)

The BaseBadge is the base for all other badges and is very flexible.

❗❗ **OBSERVE:**

❗❗ `<Badge.Base>` should only be used directly as a last resort if none of the other badge components covers your intended use case. Consider implementing a new sub badge component if design requires.

### Account Badge (Badge.Account)

Account Badge is used to display a representation of an entity (e.g. a bank, an account type, etc.).

- `badgeColor` - a theme color function used to set the color for the background/badge.
- `badgeSize` - sets the width/height (symmetric ratio) of the badge. Available sizes are: `'l'`: 48px, `'m'`: 32px, `'s'`: 24px.

### Account Badge Stack (Badge.Account.Stack)

Accound Badge Stack is used to display a set of Account Badges stacked on top of each other.

- `useCurrentColor` - toggles the color for the badge background to the currentColor.
- `items` - a list of badges that will be rendered. An item should consist of a label and an optional theme color function.
- `maxElementsInStack` - defines how many badges that should be rendered, including the truncation badge.
- `truncated` - defines if stack should be truncated or not.
- `truncationBadgeColor` - a theme color function used to set the color for the truncation badge.
- `truncationWrapper` - a React.FC component used to set custom typography for the truncation badge. The badge label will be passed as a children prop to the wrapper.

### Icon Badge (Badge.Icon)

Badge with an `Icon` or `Illustration`. Used to bring flair or bring attention to something.

- `badgeColor` - a theme color function used to set the color for the background/badge.
- `badgeSize` - sets the width/height (symmetric ratio) of the badge. Available sizes are: `'xl'`: 80px, `'l'`: 48px, `'m'`: 40px, `'s'`: 32px.
- `children` - the `Icon`- or `Illustration`- component.

### Label Badge (Badge.Label)

Brings attention to a property on a page entity.

- `badgeColor` - a theme color function used to set the color for the background/badge.
- `color` - a theme color function used to set the color for the text.
- `type` - sets the typography to `primary` or `secondary`.
- `weight` - sets the font weight.
- `children` - the badge's text content.

### Number Badge (Badge.Number)

Used to display step progress, number of orders or messages . Displays the number as a badge with numbers.

- `badgeColor` - a theme color function used to set the color for the background/badge.
- `color` - a theme color function used to set the color for the number.
- `badgeSize` - sets the width/height of the badge. Available sizes are: `'l'`: 32px, `'m'`: 24px, `'s'`: 20px.
- `animateOnChange` - triggers the pulse animation when component is updated.
- `symmetricShape` - forces the component to be symmetrical. i.e round.
- `children` - the number.

### Status Badge (Badge.Status)

The Status Badge is used for displaying the statuses like `'create'`, `'complete'`, `'pending',` `'error'`, `'warning'` or `'information'`.
The status can be passed in as a `string` to `variant` which will render the corresponding `icon` and `badgeColor`.

- `badgeSize` - sets the width/height on the badge. Available sizes: `'xl'`: 80px `'l'`: 48px `'m'`: 32px `'s'`: 24px.
- `variant` - status as a string. Statuses are: `'create'`, `'complete'`, `'pending',` `'error'`, `'warning'` or `'information'`.

### Tooltip Badge (Badge.Tooltip)

Tooltip is used to display a clickable/hoverable badge for displaying additonal information in a `Tooltip` or a `Drawer`.
Consumer have to wrap Tooltip in a Tooltip or define their own onClick function.
If the `onClick` prop is passed in to the component, it will add styling to cursor and highlight the badge.

- `badgeSize` - sets the width/height on the badge. Available sizes: `'l'`: 24px `'s'`: 16px.
- `onClick` - a function that is triggered on click. Sets cursor to pointer and outlines the badge and icon.
