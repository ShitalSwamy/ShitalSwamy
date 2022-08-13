// THEMES

import { SS_Black, SS_Primary, SS_White } from "../colors/Colors";

// Color Imports

// Assigning types to each theme components listed.
declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    background: string;
    border_primary: string;
  }
}

// PRIMARY THEMES

// Light Theme
export const Light_Theme = {
  text: SS_Black,
  background: SS_White,
  border_primary: SS_Primary,
};

// Dark Theme
export const Dark_Theme = {
  text: SS_White,
  background: SS_Black,
  border_primary: SS_Primary,
};

// SECONDARY THEMES
