import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';

import { Box, ShowMoreButton } from '../..';

import { Props, ContainerProps } from './ShowMore.types';
import useOverflow from './useOverflow';

const StyledDiv = styled.div<ContainerProps>`
  /* stylelint-disable value-no-vendor-prefix */
  display: -webkit-box;
  /* stylelint-disable property-no-vendor-prefix */
  -webkit-line-clamp: ${(p) => (p.showMoreClicked ? 'auto' : p.linesToClamp)};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ShowMore: React.FC<Props> = ({
  children,
  linesToClamp = 2,
  onShowMore = () => {},
  showMoreText,
}) => {
  const containerRef = useRef(null);
  const [showMoreClicked, setShowMoreClicked] = useState(false);

  const onShowMoreClick = useCallback(
    (e) => {
      onShowMore(e);
      setShowMoreClicked(true);
    },
    [onShowMore],
  );

  const isOverflowing = useOverflow(containerRef, children);
  const showMoreButton = isOverflowing && !showMoreClicked;

  return (
    <>
      <StyledDiv
        ref={containerRef}
        showMoreButton={showMoreButton}
        showMoreClicked={showMoreClicked}
        linesToClamp={linesToClamp}
      >
        {children}
      </StyledDiv>
      {showMoreButton && (
        <Box pt={1}>
          <ShowMoreButton onClick={onShowMoreClick} align="left" showMoreText={showMoreText} />
        </Box>
      )}
    </>
  );
};
