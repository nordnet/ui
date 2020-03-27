import React from 'react';
import styled from 'styled-components';
import { Box, Flexbox, Typography, Icon } from '../..';
import PageWrapper from '../PageWrapper';
import { InfoBarProps, InfoBarIconProps, FnHelper } from './InfoBar.types';

/*
Categories:

* success: green bg and circle checkmark icon
* error: red bg and circle cross icon
* warning: yellow bg and triangle info icon
* general (default): white bg and circle info icon
*/

const bgFn = ({ variant, theme }: FnHelper) => {
  switch (variant) {
    case 'success':
      return theme.color.positive;
    case 'error':
      return theme.color.negative;
    case 'warning':
      return theme.color.warning;
    case 'general':
      return theme.color.module;
    default:
      return theme.color.module;
  }
};

const textFn = ({ variant, theme }: FnHelper) => {
  switch (variant) {
    case 'error':
      return theme.color.textLight;
    default:
      return theme.color.text;
  }
};

const textLinkFn = ({ variant, theme }: FnHelper) => {
  switch (variant) {
    case 'success':
      return theme.color.text;
    case 'error':
      return theme.color.textLight;
    case 'warning':
      return theme.color.text;
    case 'general':
      return theme.color.cta;
    default:
      return theme.color.cta;
  }
};

const InfoBarPageWrapper = styled(PageWrapper)`
  background: ${bgFn};
  color: ${textFn};
  & span {
    color: inherit;
  }
  & a {
    font-weight: bold;
    color: ${textLinkFn};
  }
  button {
    display: block;
    padding: 0;
    background: none;
    border-width: 0;
    cursor: pointer;
  }
`;

const InfoBarIcon: React.FC<InfoBarIconProps> = ({ variant }) => {
  switch (variant) {
    case 'success':
      return (
        <Icon.CheckMarkCircle
          fill={theme => textLinkFn({ variant, theme })}
          stroke={theme => bgFn({ variant, theme })}
        />
      );
    case 'error':
      return (
        <Icon.CrossCircle
          fill={theme => textLinkFn({ variant, theme })}
          stroke={theme => bgFn({ variant, theme })}
        />
      );
    case 'warning':
      return (
        <Icon.WarningTriangle
          fill={theme => textLinkFn({ variant, theme })}
          stroke={theme => bgFn({ variant, theme })}
        />
      );
    case 'general':
      return (
        <Icon.InfoCircle
          fill={theme => textLinkFn({ variant, theme })}
          stroke={theme => bgFn({ variant, theme })}
        />
      );
    default:
      return (
        <Icon.InfoCircle
          fill={theme => textLinkFn({ variant, theme })}
          stroke={theme => bgFn({ variant, theme })}
        />
      );
  }
};

export const InfoBar: React.FC<InfoBarProps> = ({ variant, onClose, className, children }) => {
  return (
    <InfoBarPageWrapper className={className} variant={variant}>
      <Box py={1} px={3} sm={{ px: 0 }}>
        <Flexbox container alignItems="center">
          <Flexbox item>
            <Box pr={2}>
              <InfoBarIcon variant={variant} />
            </Box>
          </Flexbox>
          <Flexbox item grow={2}>
            <Typography type="secondary">{children}</Typography>
          </Flexbox>
          {typeof onClose === 'function' ? (
            <Flexbox item>
              <Box pl={2}>
                <button type="button" onClick={onClose}>
                  <Icon.Cross size={3} fill={theme => textFn({ variant, theme })} />
                </button>
              </Box>
            </Flexbox>
          ) : (
            <></>
          )}
        </Flexbox>
      </Box>
    </InfoBarPageWrapper>
  );
};
