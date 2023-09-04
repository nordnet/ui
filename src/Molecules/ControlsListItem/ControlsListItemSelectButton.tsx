import React from 'react';
import styled from 'styled-components';

import { Flexbox, Icon, Input } from '../..';
import { StyledTypography, SelectWrapper } from './ControlsListItemButton.styles';

const TRANSITION_DURATION = 0.16;

const Chevron = styled(Icon.ChevronUp8)<{ $expanded?: boolean }>`
  transform: rotate(${(p) => (p.$expanded ? '0' : '180')}deg);
  transition: transform ${TRANSITION_DURATION}s ease-out;

  color: ${(p) => (p.$expanded ? p.theme.color.cta : p.theme.color.text)};

  &:disabled {
    color: ${(p) => p.theme.color.disabledText};
  }
`;

const ControlsListItemSelectButton = (buttonText: string | React.ReactElement) => {
  const { useSelectMachineFromContext } = Input.Select;
  const [state] = useSelectMachineFromContext();

  return (
    <SelectWrapper>
      <Flexbox container alignItems="center" gap={2}>
        <StyledTypography type="secondary" weight="bold">
          {buttonText}
        </StyledTypography>
        <Chevron $expanded={(state.value as any).open === 'on'} />
      </Flexbox>
    </SelectWrapper>
  );
};

export default ControlsListItemSelectButton;
