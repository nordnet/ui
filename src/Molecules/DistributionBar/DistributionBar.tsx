import React from 'react';
import { motion } from 'framer-motion';

import { Typography, TruncateWithTooltip } from '../../index';
import { Props } from './DistributionBar.types';
import { Bar, Container, Item, StyledDot } from './DistributionBar.styled';

export const DistributionBar: React.FC<Props> = ({
  icon: iconFromProps,
  label,
  weight,
  children,
  delay = 0,
}) => {
  return (
    <Container container alignItems="center" justifyContent="space-between">
      <Item item container alignItems="center" gap={2} flex="1">
        {iconFromProps || <StyledDot color={(t) => t.color.buttonBackgroundHoverPrimary} />}
        <TruncateWithTooltip label={label}>
          <Typography type="primary" weight="bold">
            {label}
          </Typography>
        </TruncateWithTooltip>
        <Bar
          as={motion.div}
          initial={{ width: '0' }}
          animate={{ width: `calc(${weight}% - 32px)` }}
          transition={{ type: 'linear', duration: 1, delay }}
        />
      </Item>
      {children}
    </Container>
  );
};
