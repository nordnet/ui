import React from 'react';
import { motion } from 'framer-motion';

import { Flexbox, Icon, Typography, TruncateWithTooltip } from '../../index';
import { Props } from './DistributionBar.types';
import { Bar, Container, Content } from './DistributionBar.styled';

export const DistributionBar: React.FC<Props> = ({
  icon: iconFromProps,
  name,
  weight,
  children,
  maxWidthName,
  truncatedLabel,
  delay = 0,
}) => {
  return (
    <Container container alignItems="center">
      <Content
        container
        alignItems="center"
        justifyContent="space-between"
        mx={iconFromProps ? 2 : 3}
      >
        <Flexbox item container alignItems="center" gap={3} width={maxWidthName || '33%'}>
          {iconFromProps || <Icon.Dot8 color={(t) => t.color.buttonBackgroundHoverPrimary} />}
          <TruncateWithTooltip label={truncatedLabel}>
            <Typography type="tertiary" weight="bold">
              {name}
            </Typography>
          </TruncateWithTooltip>
        </Flexbox>
        {children}
      </Content>
      <Bar
        as={motion.div}
        initial={{ width: '0' }}
        animate={{ width: `calc(${weight}% - 32px)` }}
        transition={{ type: 'linear', duration: 1, delay }}
      />
    </Container>
  );
};
