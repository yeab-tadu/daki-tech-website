import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="150"
    height="32"
    viewBox="0 0 150 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
        d="M2 2L16 16L2 30"
        stroke="url(#logo-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
    />
     <path
        d="M14 2L28 16L14 30"
        stroke="url(#logo-gradient-dimmed)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
    />
    <text
      x="40"
      y="24"
      fontFamily="Poppins, sans-serif"
      fontSize="24"
      fontWeight="bold"
      className="fill-foreground font-headline"
    >
      Daki
    </text>
    <text
      x="98"
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
        x1="0"
        y1="0"
        x2="32"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="hsl(var(--primary))" />
        <stop offset="1" stopColor="hsl(var(--accent))" />
      </linearGradient>
       <linearGradient
        id="logo-gradient-dimmed"
        x1="0"
        y1="0"
        x2="32"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="hsl(var(--primary))" stopOpacity="0.5" />
        <stop offset="1" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;
