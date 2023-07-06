import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';

import { Card, Flexbox, Icon, Typography } from '../..';
import { useSafeLayoutEffect } from '../../common/Hooks';
import { isElement, isFunction } from '../../common/utils';
import { CollapsibleProps, IndicatorsProps } from './Collapsible.types';

const StyledButton = styled.div<IndicatorsProps>`
  position: relative;
  background: none;
  cursor: pointer;
  display: block;
  width: 100%;
  border: 0;
  box-sizing: border-box;
  padding: ${(p) => {
    const py = p.theme.spacing.unit(p.$py);
    const px = p.theme.spacing.unit(p.$px);
    return p.$actionExists ? `${py}px ${px / 2}px ${py}px ${px}px` : `${py}px ${px}px`;
  }};

  &::before {
    content: '';
    display: block;
    background: ${(p) => p.theme.color.cta};
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.16s ease-out;
    opacity: ${(p) => (p.$collapsed && !p.$noIndicator ? 1 : 0)};
  }
`;

const StyledFlexbox = styled(Flexbox)<Pick<IndicatorsProps, '$px'>>`
  padding-right: ${(p) => p.theme.spacing.unit(p.$px)}px;
`;

const AnimatedChevronUp = styled(Icon.ChevronUp8)<Pick<IndicatorsProps, '$collapsed'>>`
  transform: ${(p) => (p.$collapsed ? 'rotate(180deg)' : 'rotate(0)')};
  transform-origin: center center;
  transition: transform 0.16s ease-out;
`;

export const CollapsibleCard: React.FC<CollapsibleProps> = ({
  className,
  title,
  children,
  collapsedInitial = false,
  heading = 'h2',
  noIndicator = false,
  onClick = () => {},
  expandElement,
  titleRowPaddingX = 5,
  titleRowPaddingY = 5,
  action: ActionComponent = false,
  fullWidthTitle = false,
}) => {
  const [height, setHeight] = useState('0px');
  const [collapsed, setCollapsed] = useState(collapsedInitial);
  const collapsibleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const debouncedSetHeight = debounce(
    () => setHeight(`${contentRef?.current?.scrollHeight}px`),
    50,
  );

  useSafeLayoutEffect(() => {
    const collapsibleHeight = collapsibleRef?.current?.scrollHeight;

    setHeight(`${collapsed ? 0 : collapsibleHeight}px`);
  }, [collapsed]);

  useEffect(() => {
    if (!contentRef.current || collapsed) return;
    const resizeObserver = new ResizeObserver(() => {
      debouncedSetHeight();
    });
    resizeObserver.observe(contentRef.current);

    // eslint-disable-next-line consistent-return
    return () => resizeObserver.disconnect();
  }, [debouncedSetHeight, collapsed]);

  const toggle = (e: React.MouseEvent | React.TouchEvent) => {
    onClick(e);
    setCollapsed((prev) => !prev);
  };

  const CollapseButton = (
    <StyledButton
      onClick={toggle}
      $collapsed={collapsed}
      $noIndicator={noIndicator}
      aria-expanded={!collapsed}
      $py={titleRowPaddingY}
      $px={titleRowPaddingX}
      $actionExists={!!ActionComponent}
    >
      <Flexbox container gap={4} alignItems="center" justifyContent="space-between">
        <Flexbox item width={fullWidthTitle ? '100%' : 'auto'}>
          <Typography type="title3" as={heading}>
            {title}
          </Typography>
        </Flexbox>
        <Flexbox item>
          {(() => {
            if (isFunction(expandElement)) return expandElement(collapsed);
            if (isElement(expandElement)) return expandElement;
            return <AnimatedChevronUp $collapsed={collapsed} />;
          })()}
        </Flexbox>
      </Flexbox>
    </StyledButton>
  );

  const CardHeaderTop = () =>
    ActionComponent ? (
      <StyledFlexbox container $px={titleRowPaddingX}>
        {CollapseButton}
        {ActionComponent}
      </StyledFlexbox>
    ) : (
      CollapseButton
    );

  return (
    <Card className={className}>
      <CardHeaderTop />
      <motion.div
        ref={collapsibleRef}
        initial={!collapsedInitial}
        style={{ overflow: 'hidden' }}
        animate={{
          height,
        }}
        transition={{ type: 'linear', duration: 0.16 }}
      >
        <div ref={contentRef}>{children}</div>
      </motion.div>
    </Card>
  );
};
