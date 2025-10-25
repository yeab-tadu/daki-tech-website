import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  Cloud,
  Code,
  Layers,
  Lightbulb,
  LifeBuoy,
  MonitorSmartphone,
  PenTool,
  ShieldCheck,
  Briefcase,
  UserCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Testimonials from '@/components/Testimonials';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { projects, services, testimonials } from '@/lib/data';

const whyChooseUs = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: 'Innovation',
    description: 'We leverage the latest technologies to deliver cutting-edge solutions that drive growth and efficiency.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Reliability',
    description: 'Our robust development process ensures high-quality, dependable products you can count on.',
  },
  {
    icon: <LifeBuoy className="h-10 w-10 text-primary" />,
    title: 'Support',
    description: 'We provide ongoing support and maintenance to ensure your systems run smoothly.',
  },
];

const processSteps = [
  { name: 'Discover' },
  { name: 'Design' },
  { name: 'Develop' },
  { name: 'Deploy' },
  { name: 'Support' },
];

const serviceIcons: { [key: string]: React.ReactNode } = {
  'web-development': <Code className="h-8 w-8" />,
  'mobile-app-development': <MonitorSmartphone className="h-8 w-8" />,
  'cloud-solutions': <Cloud className="h-8 w-8" />,
  'custom-systems': <Layers className="h-8 w-8" />,
  'digital-business-card': <Briefcase className="h-8 w-8" />,
  'graphics-design': <PenTool className="h-8 w-8" />,
  'training-workshops': <UserCheck className="h-8 w-8" />,
};

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'home-hero');
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full pt-20 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
                    Empowering Businesses with Smart Digital Solutions.
                  </h1>
                  <p className="max-w-[600px] text-foreground/80 md:text-xl">
                    Daki Techs is a modern digital technology company that provides full software and IT solutions to innovate, build, and empower your business.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/academy">Visit Academy</Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                 {heroImage && (
                    <Image
                      src={heroImage.imageUrl}
                      alt="Hero Image"
                      width={600}
                      height={400}
                      className="rounded-xl shadow-2xl"
                      data-ai-hint={heroImage.imageHint}
                    />
                 )}
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge>Our Services</Badge>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">What We Offer</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From web development to cloud solutions, we provide a comprehensive suite of services to meet your digital needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 pt-12">
              {services.slice(0, 6).map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      {serviceIcons[service.id] || <Code className="h-8 w-8" />}
                    </div>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">{service.description.substring(0, 100)}...</p>
                    <Button variant="link" asChild className="p-0 h-auto mt-2">
                      <Link href={`/services#${service.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline">
                    <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Daki Techs?</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are committed to delivering excellence and building long-term partnerships with our clients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {whyChooseUs.map((reason) => (
                <div key={reason.title} className="flex flex-col items-center text-center p-6">
                  {reason.icon}
                  <h3 className="font-headline text-xl font-bold mt-4">{reason.title}</h3>
                  <p className="mt-2 text-foreground/80">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Process */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge>Our Process</Badge>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">A Proven Path to Success</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our streamlined process ensures your project is delivered on time and on budget, with exceptional quality.
                </p>
              </div>
            </div>
            <div className="relative mt-12">
              <div className="absolute left-0 top-1/2 w-full h-0.5 bg-border -translate-y-1/2" />
              <div className="relative flex justify-between">
                {processSteps.map((step, index) => (
                  <div key={step.name} className="flex flex-col items-center text-center z-10">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold ring-4 ring-background">
                      {index + 1}
                    </div>
                    <p className="font-headline mt-2 font-semibold">{step.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at some of our recent work and see how we've helped businesses like yours succeed.
                </p>
              </div>
            </div>
            <Carousel
              opts={{ align: 'start', loop: true }}
              className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto mt-12"
            >
              <CarouselContent>
                {featuredProjects.map((project) => {
                  const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
                  return (
                    <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <Card className="h-full">
                          <CardContent className="p-0">
                            {projectImage && (
                              <Image
                                src={projectImage.imageUrl}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="rounded-t-lg object-cover aspect-[3/2]"
                                data-ai-hint={projectImage.imageHint}
                              />
                            )}
                            <div className="p-6">
                              <h3 className="font-headline text-lg font-bold">{project.title}</h3>
                              <p className="mt-2 text-sm text-foreground/80">{project.description}</p>
                              <div className="flex flex-wrap gap-2 mt-4">
                                {project.technologies.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                              </div>
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
            <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline">
                    <Link href="/portfolio">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-5xl">
              What Our Clients Say
            </h2>
            <div className="mt-12">
              <Testimonials testimonials={testimonials} />
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Let's Build Something Great Together
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to start your next project or advance your career? We're here to help.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-2 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/academy">Explore Academy</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
