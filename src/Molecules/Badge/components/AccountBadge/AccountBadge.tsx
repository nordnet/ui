import React from 'react';
import styled from 'styled-components';
import {
  AccountBadgeComponent,
  AccountBadgeCompoundComponent,
  AccountBadgeContentProps,
  AccountBadgeProps,
} from './AccountBadge.types';
import { BaseBadge } from '..';
import { Typography } from '../../../..';
import { isElement, isFunction } from '../../../../common/utils';
import { AccountBadgeSize } from './AccountBadge.constants';
import { AccountBadgeStack } from '../AccountBadgeStack';

const StyledTypography = styled(Typography)`
  font-weight: 800;
`;

const AccountBadgeContent = ({
  children,
  typographyType,
}: AccountBadgeContentProps): React.ReactNode => {
  if (typeof children === 'undefined') return null;
  if (isFunction(children)) return children();
  if (isElement(children)) return children;

  return (
    <StyledTypography type={typographyType} color={(t) => t.color.badgeTextColor}>
      {children}
    </StyledTypography>
  );
};

const AccountBadge: AccountBadgeComponent = React.forwardRef<HTMLSpanElement, AccountBadgeProps>(
  (
    { children, badgeSize = 'm', badgeColor = (t) => t.color.accountBadgeBackground, ...htmlProps },
    ref,
  ) => {
    const baseBadgeSize = typeof badgeSize === 'number' ? badgeSize : AccountBadgeSize[badgeSize];
    const typographyType = baseBadgeSize === AccountBadgeSize.l ? 'tertiary' : 'caption';

    return (
      <BaseBadge
        {...htmlProps}
        ref={ref}
        badgeColor={badgeColor}
        badgeSize={baseBadgeSize}
        symmetricShape
      >
        {/* @ts-ignore */}
        <AccountBadgeContent typographyType={typographyType}>{children}</AccountBadgeContent>
      </BaseBadge>
    );
  },
);

// eslint-disable-next-line prefer-object-spread
const CompoundAccountBadge: AccountBadgeCompoundComponent = Object.assign({}, AccountBadge, {
  Stack: AccountBadgeStack,
});

export { CompoundAccountBadge };
