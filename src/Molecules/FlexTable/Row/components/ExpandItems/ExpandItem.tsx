import React from 'react';
import styled from 'styled-components';
import { isElement, isFunction } from '../../../../../common/utils';
import { Flexbox, LabeledValue } from '../../../../..';
import { ExpandItemProps, ExpandItemMediaProps, ItemProps, RenderFunc } from './ExpandItems.types';
import { Props as FlexBoxProps } from '../../../../../Atoms/Flexbox/Flexbox.types';
import { TextWrapper } from './TextWrapper';
import { getStylesForSizes } from '../../../shared';

type ScreenSizeConfigurableProps = {
  hidden?: boolean;
};

type StyledFlexboxProps = {
  $xs: ScreenSizeConfigurableProps;
  $sm?: ScreenSizeConfigurableProps;
  $md?: ScreenSizeConfigurableProps;
  $lg?: ScreenSizeConfigurableProps;
  $xl?: ScreenSizeConfigurableProps;
} & FlexBoxProps;

const getHiddenStylesDesktop = ({ hidden }: ScreenSizeConfigurableProps) =>
  hidden === true ? 'display: none;' : 'display: list-item;';

const getHiddenStylesMobile = ({ hidden }: ScreenSizeConfigurableProps) =>
  hidden === true ? 'display: none;' : 'display: flex;';

const StyledOverflowItem = styled(Flexbox)<{ textAlign?: string }>`
  overflow: hidden;
  text-align: ${({ textAlign = 'left' }) => textAlign};
`;

const StyledDesktopItem = styled(Flexbox)<StyledFlexboxProps>`
  max-width: ${(p) => p.theme.spacing.unit(75)}px;
  padding-bottom: ${(p) => p.theme.spacing.unit(5)}px;
  ${getStylesForSizes<{}, ScreenSizeConfigurableProps>(
    (p: StyledFlexboxProps) => ({
      xs: p.$xs,
      sm: p.$sm,
      md: p.$md,
      lg: p.$lg,
      xl: p.$xl,
    }),
    {
      hidden: getHiddenStylesDesktop,
    },
  )}
`;

const StyledMobileItem = styled(Flexbox)<StyledFlexboxProps>`
  ${getStylesForSizes<{}, ScreenSizeConfigurableProps>(
    (p: StyledFlexboxProps) => ({
      xs: p.$xs,
      sm: p.$sm,
      md: p.$md,
      lg: p.$lg,
      xl: p.$xl,
    }),
    {
      hidden: getHiddenStylesMobile,
    },
  )}
`;

const ExpandRenderer = ({
  isLabel = false,
  children,
}: {
  children: React.ReactNode | RenderFunc;
  isLabel?: boolean;
}) => (
  <>
    {isElement(children) && children}
    {isFunction(children)
      ? children()
      : !isElement(children) && <TextWrapper isLabel={isLabel}>{children}</TextWrapper>}
  </>
);

const MobileItem = ({
  label,
  value,
  xs,
  sm,
  md,
  lg,
  xl,
}: {
  label: ItemProps['label'];
  value: ItemProps['value'];
} & ExpandItemMediaProps) => (
  <StyledMobileItem
    forwardedAs="li"
    container
    justifyContent="space-between"
    $xs={xs}
    $sm={sm}
    $md={md}
    $lg={lg}
    $xl={xl}
  >
    <StyledOverflowItem item flex="0 0 50%">
      <ExpandRenderer isLabel>{label}</ExpandRenderer>
    </StyledOverflowItem>
    <StyledOverflowItem item flex="0 0 50%" textAlign="right">
      <ExpandRenderer>{value}</ExpandRenderer>
    </StyledOverflowItem>
  </StyledMobileItem>
);

const DesktopItem = ({
  label,
  value,
  xs,
  sm,
  md,
  lg,
  xl,
}: {
  label: ItemProps['label'];
  value: ItemProps['value'];
} & ExpandItemMediaProps) => (
  <StyledDesktopItem item $xs={xs} $sm={sm} $md={md} $lg={lg} $xl={xl} forwardedAs="li">
    <LabeledValue label={<ExpandRenderer isLabel>{label}</ExpandRenderer>}>
      <ExpandRenderer>{value}</ExpandRenderer>
    </LabeledValue>
  </StyledDesktopItem>
);

export const ExpandItem = ({ item, mobileItem }: ExpandItemProps) => {
  const { label, value, hidden, sm, md, lg, xl } = item;
  return mobileItem ? (
    <MobileItem label={label} value={value} xs={{ hidden }} sm={sm} md={md} lg={lg} xl={xl} />
  ) : (
    <DesktopItem label={label} value={value} xs={{ hidden }} sm={sm} md={md} lg={lg} xl={xl} />
  );
};

ExpandItem.TextWrapper = TextWrapper;
