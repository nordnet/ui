import React, { useContext, FC } from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import { LinkComponent, LinkProps } from './Link.types';
import { Theme } from '../../theme/theme.types';
import { isUndefined, assert } from '../../common/utils';
import NormalizedElements from '../../common/NormalizedElements';
import TrackingContext from '../../common/tracking';
import { useLink, LinkProps as RawLinkProps } from '../../common/Links';

const getEnabledColor = (color: LinkProps['color'], theme: Theme): string => {
  if (color === 'black') {
    return theme.color.text;
  }
  if (color === 'inherit') {
    return color;
  }
  return theme.color.cta;
};

const getSharedStyle = (
  props: ThemedStyledProps<
    {
      disabled?: LinkProps['disabled'];
      $display?: LinkProps['display'];
      $color?: LinkProps['color'];
    },
    Theme
  >,
) => {
  const { theme, disabled, $display = 'inline', $color } = props;

  // Need to switch to display: inline-block
  // But it will break pages, so need to do it through mutations
  return `
    display: ${$display};
    padding: 0;
    color: ${disabled ? theme.color.disabledText : getEnabledColor($color, theme)};

    &:hover {
      text-decoration: underline;
    }
  `;
};

const CleanLink: FC<RawLinkProps> = (props) => {
  const RawLink = useLink();
  return <RawLink {...props} />;
};

const StyledLink = styled(CleanLink)<LinkProps & { $underlined: LinkProps['underlined'] }>`
  ${(p) => getSharedStyle(p)}
  text-decoration: ${(p) => (p.$underlined ? `underline` : `none`)};
`;

const StyledButton = styled(NormalizedElements.Button)<
  LinkProps & { $underlined: LinkProps['underlined'] }
>`
  ${(p) => getSharedStyle(p)}
  /* resetting button styles */
  border: none;
  background: transparent;
  overflow: visible;

  -webkit-appearance: none !important; /* stylelint-disable-line property-no-vendor-prefix */
  /* resetting button styles end */

  ${(p) => (p.$underlined ? `text-decoration: underline;` : ``)};

  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};

  font-weight: inherit; /* remove when and if typography is handled inside the component */
`;

export const Link: LinkComponent = React.forwardRef<any, LinkProps>((props, ref) => {
  const {
    to,
    children,
    disabled,
    display,
    className,
    onClick,
    external,
    cms,
    fullServerRedirect,
    as, // FIXME Might have broken as functionallity, needs verification.
    color,
    underlined,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
    onFocus,
    ...rest
  } = props;

  const { track } = useContext(TrackingContext);
  const trackClick = (e: React.MouseEvent) => {
    if (track) track('link', e, props);
    if (onClick) onClick(e);
  };

  if (isUndefined(to) || disabled) {
    return (
      <StyledButton
        type="button"
        ref={ref}
        className={className}
        onClick={trackClick}
        disabled={disabled}
        as={as}
        $color={color}
        $display={display}
        $underlined={underlined}
        {...rest}
      >
        {children}
      </StyledButton>
    );
  }

  if (cms) {
    assert(false, 'Link: the prop cms is deprecated, please use fullServerRedirect instead.', {
      level: 'warn',
    });
  }

  return (
    <StyledLink
      innerRef={ref}
      className={className}
      onClick={trackClick}
      to={to}
      external={external}
      cms={cms}
      fullServerRedirect={fullServerRedirect}
      as={as}
      $color={color}
      $display={display}
      $underlined={underlined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      onFocus={onFocus}
      {...rest}
    >
      {children}
    </StyledLink>
  );
});
