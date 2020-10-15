import React from 'react';
import styled from 'styled-components';
import { Media, Flexbox, List } from '../../../../..';
import { ExpandItemsComponent } from './ExpandItems.types';
import { Props as FlexBoxProps } from '../../../../../Atoms/Flexbox/Flexbox.types';
import { Props as ListProps } from '../../../../../Atoms/List/List.types';
import { ExpandItem } from './ExpandItem';

type FlexListProps = FlexBoxProps & ListProps;

const FlexList = styled(List).withConfig({
  shouldForwardProp: (prop) => !['wrap', 'container', 'gutter'].includes(prop),
})<FlexListProps>``;

export const ExpandItems: ExpandItemsComponent = ({ items }) => {
  return (
    <>
      <Media query={(t) => t.media.lessThan(t.breakpoints.md)}>
        <List>
          {items
            .filter((item) => !item.hidden)
            .map((item, index) => (
              <ExpandItem key={`expandItem_mobile_${index + 1}`} item={item} />
            ))}
        </List>
      </Media>
      <Media query={(t) => t.media.greaterThan(t.breakpoints.md)}>
        <Flexbox container wrap="wrap" gutter={10} as={FlexList}>
          {items
            .filter((item) => !item.hidden)
            .map((item, index) => (
              <ExpandItem key={`expandItem_desktop_${index + 1}`} item={item} />
            ))}
        </Flexbox>
      </Media>
    </>
  );
};
