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
    
    {/* Geometric Mark: D + T */}
    <g transform="translate(0, 4)">
        <path d="M0 2H16C24.8366 2 32 9.16344 32 18V18C32 26.8366 24.8366 34 16 34H0V2Z" fill="url(#logo-gradient)"/>
        <path d="M12 11H22V25" stroke="hsl(var(--background))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
         <path d="M17 11V25" stroke="hsl(var(--background))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
      x="102"
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
