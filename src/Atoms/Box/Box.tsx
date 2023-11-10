import React from 'react';
import styled, { css, ThemedStyledProps } from 'styled-components';
import * as R from 'ramda';
import { Props, Spacings } from './Box.types';
import { Theme } from '../../theme/theme.types';
import { isNumber, isString } from '../../common/utils';

const isPropPresentedIn = (props: Props) => (prop: keyof Props) =>
  typeof props[prop] !== 'undefined';

// prettier-ignore
const getCssString = (property: string, value: string | number) => R.cond([
  [() => isString(value), () => css`${property}: ${value};`],
  [() => isNumber(value), () => css`${property}: ${p => p.theme.spacing.unit(value as number)}px;`],
  [R.T, () => css``],
])(property, value);

const getStyles = (props: Props) => {
  const left = 0;
  const top = 1;
  const right = 2;
  const bottom = 3;

  const DIRECTION = {
    0: 'left',
    1: 'top',
    2: 'right',
    3: 'bottom',
  };

  const spacings: Spacings = {
    margin: undefined,
    padding: undefined,
    margins: [undefined, undefined, undefined, undefined],
    paddings: [undefined, undefined, undefined, undefined],
  };

  const isPropPresented = isPropPresentedIn(props);

  if (isPropPresented('m')) spacings.margin = props.m;
  // prettier-ignore
  if (isPropPresented('mx')) {
    spacings.margins[right] = props.mx;
    spacings.margins[left] = props.mx;
  }
  // prettier-ignore
  if (isPropPresented('my')) {
    spacings.margins[top] = props.my;
    spacings.margins[bottom] = props.my;
  }

  if (isPropPresented('mt')) spacings.margins[top] = props.mt;
  if (isPropPresented('mb')) spacings.margins[bottom] = props.mb;
  if (isPropPresented('ml')) spacings.margins[left] = props.ml;
  if (isPropPresented('mr')) spacings.margins[right] = props.mr;

  if (isPropPresented('p')) spacings.padding = props.p;
  // prettier-ignore
  if (isPropPresented('px')) {
    spacings.paddings[right] = props.px;
    spacings.paddings[left] = props.px;
  }
  // prettier-ignore
  if (isPropPresented('py')) {
    spacings.paddings[top] = props.py;
    spacings.paddings[bottom] = props.py;
  }

  if (isPropPresented('pt')) spacings.paddings[top] = props.pt;
  if (isPropPresented('pb')) spacings.paddings[bottom] = props.pb;
  if (isPropPresented('pl')) spacings.paddings[left] = props.pl;
  if (isPropPresented('pr')) spacings.paddings[right] = props.pr;

  const marginsStyles = spacings.margins?.map(
    (v, idx) => v !== undefined && getCssString(`margin-${DIRECTION[idx]}`, v),
  );
  const paddingsStyles = spacings.paddings?.map(
    (v, idx) => v !== undefined && getCssString(`padding-${DIRECTION[idx]}`, v),
  );

  const marginStyles = [spacings.margin && getCssString('margin', spacings.margin)];
  const paddingStyles = [spacings.padding && getCssString('padding', spacings.padding)];

  return marginStyles
    .concat(marginsStyles)
    .concat(paddingStyles)
    .concat(paddingsStyles)
    .filter(Boolean);
};

const getStylesForSize = (size: string) => css<Partial<Props>>`
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints[size])} {
    ${(p) => getStyles(p[size])}
  }
`;

const getColor = (props: ThemedStyledProps<Props, Theme>) => {
  const { backgroundColor, theme } = props;

  if (backgroundColor && typeof backgroundColor === 'function') {
    return backgroundColor(theme);
  }

  if (backgroundColor === 'inherit') {
    return 'inherit';
  }

  return 'transparent';
};

const StyledDiv = styled.div<Props>`
  ${(p) => getStyles(p)}
  ${(p) => (p.sm ? getStylesForSize('sm') : '')}
  ${(p) => (p.md ? getStylesForSize('md') : '')}
  ${(p) => (p.xl ? getStylesForSize('xl') : '')}
  ${(p) => (p.lg ? getStylesForSize('lg') : '')}
    background-color: ${(p) => getColor(p)};
`;

/**
 * Use `Box` component to handle margins/paddings.
 */
export const Box = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      as,
      backgroundColor,
      children,
      m,
      mb,
      ml,
      mr,
      mt,
      mx,
      my,
      p,
      pb,
      pl,
      pr,
      pt,
      px,
      py,
      lg,
      md,
      sm,
      xl,
      className,
      ...rest
    },
    ref,
  ) => (
    <StyledDiv
      ref={ref}
      {...{
        as,
        backgroundColor,
        children,
        m,
        mb,
        ml,
        mr,
        mt,
        mx,
        my,
        p,
        pb,
        pl,
        pr,
        pt,
        px,
        py,
        lg,
        md,
        sm,
        xl,
        className,
        ...rest,
      }}
    />
  ),
);
