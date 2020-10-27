import React from 'react';
import styled from 'styled-components';
import { isElement, isFunction } from '../../../../../common/utils';
import { Flexbox, LabeledValue } from '../../../../..';
import { ExpandItemComponent, ExpandItemProps, RenderFunc } from './ExpandItems.types';
import { Props as FlexBoxProps } from '../../../../../Atoms/Flexbox/Flexbox.types';
import { TextWrapperLabel } from './TextWrapperLabel';
import { TextWrapperValue } from './TextWrapperValue';
import { FontSize } from '../../../shared/shared.types';
import { useFlexTable } from '../../../shared/FlexTableProvider';
import { RenderForSizes } from '../../../shared';

const StyledOverflowItem = styled(Flexbox)<{ textAlign?: string }>`
  overflow: hidden;
  text-align: ${({ textAlign = 'left' }) => textAlign};
`;

const StyledFlexboxItem = styled(Flexbox)<FlexBoxProps>`
  max-width: ${(p) => p.theme.spacing.unit(75)}px;
  padding-bottom: ${(p) => p.theme.spacing.unit(5)}px;
`;

const ExpandRenderer: React.FC<{
  children: React.ReactNode | RenderFunc;
  fontSize: FontSize;
  isLabel?: boolean;
}> = ({ children, fontSize, isLabel = false }) => {
  const Wrapper = isLabel ? TextWrapperLabel : TextWrapperValue;

  return (
    <>
      {isElement(children) && children}
      {isFunction(children)
        ? children({ fontSize })
        : !isElement(children) && <Wrapper fontSize={fontSize}>{children}</Wrapper>}
    </>
  );
};

const MobileItem: React.FC<{ className?: string; item: ExpandItemProps; fontSize: FontSize }> = ({
  item,
  fontSize,
}) => (
  <Flexbox container justifyContent="space-between" as="li">
    <StyledOverflowItem item flex="0 0 50%">
      <ExpandRenderer fontSize={fontSize} isLabel>
        {item.label}
      </ExpandRenderer>
    </StyledOverflowItem>
    <StyledOverflowItem item flex="0 0 50%" textAlign="right">
      <ExpandRenderer fontSize={fontSize}>{item.value}</ExpandRenderer>
    </StyledOverflowItem>
  </Flexbox>
);

const DesktopItem: React.FC<{ className?: string; item: ExpandItemProps; fontSize: FontSize }> = ({
  item,
  fontSize,
}) => (
  <StyledFlexboxItem item as="li">
    <LabeledValue
      label={
        <ExpandRenderer fontSize={fontSize} isLabel>
          {item.label}
        </ExpandRenderer>
      }
    >
      <ExpandRenderer fontSize={fontSize}>{item.value}</ExpandRenderer>
    </LabeledValue>
  </StyledFlexboxItem>
);

export const ExpandItem: ExpandItemComponent = ({ item }) => {
  const { fontSize: xsFontSize, sm, md, lg, xl } = useFlexTable();
  return (
    <RenderForSizes
      xs={{ fontSize: xsFontSize, mobileItem: true }}
      sm={sm}
      md={{ ...md, mobileItem: false }}
      lg={lg}
      xl={xl}
    >
      {({ fontSize, mobileItem, className }) => {
        if (mobileItem) {
          return <MobileItem className={className} item={item} fontSize={fontSize} />;
        }

        return <DesktopItem className={className} item={item} fontSize={fontSize} />;
      }}
    </RenderForSizes>
  );
};

ExpandItem.TextWrapperValue = TextWrapperValue;
ExpandItem.TextWrapperLabel = TextWrapperLabel;
