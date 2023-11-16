import React from 'react';
import styled, { ExecutionContext } from 'styled-components';

import { Props, CircleProps } from './RoundedPill.types';
import { isFunction, isNumber } from '../../../../common/utils';
import { Flexbox, Icon, Button, Development } from '../../../..';

// TODO: move this into a shared utils file
const getColor = (props: CircleProps & ExecutionContext) => {
  const { $color, theme } = props;

  if (isFunction($color)) {
    return $color(theme);
  }

  return 'transparent';
};

const StyledCross = styled(Icon.Cross8)`
  opacity: 0;
  margin-bottom: 1px;
  transition: opacity 0.2s ease-in;
`;

const StyledDivRounded = styled.div<{ $hasOnClose: boolean }>`
  display: inline-block;
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.pillBackground};
  border-radius: 100px;
  padding: 2px ${(p) => p.theme.spacing.unit(3)}px;

  &:hover ${StyledCross} {
    opacity: 1;
  }
`;

const Circle = styled.div<CircleProps>`
  border-radius: 100%;
  height: 8px;
  width: 8px;
  background-color: ${(p) => getColor(p)};
`;

export const RoundedPill: React.FC<Props> = ({ className, label, color, development, onClose }) => (
  <StyledDivRounded className={className} $hasOnClose={isFunction(onClose)}>
    <Button variant="neutral" onClick={onClose}>
      <Flexbox container alignItems="center" gap={1}>
        {color ? (
          <Flexbox item>
            <Circle $color={color} />
          </Flexbox>
        ) : null}
        {label ? <Flexbox item>{label}</Flexbox> : null}
        {isNumber(development) ? (
          <Flexbox item>
            <Development value={development} percentage decimals={2} />
          </Flexbox>
        ) : null}
        {isFunction(onClose) ? (
          <Flexbox item>
            <StyledCross />
          </Flexbox>
        ) : null}
      </Flexbox>
    </Button>
  </StyledDivRounded>
);
