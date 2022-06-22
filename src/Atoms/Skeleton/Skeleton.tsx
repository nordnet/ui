import React, { useEffect, useState } from 'react';
import * as R from 'ramda';
import styled, { keyframes } from 'styled-components';
import { Props, SkeletonComponent, StringOrNumber } from './Skeleton.types';
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

const deriveDelayFromProps = (delay?: boolean | number) => {
  if (typeof delay === 'number') {
    return delay;
  }

  return delay === false ? 0 : 1000;
};

const CleanDiv = React.forwardRef<HTMLDivElement, any>((props, ref) => (
  <div ref={ref} {...R.omit(['weight', 'height'])(props)} />
));

const Base = styled(CleanDiv)<Props>`
  ${(p) => p.width && `width: ${getSize(p.width, p.theme)};`}

  display: block;
  background-color: ${(p) => p.theme.color.skeleton};
  animation: ${pulse} 1.5s ease-in-out 0.5s infinite;
`;

const Text = styled(Base)`
  margin-top: 0;
  margin-bottom: 0;

  &:empty:before {
    content: '\\00a0';
  }
`;

const Rect = styled(Base)`
  ${(p) => p.height && `height: ${getSize(p.height, p.theme)};`}
`;

const Circle = styled(Base)`
  ${(p) => p.height && `height: ${getSize(p.height, p.theme)};`}
  border-radius: 50%;
`;

export const Skeleton: SkeletonComponent = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const [renderSkeleton, setRenderSkeleton] = useState(false);
  const { className, height, variant = 'text', width, delay = false } = props;
  const noDelay = delay === 0 || delay === false;
  const sharedProps = {
    className,
    width,
    ref,
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (noDelay) {
        return;
      }
      setRenderSkeleton(true);
    }, deriveDelayFromProps(delay));
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (variant === 'rect' && (noDelay || renderSkeleton)) {
    return <Rect {...sharedProps} height={height} />;
  }

  if (variant === 'circle' && (noDelay || renderSkeleton)) {
    return <Circle {...sharedProps} height={height} />;
  }

  if (variant === 'text' && (noDelay || renderSkeleton)) {
    return <Text {...sharedProps} />;
  }
  return null;
});
