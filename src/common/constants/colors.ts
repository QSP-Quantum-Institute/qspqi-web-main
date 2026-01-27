/**
 * Color constants based on QSP Quantum Institute logo palette
 * These constants can be used throughout the application for consistent theming
 */

export const COLORS = {
  // Dark Blue/Black - Primary dark tones
  dark: {
    DEFAULT: "#0a0e1a",
    50: "#1a1f2e",
    100: "#2a2f3e",
    200: "#3a3f4e",
    300: "#4a4f5e",
  },

  // Gold/Bronze - Accent and highlight colors
  gold: {
    DEFAULT: "#d4af37",
    50: "#f4e8c1",
    100: "#e8d5a3",
    200: "#d4af37",
    300: "#b8941f",
    400: "#9a7a15",
  },

  // Red - Action elements and separators
  red: {
    DEFAULT: "#c41e3a",
    50: "#f5c2c9",
    100: "#e88a96",
    200: "#c41e3a",
    300: "#a01a2f",
    400: "#7c1424",
  },

  // Green - Secondary elements
  green: {
    DEFAULT: "#2d5016",
    50: "#a8d18a",
    100: "#7fb85a",
    200: "#2d5016",
    300: "#1f3610",
    400: "#15200a",
  },

  // Light Blue - Informational elements
  lightBlue: {
    DEFAULT: "#4a9eff",
    50: "#e6f2ff",
    100: "#b3d9ff",
    200: "#4a9eff",
    300: "#1a7fff",
    400: "#0066cc",
  },
} as const;

/**
 * Type-safe color keys
 */
export type ColorKey = keyof typeof COLORS;
export type ColorShade = "DEFAULT" | "50" | "100" | "200" | "300" | "400";
