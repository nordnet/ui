import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
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

/*
 sv
 nb
 da
 fi
 en
*/

const labels = {
  showLess: {
    en: 'Show less',
    sv: 'Visa mindre',
  },
  showMore: {
    en: 'Show more',
    sv: 'Visa mer',
  },
  total: {
    en: 'Showing {limit} out of {total} results',
  },
};

const getLabel = (key: string, locale: string) => {
  const label = labels[key];
  return label[locale] ? label[locale] : label.en;
};

export const ShowRenderLimit: React.FC<Props> = ({
  id,
  initialRenderLimit,
  showingAll,
  onClick,
  renderingAll,
  total,
}) => {
  const ShowMoreOrLessIcon = renderingAll ? StyledIconChevronUp : StyledIconChevronDown;
  const { locale } = useIntl();

  return (
    <StyledTotalFlexbox container alignItems="center" direction="column">
      <Flexbox container direction="column">
        <Flexbox item>
          <Typography type="secondary" weight="semibold">
            {getLabel('total', locale)
              .replace('{total}', total)
              .replace('{limit}', renderingAll ? total : initialRenderLimit)}
          </Typography>
        </Flexbox>
        <Flexbox item alignSelf="center">
          <Box mt={1}>
            <Typography type="secondary" weight="semibold">
              {showingAll ? (
                <Spinner size={4} delay={false} id={`${id}-show-all-spinner`} />
              ) : (
                <Link onClick={onClick}>
                  {renderingAll ? getLabel('showLess', locale) : getLabel('showMore', locale)}{' '}
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
