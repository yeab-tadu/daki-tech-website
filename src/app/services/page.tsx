'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/data';
import { Code, MonitorSmartphone, Cloud, Layers, Briefcase, PenTool, UserCheck, BarChart, LifeBuoy, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const serviceIcons: { [key: string]: React.ReactNode } = {
  'web-development': <Code className="h-40 w-40 text-primary" />,
  'mobile-app-development': <MonitorSmartphone className="h-40 w-40 text-primary" />,
  'cloud-solutions': <Cloud className="h-40 w-40 text-primary" />,
  'custom-systems': <Layers className="h-40 w-40 text-primary" />,
  'digital-business-card': <Briefcase className="h-40 w-40 text-primary" />,
  'graphics-design': <PenTool className="h-40 w-40 text-primary" />,
  'training-workshops': <UserCheck className="h-40 w-40 text-primary" />,
  'ux-ui-design': <BarChart className="h-40 w-40 text-primary" />,
  'it-support': <LifeBuoy className="h-40 w-40 text-primary" />,
};

const AnimatedIcon = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      className="bg-background/80 backdrop-blur-sm rounded-full p-10 shadow-lg"
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
        boxShadow: [
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        ]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        repeatType: 'mirror',
        ease: 'easeInOut'
      }}
    >
      {children}
    </motion.div>
)

const ServicesHeroAnimation = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);
    
    if (!isMounted) return null;

    return (
        <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
            {services.map((service, index) => {
                const angle = (index / services.length) * 2 * Math.PI;
                const radius = Math.random() * 150 + 100;
                const x = 50 + (radius / 4) * Math.cos(angle);
                const y = 50 + (radius / 10) * Math.sin(angle);
                const duration = Math.random() * 10 + 10;
                const delay = Math.random() * 5;

                return (
                    <motion.div
                        key={service.id}
                        className="absolute"
                        initial={{ x: '50%', y: '50%', scale: 0 }}
                        animate={{ x: `${x}%`, y: `${y}%`, scale: 1 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                    >
                         <motion.div
                            animate={{
                                x: [0, Math.random() * 40 - 20, 0],
                                y: [0, Math.random() * 40 - 20, 0],
                            }}
                            transition={{
                                duration,
                                repeat: Infinity,
                                repeatType: 'mirror',
                                ease: 'easeInOut',
                                delay
                            }}
                         >
                             <div className="p-4 bg-background/80 backdrop-blur-sm rounded-full shadow-lg">
                                {React.cloneElement(serviceIcons[service.id] as React.ReactElement, { className: "h-16 w-16 text-primary" })}
                             </div>
                         </motion.div>
                    </motion.div>
                )
            })}
        </div>
    )
}


export default function ServicesPage() {

  return (
    <div>
      <section className="relative w-full pt-20 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-primary/5 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="max-w-3xl text-center lg:text-left space-y-4">
                    <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
                        What We Offer
                    </h1>
                    <p className="text-lg text-foreground/80 md:text-xl">
                        A comprehensive suite of digital services designed to elevate your business, from web and mobile development to cloud solutions and IT support.
                    </p>
                     <Button size="lg" asChild>
                      <Link href="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
                 <div className="hidden lg:block">
                   <ServicesHeroAnimation />
                 </div>
            </div>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {services.map((service, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <div key={service.id} id={service.id} className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center scroll-mt-20`}>
                  <div className={`space-y-6 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full hidden">
                        {serviceIcons[service.id]}
                      </div>
                      <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">{service.title}</h2>
                    </div>
                    <p className="text-foreground/80 text-lg">
                      {service.longDescription}
                    </p>
                    <Button asChild>
                      <Link href={`/contact?subject=Inquiry%20about%20${service.title}`}>Get a Quote</Link>
                    </Button>
                  </div>
                  <div className={`flex items-center justify-center min-h-[250px] ${isReversed ? 'lg:order-1' : ''}`}>
                      <AnimatedIcon>
                        {React.cloneElement(serviceIcons[service.id] as React.ReactElement, { className: "h-40 w-40 text-primary" })}
                      </AnimatedIcon>
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
