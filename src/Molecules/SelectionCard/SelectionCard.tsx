import React, { useState } from 'react';
import Color from 'color';
import styled, { css } from 'styled-components';

import { Box, Card, Flexbox, Icon, Typography } from '../..';
import { isBoolean, isElement } from '../../common/utils';

import { SelectionCardComponent } from './SelectionCard.types';

const StyledFlexbox = styled(Flexbox)`
  width: 100%;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledInput = styled.input`
  opacity: 0;
  pointer-events: none;
`;

const AbsoluteFlexbox = styled(Flexbox)`
  color: inherit;
  width: 100%;
  position: absolute;
  ${(p) => `top: ${p.theme.spacing.unit(3)}px`};
`;

const Tag = styled(Typography)`
  box-sizing: border-box;
  ${(p) => `
    padding: ${p.theme.spacing.unit(1)}px;
    background: ${p.theme.colorTokens.action.background_default};
    color: ${p.theme.colorTokens.neutral.text_strong};
  `}
`;

const CircleOutline = styled.div`
  border-radius: 100%;
  ${(p) => `
    border: 1px solid ${p.theme.colorTokens.neutral.border_default};
    height: ${p.theme.spacing.unit(4)}px;
    width: ${p.theme.spacing.unit(4)}px;
  `}
`;

const outlineStyles = css`
  ${(p) => `outline-color: ${p.theme.colorTokens.action.border_default}`};
  ${(p) => `border-color: ${p.theme.colorTokens.action.border_default}`};
  vertical-align: top;
`;

const overlayStyles = css`
  ${(p) => `background: ${Color(p.theme.colorTokens.action.background_weak).string()}`};
  ${outlineStyles}
`;

const StyledCard = styled(Card)<{
  $disabled: boolean;
  $selected: boolean;
  $border: boolean;
  $error: boolean;
}>`
  height: 100%;
  position: relative;
  box-sizing: border-box;
  ${(p) => `
    cursor: ${p.$disabled ? 'not-allowed' : 'pointer'};
    color: ${
      p.$disabled
        ? p.theme.colorTokens.neutral.text_disabled
        : p.theme.colorTokens.neutral.text_default
    };
    background: ${
      p.$disabled
        ? p.theme.colorTokens.neutral.background_disabled
        : p.theme.colorTokens.neutral.background_default
    };
    outline: ${p.$border ? `1px solid transparent` : `2px solid transparent`};
    `}
  ${(p) =>
    p.$error && !p.$disabled && `border: 1px solid ${p.theme.colorTokens.error.border_default}`};
  ${(p) => !p.$disabled && p.$selected && overlayStyles};
  border-radius: ${({ theme }) => theme.borderRadius8};
  overflow: hidden;
  outline-offset: -2px;
  ${(p) => p.$border && `border: 1px solid ${p.theme.colorTokens.neutral.border_default}`};
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-property: background-color, outline-color, border-color;

  &:hover {
    ${(p) => !p.$disabled && overlayStyles};
  }
`;

const StyledLabel = styled.label`
  cursor: inherit;

  &:focus-within {
    ${StyledCard} {
      ${outlineStyles}
    }
  }
`;

const StyledDiv = styled('div')<{
  $feature: boolean;
  $tag: boolean;
  $text: boolean;
  $textAlignLeft: boolean;
}>`
  ${(p) => `
    text-align: ${p.$text || p.$textAlignLeft ? 'left' : 'center'};
    padding: ${p.theme.spacing.unit(3)}px;
  `}

  ${(p) =>
    p.$tag &&
    p.$text &&
    `padding-top: ${p.theme.spacing.unit(7)}px;
      padding-bottom: ${p.theme.spacing.unit(5)}px;
  `}

  ${(p) =>
    p.$tag &&
    !p.$feature &&
    `padding-top:${p.theme.spacing.unit(10)}px;
      padding-bottom:${p.theme.spacing.unit(10)}px;
  `}
`;

const StyledItem = styled(Typography)<{ $disabled: boolean }>`
  ${(p) => `
    color: ${p.$disabled ? p.theme.colorTokens.neutral.text_disabled : ''};
  `}
`;

export const SelectionCard: SelectionCardComponent = ({
  title,
  onChange = () => {},
  tag = '',
  text = '',
  imageUrl = '',
  imageAlt = '',
  icon = null,
  border = false,
  disabled = false,
  error = false,
  horizontal = false,
  outline = false,
  selected: controlledSelected,
  selectedInitially = false,
  alignLeft = false,
}) => {
  const [selectedInternal, setSelectedInternal] = useState(selectedInitially);
  const isControlled = isBoolean(controlledSelected);
  const selected = (isControlled ? controlledSelected : selectedInternal) as boolean;

  const changeHandler = (val: boolean) => {
    if (typeof onChange === 'function') {
      onChange(val);
    }
    if (!isControlled) {
      setSelectedInternal(val);
    }
  };

  const titleItem = isElement(title) ? (
    title
  ) : (
    <StyledFlexbox item>
      <StyledItem type="primary" weight="bold" $disabled={disabled}>
        {title}
      </StyledItem>
    </StyledFlexbox>
  );

  const textItem = isElement(text) ? (
    text
  ) : (
    <StyledFlexbox item>
      <StyledItem
        type="secondary"
        color={(t) => t.colorTokens.neutral.text_weak}
        $disabled={disabled}
      >
        {text}
      </StyledItem>
    </StyledFlexbox>
  );

  const hasIcon = Boolean(icon && !imageUrl);
  const hasFeature = Boolean(imageUrl || icon);

  return (
    <StyledLabel>
      <StyledCard $disabled={disabled} $selected={selected} $border={border} $error={error}>
        {imageUrl && <StyledImg src={imageUrl} alt={imageAlt} />}

        <AbsoluteFlexbox container justifyContent="space-between" direction="row">
          <Flexbox item>{tag && <Tag type="secondary">{tag}</Tag>}</Flexbox>
          <Box pr={2}>
            {!disabled && !selected && outline && <CircleOutline />}
            {!disabled && selected && (
              <Icon.CheckCircleFill16 color={(t) => t.colorTokens.action.background_default} />
            )}

            <StyledInput
              type="checkbox"
              disabled={disabled}
              checked={selected}
              onChange={() => changeHandler(!selected)}
            />
          </Box>
        </AbsoluteFlexbox>

        <StyledDiv
          $feature={hasFeature}
          $tag={Boolean(tag)}
          $text={Boolean(text)}
          $textAlignLeft={alignLeft}
        >
          {horizontal && (
            <Flexbox container direction="row" gap={5} alignContent="center">
              {hasIcon && (
                <Flexbox item alignSelf="center">
                  {icon}
                </Flexbox>
              )}

              <Flexbox container direction="column" gap={1} alignItems="flex-start">
                {titleItem}
                {textItem}
              </Flexbox>
            </Flexbox>
          )}

          {!horizontal && (
            <Flexbox
              container
              direction="column"
              alignItems={alignLeft ? 'flex-start' : 'center'}
              gap={3}
            >
              {hasIcon && (
                <Flexbox item {...(text && { alignSelf: 'flex-start' })}>
                  {icon}
                </Flexbox>
              )}
              <Flexbox
                item
                container
                direction="column"
                {...(text && { alignSelf: 'flex-start' })}
                width="100%"
              >
                {titleItem}
                {textItem}
              </Flexbox>
            </Flexbox>
          )}
        </StyledDiv>
      </StyledCard>
    </StyledLabel>
  );
};
