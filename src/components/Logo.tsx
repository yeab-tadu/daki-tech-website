import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="160"
    height="40"
    viewBox="0 0 160 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
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
    </defs>
    
    {/* Icon representing D, T, </> and learning */}
    <g transform="translate(0, 4)">
      {/* Book/learning element */}
      <path 
        d="M2 10C2 5.58172 5.58172 2 10 2H22C26.4183 2 30 5.58172 30 10V28H2V10Z" 
        fill="url(#logo-gradient)"
        fillOpacity="0.1"
      />
      {/* D and </> combination */}
      <path 
        d="M12 8L4 16L12 24" 
        stroke="url(#logo-gradient)"
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* T element */}
      <path 
        d="M20 8L28 16L20 24"
        stroke="url(#logo-gradient)" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
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
