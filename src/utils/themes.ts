import { pink } from ".";
import {colors} from 'baseui/tokens';

// Custom colors that replace BaseWeb default colors.
// BaseWeb types https://github.com/uber/baseweb/blob/master/src/theme.ts

export const primitives = {
  primaryA: colors.white,
  primaryB: pink[500],
};

export const overrides = {
  colors: {
    backgroundPrimary: primitives.primaryB,
  },
};
