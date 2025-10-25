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
        x2="32"
        y2="20"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="hsl(var(--primary))" />
        <stop offset="1" stopColor="hsl(var(--accent))" />
      </linearGradient>
    </defs>
    
    {/* Abstract Mark based on user image */}
    <g transform="translate(0, 4) scale(1.1)">
      <path 
        d="M16 2L0 10V18L16 26L32 18V10L16 2Z"
        fill="url(#logo-gradient)"
        stroke="url(#logo-gradient)"
        strokeWidth="1"
      />
      <path d="M8 14L2 17V19L8 22L14 19V17L8 14Z" fill="hsl(var(--background))" opacity="0.5"/>
      <path d="M24 14L18 17V19L24 22L30 19V17L24 14Z" fill="hsl(var(--background))" opacity="0.5"/>
       <path d="M16 4L2 11L16 18L30 11L16 4Z" fill="hsl(var(--background))" />
       <path d="M8.5 13.5L16 9L23.5 13.5" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
