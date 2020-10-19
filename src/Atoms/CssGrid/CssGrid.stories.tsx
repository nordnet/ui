import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import docs from './CssGrid.mdx';

import { CssGrid as Grid } from '../..';

const StyledContent = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  background-color: #eee;
  height: 100%;
`;

const Content = ({ children }: any) => <StyledContent>{children}</StyledContent>;

const ComponentThatDoesSomethingOnMount = () => {
  React.useEffect(action('mounted'), []);
  return (
    <div>
      This item is mounted and stays mounted no matter what. However, it&lsquo;d be hidden with css
    </div>
  );
};

const ComponentThatLogsRender: React.FC<any> = ({ children }) => {
  action('Rendered!')();
  return children;
};
export default {
  title: 'Atoms / CssGrid',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const simpleCssGrid = () => (
  <Grid.Container
    // prettier-ignore
    areas={[
        ['header', 'header',  'header'],
        ['menu',   'content', 'ads'],
        ['footer', 'footer',  'footer'],
      ]}
    templateColumns={['1fr', '1fr', '1fr']}
    templateRows={['1fr', '1fr', '1fr']}
  >
    <Grid.Item area="header">
      <Content>Header</Content>
    </Grid.Item>
    <Grid.Item area="content">
      <Content>Content</Content>
    </Grid.Item>
    <Grid.Item area="menu">
      <Content>Menu</Content>
    </Grid.Item>
    <Grid.Item area="ads">
      <Content>Ads</Content>
    </Grid.Item>
    <Grid.Item area="footer">
      <Content>Footer</Content>
    </Grid.Item>
  </Grid.Container>
);

simpleCssGrid.story = {
  name: 'Simple CssGrid',
};

export const cssGridWithCustomGutter = () => (
  <Grid.Container
    gutter={0}
    // prettier-ignore
    areas={[
        ['left', 'top',     'sidebar'],
        ['left', 'content', 'sidebar'],
        ['left', 'content', 'sidebar'],
      ]}
    templateColumns={['1fr', '1fr', '1fr']}
    templateRows={['1fr', '1fr', '1fr']}
  >
    <Grid.Item area="left">
      <Content>Left</Content>
    </Grid.Item>
    <Grid.Item area="top">
      <Content>Top</Content>
    </Grid.Item>
    <Grid.Item area="content">
      <Content>Content</Content>
    </Grid.Item>
    <Grid.Item area="sidebar">
      <Content>Sidebar</Content>
    </Grid.Item>
  </Grid.Container>
);

cssGridWithCustomGutter.story = {
  name: 'CssGrid with custom gutter',
};

export const cssGridWithDifferentGutterOnDifferentScreenSizes = () => (
  <Grid.Container
    gutter={{ row: 5, col: 5 }}
    templateColumns={['1fr', '1fr', '1fr']}
    // prettier-ignore
    templateRows={[
        'auto',
        'auto'
      ]}
    // prettier-ignore
    areas={[
      ['left', 'top', 'content'],
      ['left', 'top', 'content'],
      ]}
    md={{
      // prettier-ignore
      templateRows: [
          'auto',
          'auto'
        ],
      templateColumns: ['1fr'],
      areas: [
        ['left', 'top', 'content'],
        ['left', 'top', 'content'],
      ],
      gutter: { row: 0, col: 0 },
    }}
  >
    <Grid.Item area="left">
      <Content>Left</Content>
    </Grid.Item>
    <Grid.Item area="top">
      <Content>
        <ComponentThatDoesSomethingOnMount />
      </Content>
    </Grid.Item>
    <Grid.Item area="content">
      <Content>
        <ComponentThatLogsRender>Content</ComponentThatLogsRender>
      </Content>
    </Grid.Item>
    <Grid.Item area="non-existing">
      <Content>something that doesn&lsquo;t exist</Content>
    </Grid.Item>
  </Grid.Container>
);

cssGridWithDifferentGutterOnDifferentScreenSizes.story = {
  name: 'Different gutter on different screen sizes',
};

export const cssGridWithObjectAsGutterAndCustomSizedColumns = () => (
  <Grid.Container
    gutter={{ row: 6, col: 4 }}
    templateColumns={['1fr', '2fr', '1fr']}
    templateRows={['1fr', '1fr', '1fr']}
    // prettier-ignore
    areas={[
        ['left', 'top',     'messages'],
        ['left', 'top',     'order'],
        ['left', 'top',     'sidebar'],
        ['left', 'top',     'sidebar'],
        ['left', 'content', 'sidebar'],
      ]}
  >
    <Grid.Item area="left">
      <Content>Left</Content>
    </Grid.Item>
    <Grid.Item area="top">
      <Content>Top</Content>
    </Grid.Item>
    <Grid.Item area="content">
      <Content>Content</Content>
    </Grid.Item>
    <Grid.Item area="messages">
      <Content>Messages</Content>
    </Grid.Item>
    <Grid.Item area="order">
      <Content>Order</Content>
    </Grid.Item>
    <Grid.Item area="sidebar">
      <Content>Sidebar</Content>
    </Grid.Item>
  </Grid.Container>
);

cssGridWithObjectAsGutterAndCustomSizedColumns.story = {
  name: 'CssGrid with object as gutter and custom sized columns',
};

export const cssGridWithCustomTemplateColumns = () => (
  <Grid.Container
    templateColumns={[3, 6, 3]}
    templateRows={['1fr', '1fr', '1fr']}
    // prettier-ignore
    areas={[
        ['left', 'top',     'sidebar'],
        ['left', 'content', 'sidebar'],
        ['left', 'content', 'sidebar'],
      ]}
  >
    <Grid.Item area="left">
      <Content>Left</Content>
    </Grid.Item>
    <Grid.Item area="top">
      <Content>Top</Content>
    </Grid.Item>
    <Grid.Item area="content">
      <Content>Content</Content>
    </Grid.Item>
    <Grid.Item area="sidebar">
      <Content>Sidebar</Content>
    </Grid.Item>
  </Grid.Container>
);

cssGridWithCustomTemplateColumns.story = {
  name: 'CssGrid with custom templateColumns',
};

export const cssGridWithDifferentLayoutsForDifferentScreenSizes = () => (
  <Grid.Container
    templateColumns={[6, 6]}
    templateRows={['1fr', '1fr', '1fr']}
    // prettier-ignore
    areas={[
      ['top',     'top'],
      ['left',    'sidebar'],
      ['content', 'sidebar'],
    ]}
    sm={{
      templateColumns: [3, 6, 3],
      templateRows: ['auto', '1fr', '1fr'],
      // prettier-ignore
      areas: [
        ['left', 'top',     'sidebar'],
        ['left', 'content', 'sidebar'],
        ['left', 'content', 'sidebar'],
      ],
    }}
  >
    <Grid.Item area="left">
      <Content>Left</Content>
    </Grid.Item>
    <Grid.Item area="top">
      <Content>Top</Content>
    </Grid.Item>
    <Grid.Item area="content">
      <Content>Content</Content>
    </Grid.Item>
    <Grid.Item area="sidebar">
      <Content>Sidebar</Content>
    </Grid.Item>
  </Grid.Container>
);

cssGridWithDifferentLayoutsForDifferentScreenSizes.story = {
  name: 'CssGrid with different layouts for different screen sizes',
};

export const withMinMax = () => (
  <Grid.Container
    templateColumns={['1fr', 'minmax(30ch, 2fr)', '1fr']}
    // prettier-ignore
    areas={[
        ['left', 'top',     'sidebar'],
        ['left', 'content', 'sidebar'],
      ]}
  >
    <Grid.Item area="left">
      <Content>Left</Content>
    </Grid.Item>
    <Grid.Item area="top">
      <Content>Top</Content>
    </Grid.Item>
    <Grid.Item area="content">
      <Content>Content</Content>
    </Grid.Item>
    <Grid.Item area="sidebar">
      <Content>Sidebar</Content>
    </Grid.Item>
  </Grid.Container>
);

withMinMax.story = {
  name: 'CssGrid with minmax()',
};

export const shownOnMdHiddenOnSmallScreens = () => (
  <Grid.Container
    templateColumns={['1fr', '1fr', '1fr']}
    // prettier-ignore
    templateRows={[
        'auto',
        'auto'
      ]}
    // prettier-ignore
    areas={[
        ['left', 'content', 'content'],
        ['left', 'content', 'content'],
      ]}
    md={{
      // prettier-ignore
      templateRows: [
          'auto',
          'auto'
        ],
      templateColumns: ['1fr'],
      areas: [['left'], ['top'], ['content']],
    }}
  >
    <Grid.Item area="left">
      <Content>Left</Content>
    </Grid.Item>
    <Grid.Item area="top">
      <Content>
        <ComponentThatDoesSomethingOnMount />
      </Content>
    </Grid.Item>
    <Grid.Item area="content">
      <Content>
        <ComponentThatLogsRender>Content</ComponentThatLogsRender>
      </Content>
    </Grid.Item>
    <Grid.Item area="non-existing">
      <Content>something that doesn&lsquo;t exist</Content>
    </Grid.Item>
  </Grid.Container>
);

shownOnMdHiddenOnSmallScreens.story = {
  name: 'Shown on md+, hidden on small screens',
};

export const shownOnSmallScreenSizesHiddenOnMd = () => (
  <Grid.Container
    templateColumns={['1fr', '1fr', '1fr']}
    // prettier-ignore
    templateRows={[
        'auto',
        'auto'
      ]}
    // prettier-ignore
    areas={[
        ['left', 'top', 'top'],
        ['left', 'content', 'content'],
      ]}
    md={{
      // prettier-ignore
      templateRows: [
          'auto',
          'auto'
        ],
      templateColumns: ['1fr'],
      // prettier-ignore
      areas: [
          ['left'], 
          ['content']
        ],
    }}
  >
    <Grid.Item area="left">
      <Content>Left</Content>
    </Grid.Item>
    <Grid.Item area="top">
      <Content>
        <ComponentThatDoesSomethingOnMount />
      </Content>
    </Grid.Item>
    <Grid.Item area="content">
      <Content>
        <ComponentThatLogsRender>Content</ComponentThatLogsRender>
      </Content>
    </Grid.Item>
    <Grid.Item area="non-existing">
      <Content>something that doesn&lsquo;t exist</Content>
    </Grid.Item>
  </Grid.Container>
);

shownOnSmallScreenSizesHiddenOnMd.story = {
  name: 'Shown on small screen sizes, hidden on md+',
};

export const conditionallyHiddenGoodWayHidden = () => {
  const isHidden = true;
  return (
    <Grid.Container
      templateColumns={['1fr', '1fr', '1fr']}
      // prettier-ignore
      templateRows={isHidden ? [
        'auto',
        'auto'
      ]: ['auto']}
      areas={
        // prettier-ignore
        isHidden ? 
          [
            ['left', 'top', 'top'],
            ['left', 'content', 'content']
          ] : 
          [['left', 'content', 'content']]
      }
    >
      <Grid.Item area="left">
        <Content>Left</Content>
      </Grid.Item>
      <Grid.Item area="top">
        <Content>
          <ComponentThatDoesSomethingOnMount />
        </Content>
      </Grid.Item>
      <Grid.Item area="content">
        <Content>
          <ComponentThatLogsRender>Content</ComponentThatLogsRender>
        </Content>
      </Grid.Item>
    </Grid.Container>
  );
};

conditionallyHiddenGoodWayHidden.story = {
  name: 'Conditionally hidden: good way [hidden]',
};

export const conditionallyHiddenGoodWayShown = () => {
  const isHidden = false;
  return (
    <Grid.Container
      templateColumns={['1fr', '1fr', '1fr']}
      templateRows={isHidden ? ['auto', 'auto'] : ['auto']}
      areas={
        // prettier-ignore
        isHidden ? 
          [
            ['left', 'top', 'top'],
            ['left', 'content', 'content']
          ] : 
          [['left', 'content', 'content']]
      }
    >
      <Grid.Item area="left">
        <Content>Left</Content>
      </Grid.Item>
      <Grid.Item area="top">
        <Content>
          <ComponentThatDoesSomethingOnMount />
        </Content>
      </Grid.Item>
      <Grid.Item area="content">
        <Content>
          <ComponentThatLogsRender>Content</ComponentThatLogsRender>
        </Content>
      </Grid.Item>
    </Grid.Container>
  );
};

conditionallyHiddenGoodWayShown.story = {
  name: 'Conditionally hidden: good way [shown]',
};

export const conditionallyHiddenWrongWayHidden = () => {
  const isHidden = true;
  return (
    <Grid.Container
      templateColumns={['1fr', '1fr', '1fr']}
      templateRows={['auto', 'auto']}
      areas={
        // prettier-ignore
        [
            ['left', 'top', 'top'],
            ['left', 'content', 'content']
          ]
      }
    >
      <Grid.Item area="left">
        <Content>Left</Content>
      </Grid.Item>
      {!isHidden && (
        <Grid.Item area="top">
          <Content>
            <ComponentThatDoesSomethingOnMount />
          </Content>
        </Grid.Item>
      )}
      <Grid.Item area="content">
        <Content>
          <ComponentThatLogsRender>Content</ComponentThatLogsRender>
        </Content>
      </Grid.Item>
    </Grid.Container>
  );
};

conditionallyHiddenWrongWayHidden.story = {
  name: 'Conditionally hidden: WRONG way [hidden]',
};

export const conditionallyHiddenWrongWayShown = () => {
  const isHidden = false;
  return (
    <Grid.Container
      templateColumns={['1fr', '1fr', '1fr']}
      templateRows={['auto', 'auto']}
      areas={
        // prettier-ignore
        [
            ['left', 'top', 'top'],
            ['left', 'content', 'content']
          ]
      }
    >
      <Grid.Item area="left">
        <Content>Left</Content>
      </Grid.Item>
      {!isHidden && (
        <Grid.Item area="top">
          <Content>
            <ComponentThatDoesSomethingOnMount />
          </Content>
        </Grid.Item>
      )}
      <Grid.Item area="content">
        <Content>
          <ComponentThatLogsRender>Content</ComponentThatLogsRender>
        </Content>
      </Grid.Item>
    </Grid.Container>
  );
};

conditionallyHiddenWrongWayShown.story = {
  name: 'Conditionally hidden: WRONG way [shown]',
};

const BgContent = styled.div`
  background-color: ${(p) => p.theme.color.background};
`;

export const itemsWithDifferentPlacements = () => {
  return (
    <Grid.Container
      templateColumns={['100px', '100px', '100px', '100px']}
      templateRows={['100px', '100px', '100px']}
      areas={[
        ['alignStart', 'alignCenter', 'alignStretch', 'alignEnd'],
        ['justifyStart', 'justifyCenter', 'justifyStretch', 'justifyEnd'],
        ['placeStart', 'placeCenter', 'placeStretch', 'placeEnd'],
      ]}
    >
      <Grid.Item area="alignStart" align="start">
        <BgContent>left</BgContent>
      </Grid.Item>
      <Grid.Item area="alignCenter" align="center">
        <BgContent>center</BgContent>
      </Grid.Item>
      <Grid.Item area="alignStretch" align="stretch">
        <BgContent>stretch</BgContent>
      </Grid.Item>
      <Grid.Item area="alignEnd" align="end">
        <BgContent>end</BgContent>
      </Grid.Item>
      <Grid.Item area="justifyStart" justify="start">
        <BgContent>left</BgContent>
      </Grid.Item>
      <Grid.Item area="justifyCenter" justify="center">
        <BgContent>center</BgContent>
      </Grid.Item>
      <Grid.Item area="justifyStretch" justify="stretch">
        <BgContent>stretch</BgContent>
      </Grid.Item>
      <Grid.Item area="justifyEnd" justify="end">
        <BgContent>end</BgContent>
      </Grid.Item>
      <Grid.Item area="placeStart" place="start">
        <BgContent>left</BgContent>
      </Grid.Item>
      <Grid.Item area="placeCenter" place="center">
        <BgContent>center</BgContent>
      </Grid.Item>
      <Grid.Item area="placeStretch" place="stretch">
        <BgContent>stretch</BgContent>
      </Grid.Item>
      <Grid.Item area="placeEnd" place="end">
        <BgContent>end</BgContent>
      </Grid.Item>
    </Grid.Container>
  );
};

conditionallyHiddenWrongWayShown.story = {
  name: 'Items with different placements',
};
