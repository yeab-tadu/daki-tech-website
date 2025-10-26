'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
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
  BarChart,
  Database,
  GitMerge,
  Server,
  TerminalSquare,
  Globe,
  GitBranch,
  DatabaseZap,
  PlugZap,
  Rocket,
  LayoutPanelLeft,
  Wind,
  Router,
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
import { motion, useTime, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

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
  'web-development': <Code className="h-10 w-10" />,
  'mobile-app-development': <MonitorSmartphone className="h-10 w-10" />,
  'cloud-solutions': <Cloud className="h-10 w-10" />,
  'custom-systems': <Layers className="h-10 w-10" />,
  'digital-business-card': <Briefcase className="h-10 w-10" />,
  'graphics-design': <PenTool className="h-10 w-10" />,
  'training-workshops': <UserCheck className="h-10 w-10" />,
  'ux-ui-design': <BarChart className="h-10 w-10" />,
};

const heroServices = services.slice(0, 8);

const InteractiveCircle = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    const radius = 200;
    const center = 225;
    const time = useTime();
    const rotate = useTransform(time, [0, 40000], [0, 360], { clamp: false });


    return (
        <div className="relative w-[450px] h-[450px] flex items-center justify-center">
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{ rotate }}
            >
                {heroServices.map((service, i) => {
                    const angle = (i / heroServices.length) * 2 * Math.PI;
                    const x = center + radius * Math.cos(angle);
                    const y = center + radius * Math.sin(angle);
                    
                    return (
                        <motion.div
                            key={service.id}
                            className="absolute w-24 h-24"
                            style={{ top: y - 48, left: x - 48 }}
                            onMouseEnter={() => setHovered(service.id)}
                            onMouseLeave={() => setHovered(null)}
                            whileHover={{ scale: 1.2 }}
                        >
                             <Link href={`/services#${service.id}`} className="flex flex-col items-center text-center">
                                 <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center shadow-md text-primary">
                                    {serviceIcons[service.id]}
                                </div>
                            </Link>
                        </motion.div>
                    )
                })}
            </motion.div>
            <motion.div
                className="relative flex h-48 w-48 flex-col items-center justify-center rounded-full bg-primary/10 text-center"
                animate={{ scale: hovered ? 1.1 : 1 }}
            >
              <div className="flex flex-col items-center justify-center">
                <p className="font-headline text-4xl font-bold text-primary">
                    {hovered ? heroServices.find(s => s.id === hovered)?.title.split(' ')[0] : 'Daki'}
                </p>
                <p className="font-headline text-4xl font-bold text-accent">
                     {hovered ? heroServices.find(s => s.id === hovered)?.title.split(' ').slice(1).join(' ') : 'Techs'}
                </p>
              </div>
            </motion.div>
        </div>
    )
}

const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="40" height="40" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const JsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="18" fontWeight="bold" fill="currentColor">JS</text>
  </svg>
);

const BsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor">B</text>
  </svg>
);

const NodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke="currentColor" strokeWidth="5" fill="none"/>
        <text x="50" y="55" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="currentColor">JS</text>
    </svg>
);

const NextIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor">N</text>
  </svg>
);

const JqueryIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor">J</text>
  </svg>
);


const academySkills = [
    { name: 'HTML & CSS', icon: <Code className="h-8 w-8" /> },
    { name: 'JavaScript', icon: <JsIcon /> },
    { name: 'Bootstrap', icon: <BsIcon /> },
    { name: 'Node.js', icon: <NodeIcon /> },
    { name: 'Express.js', icon: <Wind className="h-8 w-8" /> },
    { name: 'React.js', icon: <ReactIcon /> },
    { name: 'Next.js', icon: <NextIcon /> },
    { name: 'MySQL', icon: <Database className="h-8 w-8" /> },
    { name: 'Git', icon: <GitBranch className="h-8 w-8" /> },
    { name: 'jQuery', icon: <JqueryIcon /> },
    { name: 'React Router', icon: <Router className="h-8 w-8" /> },
    { name: 'REST API', icon: <PlugZap className="h-8 w-8" /> },
    { name: 'Deployment', icon: <Rocket className="h-8 w-8" /> },
];

const SkillsGrid = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                ease: "easeOut",
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div 
            className="grid grid-cols-4 sm:grid-cols-5 gap-6 md:gap-8 w-full max-w-2xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {academySkills.map((skill) => (
                <motion.div
                    key={skill.name}
                    className="flex flex-col items-center text-center text-foreground group"
                    variants={itemVariants}
                >
                    <motion.div
                        className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center shadow-lg text-accent"
                        whileHover={{ scale: 1.15, boxShadow: '0px 0px 20px hsl(var(--accent))', transition: { duration: 0.2 } }}
                    >
                        {React.cloneElement(skill.icon, { className: 'h-10 w-10 transition-transform group-hover:scale-110' })}
                    </motion.div>
                    <span className="text-xs font-semibold mt-2">{skill.name}</span>
                </motion.div>
            ))}
        </motion.div>
    );
};


export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section 
          className="relative w-full h-dvh flex items-center bg-background overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="flex flex-col justify-center space-y-6 text-center md:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              >
                <div className="space-y-4">
                  <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    <motion.span 
                      className="text-primary"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >Innovate.
                    </motion.span>
                    <motion.span 
                      className="text-accent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    > Build.
                    </motion.span>
                    <motion.span 
                      className="text-foreground"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    > Empower.
                    </motion.span>
                  </h1>
                  <p className="max-w-[600px] text-foreground/80 md:text-xl mx-auto md:mx-0">
                    Empowering businesses with digital solutions and shaping future tech leaders at our academy.
                  </p>
                </div>
                <motion.div
                  className="flex flex-col gap-4 min-[400px]:flex-row md:justify-start justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                >
                  <Button asChild size="lg" className="transition-transform hover:scale-105 shadow-lg">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105">
                    <Link href="/academy">Explore Academy</Link>
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="hidden md:flex justify-center items-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              >
                <InteractiveCircle />
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
           <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />
        </motion.section>

        {/* Academy Section */}
        <section id="academy" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge>Daki Academy</Badge>
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Launch Your Tech Career</h2>
                        <p className="text-foreground/80 text-lg">
                           Our Full-Stack Web Development course is a practical, step-by-step training that teaches you how to build complete websites and web apps from scratch. You’ll learn both front-end and back-end skills through real projects, gaining the confidence and experience needed to work as a professional web developer.
                        </p>
                        <div className="flex items-center gap-4">
                           <div className="flex items-center gap-2">
                               <BookOpen className="h-6 w-6 text-accent" />
                               <span>6-Month Program</span>
                           </div>
                           <div className="flex items-center gap-2">
                                <UserCheck className="h-6 w-6 text-accent" />
                               <span>Expert Instructors</span>
                           </div>
                        </div>
                        <Button size="lg" asChild className="transition-transform hover:scale-105">
                           <Link href="/academy">Explore the Academy <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </motion.div>
                    <div className="flex justify-center items-center min-h-[400px]">
                       <SkillsGrid />
                    </div>
                </div>
            </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
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
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        {serviceIcons[service.id] || <Code className="h-8 w-8" />}
                      </div>
                      <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">{service.description.substring(0, 100)}...</p>
                      <Button variant="link" asChild className="p-0 h-auto mt-2 group">
                        <Link href={`/services#${service.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
             <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105">
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
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose DakiTechs?</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are committed to delivering excellence and building long-term partnerships with our clients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {whyChooseUs.map((reason) => (
                 <motion.div 
                    key={reason.title} 
                    className="flex flex-col items-center text-center p-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                  <div className="p-4 bg-primary/10 rounded-full transition-transform hover:scale-110 shadow-md">{reason.icon}</div>
                  <h3 className="font-headline text-xl font-bold mt-4">{reason.title}</h3>
                  <p className="mt-2 text-foreground/80">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Process */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
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
                  <div key={step.name} className="flex flex-col items-center text-center z-10 group">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold ring-4 ring-background transition-all duration-300 group-hover:scale-110 group-hover:bg-accent"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {index + 1}
                    </motion.div>
                    <p className="font-headline mt-3 font-semibold">{step.name}</p>
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
                        <Card className="h-full overflow-hidden group/project">
                           <CardContent className="p-0">
                            {projectImage && (
                              <div className="overflow-hidden rounded-t-lg">
                                <Image
                                  src={projectImage.imageUrl}
                                  alt={project.title}
                                  width={600}
                                  height={400}
                                  className="object-cover aspect-[3/2] transition-transform duration-500 group-hover/project:scale-105"
                                  data-ai-hint={projectImage.imageHint}
                                />
                              </div>
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
                <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105">
                    <Link href="/portfolio">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-accent text-primary-foreground">
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
              <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 transition-transform hover:scale-105">
                <Link href="/academy">Explore Academy</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
