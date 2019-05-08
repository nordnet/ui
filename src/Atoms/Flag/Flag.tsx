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

const VIEWBOX_HEIGHT = 480;
const VIEWBOX_WIDTH = 640;
const StyledSvg = styled(CleanSvg)<InternalProps>`
  height: ${p => p.theme.spacing.unit(p.height)}px;
  border: 1px solid ${p => p.theme.color.flagBorder};
  box-sizing: border-box;
  display: ${p => (p.inline ? 'inline-block' : 'block')};
  ${p => (p.inline ? `vertical-align: middle;` : '')};
  ${/** IE11 stuff below */ ''}
  width: ${p => p.theme.spacing.unit((p.height * VIEWBOX_WIDTH) / VIEWBOX_HEIGHT)}px;
  overflow: hidden;
  transform: translate(-0.5px, -0.5px);
`;

export const Flag: FlagComponent = props => {
  assert(Boolean(props.country), 'Flag: You need to supply a country code');
  const FlagPathComponent = props.country ? flags[props.country.toLowerCase()] : null;
  const height = props.height || 5; // units
  return FlagPathComponent ? (
    <StyledSvg
      inline={props.inline}
      focusable="false"
      role="img"
      height={height}
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
    >
      <FlagPathComponent />
    </StyledSvg>
  ) : null;
};
