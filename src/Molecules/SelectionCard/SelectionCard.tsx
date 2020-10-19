import React, { useState } from 'react';
import Color from 'color';
import styled, { css } from 'styled-components';

import { Card, Flexbox, Typography, Box, Icon } from '../..';
import { isElement, isBoolean } from '../../common/utils';

import { SelectionCardComponent } from './SelectionCard.types';

const StyledFlexbox = styled(Flexbox)`
  width: 100%;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledTypography = styled(Typography).withConfig({
  shouldForwardProp: (prop) => !['inheritColor'].includes(prop),
})<{
  inheritColor: boolean;
}>`
  ${(p) => p.inheritColor && `color: inherit`};
`;

const StyledInput = styled.input`
  opacity: 0;
  pointer-events: none;
`;

const AbsoluteFlexbox = styled(Flexbox)`
  color: inherit;
  width: 100%;
  position: absolute;
  ${(p) => `top: ${p.theme.spacing.unit(1)}px`};
`;

const Tag = styled(Typography)`
  box-sizing: border-box;
  ${(p) => `
    padding: 0px ${p.theme.spacing.unit(1)}px;
    background: ${p.theme.color.cta};
    color: ${p.theme.color.textLight};
  `}
`;

const CircleOutline = styled.div`
  border-radius: 100%;
  ${(p) => `
    border: 1px solid ${p.theme.color.selectionCardBorder};
    height: ${p.theme.spacing.unit(5)}px;
    width: ${p.theme.spacing.unit(5)}px;
  `}
`;

const outlineStyles = css`
  ${(p) => `outline: 2px solid ${p.theme.color.cta}`};
  outline-offset: -2px;
  vertical-align: top;
`;

const overlayStyles = css`
  ${(p) => `background: ${Color(p.theme.color.cta).alpha(0.1).string()}`};
  ${outlineStyles}
`;

const StyledCard = styled(Card).withConfig({
  shouldForwardProp: (prop) => !['disabled', 'selected', 'border', 'error'].includes(prop),
})<{
  disabled: boolean;
  selected: boolean;
  border: boolean;
  error: boolean;
}>`
  height: 100%;
  position: relative;
  box-sizing: border-box;

  ${(p) => `
    cursor: ${p.disabled ? 'not-allowed' : 'pointer'};
    color: ${p.disabled ? p.theme.color.disabledText : p.theme.color.text};
    background: ${p.disabled ? p.theme.color.disabledBackground : p.theme.color.card};
  `}

  ${(p) => p.border && `border: 1px solid ${p.theme.color.inputBorder}`};
  ${(p) => p.error && !p.disabled && `border: 1px solid ${p.theme.color.negative}`};
  ${(p) => !p.disabled && p.selected && overlayStyles};

  &:hover {
    ${(p) => !p.disabled && overlayStyles};
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

const StyledDiv = styled('div').withConfig({
  shouldForwardProp: (prop) => !['feature', 'tag', 'text'].includes(prop),
})<{
  feature: boolean;
  tag: boolean;
  text: boolean;
}>`
  ${(p) => `
    text-align: ${p.text ? 'left' : 'center'};
    padding: ${p.theme.spacing.unit(5)}px;
  `}

  ${(p) =>
    p.tag &&
    p.text &&
    `padding-top: ${p.theme.spacing.unit(7)}px;
      padding-bottom: ${p.theme.spacing.unit(5)}px;
  `}

  ${(p) =>
    p.tag &&
    !p.feature &&
    `padding-top:${p.theme.spacing.unit(10)}px;
      padding-bottom:${p.theme.spacing.unit(10)}px;
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
      <StyledTypography inheritColor={disabled} type="primary" weight="bold">
        {title}
      </StyledTypography>
    </StyledFlexbox>
  );

  const textItem = isElement(text) ? (
    text
  ) : (
    <StyledFlexbox item>
      <StyledTypography
        inheritColor={disabled}
        color={(t) => t.color.selectionCardText}
        type="tertiary"
      >
        {text}
      </StyledTypography>
    </StyledFlexbox>
  );

  const hasIcon = Boolean(icon && !imageUrl);
  const hasFeature = Boolean(imageUrl || icon);

  return (
    <StyledLabel>
      <StyledCard disabled={disabled} selected={selected} border={border} error={error}>
        {imageUrl && <StyledImg src={imageUrl} alt={imageAlt} />}

        <AbsoluteFlexbox container justifyContent="space-between" direction="row">
          <Flexbox item>{tag && <Tag type="secondary">{tag}</Tag>}</Flexbox>
          <Box pt={4} pr={5}>
            {!disabled && !selected && outline && <CircleOutline />}
            {!disabled && selected && <Icon.CheckMarkCircle color={(t) => t.color.cta} />}

            <StyledInput
              type="checkbox"
              disabled={disabled}
              checked={selected}
              onChange={() => changeHandler(!selected)}
            />
          </Box>
        </AbsoluteFlexbox>

        <StyledDiv feature={hasFeature} tag={Boolean(tag)} text={Boolean(text)}>
          {horizontal && (
            <Flexbox container direction="row" gutter={5} alignContent="center">
              {hasIcon && (
                <Flexbox item alignSelf="center">
                  {icon}
                </Flexbox>
              )}

              <Flexbox container direction="column" gutter={1} alignItems="flex-start">
                {titleItem}
                {textItem}
              </Flexbox>
            </Flexbox>
          )}

          {!horizontal && (
            <Flexbox container direction="column" alignItems="center" gutter={1}>
              {hasIcon && (
                <Flexbox item {...(text && { alignSelf: 'flex-start' })}>
                  {icon}
                </Flexbox>
              )}
              {titleItem}
              {textItem}
            </Flexbox>
          )}
        </StyledDiv>
      </StyledCard>
    </StyledLabel>
  );
};
