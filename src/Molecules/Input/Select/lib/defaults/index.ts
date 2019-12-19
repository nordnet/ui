import React from 'react';
import R from 'ramda';
import { ListItem } from './ListItem';
import { Search } from './Search';
import { Action } from './Action';
import { SelectedValue } from './SelectedValue';

import { ListItem as ListItemMultiple } from './ListItemMultiple';
import { SelectedValue as SelectedValueMultiple } from './SelectedValueMultiple';
import { List } from './List';

export const defaultComponents = {
  ListItem,
  List,
  Search,
  SelectedValue,
  Action,
};

export const defaultComponentsMultiselect = {
  ListItem: ListItemMultiple,
  List,
  Search,
  SelectedValue: SelectedValueMultiple,
  Action,
};

export const useComponentsWithDefaults = (
  components: any = {},
  options: { multiselect: boolean } = { multiselect: false },
) => {
  return React.useMemo(
    () =>
      // @ts-ignore
      R.pipe(
        // prettier-ignore
        R.mergeRight(options.multiselect ? defaultComponentsMultiselect : defaultComponents),
      )(components),
    [components, options.multiselect],
  );
};
