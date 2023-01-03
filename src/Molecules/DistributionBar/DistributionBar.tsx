import React from 'react';
import { motion } from 'framer-motion';

import { Box, TruncateWithTooltip, Flexbox } from '../../index';
import { Props } from './DistributionBar.types';
import { Bar, Item, StyledDot } from './DistributionBar.styled';

export const DistributionBar: React.FC<Props> = ({
  icon: iconFromProps,
  label,
  labelFlex = '1',
  weight,
  children,
  delay = 0,
}) => {
  return (
    <Flexbox
      container
      alignItems="center"
      justifyContent="space-between"
      height={8}
      width="100%"
      gap={2}
    >
      <Item item container alignItems="center" gap={3} flex={labelFlex}>
        <Box pl={2}>
          {iconFromProps || <StyledDot color={(t) => t.color.buttonBackgroundHoverPrimary} />}
        </Box>
        <TruncateWithTooltip label={label}>{label}</TruncateWithTooltip>
        <Bar
          as={motion.div}
          initial={{ width: '0' }}
          animate={{ width: `calc(${weight}% - 32px)` }}
          transition={{ type: 'linear', duration: 1, delay }}
        />
      </Item>
      {children}
    </Flexbox>
  );
};
