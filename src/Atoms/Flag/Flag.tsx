import React from 'react';
import styled from 'styled-components';
import flags from './flags';
import { FlagComponent, InternalProps } from './Flag.types';
import { assert } from '../../common/utils';

const CleanSvg: React.FC<Partial<React.SVGProps<any>>> = ({
  className,
  children,
  focusable,
  role,
  viewBox,
}) => <svg {...{ className, children, focusable, role, viewBox }} />;

const StyledSvg = styled(CleanSvg)<InternalProps>`
  width: auto;
  height: ${p => p.theme.spacing.unit(p.height || 5)}px;
  vertical-align: middle;
  border: 1px solid ${p => p.theme.color.flagBorder};
  box-sizing: border-box;
`;

export const Flag: FlagComponent = props => {
  assert(Boolean(props.country), 'Flag: You need to supply a country code');
  const FlagPathComponent = props.country ? flags[props.country.toLowerCase()] : null;

  return FlagPathComponent ? (
    <StyledSvg focusable="false" role="img" height={props.height} viewBox="0 0 640 480">
      <FlagPathComponent />
    </StyledSvg>
  ) : null;
};
