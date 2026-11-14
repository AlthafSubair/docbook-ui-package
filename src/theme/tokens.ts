/**
 * DocBook Design System Tokens
 */

export const themeColors = {
  background: "#ffffff",
  foreground: "#000000",
  primary: "#0000ff",
  primaryDark: "#000099",
  secondary: "#3C3A3A",
  tertiary: "#777777",
  borderDefault: "#e5e5e5",
  buttonGradient: "linear-gradient(100deg, #0000ff 0%, #000099 100%)",
} as const;

export const brand = {
  name: "DocBook",
  namePrefix: "Doc",
  nameSuffix: "Book",
} as const;

export type ThemeColors = typeof themeColors;
export type Brand = typeof brand;
