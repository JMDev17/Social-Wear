export const theme = {
  colors: {
    primary: '#111111',
    secondary: '#1A1A1A',
    accent: '#B89972', // Gold
    accentHover: '#A6865E',
    white: '#FFFFFF',
    background: '#FAF9F6', // Off-white/Cream
    lightGray: '#F2F2F2',
    gray: '#7A7A7A',
    darkGray: '#333333',
    success: '#1B4D3E',
    error: '#800000',
  },
  fonts: {
    main: "var(--font-outfit), -apple-system, sans-serif",
    heading: "var(--font-cormorant), Georgia, serif",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.5rem',
    '4xl': '3.5rem',
    '5xl': '4.5rem',
    '6xl': '6rem',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '6rem',
    '2xl': '8rem',
    '3xl': '12rem',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
    md: '0 8px 16px rgba(0, 0, 0, 0.08)',
    lg: '0 16px 32px rgba(0, 0, 0, 0.1)',
    xl: '0 24px 48px rgba(0, 0, 0, 0.12)',
  },
  transitions: {
    fast: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '700ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  borderRadius: {
    none: '0',
    sm: '1px',
    md: '2px',
    lg: '4px',
    full: '9999px',
  },
};

export type Theme = typeof theme;
