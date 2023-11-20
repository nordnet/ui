import React, { isValidElement, ReactElement } from 'react';
import { Theme } from 'theme/theme.types';
import { Flexbox, Icon, VisuallyHidden } from '../..';
import { isNumber } from '../../common/utils';
import { Props, RatingComponent, IconSizeProp } from './Rating.types';

const restrictRange = (rating: Props['rating'], outOf: Props['outOf'] = 5) => {
  if (!isNumber(rating) || rating < 0) return 0;
  if (rating > outOf) return outOf;
  return rating;
};

const getIcon = (
  size: IconSizeProp,
  active: boolean,
  activeIcon?: ReactElement,
  inactiveIcon?: ReactElement,
) => {
  if (isValidElement(activeIcon) && isValidElement(inactiveIcon)) {
    return active ? activeIcon : inactiveIcon;
  }

  const fillColor = (t: Theme) => (active ? t.color.starRating : t.color.starRatingOff);
  switch (size) {
    case 's':
    case 3:
      return <Icon.StarFill12 color={fillColor} />;
    case 'm':
    case 4:
      return <Icon.StarFill16 color={fillColor} />;
    case 'l':
    case 6:
      return <Icon.StarFill24 color={fillColor} />;
    case 'xl':
    case 8:
      return <Icon.StarFill32 color={fillColor} />;
    default:
      return <Icon.StarFill16 color={fillColor} />;
  }
};

export const Rating: RatingComponent = ({
  rating = 0,
  size = 'm',
  outOf = 5,
  height = 'auto',
  activeIcon,
  inactiveIcon,
}) => {
  const finalRating = restrictRange(rating, outOf);
  const screenReaderText = rating === 1 ? `${rating} star` : `${rating} stars`;

  return (
    <Flexbox container gap="2px" height={height}>
      <VisuallyHidden>{screenReaderText}</VisuallyHidden>
      {Array.from({ length: outOf }).map((_, i) => (
        <Flexbox item key={i} container alignItems="center">
          {getIcon(size, i < finalRating, activeIcon, inactiveIcon)}
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default Rating;
