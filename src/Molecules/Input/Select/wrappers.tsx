import * as React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { Typography, Flexbox, VisuallyHidden } from '../../..';
import NormalizedElements from '../../../common/NormalizedElements';
import { defaultActionTypes } from './defaults';
import { Option } from './Select.types';

const StyledA11yButton = styled(NormalizedElements.Button)`
  background: ${p => (p.disabled ? p.theme.color.disabledBackground : 'transparent')};
  width: 100%;
  height: 100%;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};

  display: flex;
  border: 0;

  ${p =>
    !p.absolutePositioning
      ? ''
      : `
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  outline: 0;

  padding: 0;
  text-align: initial;
  `}
`;

const StyledListWrapper = styled.div<any>`
  width: ${p => (p.noFormField ? 'auto' : '100%')};
  height: 100%;
  position: absolute;
  top: 100%;
  z-index: 4;
`;

export const ListWrapper = React.forwardRef<HTMLDivElement, any>(
  ({ component: Component, children, noFormField }, ref) => {
    return (
      <StyledListWrapper ref={ref} noFormField={noFormField}>
        <Component position={noFormField ? 'left' : 'right'}>{children}</Component>
      </StyledListWrapper>
    );
  },
);

const StyledListItemWrapper = styled.li`
  width: 100%;
  height: 100%;
`;

type ListItemComponent = React.ComponentType<{ index: number; ref: React.Ref<HTMLElement> }>;

export const SelectedValueWrapper = React.forwardRef<any, any>(
  ({ placeholder, dispatch, open, component: Component, state, noFormField, disabled }, ref) => {
    const screenReaderText =
      state.value.length === 1
        ? R.pathOr('', [0, 'label'], state.value)
        : `${state.value.length} items`;

    const handleClick = React.useCallback(
      () => dispatch({ type: defaultActionTypes['Select.Toggle'] }),
      [dispatch],
    );
    return (
      <Flexbox container direction="column" justifyContent="center">
        <Typography type="secondary">
          <StyledA11yButton
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
          >
            <Flexbox grow={1} container item aria-hidden="true">
              <Component />
            </Flexbox>
          </StyledA11yButton>
          <VisuallyHidden>{placeholder}</VisuallyHidden>
          {state.value.length > 0 && <VisuallyHidden>{screenReaderText}</VisuallyHidden>}
        </Typography>
      </Flexbox>
    );
  },
);

export const ListItemWrapper = React.forwardRef<
  HTMLElement | null,
  {
    component: ListItemComponent;
    option: Option;
    index: number;
    onKeyDown: React.KeyboardEventHandler;
    selected: boolean;
    onClick: (params: { selected: boolean; option: Option }, e: React.MouseEvent) => void;
  }
>((props, outerRef) => {
  const ref = React.useRef<HTMLLIElement>(null);
  const innerRef = React.useRef<HTMLElement>(null);
  const handleFocus = React.useCallback(() => innerRef.current && innerRef.current!.focus(), []);
  const handleBlur = React.useCallback(() => innerRef.current && innerRef.current!.blur(), []);
  const handleClick = React.useCallback(
    e => props.onClick({ selected: props.selected, option: props.option }, e),
    [props.onClick, props.option, props.selected], // eslint-disable-line react-hooks/exhaustive-deps
  );

  // Passing ref through to the Component
  React.useImperativeHandle(outerRef, () => innerRef.current);

  const Component = props.component;
  return (
    <StyledListItemWrapper
      ref={ref}
      role="option"
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={props.onKeyDown}
      onClick={handleClick}
      aria-selected={props.selected}
    >
      <Component ref={innerRef} index={props.index} />
    </StyledListItemWrapper>
  );
});
