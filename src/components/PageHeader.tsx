import Image from 'next/image';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

interface PageHeaderProps {
  title: string;
  description: string;
  image?: ImagePlaceholder;
}

const PageHeader = ({ title, description, image }: PageHeaderProps) => {
  return (
    <section className="relative w-full pt-20 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
            {title}
          </h1>
          <p className="text-lg text-foreground/80 md:text-xl">
            {description}
          </p>
        </div>
      </div>
      {image && (
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-cover opacity-5"
          data-ai-hint={image.imageHint}
        />
      )}
    </section>
  );
};

export default PageHeader;
