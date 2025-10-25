import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="120"
    height="32"
    viewBox="0 0 120 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.1333 0L0 9.6V32H10.1333V18.1333L20.2667 27.7333V9.6L10.1333 0ZM10.1333 14.9333V9.6L14.2 12.2667L10.1333 14.9333Z"
      className="fill-primary"
    />
    <text
      x="28"
      y="24"
      fontFamily="Poppins, sans-serif"
      fontSize="24"
      fontWeight="bold"
      className="fill-primary font-headline"
    >
      Daki
    </text>
    <text
      x="80"
      y="24"
      fontFamily="Poppins, sans-serif"
      fontSize="24"
      fontWeight="300"
      className="fill-accent font-headline"
    >
      Techs
    </text>
  </svg>
);

export default Logo;
