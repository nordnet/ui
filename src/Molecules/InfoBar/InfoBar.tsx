import React from 'react';
import styled from 'styled-components';
import { Box, Flexbox, Typography, Icon, VisuallyHidden } from '../..';
import PageWrapper from '../PageWrapper';
import { FnHelper, InfoBarIconProps, InfoBarProps } from './InfoBar.types';

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
      return theme.color.infoBarBackgroundSuccess;
    case 'error':
      return theme.color.infoBarBackgroundError;
    case 'warning':
      return theme.color.infoBarBackgroundWarning;
    case 'general':
      return theme.color.infoBarBackgroundInfo;
    default:
      return theme.color.infoBarBackgroundInfo;
  }
};

const textLinkFn = ({ variant, theme }: FnHelper) => {
  switch (variant) {
    case 'success':
      return theme.color.text;
    case 'error':
      return theme.color.text;
    case 'warning':
      return theme.color.text;
    case 'general':
      return theme.color.link;
    default:
      return theme.color.link;
  }
};

const InfoBarPageWrapper = styled(PageWrapper)`
  background: ${bgFn};
  color: ${({ theme }) => theme.color.text};

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
      return <Icon.CheckCircleFill16 color={(theme) => theme.color.infoBarSuccess} />;
    case 'error':
      return <Icon.ErrorFill16 color={(theme) => theme.color.infoBarError} />;
    case 'warning':
      return <Icon.WarningFill16 color={(theme) => theme.color.infoBarWarning} />;
    case 'general':
      return <Icon.InformationFill16 color={(theme) => theme.color.infoBarInfo} />;
    default:
      return <Icon.InformationFill16 color={(theme) => theme.color.infoBarInfo} />;
  }
};

export const InfoBar: React.FC<InfoBarProps> = ({
  variant,
  onClose,
  className,
  children,
  closeButtonText = 'Close',
}) => {
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
                  <Icon.Cross16 color={(theme) => theme.color.text} />
                  <VisuallyHidden>{closeButtonText}</VisuallyHidden>
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
