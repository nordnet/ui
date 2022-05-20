import React from 'react';
import styled from 'styled-components';
import VisuallyHidden from '../../../Atoms/VisuallyHidden';
import Typography from '../../../Atoms/Typography';
import OldIcon from '../../../Atoms/OldIcon';
import { StatusComponent, InternalProps } from './Status.types';

import {
  STEP_NUMBER_SIZE,
  VERTICAL_PADDING,
  HORIZONTAL_PADDING,
  HORIZONTAL_PADDING_DESKTOP,
} from '../constants';

const StyledTypography = styled(Typography)`
  position: absolute;
  top: ${(p) => p.theme.spacing.unit(VERTICAL_PADDING)}px;
  left: ${(p) => p.theme.spacing.unit(HORIZONTAL_PADDING)}px;

  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.sm)} {
    left: ${(p) => p.theme.spacing.unit(HORIZONTAL_PADDING_DESKTOP)}px;
  }
`;

const Circle = styled.span<InternalProps>`
  width: ${(p) => p.theme.spacing.unit(STEP_NUMBER_SIZE)}px;
  height: ${(p) => p.theme.spacing.unit(STEP_NUMBER_SIZE)}px;
  background-color: ${(p) => (p.$current ? p.theme.color.cta : p.theme.color.disabledBackground)};
  color: ${(p) => (p.$current ? p.theme.color.buttonText : p.theme.color.disabledText)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Status: StatusComponent = ({ current, done, noIcons, number, titleDone, titleNotDone }) => (
  <>
    {done && <VisuallyHidden>{titleDone}</VisuallyHidden>}
    {!done && !current && <VisuallyHidden>{titleNotDone}</VisuallyHidden>}

    {!noIcons && (
      <StyledTypography type="secondary" weight="bold" aria-hidden>
        {done ? (
          <OldIcon.CheckMarkCircle size={STEP_NUMBER_SIZE} fill={(t) => t.color.functionGreen} />
        ) : (
          <Circle $current={current}>{number}</Circle>
        )}
      </StyledTypography>
    )}
  </>
);

export default Status;
