import * as R from 'ramda';
import { FlexPropsType } from '../shared.types';

const EMPTY_OBJECT = {};
const DEFAULT_COLUMN_FLEX_PROPS: Partial<FlexPropsType> = {
  container: true,
  flex: '1',
  item: true,
  wrap: 'nowrap',
};

const pickFlexProps = ({
  align,
  alignContent,
  alignItems,
  alignSelf,
  basis,
  container,
  direction,
  flex,
  grow,
  gutter,
  height,
  item,
  justifyContent,
  lg,
  md,
  order,
  shrink,
  size,
  sm,
  wrap,
  hidden,
  xl,
}: Partial<FlexPropsType>): Partial<FlexPropsType> => {
  const sharedProps = R.filter((val) => val !== undefined, {
    align,
    alignContent,
    alignItems,
    alignSelf,
    basis,
    container,
    direction,
    flex,
    grow,
    gutter,
    height,
    item,
    justifyContent,
    lg,
    md,
    order,
    shrink,
    size,
    sm,
    wrap,
    hidden,
    xl,
  });
  return sharedProps;
};

const getColumnFlexProps = (props: Partial<FlexPropsType>) => {
  const columnFlexProps = pickFlexProps(props) || EMPTY_OBJECT;
  const flexProps = { ...DEFAULT_COLUMN_FLEX_PROPS, ...columnFlexProps };
  return flexProps;
};

type GetFlexProps = (
  props: { columnId: string } & Partial<FlexPropsType>,
) => ReturnType<typeof getColumnFlexProps>;

const getColumnFlexPropsFunc = () => {
  // Utilizing a JavaScript Closure here to ensure that getColumnFlexProps only has to be invoked once for every column
  // Subsequent calls with same columnId will just return the previously calculated value
  const propsByColumns = {};
  return (({ columnId, ...props }) => {
    // Flex props are only calculated first time the function is called with a specific columnId
    propsByColumns[columnId] = propsByColumns[columnId] ?? getColumnFlexProps(props);
    return propsByColumns[columnId];
  }) as GetFlexProps;
};

export default getColumnFlexPropsFunc;
