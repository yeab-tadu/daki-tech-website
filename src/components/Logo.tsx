import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="130"
    height="32"
    viewBox="0 0 130 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 0L0 9.6V32H12.8V16L25.6 32V9.6L16 0Z"
      fill="url(#logo-gradient)"
    />
    <text
      x="34"
      y="24"
      fontFamily="Poppins, sans-serif"
      fontSize="24"
      fontWeight="bold"
      className="fill-foreground font-headline"
    >
      Daki
    </text>
    <text
      x="88"
      y="24"
      fontFamily="Poppins, sans-serif"
      fontSize="24"
      fontWeight="bold"
      className="fill-accent font-headline"
    >
      Techs
    </text>
    <defs>
      <linearGradient
        id="logo-gradient"
        x1="12.8"
        y1="0"
        x2="12.8"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="hsl(var(--primary))" />
        <stop offset="1" stopColor="hsl(var(--accent))" />
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;
