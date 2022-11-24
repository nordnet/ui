import React from 'react';
import { Theme } from 'theme/theme.types';
import { Flexbox, Icon, VisuallyHidden } from '../..';

import { isNumber } from '../../common/utils';
import { Props, RatingComponent, IconSizeProp } from './Rating.types';

const restrictRange = (rating: Props['rating'], outOf: Props['outOf'] = 5) => {
  if (!isNumber(rating) || rating < 0) return 0;
  if (rating > outOf) return outOf;
  return rating;
};

export const getStarSize = (size: IconSizeProp) => {
  switch (size) {
    case 's':
    case 3:
      return 'StarFill12';
    case 'm':
    case 4:
      return 'StarFill16';
    case 'l':
    case 6:
      return 'StarFill24';
    case 'xl':
    case 8:
      return 'StarFill32';
    default:
      return 'StarFill16';
  }
};

export const Rating: RatingComponent = ({ rating = 0, size = 'm', outOf = 5, height = 'auto' }) => {
  const finalRating = restrictRange(rating, outOf);
  const screenReaderText = rating === 1 ? `${rating} star` : `${rating} stars`;
  const StarIcon = Icon[getStarSize(size)];
  const colorOff = outOf === 3 ? 'starRatingBlueOff' : 'starRatingOff';
  const colorOn = outOf === 3 ? 'starRatingBlue' : 'starRating';

  return (
    <Flexbox container gap="2px" height={height}>
      <VisuallyHidden>{screenReaderText}</VisuallyHidden>
      {[...Array(outOf)]?.map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Flexbox item key={`${size}${index}`} container alignItems="center">
          <StarIcon
            color={(t: Theme) => (index >= finalRating ? t.color[colorOff] : t.color[colorOn])}
          />
        </Flexbox>
      ))}
    </Flexbox>
  );
};

export default Rating;
