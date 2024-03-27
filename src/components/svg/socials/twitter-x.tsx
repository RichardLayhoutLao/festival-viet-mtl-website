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
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path
        fill='#BA4920'
        d='M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z'
      />
    </svg>
  );
};
export default SvgComponent;
