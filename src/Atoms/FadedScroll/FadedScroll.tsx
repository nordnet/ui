import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { useOnScreen } from '../../common/Hooks';
import { Component, InternalProps, Props } from './FadedScroll.types';
import { getValueFromNumberOrString } from '../../common/utils';

const scroll = css<Pick<Props, 'maxHeight'>>`
  max-height: ${p =>
    p.maxHeight ? ` ${getValueFromNumberOrString(p.maxHeight, p.theme)}` : '100%'};
  overflow-y: auto;
`;

const desktopScroll = css<Pick<Props, 'maxHeight'>>`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    ${scroll}
  }
`;

const fade = css<Pick<InternalProps, 'intersectionOnScreen'> & Props>`
  position: relative;
  height: 100%;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: ${p => getValueFromNumberOrString(p.fadeHeight!, p.theme)};
    position: absolute;
    left: 0;
    bottom: 0;
    pointer-events: none;
    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    opacity: 1;
    transition: 0.3s opacity ease-out;

    ${p => p.intersectionOnScreen && `opacity: 0;`}
  }
`;

const desktopFade = css`
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    ${fade}
  }
`;

const Container = styled.div`
  height: 100%;
  min-height: 0; /* Firefox */
  flex-grow: 1;
  box-sizing: border-box;
  padding-bottom: ${p => p.theme.spacing.unit(5)}px;
`;

const Fade = styled.div<Pick<InternalProps, 'intersectionOnScreen'> & Props>`
  height: 100%;

  ${p => (p.enableMobileFade ? fade : desktopFade)}
`;

const Scroll = styled.div<Props>`
  ${p => (p.enableMobileFade ? scroll : desktopScroll)}
`;

const Content = styled.div`
  position: relative;
`;

const Intersection = styled.div`
  height: ${p => p.theme.spacing.unit(1)}px;
  width: ${p => p.theme.spacing.unit(1)}px;
  position: absolute;
  bottom: 0;
  right: 0;
  pointer-events: none;
`;

const components = {
  Fade,
  Scroll,
  Content,
};

export const FadedScroll: Component & {
  /**
   * This will allow you to customize
   * inner parts with styled-components
   * @example
   * const StyledFadedScroll = styled(FadedScroll)`
   *  ${FadedScroll.components.Content} {
   *    color: pink;
   * }
   * `
   * */
  components: typeof components;
} = ({ children, className, enableMobileFade = false, fadeHeight = 13, maxHeight }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const intersectionOnScreen = useOnScreen(intersectionRef);

  return (
    <Container className={className}>
      <Fade fadeHeight={fadeHeight} intersectionOnScreen={intersectionOnScreen}>
        <Scroll enableMobileFade={enableMobileFade} maxHeight={maxHeight}>
          <Content ref={contentRef}>
            {children}
            <Intersection ref={intersectionRef} />
          </Content>
        </Scroll>
      </Fade>
    </Container>
  );
};

FadedScroll.components = components;
FadedScroll.displayName = 'FadedScroll';
