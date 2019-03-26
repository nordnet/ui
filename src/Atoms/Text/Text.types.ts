import React from 'react';

type ReactBaseProps = {
  children: React.ReactNode;
};
type SomeStyledComponentsProps = {};
type AllowedTags = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type Props = ReactBaseProps &
  SomeStyledComponentsProps & {
    /**
     * HTML tag to use as container
     * @default 'div'
     */
    as?: AllowedTags;
    /**
     * Used for adding some styling to the Text
     * @default false
     */
    styled?: boolean;
  };

export type TextComponentInterface = {
  Caption: React.ComponentType<Props>;
  Hero: React.ComponentType<Props>;
  Title1: React.ComponentType<Props>;
  Title2: React.ComponentType<Props>;
  Title3: React.ComponentType<Props>;
  Primary: React.ComponentType<Props>;
  Secondary: React.ComponentType<Props>;
  Tertiary: React.ComponentType<Props>;
};
