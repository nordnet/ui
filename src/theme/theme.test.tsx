import { getChosenTheme } from './theme';

describe('getChosenTheme', () => {
  test('defaults to light theme when no config is provided', () => {
    const result = getChosenTheme({});
    expect(result).toBe('light');
  });

  test('returns light theme when theme is light', () => {
    const result = getChosenTheme({ theme: 'light' });
    expect(result).toBe('light');
  });

  test('returns dark theme when theme is dark', () => {
    const result = getChosenTheme({ theme: 'dark' });
    expect(result).toBe('dark');
  });

  test('returns a11y theme when theme is a11y', () => {
    const result = getChosenTheme({ theme: 'a11y' });
    expect(result).toBe('a11y');
  });

  describe('[deprecated] tokensTheme prop', () => {
    test('returns light theme when tokensTheme is light', () => {
      const result = getChosenTheme({ tokensTheme: 'light' });
      expect(result).toBe('light');
    });

    test('returns dark theme when tokensTheme is dark', () => {
      const result = getChosenTheme({ tokensTheme: 'dark' });
      expect(result).toBe('dark');
    });

    test('returns a11y theme when tokensTheme is a11y', () => {
      const result = getChosenTheme({ tokensTheme: 'a11y' });
      expect(result).toBe('a11y');
    });
  });

  describe('[deprecated] darkColors and a11yColors props', () => {
    test('returns dark theme when darkColors is true', () => {
      const result = getChosenTheme({ darkColors: true });
      expect(result).toBe('dark');
    });

    test('returns a11y theme when a11yColors is true', () => {
      const result = getChosenTheme({ a11yColors: true });
      expect(result).toBe('a11y');
    });

    test('returns dark theme when darkColors and a11yColors is true', () => {
      const result = getChosenTheme({ darkColors: true, a11yColors: true });
      expect(result).toBe('dark');
    });

    test('returns light theme when darkColors and a11yColors is false', () => {
      const result = getChosenTheme({ darkColors: false, a11yColors: false });
      expect(result).toBe('light');
    });
  });

  describe('conflicting props', () => {
    test('gives precedence to theme over tokensTheme a11yColors and darkColors props', () => {
      const result = getChosenTheme({
        theme: 'dark',
        tokensTheme: 'a11y',
        a11yColors: true,
        darkColors: false,
      });
      expect(result).toBe('dark');
    });

    test('missing theme gives precedence to a11yColors and darkColors props', () => {
      const result = getChosenTheme({ tokensTheme: 'light', a11yColors: false, darkColors: true });
      expect(result).toBe('dark');
    });
  });
});
