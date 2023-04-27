import React from 'react';
import { Flexbox, Typography } from '../..';
import { ContainerLabel, StyledFlexbox, StyledTypography } from './TagChip.styled';
import { Props } from './TagChip.types';

export const TagChip: React.FC<Props> = ({ label, icon = null }) => {
  if (icon) {
    return (
      <ContainerLabel>
        <Flexbox container direction="row" gap={1} alignItems="center">
          {icon && <StyledFlexbox item>{icon}</StyledFlexbox>}
          {label && (
            <Typography color="inherit" type="secondary" weight="bold" lineHeight="inherit">
              {label}
            </Typography>
          )}
        </Flexbox>
      </ContainerLabel>
    );
  }
  return (
    <ContainerLabel>
      <Flexbox container alignItems="center">
        <StyledTypography color="inherit" type="secondary" weight="bold">
          {label}
        </StyledTypography>
      </Flexbox>
    </ContainerLabel>
  );
};
