import { css } from 'styled-components';
import { InternalProps, Props } from './FadedScroll.types';
import { getValueFromNumberOrString } from '../../common/utils';

const flexAutoHeightStyles = css`
  min-height: 0; /* Firefox */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
`;

export const scrollStyles = css<Pick<Props, 'maxHeight'>>`
  ${p =>
    p.maxHeight
      ? `max-height: ${getValueFromNumberOrString(p.maxHeight, p.theme)};`
      : flexAutoHeightStyles}
  overflow-y: auto;
`;

export const scrollDesktopStyles = css<Pick<Props, 'maxHeight'>>`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    ${scrollStyles}
  }
`;

const fadeStyles = css<InternalProps & Props>`
  content: '';
  display: block;
  width: 100%;
  height: ${p => getValueFromNumberOrString(p.fadeHeight!, p.theme)};
  position: absolute;
  left: 0;
  pointer-events: none;
  background: transparent;
  z-index: 1;
  opacity: 0;
  transition: 0.3s opacity ease-out;
`;

export const fadeTopStyles = css<InternalProps & Props>`
  position: relative;

  &::before {
    ${fadeStyles}
    top: 0;
    background: linear-gradient(0deg, #ffffff00 0%, #ffffffff 100%);
    ${p => p.intersectionTopOnScreen === false && `opacity: 1;`}
  }
`;

export const fadeTopDesktopStyles = css`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    ${fadeTopStyles}
  }
`;

export const fadeBottomStyles = css<InternalProps & Props>`
  position: relative;

  &::after {
    ${fadeStyles}
    bottom: 0;
    background: linear-gradient(0deg, #ffffffff 0%, #ffffff00 100%);
    ${p => p.intersectionBottomOnScreen === false && `opacity: 1;`}
  }
`;

export const fadeBottomDesktopStyles = css`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    ${fadeBottomStyles}
  }
`;

export const intersectionStyles = css`
  height: ${p => p.theme.spacing.unit(1)}px;
  width: ${p => p.theme.spacing.unit(1)}px;
  position: absolute;
  right: 0;
  pointer-events: none;
`;

// prettier-ignore
export const containerStyles = css<Props>`
  ${p => !p.maxHeight && `
    display: flex;
    height: 100%;
    
    ${flexAutoHeightStyles}
  `}
`;

// prettier-ignore
export const scrollerStyles = css<Props>`
  ${p => !p.maxHeight && `
    flex-grow: 1;
  `}
  
  ${p => (p.enableMobileFade ? scrollStyles : scrollDesktopStyles)}
`;
