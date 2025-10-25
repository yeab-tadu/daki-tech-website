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
    
    <g transform="translate(0, 2) scale(1.1)">
        <path 
            d="M19.4,3.2c-0.6-0.3-1.3-0.3-1.9,0L2,10.1v11.7c0,1,0.8,1.8,1.8,1.8h2.6c0-3.4,2.8-6.2,6.2-6.2s6.2,2.8,6.2,6.2h9.9c0.2-0.6,0.3-1.2,0.3-1.8V10.1L19.4,3.2z M17.5,18.4l-3.3-3.3l-3.3,3.3l-1.4-1.4l3.3-3.3l-3.3-3.3l1.4-1.4l3.3,3.3l3.3-3.3l1.4,1.4l-3.3,3.3l3.3,3.3L17.5,18.4z"
            fill="url(#logo-gradient)"
        />
        <path 
            d="M33.7,18.7v4.8c0,0.3-0.1,0.6-0.3,0.8l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0s-0.4-1,0-1.4l2.7-2.7V18.7c0-0.6-0.4-1-1-1s-1,0.4-1,1v5.4c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4v-4.8c1.3,0.2,2.4-0.7,2.6-2c0.2-1.3-0.7-2.4-2-2.6c-1.3-0.2-2.4,0.7-2.6,2C33.7,18.1,33.7,18.4,33.7,18.7z"
            fill="hsl(var(--accent))"
        />
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
