import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Flexbox, Typography } from '../../../../..';
import { useSelectMachineFromContext } from '../context';
import NormalizedElements from '../../../../../common/NormalizedElements';
import { getSingleSelectValue } from '../utils';

const FullWidthFlexbox = styled(Flexbox)`
  height: 100%;
  width: 100%;
`;
const CleanNormalizedButton = React.forwardRef((props: any, ref: React.Ref<any>) => (
  <NormalizedElements.Button {...R.omit(['absolutePositioning'], props)} ref={ref} />
));

const StyledA11yButton = styled(CleanNormalizedButton)`
  background: ${(p) => (p.disabled ? p.theme.color.disabledBackground : 'transparent')};
  width: 100%;
  height: 100%;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  padding: 0;
  display: flex;
  border: 0;
  &:active {
    color: inherit;
  }
  ${(p) =>
    !p.absolutePositioning
      ? ''
      : `
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      outline: 0;
      text-align: initial;
      `}
`;

export const SelectedValueWrapper = React.forwardRef<any, any>(
  (
    {
      placeholder,
      open,
      component: Component,
      noFormField,
      disabled,
      id,
      label,
      'data-testid': dataTestId,
    },
    ref,
  ) => {
    const [state, send] = useSelectMachineFromContext();

    const value = getSingleSelectValue(state.context.selectedItems);

    const screenReaderTextSelection =
      value.length === 1 ? R.pathOr('', [0, 'label'], value) : `${value.length} items`;
    const screenReaderText =
      value.length > 0 ? `${label}: ${screenReaderTextSelection}` : `${label}: ${placeholder}`;

    const handleClick: React.MouseEventHandler = (e) => {
      e.preventDefault();
      send({ type: 'TOGGLE' });
    };

    return (
      <Typography type="secondary">
        <StyledA11yButton
          id={id}
          type="button"
          /** need to exclude this button from document.forms */
          form=""
          absolutePositioning={!noFormField}
          ref={ref}
          aria-haspopup="listbox"
          aria-expanded={open ? 'true' : 'false'}
          onClick={handleClick}
          disabled={disabled}
          tabIndex={0}
          aria-label={screenReaderText}
          data-testid={dataTestId}
        >
          <FullWidthFlexbox container item aria-hidden="true">
            <Component />
          </FullWidthFlexbox>
        </StyledA11yButton>
      </Typography>
    );
  },
);
