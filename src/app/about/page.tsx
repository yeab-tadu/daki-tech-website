'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Gem, Heart, Shield, ArrowRight, Code, Database, GitBranch, Wind, Rocket } from 'lucide-react';
import { motion, useTime, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { milestones } from '@/lib/data';
import React, { useState, useEffect } from 'react';

const companyValues = [
    {
        icon: <Lightbulb className="h-8 w-8 text-primary" />,
        title: 'Innovation',
        description: 'We constantly explore new technologies and ideas to deliver cutting-edge solutions.'
    },
    {
        icon: <Gem className="h-8 w-8 text-primary" />,
        title: 'Quality',
        description: 'We are committed to the highest standards of excellence in everything we do.'
    },
    {
        icon: <Heart className="h-8 w-8 text-primary" />,
        title: 'Creativity',
        description: 'We foster a creative environment where unique solutions to complex problems can flourish.'
    },
    {
        icon: <Shield className="h-8 w-8 text-primary" />,
        title: 'Trust',
        description: 'We build lasting relationships with our clients based on transparency and reliability.'
    }
]

const AboutHero = () => {
    const [icons, setIcons] = useState<React.ReactNode[]>([]);
    const techIcons = [Code, Database, GitBranch, Wind, Rocket];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const generatedIcons = [...techIcons, ...techIcons, ...techIcons, ...techIcons, ...techIcons].map((Icon, index) => {
                const sizeClass = ['w-12 h-12', 'w-16 h-16', 'w-20 h-20'][index % 3];
                const leftPosition = `${(index * (100 / techIcons.length) + (Math.random() - 0.5) * 5) % 95}%`;
                const delay = Math.random() * 10;
                const duration = 5 + Math.random() * 5;
                
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
                    opacity: [0, 0.8, 0.8, 0],
                    y: '100vh'
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
             <div className="absolute inset-0 bg-grid-pattern opacity-5" />
             <div className="absolute inset-0 z-10 top-[-20%]">
                {icons.length > 0 && icons}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="text-primary">We Are </span>
                        <span className="text-accent">Daki</span>
                        <span className="text-foreground">Techs</span>
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl">
                        A passionate team of innovators, creators, and problem-solvers dedicated to building the future of digital technology and empowering the next generation of developers.
                    </p>
                    <div className="mt-8">
                        <Button size="lg" asChild className="shadow-lg">
                            <Link href="/contact">
                                Connect with Our Team <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};


const RotatingAcademySkills = () => {
    const skills = [
        { name: 'HTML & CSS', icon: <Code className="h-10 w-10" /> },
        { name: 'JavaScript', icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="currentColor">JS</text></svg> },
        { name: 'React', icon: <svg width="40" height="40" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2.05" fill="currentColor" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg> },
        { name: 'Next.js', icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="currentColor">N</text></svg> },
        { name: 'Node.js', icon: <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,5 95,27.5 95,72.5 50,95 5,27.5 5,27.5" stroke="currentColor" strokeWidth="5" fill="none" /><text x="50" y="55" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="currentColor">JS</text></svg> },
        { name: 'MySQL', icon: <Database className="h-10 w-10" /> },
        { name: 'Express', icon: <Wind className="h-10 w-10" /> },
        { name: 'Git', icon: <GitBranch className="h-10 w-10" /> },
    ];

    const radius = 150;
    const center = 175;
    const time = useTime();
    const rotate = useTransform(time, [0, 30000], [0, 360], { clamp: false });
    const reverseRotate = useTransform(time, [0, 30000], [0, -360], { clamp: false });

    return (
        <div className="relative w-[350px] h-[350px] flex items-center justify-center">
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{ rotate }}
            >
                {skills.map((skill, i) => {
                    const angle = (i / skills.length) * 2 * Math.PI;
                    const x = center + radius * Math.cos(angle);
                    const y = center + radius * Math.sin(angle);

                    return (
                        <motion.div
                            key={skill.name}
                            className="absolute w-20 h-20"
                            style={{ top: y - 40, left: x - 40 }}
                            whileHover={{ scale: 1.2 }}
                            title={skill.name}
                        >
                            <motion.div 
                                className="w-20 h-20 bg-background rounded-full flex items-center justify-center shadow-md text-primary p-2"
                                style={{ rotate: reverseRotate }}
                            >
                                {skill.icon}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
            <div className="relative flex h-40 w-40 flex-col items-center justify-center rounded-full bg-primary/10 text-center">
                <p className="font-headline text-2xl font-bold text-primary">Daki</p>
                <p className="font-headline text-2xl font-bold text-accent">Academy</p>
            </div>
        </div>
    )
}

const AcademyCTA = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Empowering the Next Generation</h2>
            <p className="text-foreground/80 text-lg">
              Beyond building great products, we're committed to building great developers. Daki Academy is our initiative to train and mentor aspiring tech talent, equipping them with the skills to succeed in the modern digital landscape.
            </p>
            <p className="text-foreground/80 text-lg">
              Our flagship Full-Stack Web Development program offers hands-on, project-based learning to prepare students for real-world challenges.
            </p>
            <Button size="lg" asChild>
                <Link href="/academy">
                    Explore the Academy <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
          </div>
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
              <RotatingAcademySkills />
          </motion.div>
        </div>
      </div>
    </section>
  )
}


const JoinTeamCTA = () => {
    return (
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
                Want to Join Our Team?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed">
                We're always looking for passionate and talented individuals to join us. Check out our open positions and become part of our journey.
              </p>
            </motion.div>
            <motion.div
              className="mx-auto w-full max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105">
                <Link href="/careers">View Careers</Link>
              </Button>
            </motion.div>
          </div>
        </section>
    )
}

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <main>
        {/* Story Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="text-foreground/80 text-lg">
                  Founded in 2020, DakiTechs began with a simple mission: to make high-quality technology solutions accessible to businesses of all sizes. What started as a small team of passionate developers has grown into a full-service digital agency serving clients worldwide.
                </p>
                <p className="text-foreground/80 text-lg">
                  Through the years, we've held firm to our core belief that technology should be a tool for empowerment. We're proud of the partnerships we've built and the impact our work has had on the growth and success of our clients.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-headline text-2xl font-bold">Vision &amp; Mission</h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-semibold text-lg text-primary">Our Vision</h4>
                        <p className="text-foreground/80">To be a leading force in digital innovation, creating solutions that shape a smarter and more connected world.</p>
                    </div>
                     <div>
                        <h4 className="font-semibold text-lg text-primary">Our Mission</h4>
                        <p className="text-foreground/80">To empower businesses with intelligent, reliable, and custom-built digital solutions, fostering growth and success through technology and partnership.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyValues.map(value => (
                    <div key={value.title} className="text-center">
                        <div className="inline-block bg-background p-4 rounded-full shadow-md">
                           {value.icon}
                        </div>
                        <h3 className="font-headline mt-4 text-xl font-bold">{value.title}</h3>
                        <p className="mt-2 text-foreground/80">{value.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>
        
        <AcademyCTA />

        <JoinTeamCTA />

      </main>
    </div>
  );
}
