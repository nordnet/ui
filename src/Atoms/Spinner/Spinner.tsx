import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Props, PropsWithTheme } from './Spinner.types';

function generateRgb(degree: number, limit: number) {
  const multiplier = 255 / limit;
  const value = Math.round(degree * multiplier);

  return `rgb(${value}, ${value}, ${value})`;
}

function conicalGradient(size: number, limit: number, clipPathId: string) {
  const sectionSize = size / 2;
  const gradientSectionsA = [];
  const gradientSectionsB = [];
  const rotationMultiplier = 360 / limit;

  for (let i = 0; i < limit; i += 1) {
    const rotation = i * rotationMultiplier;
    const item = (
      <rect
        key={rotation}
        width={sectionSize}
        height={sectionSize}
        fill={generateRgb(i, limit)}
        x={sectionSize}
        transform={`rotate(${rotation} ${sectionSize} ${sectionSize})`}
      />
    );

    if (i > limit / 2) {
      gradientSectionsB.push(item);
    } else {
      gradientSectionsA.push(item);
    }
  }

  return (
    <g className="spinner__gradient">
      <g>{gradientSectionsA.map(section => section)}</g>
      <g clipPath={`url(#${clipPathId})`}>{gradientSectionsB.map(section => section)}</g>
    </g>
  );
}

function renderCircleAsHtml(radius: number, color: string, maskId: string) {
  return {
    __html: `<circle class="spinner__circle" cx="${radius}" cy="${radius}" r="${radius}" fill="${color}" mask="url(#${maskId})"></circle>`,
  };
}

const StyledSpinner = styled.svg<Props>`
  display: 'block';
  width: '100%';
  height: '100%';
`;

const StyledSpan = styled.span<Props>`
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: spinner 1s linear infinite;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  &, & *, & *::after, & *::after: {
    box-sizing: border-box;
  }
  display: inline-block;
`;

const RawSpinner: React.FC<PropsWithTheme> = props => {
  const size = props.theme.spacing.unit(props.size || 4);
  const clipPathId = `spinner__clip-path--${size}`;
  const radius = size / 2;
  const stroke = radius / 4;
  const maskId = `spinner__mask--${size}-${stroke}-${20}`;
  const usedColor =
    typeof props.color === 'function'
      ? props.color(props.theme)
      : props.color || props.theme.color.cta;

  return (
    <StyledSpan size={size}>
      <StyledSpinner viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <clipPath id={clipPathId}>
            <rect x="0" y="0" width={radius} height={size} />
          </clipPath>
          <mask id={maskId} maskUnits="objectBoundingBox">
            <rect width={size} height={size} fill={props.theme.color.spinnerWhite} />
            {conicalGradient(size, 20, clipPathId)}
            <circle
              cx={radius}
              cy={radius}
              r={radius - stroke}
              fill={props.theme.color.spinnerBlack}
            />
            <circle
              cx={radius}
              cy={stroke / 2}
              r={stroke / 2}
              fill={props.theme.color.spinnerWhite}
            />
          </mask>
        </defs>
        <g dangerouslySetInnerHTML={renderCircleAsHtml(radius, usedColor, maskId)} />
      </StyledSpinner>
    </StyledSpan>
  );
};
export const Spinner: React.FC<Props> = withTheme(RawSpinner);
