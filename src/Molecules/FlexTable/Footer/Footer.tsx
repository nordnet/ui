import React from 'react';
import styled from 'styled-components';
import { isElement, isFunction } from '../../../common/utils';
import { Flexbox } from '../../..';
import { useFlexCellProps } from '../shared/ColumnProvider';
import { FooterComponent } from './Footer.types';
import { TextWrapper } from './TextWrapper';
import { useFlexTable } from '../shared/FlexTableProvider';
import { RenderForSizes } from '../shared';

const StyledFlexbox = styled(Flexbox)`
  overflow: hidden;
`;

const Footer: FooterComponent = (props) => {
  const { children, className, columnId } = props;

  const {
    fontSize: xsFontSize,
    sm: smTable,
    md: mdTable,
    lg: lgTable,
    xl: xlTable,
  } = useFlexTable();

  const flexProps = useFlexCellProps(props);

  return (
    <RenderForSizes
      xs={{ fontSize: xsFontSize }}
      sm={smTable}
      md={mdTable}
      lg={lgTable}
      xl={xlTable}
    >
      {({ fontSize, className: mediaClassName }) => (
        <StyledFlexbox
          className={mediaClassName ? `${className} ${mediaClassName}` : className}
          role="cell"
          {...flexProps}
        >
          {isElement(children) && children}
          {isFunction(children)
            ? children({ fontSize, columnId })
            : !isElement(children) && <TextWrapper fontSize={fontSize}>{children}</TextWrapper>}
        </StyledFlexbox>
      )}
    </RenderForSizes>
  );
};

Footer.TextWrapper = TextWrapper;
export default Footer;
