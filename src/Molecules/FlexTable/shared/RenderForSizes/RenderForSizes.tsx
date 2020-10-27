import React from 'react';
import {
  ScreenSize,
  ScreenSizePropsAndSize,
  GetMediaQuery,
  GetPropsForScreenSizes,
  RenderForSizesComponent,
  ChildWrapperComponent,
} from './RenderForSizes.types';
import IsomorphicMedia from '../../../../Atoms/IsomorphicMedia';

const getPropsForScreenSizes: GetPropsForScreenSizes = ({ xs, sm, md, lg, xl }) =>
  [
    { size: 'xs' as ScreenSize, ...xs },
    { size: 'sm' as ScreenSize, ...sm },
    { size: 'md' as ScreenSize, ...md },
    { size: 'lg' as ScreenSize, ...lg },
    { size: 'xl' as ScreenSize, ...xl },
  ]
    .filter((media) => Object.keys(media).length > 1)
    .map((_, index, arr) => {
      const sizesUpToNow = arr.slice(0, index + 1);
      const screenSizeProps = sizesUpToNow.reduce<ScreenSizePropsAndSize>(
        (acc, values) => ({
          ...acc,
          ...values,
        }),
        {} as ScreenSizePropsAndSize,
      );
      return screenSizeProps;
    });

const getMediaQuery: GetMediaQuery = (theme, currentSize, nextSize) => {
  if (currentSize === 'xs' && nextSize) {
    return theme.media.lessThan(theme.breakpoints[nextSize]);
  }
  if (nextSize) {
    return theme.media.between(theme.breakpoints[currentSize], theme.breakpoints[nextSize]);
  }
  return theme.media.greaterThan(theme.breakpoints[currentSize]);
};

const ChildWrapper: ChildWrapperComponent = ({ children, ...props }) => <>{children(props)}</>;

export const RenderForSizes: RenderForSizesComponent = ({ xs, sm, md, lg, xl, children }) => {
  const propsForScreenSizes = getPropsForScreenSizes({ xs, sm, md, lg, xl });

  return (
    <>
      {propsForScreenSizes.map((screenSizeProps, index) => {
        const { size } = screenSizeProps;
        const nextSize = propsForScreenSizes[index + 1]
          ? propsForScreenSizes[index + 1].size
          : null;

        if (size === 'xs' && !nextSize) {
          return (
            <ChildWrapper key={size} {...screenSizeProps}>
              {children}
            </ChildWrapper>
          );
        }
        return (
          <IsomorphicMedia
            key={size}
            query={(t) => getMediaQuery(t, size, nextSize)}
            as={ChildWrapper}
            {...screenSizeProps}
          >
            {children}
          </IsomorphicMedia>
        );
      })}
    </>
  );
};
