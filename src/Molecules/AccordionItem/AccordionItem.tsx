import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Icon } from '../..';
import { isBoolean, isFunction } from '../../common/utils';
import { AccordionItemComponent } from './AccordionItem.types';

const Item = styled.div`
  & + & {
    border-top: 1px solid ${p => p.theme.color.divider};
  }
`;

const Panel = styled.div`
  padding-top: ${p => p.theme.spacing.unit(1)}px;
  padding-bottom: ${p => p.theme.spacing.unit(3)}px;
  padding-left: ${p => p.theme.spacing.unit(6)}px;

  &[hidden] {
    display: none;
  }
`;

const Button = styled.button`
  font: inherit;
  box-sizing: border-box;
  position: relative;
  display: flex;
  width: 100%;
  border: 0;
  padding-top: ${p => p.theme.spacing.unit(3)}px;
  padding-right: 0;
  padding-bottom: ${p => p.theme.spacing.unit(3)}px;
  padding-left: ${p => p.theme.spacing.unit(6)}px;
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${p => p.theme.color.background};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 0;
`;

export const AccordionItem: AccordionItemComponent = ({
  as = 'h3',
  children,
  expanded: controlledExpand,
  expandedInitial = false,
  title,
  onClick,
  onToggle,
}) => {
  const [expandedInternal, setExpandedInternal] = useState(expandedInitial);
  const isControlled = isBoolean(controlledExpand);
  const expanded = isControlled ? controlledExpand : expandedInternal;

  const clickHandler: React.MouseEventHandler = e => {
    if (!isControlled) {
      setExpandedInternal(!expandedInternal);
    }

    if (isFunction(onClick)) {
      onClick(e);
    }

    if (isFunction(onToggle)) {
      onToggle(!expanded);
    }
  };

  return (
    <Item>
      <Typography as={as} type="secondary">
        <Button type="button" aria-expanded={expanded} onClick={clickHandler}>
          <IconWrapper>
            {expanded ? (
              <Icon.Minus size={3} fill={t => t.color.cta} />
            ) : (
              <Icon.Plus size={3} fill={t => t.color.cta} />
            )}
          </IconWrapper>
          {title}
        </Button>
      </Typography>
      <Panel hidden={!expanded}>{children}</Panel>
    </Item>
  );
};
