import type { SVGProps } from 'react';
import Image from 'next/image';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <Image 
    src="https://picsum.photos/seed/dakitechs-logo/180/40" 
    alt="DakiTechs Logo" 
    width={180} 
    height={40} 
    {...props} 
    className="w-auto h-auto"
  />
);

export default Logo;
