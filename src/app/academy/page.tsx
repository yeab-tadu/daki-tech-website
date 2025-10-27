'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Testimonials from '@/components/Testimonials';
import { testimonials } from '@/lib/data';
import { Calendar, Users, Briefcase, FileText, MessageSquare, Award, ArrowRight, Lightbulb, Target, Code, Wind, Rocket, Database, GitBranch, PlugZap, Router, User, BrainCircuit, Projector } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const coursePhases = [
    {
        phase: 1,
        title: "HTML, CSS & Bootstrap",
        description: "Master the fundamental building blocks of the web. You'll learn to structure web pages with HTML and style them with modern CSS and Bootstrap.",
        icons: [
            <svg key="html" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 42L9.2 6H38.8L35.6 42L24 48L6 42Z" fill="#E34F26"/><path d="M24 9V44.5L35.6 41.5L38.4 9H24Z" fill="#F16529"/><path d="M24 22V15.5H32.4L32 22H24Z" fill="#EBEBEB"/><path d="M24 33.5V27H31.6L31.1 33.5L24 35.5V33.5Z" fill="#EBEBEB"/><path d="M16.4 15.5H24V22H15.6L16.4 15.5Z" fill="#EBEBEB"/><path d="M17.2 31.5L16.8 27H24V33.5L17.2 31.5Z" fill="#EBEBEB"/></svg>,
            <svg key="css" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.2 6L6 42L24 48L42 42L38.8 6H9.2Z" fill="#1572B6"/><path d="M24 9V44.5L35.6 41.5L38.4 9H24Z" fill="#33A9DC"/><path d="M24 15.5H32L31.6 22H24V15.5Z" fill="white"/><path d="M24 27H31.2L30.7 33.5L24 35.5V27Z" fill="white"/><path d="M16.4 15.5H24V22H15.6L16.4 15.5Z" fill="#EBEBEB"/><path d="M16.8 27H24V33.5L17.2 31.5L16.8 27Z" fill="#EBEBEB"/></svg>,
            <svg key="bootstrap" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="8" fill="#7952B3"/><path d="M34 16.5V31.5C34 33 33 34 31.5 34H16.5C15 34 14 33 14 31.5V16.5C14 15 15 14 16.5 14H31.5C33 14 34 15 34 16.5ZM22.5 19.5C22.5 18.5 23.5 18 24.5 18H28.5C29.5 18 30.5 18.5 30.5 19.5V21C30.5 22 29.5 22.5 28.5 22.5H24.5C23.5 22.5 22.5 22 22.5 21V19.5ZM22.5 25.5C22.5 24.5 23.5 24 24.5 24H28.5C29.5 24 30.5 24.5 30.5 25.5V27C30.5 28 29.5 28.5 28.5 28.5H24.5C23.5 28.5 22.5 28 22.5 27V25.5Z" fill="white"/></svg>
        ]
    },
    {
        phase: 2,
        title: "Programming with JavaScript and DOM Manipulation",
        description: "Dive deep into the web's most popular language. Master variables, functions, async programming, and how to dynamically interact with web pages.",
        icons: [
            <svg key="js" width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="#F7DF1E"/><path d="M22.5 34.5H28.5V30H22.5V34.5ZM22.5 25.5H28.5V21H22.5V25.5ZM33 34.5C33.8 34.5 34.5 33.8 34.5 33V22.5C34.5 21.7 33.8 21 33 21H30L33 18H28.5V13.5H22.5V21H25.5L22.5 24H18C17.2 24 16.5 24.7 16.5 25.5V30C16.5 30.8 17.2 31.5 18 31.5H22.5V34.5H18C17.2 34.5 16.5 35.2 16.5 36V37.5H34.5V36C34.5 35.2 33.8 34.5 33 34.5Z" fill="#000000"/></svg>
        ]
    },
    {
        phase: 3,
        title: "React(Vite), Node, MySQL, Express",
        description: "Build powerful full-stack applications. You'll learn to create interactive frontends with React and robust backends with Node.js, Express, and MySQL.",
        icons: [
            <svg key="react" width="48" height="48" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2.05" fill="#61DAFB" /><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>,
            <svg key="node" width="48" height="48" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke="#68A063" strokeWidth="5" fill="#8CC84B" /><text x="50" y="55" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="#3C873A">JS</text></svg>,
            <Database key="mysql" className="w-12 h-12 text-[#00758F]" />,
            <Wind key="express" className="w-12 h-12 text-foreground" />
        ]
    },
    {
        phase: 4,
        title: "Fullstack Projects",
        description: "Apply everything you've learned by building complete, portfolio-ready projects from scratch, simulating a real-world development environment.",
        icons: [ <Projector key="projects" className="w-16 h-16 text-primary" /> ]
    }
];


const initialWhyChooseUs = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Project-Based Learning',
    description: 'Build a portfolio of real-world projects, giving you the confidence and experience to impress employers.'
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Expert Instructors',
    description: 'Learn from industry veterans who bring years of real-world experience and passion to the classroom.'
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Career Support',
    description: 'From resume workshops to interview prep, we provide dedicated support to help you land your dream job.'
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: 'Vibrant Community',
    description: 'Join a supportive network of peers, mentors, and alumni who will help you throughout your journey.'
  }
];

type WhyChooseUsItem = typeof initialWhyChooseUs[0];


const whoIsThisFor = [
    {
        icon: <Target className="h-8 w-8 text-accent" />,
        title: 'Career Changers',
        description: 'Individuals looking to transition into a rewarding and high-demand career in technology.'
    },
    {
        icon: <Lightbulb className="h-8 w-8 text-accent" />,
        title: 'Absolute Beginners',
        description: 'No prior coding experience? No problem. Our curriculum is designed to take you from zero to hero.'
    },
    {
        icon: <ArrowRight className="h-8 w-8 text-accent" />,
        title: 'Aspiring Entrepreneurs',
        description: 'Gain the skills to build your own web applications and bring your business ideas to life.'
    },
]

const applicationSteps = [
    { icon: <FileText />, title: "Submit Application", description: "Fill out our simple online form to get started." },
    { icon: <MessageSquare />, title: "Initial Interview", description: "A short, non-technical chat to get to know you and your goals." },
    { icon: <Calendar />, title: "Technical Assessment", description: "A practical assessment to gauge your problem-solving abilities." },
    { icon: <Award />, title: "Final Decision", description: "Successful candidates will receive an enrollment offer." }
]


const upcomingBatches = [
  { id: 1, name: 'Summer 2024 Batch', startDate: 'July 15, 2024', status: 'Open' },
  { id: 2, name: 'Fall 2024 Batch', startDate: 'October 7, 2024', status: 'Opening Soon' },
];

const academySkills = [
  { name: 'HTML & CSS', icon: <Code className="h-10 w-10" /> },
  { name: 'JavaScript', icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="currentColor">JS</text></svg> },
  { name: 'Node.js', icon: <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke="currentColor" strokeWidth="5" fill="none" /><text x="50" y="55" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="currentColor">JS</text></svg> },
  { name: 'Express.js', icon: <Wind className="h-10 w-10" /> },
  { name: 'React.js', icon: <svg width="40" height="40" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2.05" fill="currentColor" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg> },
  { name: 'Next.js', icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="30" fontWeight="bold" fill="currentColor">N</text></svg> },
  { name: 'MySQL', icon: <Database className="h-10 w-10" /> },
  { name: 'Git', icon: <GitBranch className="h-10 w-10" /> },
  { name: 'REST API', icon: <PlugZap className="h-10 w-10" /> },
  { name: 'Deployment', icon: <Rocket className="h-10 w-10" /> },
];

const AcademyHero = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
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
                {isMounted && [...academySkills, ...academySkills, ...academySkills].map((skill, index) => {
                    const sizeClass = ['w-12 h-12', 'w-16 h-16', 'w-20 h-20'][index % 3];
                    const leftPosition = `${(index * (100 / academySkills.length) + (Math.random() - 0.5) * 5) % 95}%`;
                    const delay = Math.random() * 10;
                    const duration = 5 + Math.random() * 5;
                    
                    return (
                        <FloatingIcon 
                            key={`${skill.name}-${index}`}
                            icon={React.cloneElement(skill.icon as React.ReactElement, { className: "w-full h-full" })}
                            className={sizeClass}
                            delay={delay}
                            duration={duration}
                            style={{ left: leftPosition, top: '-20%' }}
                        />
                    )
                })}
            </div>

            <div ref={containerRef} className="container mx-auto px-4 md:px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="text-primary">Become a </span>
                        <span className="text-accent">Full-Stack</span>
                        <span className="text-foreground"> Developer</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl">
                        Your journey to a rewarding career in tech starts here. Learn the skills to build modern web applications from the ground up in our intensive 6-month program.
                    </p>
                    <div className="mt-8">
                        <Button size="lg" asChild className="shadow-lg">
                            <Link href="/contact?subject=Academy+Application">
                                Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

const WhyChooseUsMarquee = () => {
  const [shuffledItems1, setShuffledItems1] = useState<WhyChooseUsItem[]>([]);
  const [shuffledItems2, setShuffledItems2] = useState<WhyChooseUsItem[]>([]);

  useEffect(() => {
    const shuffle = (array: WhyChooseUsItem[]) => [...array].sort(() => Math.random() - 0.5);
    setShuffledItems1(shuffle(initialWhyChooseUs));
    setShuffledItems2(shuffle(initialWhyChooseUs));
  }, []);

  const MarqueeRow = ({ items, duration, direction = 1 }: { items: WhyChooseUsItem[], duration: number, direction?: 1 | -1 }) => {
    if (!items || items.length === 0) return null;

    const xAnimation = direction === 1 ? ["0%", "-100%"] : ["-100%", "0%"];
    
    return (
      <motion.div
        className="flex gap-8 py-4"
        animate={{ x: xAnimation }}
        transition={{
          ease: 'linear',
          duration: duration,
          repeat: Infinity,
        }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {[...items, ...items].map((item, index) => (
          <div key={`${item.title}-${index}`} className="flex-shrink-0 w-[300px]">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 h-full">
              <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="font-headline text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-foreground/80 text-sm">{item.description}</p>
            </Card>
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="w-full overflow-hidden relative space-y-4 py-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <MarqueeRow items={shuffledItems1} duration={40} />
      <MarqueeRow items={shuffledItems2} duration={50} direction={-1} />
    </div>
  );
};

const CoursePhases = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    const activePhase = coursePhases[activeTab];

    return (
        <section className="py-12 md:py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-12">What You'll Learn</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="relative">
                        <div className="flex flex-col gap-2">
                            {coursePhases.map((phase, index) => (
                                <button
                                    key={phase.phase}
                                    ref={(el) => (tabRefs.current[index] = el)}
                                    onClick={() => setActiveTab(index)}
                                    className={`text-left p-4 rounded-lg transition-colors duration-300 relative ${
                                        activeTab === index ? 'bg-primary/10' : 'hover:bg-primary/5'
                                    }`}
                                >
                                    <p className="font-bold text-lg font-headline text-primary">Phase {phase.phase}</p>
                                    <p className={`font-semibold ${activeTab === index ? 'text-foreground' : 'text-foreground/80'}`}>{phase.title}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="p-6 rounded-lg bg-primary/5 min-h-[300px]"
                        >
                            <Badge variant="default" className="mb-4">Phase {activePhase.phase}</Badge>
                            <h3 className="font-headline text-2xl font-bold text-primary">{activePhase.title}</h3>
                            <p className="text-foreground/80 mt-2 mb-6">{activePhase.description}</p>
                            
                            <h4 className="font-semibold text-lg mb-4">Technologies Covered:</h4>
                             <div className="flex items-center gap-4 flex-wrap">
                                {activePhase.icons.map((icon, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        className="bg-background p-3 rounded-full shadow-md"
                                    >
                                        {icon}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function AcademyPage() {
  const academyTestimonials = testimonials.filter(t => t.role.includes('Student') || t.id === 'test-2');

  return (
    <div>
      <AcademyHero />
      <main>
        
        {/* Course Details Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">The Full-Stack Web Development Program</h2>
                <p className="text-foreground/80 text-lg">
                  Our flagship course is an intensive, project-based program designed to equip you with the in-demand skills needed to become a successful full-stack web developer. You'll learn by doing, building a portfolio of real-world projects that showcase your abilities to potential employers.
                </p>
                <p className="text-foreground/80 text-lg">
                  With expert instructors, a supportive community, and a curriculum that's constantly updated to reflect industry trends, Daki Academy is the perfect place to launch your tech career.
                </p>
                 <Button size="lg" asChild>
                    <Link href="/contact?subject=Academy+Application">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="grid gap-6">
                 <Card>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <Calendar className="h-8 w-8 text-primary" />
                        <CardTitle className="font-headline">Course Structure</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p><strong className="font-semibold">Duration:</strong> 6 Months</p>
                        <p><strong className="font-semibold">Schedule:</strong> 3 live classes per week (online)</p>
                        <p><strong className="font-semibold">Commitment:</strong> 15-20 hours/week recommended</p>
                         <p><strong className="font-semibold">Price:</strong> $5,000 USD (Installment plans available)</p>
                    </CardContent>
                 </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Daki Academy Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-6">Why Choose Daki Academy?</h2>
            <WhyChooseUsMarquee />
          </div>
        </section>

        {/* Modules Section */}
        <CoursePhases />

        {/* Who Is This Course For? Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
                 <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-12">Is This Program For You?</h2>
                 <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {whoIsThisFor.map(person => (
                         <motion.div 
                            key={person.title} 
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                         >
                            <div className="bg-background p-3 rounded-full shadow-md mt-1">
                                {person.icon}
                            </div>
                            <div>
                                <h3 className="font-headline text-xl font-bold">{person.title}</h3>
                                <p className="text-foreground/80 mt-1">{person.description}</p>
                            </div>
                        </motion.div>
                    ))}
                 </div>
            </div>
        </section>
        
        {/* Upcoming Batches Section */}
        <section className="py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-12">Upcoming Batches</h2>
                <div className="max-w-3xl mx-auto">
                    {upcomingBatches.map(batch => (
                        <Card key={batch.id} className="mb-4 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-center">
                                <div className="mb-4 sm:mb-0">
                                    <h3 className="font-headline text-xl font-bold">{batch.name}</h3>
                                    <p className="text-foreground/80 flex items-center gap-2 mt-1"><Calendar className="h-4 w-4" /> Starts: {batch.startDate}</p>
                                </div>
                                 <Button disabled={batch.status !== 'Open'} asChild>
                                    <Link href="/contact?subject=Academy+Application">
                                        {batch.status === 'Open' ? 'Enroll Now' : 'Notify Me'}
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Application Process Section */}
         <section className="py-12 md:py-24 lg:py-32 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl mb-12">How to Apply</h2>
                 <div className="max-w-4xl mx-auto relative">
                     <div className="absolute left-1/2 top-8 bottom-8 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
                     {applicationSteps.map((step, index) => (
                        <div key={step.title} className={`flex items-start md:items-center gap-6 md:gap-12 mb-12 md:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            <div className="flex-shrink-0 bg-background p-4 rounded-full shadow-lg z-10">
                                <div className="bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center">
                                   {React.cloneElement(step.icon, { className: "h-6 w-6" })}
                                </div>
                            </div>
                            <div className={`space-y-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                <p className="text-sm text-accent font-semibold">Step {index + 1}</p>
                                <h3 className="font-headline text-2xl font-bold">{step.title}</h3>
                                <p className="text-foreground/80">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                     <Button size="lg" asChild>
                        <Link href="/contact?subject=Academy+Application">Start Your Application <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </div>
        </section>

        {/* Testimonials */}
        {academyTestimonials.length > 0 && (
          <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="font-headline text-3xl font-bold tracking-tighter text-center sm:text-4xl">
                Success Stories from Our Graduates
              </h2>
              <div className="mt-12">
                <Testimonials testimonials={academyTestimonials} />
              </div>
            </div>
          </section>
        )}

      </main>
    </div>
  );
}
