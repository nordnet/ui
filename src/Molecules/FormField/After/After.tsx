import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { Props } from './After.types';
import { Typography } from '../../..';

const StyledTypography = styled(Typography)<{ $hasError?: boolean; $disabled?: boolean }>`
  color: ${(p) => (p.$disabled ? p.theme.color.disabled : p.theme.color.label)};
  ${(p) => (p.$hasError && !p.$disabled ? `color: ${p.theme.color.danger};` : '')}
`;

const BottomWrapper = styled(motion.div)``;

export function After({ error, extraInfo, disabled }: Props) {
  return (
    <AnimatePresence>
      {(error || extraInfo) && (
        <BottomWrapper
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          aria-live="polite"
        >
          <StyledTypography type="tertiary" $disabled={disabled} $hasError={!!error}>
            {error || extraInfo}
          </StyledTypography>
        </BottomWrapper>
      )}
    </AnimatePresence>
  );
}
