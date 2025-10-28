
'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Gem, Heart, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { team } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
    return (
        <section className="relative w-full h-dvh min-h-[700px] flex items-center justify-center bg-primary/5 overflow-hidden">
             <div className="absolute inset-0 bg-grid-pattern opacity-5" />
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


const TeamSection = () => {
    return (
        <section className="py-12 md:py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-12">Meet Our Leaders</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member) => {
                         const memberImage = PlaceHolderImages.find((p) => p.id === member.imageId);
                         return (
                            <motion.div
                                key={member.id}
                                className="relative overflow-hidden rounded-lg shadow-lg group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                            >
                                {memberImage && (
                                    <Image
                                        src={memberImage.imageUrl}
                                        alt={member.name}
                                        width={400}
                                        height={500}
                                        className="object-cover w-full h-96 transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={memberImage.imageHint}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="font-headline text-xl font-bold text-white">{member.name}</h3>
                                    <p className="text-primary-foreground/80">{member.role}</p>
                                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-2 transition-all duration-300">
                                         <p className="text-sm text-primary-foreground/90">{member.bio}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
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
        
        <TeamSection />

        <JoinTeamCTA />

      </main>
    </div>
  );
}
