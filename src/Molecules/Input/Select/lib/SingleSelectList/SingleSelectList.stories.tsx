/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { Option } from './SingleSelectList';
import { Display } from '../../../../../common/Display';
import { DropdownBubble, FadedScroll } from '../../../../..';

export default {
  title: 'Molecules / Input / Select / SingleSelectList',
};

export const itemDefault = {
  render: () => <Option label="First" />,
  name: 'Item default',
};

export const itemSelected = {
  render: () => <Option label="First" selected />,
  name: 'Item selected',
};

export const itemDisabled = {
  render: () => <Option label="First" disabled />,
  name: 'Item disabled',
};

const DropdownBubbleWithPadding = styled(DropdownBubble)`
  padding-top: 12px;
  padding-bottom: 12px;
  width: 300px;
`;

// @ts-ignore
const Wrapper = (props) => (
  <DropdownBubbleWithPadding
    position={props.position}
    placement={props.placement}
    maxHeight="200px"
  >
    <FadedScroll enableMobileFade>{props.children}</FadedScroll>
  </DropdownBubbleWithPadding>
);

export const listWithDifferentArrowPositions = {
  render: () => (
    <Display
      items={[
        {
          component: (
            <Wrapper>
              <Option label="Default?" />
              <Option label="First" selected />
              <Option label="SecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecond" />
              {new Array(10).fill(null)?.map((_, i) => (
                <Option key={i} label="Disabled" disabled />
              ))}
            </Wrapper>
          ),
          title: 'Placement bottom, arrow default (right)',
        },

        {
          component: (
            <Wrapper position="left">
              <Option label="Default?" />
              <Option label="First" selected />
              {new Array(10).fill(null)?.map((_, i) => (
                <Option key={i} label="Disabled" disabled />
              ))}
            </Wrapper>
          ),
          title: 'Placement bottom, arrow left',
        },
        {
          component: (
            <Wrapper position="center" placement="top">
              <Option label="Default?" />
              <Option label="First" selected />
              {new Array(10).fill(null)?.map((_, i) => (
                <Option key={i} label="Disabled" disabled />
              ))}
            </Wrapper>
          ),
          title: 'Placement top, arrow center',
        },
        {
          component: (
            <Wrapper position="center">
              <Option label="Default?" />
              <Option label="First" selected />
              <Option label="Second" />
              {new Array(10).fill(null)?.map((_, i) => (
                <Option key={i} label="Disabled" disabled />
              ))}
            </Wrapper>
          ),
          title: 'Placement bottom, arrow center',
        },
        {
          component: (
            <Wrapper placement="top">
              <Option label="Default?" />
              <Option label="First" selected />
              <Option label="SecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecond" />
              {new Array(10).fill(null)?.map((_, i) => (
                <Option key={i} label="Disabled" disabled />
              ))}
            </Wrapper>
          ),
          title: 'Placement top, arrow default (right)',
        },
        {
          component: (
            <Wrapper position="left" placement="top">
              <Option label="Default?" />
              <Option label="First" selected />
              {new Array(10).fill(null)?.map((_, i) => (
                <Option key={i} label="Disabled" disabled />
              ))}
            </Wrapper>
          ),
          title: 'Placement top, arrow left',
        },
        {
          component: (
            <Wrapper position="center" placement="top">
              <Option label="Default?" />
              <Option label="First" selected />
              <Option label="Second" />
              {new Array(10).fill(null)?.map((_, i) => (
                <Option key={i} label="Disabled" disabled />
              ))}
            </Wrapper>
          ),
          title: 'Placement top, arrow center',
        },
      ]}
    />
  ),

  name: 'List with different arrow positions',
};
