
'use client';

import * as React from 'react';
import { motion, useTime, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/data';
import { Code, MonitorSmartphone, Cloud, Layers, Briefcase, PenTool, UserCheck, BarChart, LifeBuoy, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const serviceIcons: { [key: string]: React.ReactNode } = {
  'web-development': <Code className="h-full w-full" />,
  'mobile-app-development': <MonitorSmartphone className="h-full w-full" />,
  'cloud-solutions': <Cloud className="h-full w-full" />,
  'custom-systems': <Layers className="h-full w-full" />,
  'digital-business-card': <Briefcase className="h-full w-full" />,
  'graphics-design': <PenTool className="h-full w-full" />,
  'training-workshops': <UserCheck className="h-full w-full" />,
  'ux-ui-design': <BarChart className="h-full w-full" />,
  'it-support': <LifeBuoy className="h-full w-full" />,
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
    const servicesToDisplay = services.slice(0, 8);
    const time = useTime();
    const rotate = useTransform(time, [0, 20000], [0, 360], { clamp: false });
    const radius = 200;
    const center = 250;

    return (
        <div className="relative flex items-center justify-center" style={{ width: 500, height: 500 }}>
            <motion.div className="absolute w-full h-full" style={{ rotate }}>
                {servicesToDisplay.map((service, index) => {
                    const angle = (index / servicesToDisplay.length) * 2 * Math.PI;
                    const x = center + radius * Math.cos(angle) - 64; // 64 is half of icon container width 128px
                    const y = center + radius * Math.sin(angle) - 64;

                    return (
                        <motion.div
                            key={service.id}
                            className="absolute p-4 bg-background/60 backdrop-blur-sm rounded-full shadow-lg text-primary w-32 h-32"
                            style={{
                                top: y,
                                left: x,
                            }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                            whileHover={{ scale: 1.1, zIndex: 10 }}
                        >
                            <motion.div style={{ rotate: useTransform(rotate, val => -val) }}>
                               <Link href={`#${service.id}`} title={service.title} className="w-full h-full">
                                 {React.cloneElement(serviceIcons[service.id] as React.ReactElement, { className: "h-full w-full p-4" })}
                               </Link>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
            <div className="relative z-10 text-center">
                 <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
                    Services
                </h1>
            </div>
        </div>
    );
}


export default function ServicesPage() {

  return (
    <div>
      <section className="relative w-full pt-20 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-primary/5 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                 <div className="hidden lg:flex items-center justify-center">
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
                <div key={service.id} id={service.id} className={'grid gap-12 lg:grid-cols-2 lg:gap-16 items-center scroll-mt-20'}>
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
