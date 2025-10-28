
'use client';

import React, { useState, useEffect } from 'react';
import { projects as initialProjects } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';
import { FolderKanban, Layers, Server, Database, Rocket, CodeXml, Hotel, Building, GraduationCap, Contact, BookOpenCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';


const projectIcons: { [key: string]: React.ReactNode } = {
    'proj-bms': <Building className="w-full h-full" />,
    'proj-menu': <BookOpenCheck className="w-full h-full" />,
    'proj-bizcard': <Contact className="w-full h-full" />,
    'proj-sms': <GraduationCap className="w-full h-full" />,
    'proj-hms': <Hotel className="w-full h-full" />,
    'default': <Rocket className="w-full h-full" />
};

const PortfolioHero = () => {
    const [icons, setIcons] = useState<React.ReactNode[]>([]);
    const techIcons = [FolderKanban, Layers, Server, Database, Rocket, CodeXml];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const generatedIcons = [...techIcons, ...techIcons, ...techIcons, ...techIcons].map((Icon, index) => {
                const sizeClass = ['w-12 h-12', 'w-16 h-16', 'w-20 h-20'][index % 3];
                const leftPosition = `${(index * (100 / techIcons.length) + (Math.random() - 0.5) * 5) % 95}%`;
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
    }, []);

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
        <section className="relative w-full h-dvh min-h-[700px] flex items-center justify-center bg-primary/5 overflow-hidden">
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

const ProjectGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initialProjects.map((project, index) => {
                const iconNode = projectIcons[project.id] || projectIcons['default'];
                return (
                    <motion.div
                        key={project.id}
                        className="relative group"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                    >
                        <Card className="h-full overflow-hidden transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-primary/20">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div className="w-16 h-16 p-3 bg-primary/10 text-primary rounded-lg">
                                        {iconNode}
                                    </div>
                                    <Badge variant="outline">{project.category}</Badge>
                                </div>
                                <CardTitle className="pt-4 font-headline text-xl">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <p className="text-sm text-foreground/80 h-16">{project.description}</p>
                                    <div className="pt-2">
                                        <p className="text-xs font-semibold text-foreground/60 mb-2">Technologies</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                );
            })}
        </div>
    );
};


export default function PortfolioPage() {

  return (
    <div>
      <PortfolioHero />
      <main className="py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-12">
                Our Projects
            </h2>
            <ProjectGrid />
        </div>
      </main>
    </div>
  );
}
