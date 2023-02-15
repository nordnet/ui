import { Theme } from '../../../theme/theme.types';
import { MediaRelatedProps } from './shared.types';

/**
 * Generates styles for different screen sizes based on props.
 * @param getProps function that returns the required props from all the component props, which are then used to create styles for different screen sizes
 * @param stylesPerPropCallbacks object with callbacks that returns the respective styles for each key.
 * @returns styles for all different screen sizes, where all the styles for a specific screen size are wrapped in their respective media query. For example: all md styles will be wrapped in a `theme.media.greaterThan(p.theme.breakpoints['md'])` media query.
 */
const getStylesForSizes =
  <BaseProps, ScreenSizeConfigurableProps>(
    getProps: (p: any) => BaseProps & {
      xs: ScreenSizeConfigurableProps;
    } & MediaRelatedProps<ScreenSizeConfigurableProps>,
    stylesPerPropCallbacks: {
      [K in keyof ScreenSizeConfigurableProps]: (
        props: BaseProps & ScreenSizeConfigurableProps & { theme: Theme },
      ) => string;
    },
  ) =>
  (p: { [key: string]: any; theme: Theme }) => {
    // Get all the required props
    const props = getProps(p);
    // Extract the screen size configurable props
    const { xs, sm, md, lg, xl, ...baseProps } = props;
    // Map over all the screen sizes and generate the styles for each size
    return [
      { size: 'xs', ...xs },
      { size: 'sm', ...sm },
      { size: 'md', ...md },
      { size: 'lg', ...lg },
      { size: 'xl', ...xl },
    ]
      .filter((screenSizeProps) => Object.keys(screenSizeProps).length > 1)
      ?.map(({ size, ...sizeSpecificProps }) => {
        // Generate styles for each key in the `sizeSpecificProps`
        const styles = Object.keys(sizeSpecificProps)
          ?.map((key) =>
            stylesPerPropCallbacks[key]({ ...baseProps, ...sizeSpecificProps, theme: p.theme }),
          )
          .join('\n');
        // Wrap styles in media query, unless the current size is `xs`
        if (size !== 'xs') {
          return `${p.theme.media.greaterThan(p.theme.breakpoints[size])} { ${styles} }`;
        }
        return styles;
      })
      .join('\n');
  };

export default getStylesForSizes;
