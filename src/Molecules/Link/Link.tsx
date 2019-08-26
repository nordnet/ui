import R from 'ramda';
import React, { useContext } from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { LinkComponent, LinkProps } from './Link.types';
import { Theme } from '../../theme/theme.types';
import { isUndefined } from '../../common/utils';
import NormalizedElements from '../../common/NormalizedElements';
import TrackingContext from '../../common/tracking';

const getSharedStyle = (props: ThemedStyledProps<LinkProps, Theme>) => {
  const { theme, disabled, display = 'inline' } = props;

  // Need to switch to display: inline-block
  // But it will break pages, so need to do it through mutations
  return `
    display: ${display};
    padding: 0;
    color: ${disabled ? theme.color.disabledText : theme.color.cta}

    &:hover {
      text-decoration: underline;
    }
  `;
};

const CleanLink = React.forwardRef((props: LinkProps, ref) => {
  return props.external ? (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a ref={ref} {...R.omit(['fullWidth', 'colorFn', 'color', 'display'], props) as any} />
  ) : (
    <RouterLink ref={ref} {...R.omit(['fullWidth', 'colorFn', 'color', 'display'], props) as any} />
  );
});

const StyledLink = styled(CleanLink)<LinkProps>`
  ${p => getSharedStyle(p)}
  text-decoration: none;
`;

const StyledButton = styled(NormalizedElements.Button)<LinkProps>`
  ${p => getSharedStyle(p)}
  /* resetting button styles */
  border: none;
  background: transparent;
  overflow: visible;

  -webkit-appearance: none !important; /* stylelint-disable-line property-no-vendor-prefix */
  /* resetting button styles end */

  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};

  font-weight: inherit; /* remove when and if typography is handled inside the component */
`;

export const Link: LinkComponent = React.forwardRef<any, LinkProps>((props, ref) => {
  const {
    to,
    children,
    disabled,
    className,
    onClick,
    external,
    target = external ? '_blank' : undefined,
    rel = external ? 'noopener noreferrer nofollow' : undefined,
    as,
  } = props;
  const destinationProp = external ? { href: to } : { to };

  const { track } = useContext(TrackingContext);
  const trackClick = (e: React.MouseEvent) => {
    if (track) track('link', e, props);
    if (onClick) onClick(e);
  };

  if (isUndefined(to) || disabled) {
    return (
      <StyledButton
        ref={ref}
        className={className}
        onClick={trackClick}
        disabled={disabled}
        as={as}
      >
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledLink
      ref={ref}
      className={className}
      onClick={onClick}
      {...destinationProp}
      target={target}
      rel={rel}
      external={external}
      as={as}
    >
      {children}
    </StyledLink>
  );
});
