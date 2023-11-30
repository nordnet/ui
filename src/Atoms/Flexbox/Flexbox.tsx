import React from 'react';
import styled, { css } from 'styled-components';
import R from 'ramda';
import { Theme } from '../../theme/theme.types';
import { Props } from './Flexbox.types';
import { isUndefined } from '../../common/utils';

const isNumber = (x: any): x is number => x === parseInt(x, 10);

const getSizeStyles = (size: Props['size']) => {
  const oneCol = 100 / 12;

  if (isUndefined(size)) {
    return null;
  }

  if (size === 'unset') {
    return `
      max-width: none;
      flex-basis: auto;
    `;
  }

  if (isNumber(size)) {
    const percentage = `${oneCol * size}%`;

    return `
      max-width: ${percentage};
      flex-basis: ${percentage};
    `;
  }

  return `
    max-width: ${size};
    flex-basis: ${size};
  `;
};

const getGutterStyles = (
  theme: Theme,
  gutter: Exclude<Props['gutter'], undefined>,
  direction: Props['direction'],
) => {
  if (direction === 'column' || direction === 'column-reverse') {
    return `
      & > *:not(:first-child) {
        padding-top: ${theme.spacing.unit(gutter)}px;
      }
    `;
  }

  return `
    margin-left: -${theme.spacing.unit(gutter / 2)}px;
    margin-right: -${theme.spacing.unit(gutter / 2)}px;

    & > * {
      padding-left: ${theme.spacing.unit(gutter / 2)}px;
      padding-right: ${theme.spacing.unit(gutter / 2)}px;

      &:not(:first-child) {
        padding-top: 0;
      }
    }
  `;
};

const getGapStyles = (theme: Theme, gap: Props['gap']) => {
  let gapStyle: string;

  if (!gap) {
    return '';
  }

  if (typeof gap === 'number') {
    gapStyle = `${theme.spacing.unit(gap)}px;`;
  } else if (typeof gap === 'string') {
    gapStyle = gap;
  } else {
    gapStyle = `${theme.spacing.unit(gap.row)}px ${theme.spacing.unit(gap.column)}px;`;
  }

  return `gap: ${gapStyle};`;
};

const getContainerStyles = (p: Props & { theme: Theme }) => `
  display: ${p.hidden ? 'none' : 'flex'};
  ${p.width ? `width: ${isNumber(p.width) ? `${p.theme.spacing.unit(p.width)}px` : p.width}` : ''};
  ${
    p.height
      ? `height: ${isNumber(p.height) ? `${p.theme.spacing.unit(p.height)}px` : p.height}`
      : ''
  };
  ${p.direction ? `flex-direction: ${p.direction};` : ''}
  ${p.wrap ? `flex-wrap: ${p.wrap};` : ''}
  ${p.justifyContent ? `justify-content: ${p.justifyContent};` : ''}
  ${p.alignItems ? `align-items: ${p.alignItems};` : ''}
  ${p.alignContent ? `align-content: ${p.alignContent};` : ''}
  ${p.gutter ? getGutterStyles(p.theme, p.gutter, p.direction) : ''}
  ${getGapStyles(p.theme, p.gap)}
`;

const getItemStyles = (p: Props & { theme: Theme }) => `
  ${p.size ? getSizeStyles(p.size) : ''}
  ${p.width ? `width: ${isNumber(p.width) ? `${p.theme.spacing.unit(p.width)}px` : p.width}` : ''};
  ${
    p.height
      ? `height: ${isNumber(p.height) ? `${p.theme.spacing.unit(p.height)}px` : p.height}`
      : ''
  };
  ${p.alignSelf ? `align-self: ${p.alignSelf};` : ''}
  ${!R.isNil(p.order) ? `order: ${p.order};` : ''}
  ${!R.isNil(p.grow) ? `flex-grow: ${p.grow};` : ''}
  ${!R.isNil(p.shrink) ? `flex-shrink: ${p.shrink};` : ''}
  ${p.basis ? `flex-basis: ${p.basis};` : ''}
  ${p.flex ? `flex: ${p.flex};` : ''}
  ${p.align ? `align-self: ${p.align};` : ''}
  ${p.hidden ? 'display: none;' : ''}
`;

const sanitizeProps = R.omit([
  'align',
  'size',
  'height',
  'direction',
  'wrap',
  'contain',
  'container',
  'item',
  'gap',
  'gutter',
  'alignContent',
  'alignItems',
  'alignSelf',
  'grow',
  'shrink',
  'sm',
  'md',
  'lg',
  'xl',
  'basis',
  'order',
  'justifyContent',
  'width',
  'flex',
  'hidden',
]);
const SanitizedDiv = React.forwardRef((props: Props, ref: React.Ref<HTMLDivElement>) => (
  <div {...sanitizeProps(props)} ref={ref} />
));

const getStylesForSize = (size: string) => css<Partial<Props>>`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints[size])} {
    ${(p) => (p.container ? getContainerStyles({ ...p, ...p[size] }) : '')}
    ${(p) => (p.item ? getItemStyles({ ...p, ...p[size] }) : '')}
  }
`;

const StyledFlexbox = styled(SanitizedDiv)<Props>`
  box-sizing: border-box;
  ${(p) => (p.container ? getContainerStyles(p) : '')}
  ${(p) => (p.item ? getItemStyles(p) : '')}
  ${(p) => (p.sm ? getStylesForSize('sm') : '')}
  ${(p) => (p.md ? getStylesForSize('md') : '')}
  ${(p) => (p.lg ? getStylesForSize('lg') : '')}
  ${(p) => (p.xl ? getStylesForSize('xl') : '')}
`;

export const Flexbox = React.forwardRef<HTMLDivElement, Props>((props, ref) => (
  <StyledFlexbox {...props} ref={ref} />
));
Flexbox.displayName = 'Flexbox';
