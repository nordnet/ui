import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Card, Flexbox, OldIcon, Typography } from '../..';
import { useSafeLayoutEffect } from '../../common/Hooks';
import { isElement, isFunction } from '../../common/utils';
import { CollapsibleProps, IndicatorsProps } from './Collapsible.types';

const StyledCollapsible = styled.div<{
  height: string | null;
  disabledTransition: boolean;
}>`
  overflow: hidden;
  will-change: height;
  height: ${(p) => (p.height ? p.height : 'auto')};
  transition: ${(p) => (p.disabledTransition ? '' : 'height 0.16s ease-out')};

  &[hidden] {
    display: none;
  }
`;

const StyledButton = styled.button<IndicatorsProps>`
  touch-action: none;
  position: relative;
  background: none;
  cursor: pointer;
  display: block;
  width: 100%;
  padding: ${(p) => {
    const py = p.theme.spacing.unit(p.$py);
    const px = p.theme.spacing.unit(p.$px);
    return p.$actionExists ? `${py}px ${px / 2}px ${py}px ${px}px` : `${py}px ${px}px`;
  }};
  border: 0;

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

const AnimatedChevronUp = styled(OldIcon.ChevronUp)<Pick<IndicatorsProps, '$collapsed'>>`
  transform: ${(p) => (p.$collapsed ? 'rotate(180deg)' : 'rotate(0)')};
  transform-origin: center center;
  transition: transform 0.16s ease-out;
`;

const StyledFlexboxItem = styled(Flexbox)<Pick<IndicatorsProps, '$fullWidthTitle'>>`
  ${({ $fullWidthTitle }) =>
    $fullWidthTitle &&
    css`
      width: 100%;
    `}
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
  const [collapsed, setCollapsed] = useState(collapsedInitial);
  const [collapsing, setCollapsing] = useState(false);
  const [expanding, setExpanding] = useState(false);
  const [disabledTransition, setDisabledTransition] = useState(false);
  const [height, setHeight] = useState(collapsed ? '0px' : null);
  const collapsibleRef = useRef(null);

  useSafeLayoutEffect(() => {
    if (!collapsing && !expanding) {
      return () => null;
    }

    let outerRequest: number;
    let innerRequest: number;

    // get the height of the element's inner content, regardless of its actual size
    // @ts-ignore
    const collapsibleHeight = collapsibleRef.current.scrollHeight;

    if (collapsing) {
      // temporarily disable all css transitions
      setDisabledTransition(true);

      // on the next frame (as soon as the previous style change has taken effect),
      // explicitly set the element's height to its current pixel height, so we
      // aren't transitioning out of 'auto'
      outerRequest = requestAnimationFrame(() => {
        setHeight(`${collapsibleHeight}px`);
        setDisabledTransition(false);

        // on the next frame (as soon as the previous style change has taken effect),
        // have the element transition to height: 0
        innerRequest = requestAnimationFrame(() => {
          setHeight(`0px`);
        });
      });
    }

    if (expanding) {
      // have the element transition to the height of its inner content
      setHeight(`${collapsibleHeight}px`);
    }

    return function cleanup() {
      if (outerRequest) {
        cancelAnimationFrame(outerRequest);
      }

      if (innerRequest) {
        cancelAnimationFrame(innerRequest);
      }
    };
  }, [collapsing, expanding]);

  const onTransitionEnd = () => {
    if (collapsing || expanding) {
      // this check bcz ios11 triggers onTransitionEnd on early exit of useLayoutEffect()

      if (expanding) {
        // remove "height" from the element's inline styles, so it can return to its initial value
        setHeight(null);

        setExpanding(false);
      }

      if (collapsing) {
        setCollapsing(false);
      }

      setCollapsed(!collapsed);
    }
  };

  const toggle = (e: React.MouseEvent | React.TouchEvent) => {
    onClick(e);

    if (collapsed) {
      setExpanding(true);
    } else {
      setCollapsing(true);
    }
  };

  const hasOnTouch =
    typeof document !== 'undefined' &&
    document.documentElement &&
    'ontouchstart' in document.documentElement;

  const CollapseButton = (
    <StyledButton
      type="button"
      {...{ [hasOnTouch ? 'onTouchStart' : 'onClick']: toggle }}
      $collapsed={collapsed}
      $noIndicator={noIndicator}
      aria-expanded={!collapsed}
      $py={titleRowPaddingY}
      $px={titleRowPaddingX}
      $actionExists={!!ActionComponent}
    >
      <Flexbox container gutter={4} alignItems="center" justifyContent="space-between">
        <StyledFlexboxItem item $fullWidthTitle={fullWidthTitle}>
          <Typography type="title3" as={heading}>
            {title}
          </Typography>
        </StyledFlexboxItem>
        <Flexbox item>
          {(() => {
            if (isFunction(expandElement)) return expandElement(collapsed);
            if (isElement(expandElement)) return expandElement;
            return <AnimatedChevronUp size={2} $collapsed={collapsed} />;
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
      <>{CollapseButton}</>
    );

  return (
    <Card className={className}>
      <Flexbox>
        <CardHeaderTop></CardHeaderTop>
      </Flexbox>
      <StyledCollapsible
        ref={collapsibleRef}
        height={height}
        disabledTransition={disabledTransition}
        onTransitionEnd={onTransitionEnd}
        hidden={collapsed && !expanding}
      >
        {children}
      </StyledCollapsible>
    </Card>
  );
};
