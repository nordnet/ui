import React from 'react';
import styled from 'styled-components';
import { Box, Flexbox, Icon, Link, Spinner, Typography } from '../..';
import { Props } from './ShowRenderLimit.types';

const StyledIconChevronUp = styled(Icon.ChevronUp)`
  display: inline;
`;

const StyledIconChevronDown = styled(Icon.ChevronDown)`
  display: inline;
`;

const StyledTotalFlexbox = styled(Flexbox)`
  background: ${({ theme }) => theme.color.backgroundInput};
  padding-top: ${({ theme }) => theme.spacing.unit(2)}px;
`;

export const ShowRenderLimit: React.FC<Props> = ({
  id,
  initialRenderLimit,
  showingAll,
  onClick,
  renderingAll,
  total,
}) => {
  const ShowMoreOrLessIcon = renderingAll ? StyledIconChevronUp : StyledIconChevronDown;

  return (
    <StyledTotalFlexbox container alignItems="center" direction="column">
      <Flexbox container direction="column">
        <Flexbox item>
          <Typography type="secondary" weight="bold">
            Showing {renderingAll ? total : initialRenderLimit} out of {total} results
          </Typography>
        </Flexbox>
        <Flexbox item alignSelf="center">
          <Box mt={1}>
            <Typography type="secondary">
              {showingAll ? (
                <Spinner size={4} delay={false} id={`${id}-show-all-spinner`} />
              ) : (
                <Link onClick={onClick}>
                  {renderingAll ? 'Show less ' : 'Show all'}{' '}
                  <ShowMoreOrLessIcon size={2} fill={() => 'currentColor'} />
                </Link>
              )}
            </Typography>
          </Box>
        </Flexbox>
      </Flexbox>
    </StyledTotalFlexbox>
  );
};
