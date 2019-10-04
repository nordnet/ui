import React from 'react';
import styled from 'styled-components';
import { Props } from './Legend.types';
import { Typography, FormLabel } from '../..';
import NormalizedElements from '../../common/NormalizedElements';

const StyledLegendAsCaption = styled(NormalizedElements.Legend)<Props>`
  margin: 0 0 ${p => p.theme.spacing.unit(4)}px 0;
`;

const StyledLegendAsLabel = styled(NormalizedElements.Legend)<Props>`
  cursor: auto;
`;

export const Legend: React.FC<Props> = props => {
  const { className, children, styleType = 'caption' } = props;

  if (styleType === 'caption') {
    return (
      <StyledLegendAsCaption className={className}>
        <Typography type="title3" weight="bold">
          {children}
        </Typography>
      </StyledLegendAsCaption>
    );
  }

  return (
    <FormLabel className={className} as={StyledLegendAsLabel}>
      {children}
    </FormLabel>
  );
};
