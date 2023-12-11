/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { Option } from './MultiSelectList';
import { Display } from '../../../../../common/Display';
import { DropdownBubble, FadedScroll } from '../../../../..';

export default {
  title: 'Molecules / Input / Select / MultiSelectList',
};

export const ItemDefault = {
  render: () => <Option label="First" />,
  name: 'Item default',
};

export const ItemSelected = {
  render: () => <Option label="First" selected />,
  name: 'Item selected',
};

export const ItemCountry = {
  render: () => <Option label="First" selected country="SE" showFlag />,
  name: 'Item with country',
};

export const ItemCountryAndCount = {
  render: () => <Option label="First" selected country="SE" count={123} showFlag />,
  name: 'Item with country and count',
};

export const ItemDisabled = {
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

export const ListWithDifferentArrowPositions = {
  render: () => (
    <Display
      items={[
        {
          component: (
            <Wrapper position="left">
              <Option label="Default?" />
              <Option label="First" selected />
              {new Array(10)
                .fill(null)
                ?.map((_, i) => <Option key={i} label="Disabled" disabled />)}
            </Wrapper>
          ),
          title: 'Placement Bottom, Arrow Default (Left)',
        },
        {
          component: (
            <Wrapper>
              <Option label="Default?" />
              <Option label="First" selected />
              <Option label="SecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecond" />
              {new Array(10)
                .fill(null)
                ?.map((_, i) => <Option key={i} label="Disabled" disabled />)}
            </Wrapper>
          ),
          title: 'Placement Bottom, Arrow Right',
        },
        {
          component: (
            <Wrapper position="center">
              <Option label="Default?" />
              <Option label="First" selected />
              <Option label="Second" />
              {new Array(10)
                .fill(null)
                ?.map((_, i) => <Option key={i} label="Disabled" disabled />)}
            </Wrapper>
          ),
          title: 'Placement Bottom, Arrow Center',
        },
        {
          component: (
            <Wrapper placement="top">
              <Option label="Default?" />
              <Option label="First" selected />
              <Option label="SecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecond" />
              {new Array(10)
                .fill(null)
                ?.map((_, i) => <Option key={i} label="Disabled" disabled />)}
            </Wrapper>
          ),
          title: 'Placement Top, Arrow Default (right)',
        },
        {
          component: (
            <Wrapper position="left" placement="top">
              <Option label="Default?" />
              <Option label="First" selected />
              {new Array(10)
                .fill(null)
                ?.map((_, i) => <Option key={i} label="Disabled" disabled />)}
            </Wrapper>
          ),
          title: 'Placement Top, Arrow Left',
        },
        {
          component: (
            <Wrapper position="center" placement="top">
              <Option label="Default?" />
              <Option label="First" selected />
              <Option label="Second" />
              {new Array(10)
                .fill(null)
                ?.map((_, i) => <Option key={i} label="Disabled" disabled />)}
            </Wrapper>
          ),
          title: 'Placement Top, Arrow Center',
        },
      ]}
    />
  ),
};
