import {
  GetPropsForScreenSizes,
  PropsForScreenSizes,
  ScreenSize,
  ScreenSizePropsAndSize,
} from '../RenderForSizes/RenderForSizes.types';

const getPropsForScreenSizes: GetPropsForScreenSizes = ({ xs, sm, md, lg, xl }) =>
  [
    { size: 'xs' as ScreenSize, ...xs },
    { size: 'sm' as ScreenSize, ...sm },
    { size: 'md' as ScreenSize, ...md },
    { size: 'lg' as ScreenSize, ...lg },
    { size: 'xl' as ScreenSize, ...xl },
  ]
    .filter((media) => Object.keys(media).length > 1)
    .map((_, index, arr) => {
      const sizesUpToNow = arr.slice(0, index + 1);
      const screenSizeProps = sizesUpToNow.reduce<ScreenSizePropsAndSize>(
        (acc, values) => ({
          ...acc,
          ...values,
        }),
        {} as ScreenSizePropsAndSize,
      );
      return screenSizeProps;
    });

type GetScreenSizeProps = (
  props: { columnId?: string } & PropsForScreenSizes,
) => ReturnType<typeof getPropsForScreenSizes>;

const getScreenSizePropsFunc = () => {
  const screenSizePropsByColumns = {};

  return (({ columnId, ...props }) => {
    const key = columnId ?? 'row';
    screenSizePropsByColumns[key] = screenSizePropsByColumns[key] ?? getPropsForScreenSizes(props);
    return screenSizePropsByColumns[key];
  }) as GetScreenSizeProps;
};

export default getScreenSizePropsFunc;
