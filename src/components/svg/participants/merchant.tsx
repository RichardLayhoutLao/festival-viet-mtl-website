import * as React from 'react';

interface SvgComponentProps {
  width?: number;
  height?: number;
  navbar?: boolean;
  color?: string;
}

const SvgComponent: React.FC<SvgComponentProps> = ({
  width = 40,
  height = 40,
  navbar = false,
  color = '#13450E'
}) => {

  if (navbar) {
    width = 20;
    height = 20;
    color = 'black';
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <path
        fill={color}
        d='M4 6V4h16v2zm0 14v-6H3v-2l1-5h16l1 5v2h-1v6h-2v-6h-4v6zm2-2h6v-4H6z'
      />
    </svg>
  );
};
export default SvgComponent;
