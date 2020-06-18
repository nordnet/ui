import React from 'react';
import styled from 'styled-components';
import { Button, Icon, Media } from '../../../../index';

const StyledButton = styled(Button)`
  &:focus {
    outline: none;
  }
`;

const SizedExpandButton: React.FC<{
  expanded: boolean;
  disabled: boolean;
  onClick: () => void;
  size: number;
}> = ({ expanded, disabled, onClick, size }) => (
  <StyledButton variant="neutral" onClick={onClick} aria-expanded={expanded} disabled={disabled}>
    {expanded ? (
      <Icon.ChevronUp size={size} fill={t => (disabled ? t.color.disabled : t.color.text)} />
    ) : (
      <Icon.ChevronDown size={size} fill={t => (disabled ? t.color.disabled : t.color.text)} />
    )}
  </StyledButton>
);

export const ExpandButton: React.FC<{
  expanded: boolean;
  onClick: () => void;
  disabled: boolean;
}> = ({ expanded, disabled, onClick }) => (
  <>
    <Media query={t => t.media.lessThan(t.breakpoints.md)}>
      <SizedExpandButton expanded={expanded} disabled={disabled} onClick={onClick} size={2} />
    </Media>
    <Media query={t => t.media.greaterThan(t.breakpoints.md)}>
      <SizedExpandButton expanded={expanded} disabled={disabled} onClick={onClick} size={4} />
    </Media>
  </>
);
