import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';

import { Box, Button, Card, CardWithTitle, Flexbox, Pagination, Typography } from '../..';
import { Display } from '../../common/Display';
import createIconPicker, { IconPickerType, allSuitableIcons } from './Button.Gallery.utils';

type ButtonComponentKeyType = 'Icon' | 'Pill' | undefined;
type ButtonComponentValueType = typeof Button.Icon | typeof Button.Pill;
type IconPlacementType = 'left' | 'right' | undefined;
type ButtonSizeType = 's' | 'm' | 'l' | undefined;
type VariantType = 'primary' | 'secondary' | 'neutral' | 'negative' | undefined;
type DisplayItemComponent = {
  title: string;
  component: any;
};

const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const NEUTRAL = 'neutral';
const NEGATIVE = 'negative';
const TERTIARY = 'tertiary';
const LARGE = 'large';
const MEDIUM = 'medium';
const SMALL = 'small';
const LEFT = 'left';
const RIGHT = 'right';

const toTitle = (str: string | undefined = '-') => str.charAt(0).toUpperCase() + str.slice(1);

const getButtonSettings = (buttonComponent: ButtonComponentValueType) => {
  switch (buttonComponent) {
    default:
      return {
        buttonVariants: [PRIMARY, SECONDARY, NEUTRAL, NEGATIVE],
        buttonSizes: [LARGE, MEDIUM, SMALL],
        iconPlacements: [undefined, LEFT, RIGHT],
      };
    case Button.Icon:
      return {
        buttonVariants: [PRIMARY],
        buttonSizes: [MEDIUM, SMALL],
        iconPlacements: [undefined],
      };
    case Button.Pill:
      return {
        buttonVariants: [PRIMARY, SECONDARY, NEGATIVE, TERTIARY],
        buttonSizes: [MEDIUM, SMALL],
        iconPlacements: [undefined, LEFT, RIGHT],
      };
  }
};

const ButtonDisplays: React.FC<{
  buttonComponentName: ButtonComponentKeyType;
  iconPicker: IconPickerType;
  buttonDisabled: boolean;
  buttonLoading: boolean;
}> = ({ buttonComponentName, iconPicker, buttonDisabled, buttonLoading }) => {
  const ButtonComponent = buttonComponentName ? Button[buttonComponentName] : Button;
  const { buttonVariants, buttonSizes, iconPlacements } = getButtonSettings(ButtonComponent);

  return (
    <>
      {buttonVariants.map((variant) => (
        <Flexbox item key={`${buttonComponentName}${variant}`}>
          <Display
            title={toTitle(variant)}
            horizontal
            items={
              buttonSizes.map((buttonSize) => ({
                key: `${variant}${buttonSize}`,
                title: toTitle(buttonSize),
                component: iconPicker(buttonSize).map((icon) => (
                  <Box key={`${variant}${buttonSize}${icon.iconName}`} pb={5}>
                    <Flexbox container gap={5}>
                      {iconPlacements.map((iconPlacement) => (
                        <Flexbox
                          item
                          key={`${variant}${buttonSize}${icon.iconName}${iconPlacement}`}
                        >
                          <ButtonComponent
                            {...([LEFT, RIGHT].includes(iconPlacement as string)
                              ? {
                                  icon: icon.iconComponent,
                                  iconPlacement: iconPlacement as IconPlacementType,
                                }
                              : {})}
                            size={buttonSize[0] as ButtonSizeType}
                            variant={variant as VariantType}
                            onClick={action(`click${buttonSize}`)}
                            disabled={buttonDisabled}
                            loading={buttonLoading}
                          >
                            {ButtonComponent === Button.Icon ? icon.iconComponent : 'Button'}
                          </ButtonComponent>
                        </Flexbox>
                      ))}
                    </Flexbox>
                  </Box>
                )),
              })) as DisplayItemComponent[]
            }
          />
        </Flexbox>
      ))}
    </>
  );
};

const ButtonsWithIconsTemplate: Story<{
  iconOutline: boolean;
  iconsPerPage: number;
  preferredIconSizes: Record<string, number>;
  buttonComponentNames: ButtonComponentKeyType[];
  buttonDisabled: boolean;
  buttonLoading: boolean;
}> = ({
  iconOutline,
  iconsPerPage,
  preferredIconSizes,
  buttonComponentNames,
  buttonDisabled,
  buttonLoading,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const sliceStart = (currentPage - 1) * iconsPerPage;
  const sliceEnd = currentPage * iconsPerPage;
  const iconsSlice = allSuitableIcons.slice(sliceStart, sliceEnd);

  return (
    <>
      <Card>
        <Box p={5}>
          <Flexbox container gap={4} alignItems="center">
            <Flexbox item>
              <Typography>Icon pages:</Typography>
            </Flexbox>
            <Pagination
              variant="regular"
              currentPage={currentPage}
              totalItems={allSuitableIcons.length}
              itemsPerPage={iconsPerPage}
              onPageChange={setCurrentPage}
            />
          </Flexbox>
        </Box>
      </Card>

      {buttonComponentNames.map((buttonComponentName: ButtonComponentKeyType) => (
        <CardWithTitle
          key={`${buttonComponentName}`}
          title={buttonComponentName ? `Button.${buttonComponentName}` : 'Button'}
        >
          <Flexbox container wrap="wrap">
            <ButtonDisplays
              buttonComponentName={buttonComponentName}
              iconPicker={createIconPicker(iconsSlice, preferredIconSizes, iconOutline)}
              buttonDisabled={buttonDisabled}
              buttonLoading={buttonLoading}
            />
          </Flexbox>
        </CardWithTitle>
      ))}
    </>
  );
};

export const ButtonsWithIcons = ButtonsWithIconsTemplate.bind({});
ButtonsWithIcons.args = {
  iconOutline: false,
  iconsPerPage: 5,
  preferredIconSizes: {
    small: 16,
    medium: 16,
    large: 16,
  },
  buttonComponentNames: [undefined, 'Pill', 'Icon'] as ButtonComponentKeyType[],
  buttonDisabled: false,
  buttonLoading: false,
};

ButtonsWithIcons.storyName = 'Gallery view';

export default {
  title: 'Molecules / Button',
  component: ButtonsWithIcons,
  argTypes: {
    buttonComponentNames: {
      options: [undefined, 'Pill', 'Icon'],
      control: { type: 'check' },
    },
  },
  parameters: {
    controls: { sort: 'alpha' },
    docs: {
      description: {
        component: 'Button gallery',
      },
    },
    viewMode: 'story',
  },
} as Meta;
