import React from 'react';
import * as R from 'ramda';
import styled, { keyframes } from 'styled-components';
import { SkeletonComponent, Props, StringOrNumber } from './Skeleton.types';
import { Theme } from '../../theme/theme.types';
import { isNumber } from '../../common/utils';

const pulse = keyframes`
  0% {
      opacity: 1;
  }
  50% {
      opacity: 0.4;
  }
  100% {
      opacity: 1;
  }
`;

const getSize = (x: StringOrNumber, theme: Theme) => {
  return isNumber(x) ? `${theme.spacing.unit(x)}px` : x;
};

const CleanDiv = React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <div ref={ref} {...R.omit(['weight', 'height'])(props)} />
));

const Base = styled(CleanDiv)<Props>`
  ${p => p.width && `width: ${getSize(p.width, p.theme)};`}

  display: block;
  background-color: ${p => p.theme.color.skeleton};
  animation: ${pulse} 1.5s ease-in-out 0.5s infinite;
`;

const Text = styled(Base)`
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 4px;

  &:empty:before {
    content: '\\00a0';
  }
`;

const Rect = styled(Base)`
  ${p => p.height && `height: ${getSize(p.height, p.theme)};`}
`;

const Circle = styled(Base)`
  ${p => p.height && `height: ${getSize(p.height, p.theme)};`}
  border-radius: 50%;
`;

export const Skeleton: SkeletonComponent = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const { className, height, variant = 'text', width } = props;
  const sharedProps = {
    className,
    width,
    ref,
  };

  if (variant === 'rect') {
    return <Rect {...sharedProps} height={height} />;
  }

  if (variant === 'circle') {
    return <Circle {...sharedProps} height={height} />;
  }

  return <Text {...sharedProps} />;
});
