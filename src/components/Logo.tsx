import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="180"
    height="40"
    viewBox="0 0 180 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient
        id="logo-gradient"
        x1="0"
        y1="20"
        x2="40"
        y2="20"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="hsl(var(--primary))" />
        <stop offset="1" stopColor="hsl(var(--accent))" />
      </linearGradient>
    </defs>
    
    {/* Abstract Mark combining D, T, and </> */}
    <g transform="translate(0, 4) scale(0.9)">
        <path d="M14 2L2 8V24L14 30" stroke="url(#logo-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 2L38 8V24L26 30" stroke="url(#logo-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4L18 30" stroke="hsl(var(--primary))" strokeOpacity="0.8" strokeWidth="3" strokeLinecap="round" />
    </g>

    <text
      x="44"
      y="28"
      fontFamily="Poppins, sans-serif"
      fontSize="24"
      fontWeight="bold"
      className="fill-foreground font-headline"
    >
      Daki
    </text>
    <text
      x="104"
      y="28"
      fontFamily="Poppins, sans-serif"
      fontSize="24"
      fontWeight="bold"
      className="fill-accent font-headline"
    >
      Techs
    </text>
  </svg>
);

export default Logo;
