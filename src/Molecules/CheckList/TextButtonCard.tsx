import React, { FC } from 'react';
import styled from 'styled-components';
import { Badge, Box, Button, Flexbox, Typography } from '../..';
import { ButtonProps } from '../Button/components/BaseButton/Button.types';

const StyledButton = styled(Button)`
  border: 1px solid ${(t) => t.theme.colorTokens.neutral.border_weak};
  border-radius: ${(t) => t.theme.spacing.unit(1)}px;
  box-sizing: border-box;
  justify-content: flex-start;
  text-align: left;
  padding: ${(t) => t.theme.spacing.unit(3)}px;

  > span {
    width: 100%;
  }

  :hover {
    text-decoration: none;
    border: 1px solid ${(t) => t.theme.colorTokens.neutral.border_hover};
    background-color: ${(t) => t.theme.colorTokens.action.background_weak};
  }

  :active {
    outline: 2px solid ${(t) => t.theme.colorTokens.action.border_default};
    background-color: ${(t) => t.theme.colorTokens.action.background_weak};
  }
`;

const StyledBox = styled(Box)`
  border: 1px solid ${(t) => t.theme.colorTokens.neutral.border_weak};
  border-radius: ${(t) => t.theme.spacing.unit(1)}px;
  position: relative;
`;

const StyledButtonPill = styled(Button.Pill)`
  width: 130px;
`;

type TextButtonCardProps = {
  title: string;
  description: string;
  titleIcon?: React.ReactNode;
  titleBadgeText?: string;
  buttonText?: string;
  statusIcon?: React.ReactNode;
  action?: Pick<ButtonProps, 'onClick' | 'to'> | false;
};

const TextButtonCard: FC<React.PropsWithChildren<TextButtonCardProps>> = ({
  title,
  description,
  titleIcon,
  titleBadgeText,
  buttonText,
  statusIcon,
  action,
  children,
}) => {
  const contents = (
    <Flexbox container gap={3} wrap="wrap">
      <Flexbox container item gap={3} alignItems="center" wrap="nowrap" grow={1} basis="320px">
        {/* Title icon */}
        {titleIcon && (
          <Badge.Icon badgeColor={(t) => t.colorTokens.neutral.background_weak}>
            {titleIcon}
          </Badge.Icon>
        )}

        {/* Title, badge and description */}
        <Flexbox container item gap={1} grow={1} direction="column">
          <Flexbox container gap={2} alignItems="baseline">
            <Typography type="primary" weight="bold">
              {title}
            </Typography>
            {titleBadgeText && (
              <Badge.Label
                type="secondary"
                weight="bold"
                badgeColor={(t) => t.colorTokens.action.background_weak}
                color={(t) => t.colorTokens.action.text_default}
              >
                {titleBadgeText}
              </Badge.Label>
            )}
          </Flexbox>
          <Typography type="secondary" color={(t) => t.colorTokens.neutral.text_weak}>
            {description}
          </Typography>
        </Flexbox>

        {/* Button */}
        {buttonText && action && (
          <Flexbox item shrink={0}>
            <StyledButtonPill variant="secondary" size="m" {...action}>
              {buttonText}
            </StyledButtonPill>
          </Flexbox>
        )}

        {/* Status icon */}
        <Flexbox item shrink={0}>
          {statusIcon}
        </Flexbox>
      </Flexbox>
      {children}
    </Flexbox>
  );

  if (action && !buttonText)
    return (
      <StyledButton variant="neutral" fullWidth {...action}>
        {contents}
      </StyledButton>
    );

  return <StyledBox p={3}>{contents}</StyledBox>;

  // TODO: this could also work with some modifications of ControlsListItem.Button
};

export default TextButtonCard;
