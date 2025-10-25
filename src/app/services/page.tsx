import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services } from '@/lib/data';
import { Code, MonitorSmartphone, Cloud, Layers, Briefcase, PenTool, UserCheck, BarChart, LifeBuoy } from 'lucide-react';

const serviceIcons: { [key: string]: React.ReactNode } = {
  'web-development': <Code className="h-10 w-10 text-primary" />,
  'mobile-app-development': <MonitorSmartphone className="h-10 w-10 text-primary" />,
  'cloud-solutions': <Cloud className="h-10 w-10 text-primary" />,
  'custom-systems': <Layers className="h-10 w-10 text-primary" />,
  'digital-business-card': <Briefcase className="h-10 w-10 text-primary" />,
  'graphics-design': <PenTool className="h-10 w-10 text-primary" />,
  'training-workshops': <UserCheck className="h-10 w-10 text-primary" />,
  'ux-ui-design': <BarChart className="h-10 w-10 text-primary" />,
  'it-support': <LifeBuoy className="h-10 w-10 text-primary" />,
};

export default function ServicesPage() {
  const pageHeaderImage = PlaceHolderImages.find((p) => p.id === 'services-hero');

  return (
    <div>
      <PageHeader
        title="What We Offer"
        description="A comprehensive suite of digital services designed to elevate your business, from web and mobile development to cloud solutions and IT support."
        image={pageHeaderImage}
      />
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {services.map((service, index) => {
              const serviceImage = PlaceHolderImages.find(p => p.id === service.imageId);
              const isReversed = index % 2 !== 0;
              return (
                <div key={service.id} id={service.id} className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center scroll-mt-20`}>
                  <div className={`space-y-4 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        {serviceIcons[service.id] || <Code className="h-10 w-10 text-primary" />}
                      </div>
                      <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">{service.title}</h2>
                    </div>
                    <p className="text-foreground/80 text-lg">
                      {service.longDescription}
                    </p>
                    <Button asChild>
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                  </div>
                  <div className={`flex items-center justify-center ${isReversed ? 'lg:order-1' : ''}`}>
                    {serviceImage && (
                      <Image
                        src={serviceImage.imageUrl}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg object-cover"
                        data-ai-hint={serviceImage.imageHint}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
