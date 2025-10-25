'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Testimonial } from '@/lib/types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial) => {
          const image = PlaceHolderImages.find((p) => p.id === testimonial.imageId);
          return (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <Card className="h-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="relative h-20 w-20 mb-4">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                    <blockquote className="text-foreground/80">
                      "{testimonial.testimonial}"
                    </blockquote>
                    <div className="mt-4">
                      <p className="font-headline font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
