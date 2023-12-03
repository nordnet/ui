import React from 'react';
import styled from 'styled-components';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { useFlexCellProps } from '../shared/ColumnProvider';
import { Props } from './Footer.types';
import { TextWrapper } from './TextWrapper';
import { getStylesForSizes } from '../shared';
import { useFlexTable } from '../shared/FlexTableProvider';
import { Density } from '../shared/shared.types';
import { getDensityPaddings } from '../shared/textUtils';

type ScreenSizeConfigurableProps = { density: Density };
type StyledFlexboxProps = {
  $xs: ScreenSizeConfigurableProps;
  $sm: Partial<ScreenSizeConfigurableProps>;
  $md: Partial<ScreenSizeConfigurableProps>;
  $lg: Partial<ScreenSizeConfigurableProps>;
  $xl: Partial<ScreenSizeConfigurableProps>;
};

// TODO: using '!important' here because Flexbox (used in Row) sets padding-top: 0 on its children, investigate how / if this can be solved in a better way.
const getDensityStyles = ({ density }: { density: Density }) => `
  padding-top: ${getDensityPaddings(density)}px !important;
  padding-bottom: ${getDensityPaddings(density)}px;
`;

const StyledFlexbox = styled(Flexbox)<StyledFlexboxProps>`
  overflow: hidden;
  ${getStylesForSizes<{}, ScreenSizeConfigurableProps>(
    (p: StyledFlexboxProps) => ({
      xs: p.$xs,
      sm: p.$sm,
      md: p.$md,
      lg: p.$lg,
      xl: p.$xl,
    }),
    {
      density: getDensityStyles,
    },
  )}
`;

const Footer = (props: Props) => {
  const { children, className, columnId } = props;
  const flexProps = useFlexCellProps(props);
  const { xs, sm, md, lg, xl } = useFlexTable<'density'>('density');

  return (
    <StyledFlexbox
      className={className}
      role="cell"
      $xs={xs}
      $sm={sm}
      $md={md}
      $lg={lg}
      $xl={xl}
      {...flexProps}
    >
      {isElement(children) && children}
      {isFunction(children)
        ? children({ columnId })
        : !isElement(children) && <TextWrapper>{children}</TextWrapper>}
    </StyledFlexbox>
  );
};

Footer.TextWrapper = TextWrapper;
export default Footer;
