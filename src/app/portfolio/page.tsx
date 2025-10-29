
'use client';

import React, { useState, useEffect } from 'react';
import { projects as initialProjects } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';
import { FolderKanban, Layers, Server, Database, Rocket, CodeXml, Hotel, Building, GraduationCap, Contact, BookOpenCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';


const projectIcons: { [key: string]: React.ReactNode } = {
    'proj-bms': <Building className="w-full h-full" />,
    'proj-menu': <BookOpenCheck className="w-full h-full" />,
    'proj-bizcard': <Contact className="w-full h-full" />,
    'proj-sms': <GraduationCap className="w-full h-full" />,
    'proj-hms': <Hotel className="w-full h-full" />,
    'default': <Rocket className="w-full h-full" />
};

const PortfolioHero = () => {
    const isMobile = useIsMobile();
    const [icons, setIcons] = useState<React.ReactNode[]>([]);
    const techIcons = [FolderKanban, Layers, Server, Database, Rocket, CodeXml];
    const iconCount = isMobile ? 8 : 16;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const generatedIcons = Array.from({ length: iconCount }).map((_, index) => {
                const Icon = techIcons[index % techIcons.length];
                const sizeClass = ['w-12 h-12', 'w-16 h-16', 'w-20 h-20'][index % 3];
                const leftPosition = `${(index * (100 / (iconCount / 2)) + (Math.random() - 0.5) * 5) % 95}%`;
                const delay = Math.random() * 10;
                const duration = 7 + Math.random() * 8;
                
                return (
                    <FloatingIcon 
                        key={`value-${index}`}
                        icon={<Icon className="w-full h-full" />}
                        className={sizeClass}
                        delay={delay}
                        duration={duration}
                        style={{ left: leftPosition, top: '-20%' }}
                    />
                )
            });
            setIcons(generatedIcons);
        }
    }, [isMobile, iconCount]);

    const FloatingIcon = ({ icon, className, delay, duration, style }: { icon: React.ReactNode, className: string, delay: number, duration: number, style: React.CSSProperties }) => {
        return (
             <motion.div
                className={`absolute rounded-full bg-background/60 backdrop-blur-sm shadow-lg text-primary p-2 md:p-3 ${className}`}
                style={style}
                initial={{ opacity: 0, y: -100 }}
                animate={{ 
                    opacity: [0, 0.7, 0.7, 0],
                    y: '110vh'
                }}
                transition={{
                    delay,
                    duration,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {icon}
            </motion.div>
        )
    }

    return (
        <section className="relative w-full pt-32 pb-20 md:h-dvh flex items-center justify-center bg-primary/5 overflow-hidden md:py-0">
            <div className="absolute inset-0 z-10 top-0">
                {icons.length > 0 && icons}
            </div>
             <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="container mx-auto px-4 md:px-6 z-20 relative text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="text-primary">Our </span>
                        <span className="text-accent">Work</span>
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl">
                        A showcase of our passion, expertise, and commitment to delivering exceptional digital products.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

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
                                {React.cloneElement(projectIcons[project.id] || projectIcons['default'], { className: "w-full h-full" })}
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
            <MarqueeRow items={initialProjects} duration={80} />
            <MarqueeRow items={[...initialProjects].reverse()} duration={70} direction={-1} />
        </div>
    )
}


export default function PortfolioPage() {

  return (
    <div>
      <PortfolioHero />
      <main className="py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-12">
                Our Projects
            </h2>
            <ProjectMarquee />
        </div>
      </main>
    </div>
  );
}

    
