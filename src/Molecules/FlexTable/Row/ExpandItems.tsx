import React from 'react';
import styled from 'styled-components';
import { Media, Flexbox, Typography, LabeledValue, List } from '../../..';
import { ExpandItemsComponent, ExpandItemComponent } from './Row.types';
import { isElement } from '../../../common/utils';
import { Props as FlexBoxProps } from '../../../Atoms/Flexbox/Flexbox.types';
import { Props as ListProps } from '../../../Atoms/List/List.types';

const StyledFlexboxItem = styled(Flexbox)<FlexBoxProps>`
  padding-bottom: ${p => p.theme.spacing.unit(5)}px;
`;

type FlexListProps = FlexBoxProps & ListProps;

const FlexList = styled(List).withConfig({
  shouldForwardProp: prop => !['wrap', 'container', 'gutter'].includes(prop),
})<FlexListProps>``;

export const MobileItem: ExpandItemComponent = ({ item }) => (
  <Flexbox container justifyContent="space-between" as="li">
    <Flexbox item>
      {isElement(item.label) ? (
        item.label
      ) : (
        <Typography type="tertiary" color={t => t.color.label}>
          {item.label}
        </Typography>
      )}
    </Flexbox>
    <Flexbox item>
      {isElement(item.value) ? item.value : <Typography type="tertiary">{item.value}</Typography>}
    </Flexbox>
  </Flexbox>
);

export const DesktopItem: ExpandItemComponent = ({ item }) => (
  <StyledFlexboxItem item as="li">
    <LabeledValue
      label={
        isElement(item.label) ? (
          item.label
        ) : (
          <Typography type="secondary" color={t => t.color.label}>
            {item.label}
          </Typography>
        )
      }
    >
      {isElement(item.value) ? item.value : <Typography>{item.value}</Typography>}
    </LabeledValue>
  </StyledFlexboxItem>
);

export const ExpandItems: ExpandItemsComponent = ({ items }) => {
  return (
    <>
      <Media query={t => t.media.lessThan(t.breakpoints.md)}>
        <List>
          {items.map(item => (
            <MobileItem item={item} />
          ))}
        </List>
      </Media>
      <Media query={t => t.media.greaterThan(t.breakpoints.md)}>
        <Flexbox container wrap="wrap" gutter={10} as={FlexList}>
          {items.map(item => (
            <DesktopItem item={item} />
          ))}
        </Flexbox>
      </Media>
    </>
  );
};
