import { ColorFn } from 'common/Types';
import React from 'react';
import { Theme } from 'theme/theme.types';
import { Flexbox, Icon, VisuallyHidden } from '../..';
import { isNumber, isFunction } from '../../common/utils';
import { Props, RatingComponent, IconSizeProp } from './Rating.types';

const restrictRange = (rating: Props['rating'], outOf: Props['outOf'] = 5) => {
  if (!isNumber(rating) || rating < 0) return 0;
  if (rating > outOf) return outOf;
  return rating;
};

export const getIcon = (
  size: IconSizeProp,
  active: boolean,
  outOfThree: boolean,
  colorOn?: ColorFn,
  colorOff?: ColorFn,
) => {
  const noFill = outOfThree && !active;
  const colorActive = outOfThree ? 'starRatingBlue' : 'starRating';
  const colorInactive = outOfThree ? 'starRatingBlueOff' : 'starRatingOff';

  const noFillColor = (t: Theme) => t.color.starRatingBlueOff;

  const getActiveColor = isFunction(colorOn) ? colorOn : (t: Theme) => t.color[colorActive];
  const getInactiveColor = isFunction(colorOff) ? colorOff : (t: Theme) => t.color[colorInactive];
  const fillColor = active ? getActiveColor : getInactiveColor;

  switch (size) {
    case 's':
    case 3:
      if (noFill) return <Icon.Star12 color={isFunction(colorOff) ? colorOff : noFillColor} />;
      return <Icon.StarFill12 color={fillColor} />;
    case 'm':
    case 4:
      if (noFill) return <Icon.Star16 color={isFunction(colorOff) ? colorOff : noFillColor} />;
      return <Icon.StarFill16 color={fillColor} />;
    case 'l':
    case 6:
      if (noFill) return <Icon.Star24 color={isFunction(colorOff) ? colorOff : noFillColor} />;
      return <Icon.StarFill24 color={fillColor} />;
    case 'xl':
    case 8:
      if (noFill) return <Icon.Star32 color={isFunction(colorOff) ? colorOff : noFillColor} />;
      return <Icon.StarFill32 color={fillColor} />;
    default:
      if (noFill) return <Icon.Star16 color={isFunction(colorOff) ? colorOff : noFillColor} />;
      return <Icon.StarFill16 color={fillColor} />;
  }
};

export const Rating: RatingComponent = ({
  rating = 0,
  size = 'm',
  outOf = 5,
  height = 'auto',
  colorOn,
  colorOff,
}) => {
  const finalRating = restrictRange(rating, outOf);
  const screenReaderText = rating === 1 ? `${rating} star` : `${rating} stars`;

  return (
    <Flexbox container gap="2px" height={height}>
      <VisuallyHidden>{screenReaderText}</VisuallyHidden>
      {[...Array(outOf)]?.map((star, i) => (
        <Flexbox item key={star} container alignItems="center">
          {getIcon(size, i < finalRating, outOf === 3, colorOn, colorOff)}
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default Rating;
