import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import { Box, Typography, Flexbox, Icon } from '../..';
import { isBoolean, isFunction, isString } from '../../common/utils';
import { Props, ItemProps } from './AccordionItem.types';

const TRANSITION_DURATION = 0.16;

const Item = styled.div<ItemProps>`
  outline: 1px
    ${(p) => (!p.disableFocusOutline && p.hasFocus ? `solid ${p.theme.color.cta}` : 'none')};
  border-radius: ${(p) => p.theme.borderRadius4};
  background-color: ${(p) =>
    !p.disableBackgroundColor && p.hasFocus ? p.theme.color.background : 'transparent'};
  border-top: 1px solid transparent;

  && + & {
    border-top: 1px solid ${(p) => p.theme.color.divider};
  }
  ${({ theme, p, px, py, pt, pb, pl, pr }) => `
  padding: ${theme.spacing.unit(pt || py || p || 0)}px ${theme.spacing.unit(pr || px || p || 0)}px
    ${theme.spacing.unit(pb || py || p || 0)}px ${theme.spacing.unit(pl || px || p || 0)}px;
  `}
`;

const Button = styled.button<{
  addonOnRightSide?: boolean;
  disabled?: boolean;
}>`
  font: inherit;
  width: 100%;
  border: 0;
  display: flex;
  text-align: start;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  background-color: transparent;
  padding: ${(p) => p.theme.spacing.unit(3)}px 0;
  cursor: ${(p) => (p.disabled ? 'default' : 'pointer')};
  color: ${({ disabled, theme }) => (disabled ? theme.color.disabledText : '')};
  justify-content: ${({ addonOnRightSide }) => (addonOnRightSide ? 'space-between' : 'flex-start')};
`;

const IconWrapper = styled.div<{ withChevron?: boolean; $expanded?: boolean }>`
  ${({ withChevron, theme }) =>
    `
      margin-top: ${withChevron ? '0' : '-2px'};
      order: ${withChevron ? '1' : '-1'};
      padding-right: ${withChevron ? 0 : theme.spacing.unit(3)}px;
    `}
  svg {
    transform: rotate(${(p) => (p.$expanded ? '0' : '180')}deg);
    transition: transform ${TRANSITION_DURATION}s ease-out;
  }
`;

const LeftAddonWrapper = styled.div<{}>`
  ${({ theme }) =>
    `
     
      padding-right: ${theme.spacing.unit(2)}px;
    `}
`;

const StyledButton = styled(Button)`
  -webkit-tap-highlight-color: transparent;
`;

const Content = styled(Box)``;

const components = {
  Content,
};

export const AccordionItem = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      as = 'h3',
      children,
      className,
      expanded: controlledExpand,
      expandedInitial,
      title,
      label,
      onClick,
      onToggle,
      withChevron,
      disableBackgroundColor,
      disableFocusOutline,
      disabled,
      p,
      px,
      py,
      pt,
      pb,
      pl,
      pr,
      leftBadgeIcon,
      rightAddon,
      type = 'secondary',
    },
    ref,
  ) => {
    const [expandedInternal, setExpandedInternal] = useState(expandedInitial || false);
    const [hasFocus, setHasFocus] = useState(false);
    const isControlled = isBoolean(controlledExpand);
    const expanded = isControlled ? controlledExpand : expandedInternal;

    const clickHandler: React.MouseEventHandler = (e) => {
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

    const icon = (() => {
      if (withChevron && type === 'primary')
        return (
          <Icon.ChevronUp16 color={(t) => (disabled ? t.color.disabledText : t.color.svgFill)} />
        );

      if (withChevron)
        return (
          <Icon.ChevronUp8 color={(t) => (disabled ? t.color.disabledText : t.color.svgFill)} />
        );

      if (expanded) return <Icon.Subtract16 color={(t) => t.color.cta} />;

      return <Icon.Add16 color={(t) => (disabled ? t.color.disabledText : t.color.cta)} />;
    })();

    const hasLeftBadgeIcon = React.isValidElement(leftBadgeIcon);
    const hasRightAddon = React.isValidElement(rightAddon);
    const padding = { p, px, py, pt, pb, pl, pr };

    const chevronPadding = withChevron ? 0 : 6;
    const contentPadding = leftBadgeIcon ? 10 : chevronPadding;

    return (
      <Item
        className={className}
        aria-expanded={expanded}
        hasFocus={hasFocus}
        disableBackgroundColor={disableBackgroundColor}
        disableFocusOutline={disableFocusOutline}
        {...padding}
      >
        <Typography as={as} type={type} weight="bold">
          <StyledButton
            ref={ref}
            onClick={clickHandler}
            type="button"
            onBlur={() => setHasFocus(false)}
            onFocus={() => setHasFocus(true)}
            disabled={disabled}
            addonOnRightSide={hasRightAddon || withChevron}
          >
            <Flexbox container justifyContent="flex-start" alignItems="center">
              {hasLeftBadgeIcon && <LeftAddonWrapper>{leftBadgeIcon}</LeftAddonWrapper>}
              <Flexbox container item direction="column">
                <Typography type={type} weight="bold">
                  {title}
                </Typography>
                <Typography type="tertiary">{label}</Typography>
              </Flexbox>
            </Flexbox>

            {hasRightAddon ? (
              rightAddon
            ) : (
              <IconWrapper withChevron={withChevron} $expanded={expanded}>
                {icon}
              </IconWrapper>
            )}
          </StyledButton>
        </Typography>
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.section
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: TRANSITION_DURATION, ease: 'easeOut' }}
            >
              <Content pt={1} pb={3} pl={contentPadding} pr={chevronPadding}>
                {isString(children) ? (
                  <Typography as="p" type={type} color={(t) => t.color.accordionText}>
                    {children}
                  </Typography>
                ) : (
                  children
                )}
              </Content>
            </motion.section>
          )}
        </AnimatePresence>
      </Item>
    );
  },
) as React.ForwardRefExoticComponent<Props> & {
  components: typeof components;
} as React.FC<Props> & {
  components: typeof components;
};

AccordionItem.components = components;
