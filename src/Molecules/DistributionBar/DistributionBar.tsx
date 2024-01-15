import React from 'react';
import { motion } from 'framer-motion';

import { Box, TruncateWithTooltip } from '../../index';
import { Props } from './DistributionBar.types';
import { Bar, Item, StyledDot, StyledFlexbox } from './DistributionBar.styled';

export const DistributionBar: React.FC<Props> = ({
  icon: iconFromProps,
  iconPadding,
  label,
  labelProps,
  weight,
  children,
  delay = 0,
}) => {
  return (
    <StyledFlexbox
      container
      alignItems="center"
      justifyContent="space-between"
      height={8}
      width="100%"
      gap={2}
    >
      <Item item container alignItems="center" gap={3} height="100%" {...labelProps}>
        <Box pl={iconPadding?.pl || 2} {...iconPadding}>
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
    </StyledFlexbox>
  );
};
