

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
  GitBranch,
  Rocket,
  PlugZap,
  Wind,
  Router,
  HeartHandshake,
  Users,
  MessagesSquare,
  Smartphone,
  Settings2,
  Contact,
  Paintbrush,
  Hotel,
  Building,
  GraduationCap,
  BookOpenCheck,
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
import { projects, services, whyChooseUs as initialWhyChooseUs, testimonials } from '@/lib/data';
import { motion, useTime, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import type { Service, Project } from '@/lib/types';
import { useIsMobile } from "@/hooks/use-mobile"


const processSteps = [
  { name: 'Discover' },
  { name: 'Design' },
  { name: 'Develop' },
  { name: 'Deploy' },
  { name: 'Support' },
];

const serviceIcons: { [key: string]: React.ReactNode } = {
  'web-development': <Code className="h-10 w-10" />,
  'mobile-app-development': <Smartphone className="h-10 w-10" />,
  'cloud-solutions': <Cloud className="h-10 w-10" />,
  'custom-systems': <Settings2 className="h-10 w-10" />,
  'digital-business-card': <Contact className="h-10 w-10" />,
  'graphics-design': <PenTool className="h-10 w-10" />,
  'training-workshops': <UserCheck className="h-10 w-10" />,
  'ux-ui-design': <Paintbrush className="h-10 w-10" />,
  'it-support': <LifeBuoy className="h-10 w-10" />,
};

const whyChooseUsIcons: { [key: string]: React.ReactNode } = {
    'Innovation': <Lightbulb className="h-10 w-10 text-primary" />,
    'Reliability': <ShieldCheck className="h-10 w-10 text-primary" />,
    'Support': <LifeBuoy className="h-10 w-10 text-primary" />,
    'Client-Centric': <HeartHandshake className="h-10 w-10 text-primary" />,
    'Expert Team': <Users className="h-10 w-10 text-primary" />,
    'Transparent Communication': <MessagesSquare className="h-10 w-10 text-primary" />,
};

const whyChooseUs = initialWhyChooseUs.map(item => ({
    ...item,
    icon: whyChooseUsIcons[item.title],
}));

type WhyChooseUsItem = (typeof whyChooseUs)[0];

const heroServices = services.slice(0, 8);

const InteractiveCircle = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    const isMobile = useIsMobile();
    const radius = isMobile ? 120 : 200;
    const center = isMobile ? 150 : 225;
    const containerSize = isMobile ? 300 : 450;
    const iconWrapperSize = isMobile ? 'w-16 h-16' : 'w-24 h-24';
    const iconSize = isMobile ? 'w-12 h-12' : 'w-20 h-20';
    const centerCircleSize = isMobile ? 'h-32 w-32' : 'h-48 w-48';

    const time = useTime();
    const rotate = useTransform(time, [0, 40000], [0, 360], { clamp: false });

    return (
        <div 
            className="relative flex items-center justify-center aspect-square"
            style={{ width: containerSize, height: containerSize }}
        >
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
                            className={`absolute ${iconWrapperSize}`}
                            style={{ top: y - (isMobile ? 32: 48), left: x - (isMobile ? 32: 48) }}
                            onMouseEnter={() => setHovered(service.id)}
                            onMouseLeave={() => setHovered(null)}
                            whileHover={{ scale: 1.2 }}
                        >
                            <Link href={`/services#${service.id}`} className="flex flex-col items-center text-center">
                                <div className={`${iconSize} bg-background rounded-full flex items-center justify-center shadow-md text-primary p-2`}>
                                    {React.cloneElement(serviceIcons[service.id] as React.ReactElement, { className: "h-full w-full" })}
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.div>
            <motion.div
                className={`relative flex flex-col items-center justify-center rounded-full bg-primary/10 text-center ${centerCircleSize}`}
                animate={{ scale: hovered ? 1.1 : 1 }}
            >
                <div className="flex flex-col items-center justify-center">
                    <p className="font-headline text-3xl md:text-4xl font-bold text-primary">
                        {hovered ? heroServices.find(s => s.id === hovered)?.title.split(' ')[0] : 'Daki'}
                    </p>
                    <p className="font-headline text-3xl md:text-4xl font-bold text-accent">
                        {hovered ? heroServices.find(s => s.id === hovered)?.title.split(' ').slice(1).join(' ') : 'Techs'}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

const initialAcademySkills = [
  { name: 'HTML & CSS', icon: <Code className="h-10 w-10" /> },
  { name: 'JavaScript', icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="currentColor">JS</text></svg> },
  { name: 'Bootstrap', icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="currentColor">B</text></svg> },
  { name: 'Node.js', icon: <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke="currentColor" strokeWidth="5" fill="none" /><text x="50" y="55" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="currentColor">JS</text></svg> },
  { name: 'Express.js', icon: <Wind className="h-10 w-10" /> },
  { name: 'React.js', icon: <svg width="40" height="40" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2.05" fill="currentColor" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg> },
  { name: 'Next.js', icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="currentColor">N</text></svg> },
  { name: 'MySQL', icon: <Database className="h-10 w-10" /> },
  { name: 'Git', icon: <GitBranch className="h-10 w-10" /> },
  { name: 'jQuery', icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="currentColor">J</text></svg> },
  { name: 'React Router', icon: <Router className="h-10 w-10" /> },
  { name: 'REST API', icon: <PlugZap className="h-10 w-10" /> },
  { name: 'Deployment', icon: <Rocket className="h-10 w-10" /> },
];

type AcademySkill = typeof initialAcademySkills[0];


const SkillMarquee = () => {
    const [shuffledSkills1, setShuffledSkills1] = useState<AcademySkill[]>([]);
    const [shuffledSkills2, setShuffledSkills2] = useState<AcademySkill[]>([]);
    const [shuffledSkills3, setShuffledSkills3] = useState<AcademySkill[]>([]);

    useEffect(() => {
        const shuffle = (array: AcademySkill[]) => [...array].sort(() => Math.random() - 0.5);
        setShuffledSkills1(shuffle(initialAcademySkills));
        setShuffledSkills2(shuffle(initialAcademySkills));
        setShuffledSkills3(shuffle(initialAcademySkills));
    }, []);

    const MarqueeRow = ({ skills, duration, direction = 1 }: { skills: AcademySkill[], duration: number, direction?: 1 | -1 }) => {
        if (!skills || skills.length === 0) return null;
        return (
        <motion.div
            className="flex gap-8"
            animate={{ x: direction === 1 ? ["0%", "-100%"] : ["-100%", "0%"] }}
            transition={{
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
            }}
        >
            {[...skills, ...skills].map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="flex-shrink-0 w-24 sm:w-32 flex flex-col items-center text-center text-foreground group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-background rounded-full flex items-center justify-center shadow-lg text-accent transition-transform group-hover:scale-110">
                {React.cloneElement(skill.icon, { className: 'h-8 w-8 sm:h-10 sm:w-10' })}
                </div>
                <span className="text-xs font-semibold mt-2">{skill.name}</span>
            </div>
            ))}
        </motion.div>
        );
    };

    return (
        <div className="w-full overflow-hidden relative space-y-4 py-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <MarqueeRow skills={shuffledSkills1} duration={60} />
            <MarqueeRow skills={shuffledSkills2} duration={45} direction={-1} />
            <MarqueeRow skills={shuffledSkills3} duration={55} />
        </div>
    );
};

const ServicesMarquee = () => {
  const [shuffledServices1, setShuffledServices1] = useState<Service[]>([]);
  const [shuffledServices2, setShuffledServices2] = useState<Service[]>([]);

  useEffect(() => {
    const shuffle = (array: Service[]) => [...array].sort(() => Math.random() - 0.5);
    setShuffledServices1(shuffle(services));
    setShuffledServices2(shuffle(services));
  }, []);

  const MarqueeRow = ({ services, duration, direction = 1 }: { services: Service[], duration: number, direction?: 1 | -1 }) => {
    if (services.length === 0) return null;

    const xAnimation = direction === 1 ? ["0%", "-100%"] : ["-100%", "0%"];

    return (
      <motion.div
        className="flex gap-6 md:gap-8 py-4"
        animate={{ x: xAnimation }}
        transition={{
          ease: 'linear',
          duration: duration,
          repeat: Infinity,
        }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {[...services, ...services].map((service, index) => (
           <div key={`${service.id}-${index}`} className="flex-shrink-0 w-[300px] sm:w-[350px]">
              <motion.div
                className="relative h-full"
                whileHover={{ y: -8, rotateZ: '1deg', rotateX: '10deg' }}
              >
                <Card className="h-full transition-all duration-300">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <motion.div
                      className="bg-primary/10 p-3 rounded-full text-primary"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {React.cloneElement(serviceIcons[service.id] as React.ReactElement, { className: "h-6 w-6 sm:h-8 sm:w-8" })}
                    </motion.div>
                    <CardTitle className="font-headline text-lg sm:text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80 h-20 overflow-hidden">{service.description}</p>
                    <Button variant="link" asChild className="p-0 h-auto mt-2 group">
                      <Link href={`/services#${service.id}`}>Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
                    </Button>
                  </CardContent>
                </Card>
                 <motion.div
                    className="absolute inset-0 rounded-lg -z-10"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 70%)',
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="mt-12 w-full overflow-hidden group">
      <MarqueeRow services={shuffledServices1} duration={90} direction={-1} />
      <MarqueeRow services={shuffledServices2} duration={105} direction={1} />
    </div>
  )
}

const WhyChooseUs = ({ items }: { items: WhyChooseUsItem[] }) => {
    const [shuffledItems1, setShuffledItems1] = useState<WhyChooseUsItem[]>([]);
    const [shuffledItems2, setShuffledItems2] = useState<WhyChooseUsItem[]>([]);

    useEffect(() => {
        const shuffle = (array: WhyChooseUsItem[]) => [...array].sort(() => Math.random() - 0.5);
        setShuffledItems1(shuffle(items));
        setShuffledItems2(shuffle(items));
    }, [items]);

    const MarqueeRow = ({ items, duration, direction = 1 }: { items: WhyChooseUsItem[], duration: number, direction?: 1 | -1 }) => {
        if (!items || items.length === 0) return null;
        
        return (
            <motion.div
                className="flex gap-8"
                animate={{ x: direction === 1 ? ["0%", "-100%"] : ["-100%", "0%"] }}
                transition={{
                    ease: 'linear',
                    duration: duration,
                    repeat: Infinity,
                }}
                 whileHover={{ animationPlayState: 'paused' }}
            >
                {[...items, ...items].map((reason, index) => (
                    <div key={`${reason.title}-${index}`} className="flex-shrink-0 w-48 sm:w-52 flex flex-col items-center text-center group">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 bg-background rounded-full flex flex-col items-center justify-center p-4 shadow-lg text-primary transition-transform group-hover:scale-110 group-hover:bg-primary/10">
                            {React.cloneElement(reason.icon, { className: "h-10 w-10 sm:h-12 sm:w-12 mb-2"})}
                            <h3 className="font-headline text-sm sm:text-base font-bold text-foreground">{reason.title}</h3>
                        </div>
                    </div>
                ))}
            </motion.div>
        );
    };
    
    return (
        <div className="w-full overflow-hidden relative space-y-8 py-8 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <MarqueeRow items={shuffledItems1} duration={60} />
            <MarqueeRow items={shuffledItems2} duration={55} direction={-1} />
        </div>
    );
};


const AnimatedProcess = () => {
    return (
        <div className="relative mt-12 md:mt-24 w-full max-w-6xl mx-auto">
            <div className="flex justify-between items-start relative z-10 px-4 md:px-0">
                {processSteps.map((step, index) => (
                    <motion.div
                        key={step.name}
                        className="flex flex-col items-center text-center w-12 md:w-24"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <motion.div
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg md:text-xl ring-4 ring-background transition-all duration-300 group-hover:scale-110 group-hover:bg-accent"
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "mirror",
                                delay: index * 0.3,
                            }}
                        >
                            {index + 1}
                        </motion.div>
                        <p className="font-headline mt-3 font-semibold text-xs md:text-base">{step.name}</p>
                    </motion.div>
                ))}
            </div>
            <svg className="absolute top-6 md:top-8 left-0 w-full h-16 z-0 hidden md:block" viewBox="0 0 1200 100" preserveAspectRatio="none">
                 <defs>
                    <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--accent))" />
                        <stop offset="25%" stopColor="hsl(var(--primary))" />
                        <stop offset="50%" stopColor="hsl(var(--accent))" />
                        <stop offset="75%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                    </linearGradient>
                </defs>
                <path
                    d="M 60,50 C 250,10 250,90 500,50 C 750,10 750,90 950,50 C 1150,10 1150,90 1140,50"
                    fill="transparent"
                    stroke="hsl(var(--border))"
                    strokeWidth="3"
                />
                <motion.path
                    d="M 60,50 C 250,10 250,90 500,50 C 750,10 750,90 950,50 C 1150,10 1150,90 1140,50"
                    fill="transparent"
                    stroke="url(#path-gradient)"
                    strokeWidth="3"
                    strokeDasharray="200 1000"
                    animate={{ strokeDashoffset: [0, -1200] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
                 <motion.path
                    d="M 60,50 C 250,10 250,90 500,50 C 750,10 750,90 950,50 C 1150,10 1150,90 1140,50"
                    fill="transparent"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray="10 20"
                    animate={{ strokeDashoffset: [0, 1200] }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
            </svg>
        </div>
    );
};


const HomeHero = () => {
    return (
        <section
            className="relative w-full pt-32 pb-20 md:py-0 md:flex md:items-center"
        >
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-20">
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
                    <div
                        className="flex justify-center items-center group mt-8 md:mt-0"
                    >
                        <InteractiveCircle />
                    </div>
                </div>
            </div>
        </section>
    )
}

const projectIcons: { [key: string]: React.ReactNode } = {
    'proj-bms': <Building className="w-full h-full" />,
    'proj-menu': <BookOpenCheck className="w-full h-full" />,
    'proj-bizcard': <Contact className="w-full h-full" />,
    'proj-sms': <GraduationCap className="w-full h-full" />,
    'proj-hms': <Hotel className="w-full h-full" />,
    'default': <Rocket className="w-full h-full" />
};

const ProjectMarquee = () => {

    const MarqueeRow = ({ items, duration, direction = 1 }: { items: Project[], duration: number, direction?: 1 | -1 }) => {
        if (!items || items.length === 0) return null;

        const xAnimation = direction === 1 ? ["0%", "-100%"] : ["-100%", "0%"];
        
        return (
        <motion.div
            className="flex gap-6 md:gap-8 py-4"
            animate={{ x: xAnimation }}
            transition={{
            ease: 'linear',
            duration: duration,
            repeat: Infinity,
            }}
            whileHover={{ animationPlayState: 'paused' }}
        >
            {[...items, ...items].map((project, index) => (
                <div key={`${project.id}-${index}`} className="flex-shrink-0 w-[320px] sm:w-[400px]">
                    <Card className="h-full overflow-hidden group transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2">
                        <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 text-primary group-hover:text-accent transition-colors">
                                {projectIcons[project.id] || projectIcons['default']}
                            </div>
                            <div className="space-y-2 text-center sm:text-left">
                                <Badge variant="outline">{project.category}</Badge>
                                <h3 className="font-headline text-xl font-bold">{project.title}</h3>
                                <p className="text-sm text-foreground/80">{project.description}</p>
                                <div className="flex flex-wrap gap-2 pt-2 justify-center sm:justify-start">
                                    {project.technologies.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </motion.div>
        );
    };

    return (
        <div className="w-full space-y-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <MarqueeRow items={projects} duration={80} />
            <MarqueeRow items={[...projects].reverse()} duration={70} direction={-1} />
        </div>
    )
}


export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <HomeHero />

        {/* Academy Section */}
        <section id="academy" className="w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
              <div className="space-y-6 text-center lg:text-left">
                <Badge>Daki Academy</Badge>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Launch Your Tech Career</h2>
                <p className="text-foreground/80 md:text-lg">
                  Our Full-Stack Web Development course is a practical, step-by-step training that teaches you how to build complete websites and web apps from scratch. You’ll learn both front-end and back-end skills through real projects, gaining the confidence and experience needed to work as a professional web developer.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
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
              </div>
              <div className="mt-8 lg:mt-0">
                 <SkillMarquee />
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <Badge>Our Services</Badge>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">What We Offer</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From web development to cloud solutions, we provide a comprehensive suite of services to meet your digital needs.
                </p>
              </div>
            </motion.div>
            <ServicesMarquee />
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105">
                <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                  className="flex flex-col items-center text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                >
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose DakiTechs?</h2>
                    <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed mt-4 mx-auto">
                        We are committed to delivering excellence and building long-term partnerships with our clients through innovation, reliability, and dedicated support.
                    </p>
                    <Button size="lg" asChild className="mt-6">
                        <Link href="/about">Learn More About Us</Link>
                    </Button>
                </motion.div>
                <WhyChooseUs items={whyChooseUs} />
            </div>
        </section>

        {/* Our Process */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <Badge>Our Process</Badge>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">A Proven Path to Success</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our streamlined process ensures your project is delivered on time and on budget, with exceptional quality.
                </p>
              </div>
            </motion.div>
            <AnimatedProcess />
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at some of our recent work and see how we've helped businesses like yours succeed.
                </p>
              </div>
            </motion.div>
            <div className="mt-12">
              <ProjectMarquee />
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="transition-transform hover:scale-105">
                <Link href="/portfolio">View All Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Let's Build Something Great Together
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to start your next project or advance your career? We're here to help.
              </p>
            </motion.div>
            <motion.div
              className="mx-auto w-full max-w-sm space-y-2 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-2 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 transition-transform hover:scale-105">
                <Link href="/academy">Explore Academy</Link>
              </Button>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}

    

    