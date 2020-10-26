import React, { useContext } from 'react';
import {
  GetMediaQuery,
  RenderForSizesComponent,
  ChildWrapperComponent,
} from './RenderForSizes.types';
import IsomorphicMedia from '../../../../Atoms/IsomorphicMedia';
import { ColumnLayoutContext } from '../ColumnProvider/ColumnProvider';

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

export const RenderForSizes: RenderForSizesComponent = ({ children, ...props }) => {
  const { getColumnScreenSizeProps } = useContext(ColumnLayoutContext);
  const propsForScreenSizes = getColumnScreenSizeProps(props);

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
