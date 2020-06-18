import React, { useRef, useLayoutEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { isHTMLElement } from '../../common/utils';
import {
  Props,
  IndicatorProps,
  LineProps,
  AverageLabelProps,
  CheckCollision,
} from './LineScale.types';
import { Flexbox, Typography, Box, Number } from '../..';

const TRIANGLE_TOP_BORDER_SIZE = 2;
const TRIANGLE_SIDE_BORDER_SIZE = 6;
const TRIANGLE_OFFSET = 1;

export const intersectionStyles = css`
  height: ${p => p.theme.spacing.unit(1)}px;
  width: ${p => p.theme.spacing.unit(1)}px;
  position: absolute;
  bottom: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.unit(TRIANGLE_OFFSET + TRIANGLE_TOP_BORDER_SIZE)}px;
  pointer-events: none;
`;

const IntersectionLeft = styled.div`
  ${intersectionStyles}
  left: -6px;
`;

const IntersectionRight = styled.div`
  ${intersectionStyles}
  right: -6px;
`;

const leftCollisionStyle = css`
  left: -${TRIANGLE_SIDE_BORDER_SIZE}px;
  margin: 0;
  transform: translateY(-100%) translateY(-10px);
`;

const rightCollisionStyle = css`
  right: -${TRIANGLE_SIDE_BORDER_SIZE}px;
  margin-right: 0;
  margin-left: 100%;
  transform: translateX(-100%) translateY(-100%) translateY(-10px);
`;

const transformStyle = css`
  transform: translateX(-50%) translateY(-100%) translateY(-10px);
`;

const Indicator = styled('span').withConfig({
  shouldForwardProp: prop =>
    !['value', 'valueColor', 'leftCollision', 'rightCollision'].includes(prop),
})<IndicatorProps>`
  position: relative;
  bottom: 100%;
  margin: 0 ${p => p.value}% ${({ theme }) =>
  theme.spacing.unit(TRIANGLE_OFFSET + TRIANGLE_TOP_BORDER_SIZE)}px; 
  padding: 2px ${({ theme }) => theme.spacing.unit(1.5)}px;
  ${p => p.leftCollision && leftCollisionStyle}
  ${p => p.rightCollision && rightCollisionStyle}
  ${p => !p.leftCollision && !p.rightCollision && transformStyle}
  height: ${({ theme }) => theme.spacing.unit(4)}px;
  white-space: nowrap;
  text-align: center;
  background: ${p => p.valueColor || p.theme.color.indicatorPillColor2};
  color: ${({ theme }) => theme.color.textLight};
`;

const AverageLabel = styled('span').withConfig({
  shouldForwardProp: prop => !['averageValue', 'leftCollision', 'rightCollision'].includes(prop),
})<AverageLabelProps>`
  position: relative;
  bottom: -${({ theme }) => theme.spacing.unit(8)}px;
  margin-left: ${p => p.averageValue}%;
  margin-right: ${p => p.averageValue}%;
  ${p => p.leftCollision && leftCollisionStyle}
  ${p => p.rightCollision && rightCollisionStyle}
  ${p => !p.leftCollision && !p.rightCollision && transformStyle}
  padding: 2px ${({ theme }) => theme.spacing.unit(1.5)}px;
  white-space: nowrap;
  text-align: center;
  color: ${({ theme }) => theme.color.label};
`;

const StyledBox = styled(Box)`
  position: relative;
`;

const StyledFlexbox = styled(Flexbox).withConfig({
  shouldForwardProp: prop => !['value', 'valueColor', 'averageValue'].includes(prop),
})<LineProps>`
  position: relative;
  height: 2px;
  background-color: ${({ theme }) => theme.color.backgroundBlack};
  margin-bottom: ${({ theme }) => theme.spacing.unit(2)}px;
  &::before {
    display: block;
    content: '';
    position: absolute;
    bottom: -${({ theme }) => theme.spacing.unit(6)}px;
    margin-left: ${p => p.averageValue}%;
    width: 0px;
    height: ${({ theme }) => theme.spacing.unit(14)}px;
    border-left: 1px dashed ${({ theme }) => theme.color.label};
  }
  &::after {
    display: block;
    content: '';
    position: absolute;
    bottom: 100%;
    margin-bottom: ${({ theme }) => theme.spacing.unit(TRIANGLE_OFFSET)}px;
    margin-left: calc(${p => p.value}% - ${TRIANGLE_SIDE_BORDER_SIZE}px);
    margin-right: calc(${p => p.value}% - ${TRIANGLE_SIDE_BORDER_SIZE}px);
    width: 0;
    height: 0;
    border-left: ${TRIANGLE_SIDE_BORDER_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIDE_BORDER_SIZE}px solid transparent;
    border-top: ${({ theme }) => theme.spacing.unit(TRIANGLE_TOP_BORDER_SIZE)}px solid
      ${p => p.valueColor || p.theme.color.indicatorPillColor2};
  }
`;

const xAxisCollision: CheckCollision = (a, b) => {
  if (!isHTMLElement(a) || !isHTMLElement(b)) {
    return false;
  }
  const { x: bX, width: bWidth } = b.getBoundingClientRect();
  return a.getBoundingClientRect().x <= bX + bWidth;
};

export const LineScale: React.FC<Props> = ({
  value,
  valueLabel,
  valueColor,
  averageValue,
  averageValueLabel,
  minLabel,
  maxLabel,
}) => {
  const [leftCollision, setLeftCollision] = useState(false);
  const [leftAverageTextCollision, setLeftAverageTextCollision] = useState(false);
  const [rightCollision, setRightCollision] = useState(false);
  const [rightAverageTextCollision, setRightAverageTextCollision] = useState(false);

  const indicatorRef = useRef<HTMLSpanElement>(null);
  const averageTextRef = useRef<HTMLSpanElement>(null);
  const intersectionLeft = useRef<HTMLDivElement>(null);
  const intersectionRight = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (indicatorRef.current && intersectionLeft.current) {
      const hasLeftCollision = xAxisCollision(indicatorRef.current, intersectionLeft.current);
      setLeftCollision(hasLeftCollision);
    }

    if (indicatorRef.current && intersectionRight.current) {
      const hasRightCollision = xAxisCollision(intersectionRight.current, indicatorRef.current);
      setRightCollision(hasRightCollision);
    }

    if (averageTextRef.current && intersectionLeft.current) {
      const hasLeftCollision = xAxisCollision(averageTextRef.current, intersectionLeft.current);
      setLeftAverageTextCollision(hasLeftCollision);
    }

    if (averageTextRef.current && intersectionRight.current) {
      const hasRightCollision = xAxisCollision(intersectionRight.current, averageTextRef.current);
      setRightAverageTextCollision(hasRightCollision);
    }
  }, [indicatorRef, averageTextRef, intersectionRight, intersectionLeft]);

  return (
    <Typography type="tertiary" color={t => t.color.label}>
      <StyledBox mt={8}>
        <Flexbox container direction="column">
          <IntersectionLeft ref={intersectionLeft} />
          <IntersectionRight ref={intersectionRight} />
          <Flexbox item flex="1 1 auto">
            <StyledFlexbox
              container
              value={value}
              averageValue={averageValue}
              valueColor={valueColor}
            >
              <Indicator
                value={value}
                valueColor={valueColor}
                leftCollision={leftCollision}
                rightCollision={rightCollision}
                ref={indicatorRef}
              >
                <Typography type="tertiary" color={t => t.color.textLight}>
                  {(Boolean(valueLabel) && valueLabel) || <Number value={value} decimals={2} />}
                </Typography>
              </Indicator>
            </StyledFlexbox>
          </Flexbox>
          {(Boolean(minLabel) || Boolean(maxLabel)) && (
            <Flexbox container justifyContent="space-between">
              <Flexbox item>{minLabel}</Flexbox>
              <Flexbox item>{maxLabel}</Flexbox>
            </Flexbox>
          )}
          {(Boolean(averageValue) || Boolean(averageValueLabel)) && (
            <Flexbox item flex="1 1 auto">
              <Flexbox container>
                <AverageLabel
                  leftCollision={leftAverageTextCollision}
                  rightCollision={rightAverageTextCollision}
                  ref={averageTextRef}
                  averageValue={averageValue}
                >
                  <Typography type="tertiary" color={t => t.color.label}>
                    {averageValueLabel}
                  </Typography>
                </AverageLabel>
              </Flexbox>
            </Flexbox>
          )}
        </Flexbox>
      </StyledBox>
    </Typography>
  );
};

export default LineScale;
