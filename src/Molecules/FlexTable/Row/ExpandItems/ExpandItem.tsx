import React from 'react';
import styled from 'styled-components';
import { isElement } from '../../../../common/utils';
import { Flexbox, LabeledValue, Media } from '../../../..';
import { ExpandItemComponent, ExpandItemProps } from './ExpandItems.types';
import { Props as FlexBoxProps } from '../../../../Atoms/Flexbox/Flexbox.types';
import { TextWrapperLabel, TextWrapperValue } from './TextWrapper';

const StyledFlexboxItem = styled(Flexbox)<FlexBoxProps>`
  max-width: ${p => p.theme.spacing.unit(75)}px;
  padding-bottom: ${p => p.theme.spacing.unit(5)}px;
`;

const MobileItem: React.FC<{ item: ExpandItemProps }> = ({ item }) => (
  <Flexbox container justifyContent="space-between" as="li">
    <Flexbox item>
      {isElement(item.label) ? item.label : <TextWrapperLabel>{item.label}</TextWrapperLabel>}
    </Flexbox>
    <Flexbox item>
      {isElement(item.value) ? item.value : <TextWrapperValue>{item.value}</TextWrapperValue>}
    </Flexbox>
  </Flexbox>
);

const DesktopItem: React.FC<{ item: ExpandItemProps }> = ({ item }) => (
  <StyledFlexboxItem item as="li">
    <LabeledValue
      label={isElement(item.label) ? item.label : <TextWrapperLabel>{item.label}</TextWrapperLabel>}
    >
      {isElement(item.value) ? item.value : <TextWrapperValue>{item.value}</TextWrapperValue>}
    </LabeledValue>
  </StyledFlexboxItem>
);

export const ExpandItem: ExpandItemComponent = ({ item }) => (
  <>
    <Media query={t => t.media.lessThan(t.breakpoints.md)}>
      <MobileItem item={item} />
    </Media>
    <Media query={t => t.media.greaterThan(t.breakpoints.md)}>
      <DesktopItem item={item} />
    </Media>
  </>
);

ExpandItem.TextWrapperValue = TextWrapperValue;
ExpandItem.TextWrapperLabel = TextWrapperLabel;
