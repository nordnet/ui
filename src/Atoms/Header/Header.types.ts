import { ColorFn } from '../../common/Types';

import { PropsWithBreakPointSettings } from '../../types/PropsWithBreakPointSettings.types';
import { Hyphens, OverflowWrap } from '../../types/shared.types';

// export { Weight };

export type Weight = 'extrabold' | 'semibold' | 'bold' | 'regular' | 'thin';
export type Type = 'primary' | 'secondary' | 'tertiary' | 'h1' | 'h2' | 'h3' | 'hero2';

// const FontToken = {
//   font: {
//     fontFamily: [
//       'Nordnet Sans Mono',
//       '-apple-system',
//       'BlinkMacSystemFont',
//       'Segoe UI',
//       'Roboto',
//       'sans-serif',
//     ],
//     header: {}
//     type: 'color',
//     value: '#1c1c1cff',
//     blendMode: 'normal',
//     extensions: {
//       'org.lukasoppermann.figmaDesignTokens': {
//         styleId: 'S:b5017daa298129ffa56fb0288819233e3996fc00,',
//         exportKey: 'color',
//       },
//     },
//   },
// };



type UncustomizableSettings = {
  fontSize: string;
  lineHeight: string;
};

type CustomizableSettings = {
  weight?: Weight;
  overflowWrap?: OverflowWrap;
  hyphens?: Hyphens;
  ellipsis?: boolean;
};

export type Settings = Required<UncustomizableSettings & CustomizableSettings>;

export type BreakpointProps = {
  type: Type;
} & CustomizableSettings;

export type Props = PropsWithBreakPointSettings<
  React.PropsWithChildren<{
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
    titleRichText?: Record<string, any>;
    color?: ColorFn;
    className?: string;
  }>,
  BreakpointProps
>;

export type StyledSpanProps = Omit<Props, 'children' | 'titleRichText' | 'as'> & {
  forwardedAs: Props['as'];
};
