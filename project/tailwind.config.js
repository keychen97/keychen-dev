/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:        '#1F2328',
        muted:      '#57606A',
        rule:       '#D8DEE4',
        softrule:   '#EAEEF2',
        chip:       '#F6F8FA',
        accent:     '#0066CC',
        accentDeep: '#0052A3',
        accentSoft: '#E6F0FB',
        parchment:  '#FBFBFA',
      },
      fontFamily: {
        sans:  ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono:  ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        serif: ['"IBM Plex Serif"', 'Georgia', 'serif'],
      },
      maxWidth: {
        wiki: '1180px',
      },
    },
  },
  plugins: [],
};
