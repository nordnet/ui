import React from 'react';
import styled, { css } from 'styled-components';
import * as R from 'ramda';
import { Props } from './Box.types';

const isString = (x: any): x is string => typeof x === 'string';
const isNumber = (x: any): x is number => typeof x === 'number';
const isPropPresentedIn = (props: Props) => (prop: keyof Props) =>
  typeof props[prop] !== 'undefined';

// prettier-ignore
const getCssString = (property: string, value: string | number) => R.cond([
  [() => isString(value), () => css`${property}: ${value};`],
  [() => isNumber(value), () => css`${property}: ${p => p.theme.spacing.unit(value as number)}px;`],
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

  const margins: [any, any, any, any] = [null, null, null, null];
  const paddings: [any, any, any, any] = [null, null, null, null];
  const isPropPresented = isPropPresentedIn(props);

  if (isPropPresented('m')) {
    // eslint-disable-next-line no-return-assign
    [left, top, right, bottom].forEach(side => (margins[side] = props.m));
  }

  // prettier-ignore
  if (isPropPresented('mx')) { margins[right] = props.mx; margins[left] = props.mx; }
  // prettier-ignore
  if (isPropPresented('my')) { margins[top] = props.my; margins[bottom] = props.my; }

  if (isPropPresented('mt')) margins[top] = props.mt;
  if (isPropPresented('mb')) margins[bottom] = props.mb;
  if (isPropPresented('ml')) margins[left] = props.ml;
  if (isPropPresented('mr')) margins[right] = props.mr;

  if (isPropPresented('p')) {
    // eslint-disable-next-line no-return-assign
    [left, top, right, bottom].forEach(side => (paddings[side] = props.p));
  }

  // prettier-ignore
  if (isPropPresented('px')) { paddings[right] = props.px; paddings[left] = props.px; }
  // prettier-ignore
  if (isPropPresented('py')) { paddings[top] = props.py; paddings[bottom] = props.py; }

  if (isPropPresented('pt')) paddings[top] = props.pt;
  if (isPropPresented('pb')) paddings[bottom] = props.pb;
  if (isPropPresented('pl')) paddings[left] = props.pl;
  if (isPropPresented('pr')) paddings[right] = props.pr;

  const marginStyles = margins.map((v, idx) => getCssString(`margin-${DIRECTION[idx]}`, v));
  const paddingStyles = paddings.map((v, idx) => getCssString(`padding-${DIRECTION[idx]}`, v));

  return marginStyles.concat(paddingStyles);
};

const getStylesForSize = (size: string) => css<Partial<Props>>`
  ${p => p.theme.media.greaterThan(p.theme.size[size])} {
    ${p => getStyles({ ...p, ...p[size] })}
  }
`;
const StyledDiv = styled.div<Props>`
  ${p => getStyles(p)}
  ${p => (p.sm ? getStylesForSize('sm') : '')}
  ${p => (p.md ? getStylesForSize('md') : '')}
  ${p => (p.xl ? getStylesForSize('xl') : '')}
  ${p => (p.lg ? getStylesForSize('lg') : '')}
`;

export const Box: React.FC<Props> = ({
  as,
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
}) => (
  <StyledDiv
    {...{ as, children, m, mb, ml, mr, mt, mx, my, p, pb, pl, pr, pt, px, py, lg, md, sm, xl }}
  />
);
