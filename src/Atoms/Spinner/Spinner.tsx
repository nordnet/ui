import React, { useEffect, useState } from 'react';
import R from 'ramda';
import styled, { withTheme } from 'styled-components';
import { isArray, isString } from '../../common/utils';
import { Props, PropsWithTheme, ColorFn } from './Spinner.types';
import { Theme } from '../../theme/theme.types';

const Animation = styled.span`
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  display: inline-block;
  animation: spinner 0.6s linear infinite;
`;

const StyledSvg = styled.svg`
  display: block;
`;

const evalColor = (theme: Theme, color?: ColorFn): string => {
  if (typeof color === 'function') {
    const usedColor = color(theme);

    if (isArray(usedColor)) {
      return R.head(usedColor) || theme.color.cta;
    }
    return isString(usedColor) ? usedColor : theme.color.cta;
  }

  return color || theme.color.cta;
};

const getDelay = (delay?: boolean | number) => {
  if (typeof delay === 'number') {
    return delay;
  }

  return delay === false ? 0 : 1000;
};

const RawSpinner: React.FC<PropsWithTheme> = ({ theme, size = 4, color, id }) => {
  const calculatedSize = theme.spacing.unit(size);
  const id1 = `spinner-${id}-1`;
  const id2 = `spinner-${id}-2`;
  const usedColor: string = evalColor(theme, color);

  return (
    <Animation>
      <StyledSvg width={calculatedSize} height={calculatedSize} viewBox="0 0 24 24">
        <defs>
          <linearGradient id={id1} x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={usedColor} stopOpacity="0" />
            <stop offset="100%" stopColor={usedColor} stopOpacity=".5" />
          </linearGradient>
          <linearGradient id={id2} x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={usedColor} stopOpacity=".5" />
            <stop offset="100%" stopColor={usedColor} />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path
            fill={`url(#${id1})`}
            d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3"
          />
          <path
            fill={`url(#${id2})`}
            d="M0,0 C6.627417,0 12,5.372583 12,12 C12,18.627417 6.627417,24 0,24 M0,21 C4.97056275,21 9,16.9705627 9,12 C9,7.02943725 4.97056275,3 0,3"
            transform="rotate(-180 6 12)"
          />
        </g>
      </StyledSvg>
    </Animation>
  );
};

const TimeoutSpinner: React.FC<PropsWithTheme> = ({ delay, ...restProps }) => {
  const [spinning, setSpinning] = useState(false);
  const noDelay = delay === 0 || delay === false;
  useEffect(() => {
    const timer = setTimeout(() => {
      setSpinning(true);
    }, getDelay(delay));
    return () => clearTimeout(timer);
  }, []);

  if (noDelay || spinning) {
    return <RawSpinner {...restProps} />;
  }

  return null;
};

export const Spinner: React.FC<Props> = withTheme(TimeoutSpinner);

Spinner.displayName = 'Spinner';
