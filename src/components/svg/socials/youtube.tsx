import * as React from 'react';

interface SvgComponentProps {
  width?: number;
  height?: number;
  footer?: boolean;
  individual?: boolean;
  color?: string;
}

const SvgComponent: React.FC<SvgComponentProps> = ({
  width = 28,
  height = 28,
  footer = false,
  individual = false,
  color = '#BA4920',
}) => {
  if (footer) {
    width = 45;
    height = 45;
    color = '#BA4920';
  }

  if (individual) {
    width = 45;
    height = 45;
    color = '#BA4920';
  }
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
        fill={color}
      d="m10 15 5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73"
    />
  </svg>
  );
};
export default SvgComponent;
