import React, { FC } from 'react';
import styled from 'styled-components';
import { Badge, Box, Button, Flexbox, Typography } from '../..';

const StyledButton = styled(Button)`
  border: 1px solid ${(t) => t.theme.colorTokens.neutral.border_weak};
  border-radius: ${(t) => t.theme.spacing.unit(1)}px;
  justify-content: flex-start;
  text-align: left;
  padding: ${(t) => t.theme.spacing.unit(3)}px;
`;

const StyledBox = styled(Box)`
  border: 1px solid ${(t) => t.theme.colorTokens.neutral.border_weak};
  border-radius: ${(t) => t.theme.spacing.unit(1)}px;
  position: relative;
`;

type TextButtonCardProps = {
  title: string;
  description: string;
  titleIcon?: React.ReactNode;
  titleBadgeText?: string;
  buttonText?: string;
  statusIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler | false;
};

const TextButtonCard: FC<React.PropsWithChildren<TextButtonCardProps>> = ({
  title,
  description,
  titleIcon,
  titleBadgeText,
  buttonText,
  statusIcon,
  onClick,
  children,
}) => {
  const contents = (
    <Flexbox container gap={3} wrap="wrap">
      <Flexbox container item gap={4} alignItems="center" wrap="nowrap" grow={1} basis="320px">
        {/* Title icon */}
        {titleIcon && (
          <Badge.Icon badgeColor={(t) => t.colorTokens.neutral.background_weak}>
            {titleIcon}
          </Badge.Icon>
        )}

        {/* Title, badge and description */}
        <Flexbox container item grow={1} direction="column">
          <Flexbox container gap={2} alignItems="baseline">
            <Typography type="secondary" weight="bold">
              {title}
            </Typography>
            <Badge.Label
              type="secondary"
              badgeColor={(t) => t.colorTokens.action.background_weak}
              color={(t) => t.colorTokens.action.text_default}
            >
              {titleBadgeText}
            </Badge.Label>
          </Flexbox>
          <Typography type="secondary" color={(t) => t.colorTokens.neutral.text_weak}>
            {description}
          </Typography>
        </Flexbox>

        {/* Button */}
        {buttonText && onClick && (
          <Flexbox item shrink={0}>
            <Button.Pill variant="secondary" size="m" onClick={onClick}>
              {buttonText}
            </Button.Pill>
          </Flexbox>
        )}

        {/* Status icon */}
        {statusIcon}
      </Flexbox>
      {children}
    </Flexbox>
  );

  if (onClick && !buttonText)
    return (
      <StyledButton variant="neutral" fullWidth onClick={onClick}>
        {contents}
      </StyledButton>
    );

  return <StyledBox p={3}>{contents}</StyledBox>;
};

export default TextButtonCard;
