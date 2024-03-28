import * as React from 'react';

interface InstagramProps {
  black?: boolean;
  isBlue?: boolean;
  color?: string;
  footer?: boolean;
  width?: number;
  height?: number;
}

const Instagram: React.FC<InstagramProps> = ({
  width = 28,
  height = 28,
  footer = false,
  color = '#BA4920',
}) => {
  
  if (footer) {
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
      d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0-8 5-8-5zm0 12H4V8l8 5 8-5z"
    />
  </svg>
  );
};

export default Instagram;
