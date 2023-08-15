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

export const Skeleton: SkeletonComponent = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, height, variant = 'text', width, delay = false } = props;
  const [noDelay, setNoDelay] = useState(delay === 0 || delay === false);
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
      setNoDelay(true);
    }, deriveDelayFromProps(delay));
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (variant === 'rect' && noDelay) {
    return <Rect {...sharedProps} height={height} />;
  }

  if (variant === 'circle' && noDelay) {
    return <Circle {...sharedProps} height={height} />;
  }

  if (variant === 'text' && noDelay) {
    return <Text {...sharedProps} />;
  }
  return null;
});
