import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
    <svg 
        width="180" 
        height="44" 
        viewBox="0 0 180 44" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M18.8 0L0 10V30L18.8 40L37.6 30V10L18.8 0ZM18.8 34.6L6.2 27.6V12.4L18.8 19.4V34.6Z" fill="url(#logo-gradient)" />
        <defs>
            <linearGradient id="logo-gradient" x1="0" y1="0" x2="37.6" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="hsl(var(--primary))"/>
                <stop offset="1" stopColor="hsl(var(--accent))"/>
            </linearGradient>
        </defs>
        <text x="48" y="30" fontFamily="Poppins, sans-serif" fontSize="24" fontWeight="bold" fill="hsl(var(--foreground))">
            DakiTechs
        </text>
    </svg>
);

export default Logo;
