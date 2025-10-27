import type { Service, Project, Testimonial, TeamMember, BlogPost, Job, FAQ } from './types';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Crafting responsive, high-performance websites tailored to your business needs.',
    longDescription: 'Our web development services focus on creating beautiful, functional, and user-friendly websites. We use modern technologies like React, Next.js, and Node.js to build everything from simple landing pages to complex web applications. Our process ensures your site is optimized for performance, search engines, and accessibility.',
    imageId: 'service-web',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Building intuitive and engaging mobile apps for iOS and Android platforms.',
    longDescription: 'We design and develop native and cross-platform mobile applications that provide seamless user experiences. Whether you need an app for your startup or a complex enterprise solution, our team has the expertise to deliver a high-quality product that meets your goals and engages your users.',
    imageId: 'service-mobile',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Leveraging the power of the cloud for scalable, secure, and efficient infrastructure.',
    longDescription: 'Our cloud solutions help you optimize your IT infrastructure, improve scalability, and reduce costs. We offer services including cloud migration, architecture design, and managed services for platforms like AWS, Google Cloud, and Azure, ensuring your business is ready for the future.',
    imageId: 'service-cloud',
  },
  {
    id: 'custom-systems',
    title: 'Custom Systems',
    description: 'Designing bespoke software systems to solve your unique business challenges.',
    longDescription: 'When off-the-shelf software doesn\'t fit, we build custom systems tailored to your specific requirements. From CRM and ERP systems to specialized internal tools, we deliver solutions that streamline your operations and provide a competitive advantage.',
    imageId: 'service-custom',
  },
  {
    id: 'digital-business-card',
    title: 'Digital Business Card',
    description: 'Modern, interactive digital business cards to elevate your networking.',
    longDescription: 'Make a lasting impression with a dynamic digital business card. Share your contact information, social media links, and portfolio with a single tap. Our designs are customizable, eco-friendly, and perfect for the modern professional.',
    imageId: 'service-bizcard',
  },
  {
    id: 'graphics-design',
    title: 'Graphics Design',
    description: 'Creating stunning visuals that define your brand and captivate your audience.',
    longDescription: 'Our graphics design team creates compelling visual identities, including logos, branding guidelines, marketing materials, and UI assets. We focus on creating a cohesive and memorable brand image that resonates with your target audience.',
    imageId: 'service-design',
  },
  {
    id: 'training-workshops',
    title: 'Training & Workshops',
    description: 'Empowering your team with the latest technology skills and knowledge.',
    longDescription: 'We offer customized training and workshops for corporate teams and individuals. Our expert-led sessions cover a wide range of topics, from specific programming languages to agile development methodologies, helping your team stay ahead of the curve.',
    imageId: 'service-training',
  },
  {
    id: 'ux-ui-design',
    title: 'UX/UI Design',
    description: 'Designing intuitive and beautiful interfaces that users love.',
    longDescription: 'Our UX/UI design process is centered around the user. We conduct research, create wireframes and prototypes, and perform user testing to design products that are not only visually appealing but also easy and enjoyable to use. We aim to create interfaces that drive engagement and conversion.',
    imageId: 'service-uxui',
  },
  {
    id: 'it-support',
    title: 'IT Support',
    description: 'Reliable and responsive IT support to keep your business running smoothly.',
    longDescription: 'Our IT support services provide peace of mind, knowing that your technology infrastructure is in good hands. We offer remote and on-site support, network monitoring, and cybersecurity services to prevent issues before they impact your business.',
    imageId: 'service-it',
  },
];

export const projects: Project[] = [
  {
    id: 'proj-bms',
    title: 'Building Management System',
    description: 'A comprehensive system for managing building operations, including facilities, maintenance, and tenant services.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'MQTT'],
    imageId: 'project-bms',
  },
  {
    id: 'proj-menu',
    title: 'Digital Menu System',
    description: 'An interactive digital menu for restaurants, allowing for easy updates and QR code access.',
    technologies: ['Vue.js', 'Firebase', 'QR Code'],
    imageId: 'project-menu',
  },
  {
    id: 'proj-bizcard',
    title: 'Digital Business Card',
    description: 'A modern, eco-friendly digital business card platform for professionals and businesses.',
    technologies: ['Next.js', 'Vercel', 'NFC'],
    imageId: 'project-bizcard',
  },
  {
    id: 'proj-sms',
    title: 'School Management System',
    description: 'An all-in-one platform to manage student information, grades, attendance, and parent communication.',
    technologies: ['Angular', 'Express', 'MongoDB', 'Socket.io'],
    imageId: 'project-sms',
  },
  {
    id: 'proj-hms',
    title: 'Hotel Management System',
    description: 'A complete solution for hotel operations, from booking and reservations to guest services and billing.',
    technologies: ['React', 'Django', 'MySQL', 'Stripe'],
    imageId: 'project-hms',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Alex Johnson',
    role: 'CEO, Innovate Inc.',
    testimonial: 'DakiTechs transformed our online presence. Their team was professional, creative, and delivered beyond our expectations. Highly recommended!',
    imageId: 'testimonial-1',
  },
  {
    id: 'test-2',
    name: 'Samantha Lee',
    role: 'Founder, Creative Co.',
    testimonial: 'The custom system DakiTechs built for us has streamlined our operations and saved us countless hours. They are true problem-solvers.',
    imageId: 'testimonial-3',
  },
  {
    id: 'test-3',
    name: 'David Chen',
    role: 'Marketing Director, GrowthWell',
    testimonial: 'Working with DakiTechs on our mobile app was a fantastic experience. The final product is polished, user-friendly, and has received great feedback.',
    imageId: 'testimonial-2',
  },
];

export const whyChooseUs: { title: string; description: string }[] = [
  {
    title: 'Innovation',
    description: 'We leverage the latest technologies to deliver cutting-edge solutions that drive growth and efficiency.',
  },
  {
    title: 'Reliability',
    description: 'Our robust development process ensures high-quality, dependable products you can count on.',
  },
  {
    title: 'Support',
    description: 'We provide ongoing support and maintenance to ensure your systems run smoothly.',
  },
  {
    title: 'Client-Centric',
    description: 'Your success is our priority. We work closely with you to understand your goals and deliver tailored solutions.',
  },
  {
    title: 'Expert Team',
    description: 'Our team of skilled professionals brings years of industry experience and passion to every project.',
  },
  {
    title: 'Transparent Communication',
    description: 'We believe in open and honest communication, keeping you informed every step of the way.',
  },
];

export const team: TeamMember[] = [
  {
    id: 'team-1',
    name: 'John Doe',
    role: 'Founder & CEO',
    bio: 'With over 15 years in the tech industry, John leads DakiTechs with a passion for innovation and a commitment to client success.',
    imageId: 'team-1',
  },
  {
    id: 'team-2',
    name: 'Jane Smith',
    role: 'Chief Technology Officer',
    bio: 'Jane is the architectural mastermind behind our solutions, ensuring every project is built on a foundation of quality and scalability.',
    imageId: 'team-2',
  },
  {
    id: 'team-3',
    name: 'Mike Johnson',
    role: 'Head of Development',
    bio: 'Mike leads our talented team of developers, fostering a culture of collaboration and continuous learning to deliver top-tier products.',
    imageId: 'team-3',
  },
  {
    id: 'team-4',
    name: 'Sarah Williams',
    role: 'Lead UX/UI Designer',
    bio: 'Sarah combines creativity with user-centric design principles to create interfaces that are both beautiful and intuitive.',
    imageId: 'team-4',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'the-future-of-web-development-in-2024',
    title: 'The Future of Web Development in 2024',
    excerpt: 'Explore the emerging trends shaping the future of web development, from AI-powered tools to the rise of serverless architectures.',
    content: '<p>The web development landscape is in a constant state of flux. As we move further into 2024, several key trends are emerging that promise to reshape how we build and interact with websites and applications...</p>',
    author: 'Jane Smith',
    date: '2024-05-15',
    category: 'Tech Trends',
    imageId: 'blog-1',
  },
  {
    id: 'post-2',
    slug: 'a-deep-dive-into-react-server-components',
    title: 'A Deep Dive into React Server Components',
    excerpt: 'Understand the power of React Server Components and how they can drastically improve the performance of your Next.js applications.',
    content: '<p>React Server Components (RSC) are a new paradigm in React development, allowing developers to write components that run exclusively on the server. This has profound implications for performance, bundle size, and data fetching...</p>',
    author: 'Mike Johnson',
    date: '2024-05-10',
    category: 'Web Development',
    imageId: 'blog-2',
  },
  {
    id: 'post-3',
    slug: 'design-thinking-for-developers',
    title: 'Design Thinking for Developers',
    excerpt: 'Learn how to incorporating design thinking principles into your development workflow can lead to better, more user-centric products.',
    content: '<p>Design thinking is not just for designers. This human-centered approach to problem-solving can be a game-changer for development teams, fostering empathy for users and leading to more innovative and successful products...</p>',
    author: 'Sarah Williams',
    date: '2024-05-05',
    category: 'Design',
    imageId: 'blog-3',
  },
];

export const jobs: Job[] = [
    {
        id: 'job-1',
        title: 'Senior Full-Stack Engineer',
        description: 'We are looking for an experienced Full-Stack Engineer to join our growing team. You will be responsible for building and maintaining web applications for our clients.',
        requirements: ['5+ years of experience with React and Node.js', 'Proficiency in TypeScript', 'Experience with cloud platforms (AWS, GCP)', 'Strong problem-solving skills'],
        location: 'Remote'
    },
    {
        id: 'job-2',
        title: 'UX/UI Designer',
        description: 'We are seeking a talented UX/UI Designer to create amazing user experiences. The ideal candidate will have a strong portfolio of design projects.',
        requirements: ['3+ years of experience in UX/UI design', 'Proficiency in Figma, Sketch, or Adobe XD', 'Strong understanding of user-centered design principles', 'Excellent visual design skills'],
        location: 'On-site, New York'
    }
];

export const faqs: FAQ[] = [
    {
        id: 'faq-g-1',
        question: 'What is DakiTechs?',
        answer: 'DakiTechs is a full-service digital technology company specializing in software development, IT solutions, and professional training.',
        category: 'General'
    },
    {
        id: 'faq-g-2',
        question: 'Where are you located?',
        answer: 'Our main office is in New York, but we operate with a distributed team and serve clients globally.',
        category: 'General'
    },
    {
        id: 'faq-s-1',
        question: 'How long does a typical project take?',
        answer: 'The timeline for a project varies depending on its scope and complexity. A simple website might take 4-6 weeks, while a complex custom system could take 6 months or more. We provide a detailed timeline after the initial discovery phase.',
        category: 'Services'
    },
    {
        id: 'faq-s-2',
        question: 'How do you price your services?',
        answer: 'We offer both fixed-price and time-and-materials pricing models, depending on the project. We provide a detailed quote with a full breakdown of costs before any work begins.',
        category: 'Services'
    },
    {
        id: 'faq-a-1',
        question: 'What is the duration of the Full-Stack course?',
        answer: 'Our intensive Full-Stack Web Development course is a 6-month program designed to take you from beginner to job-ready developer.',
        category: 'Academy'
    },
     {
        id: 'faq-a-2',
        question: 'Do you offer job placement assistance?',
        answer: 'Yes, we provide career support services to our graduates, including resume building, interview preparation, and connections with our network of hiring partners.',
        category: 'Academy'
    },
    {
        id: 'faq-p-1',
        question: 'What payment methods do you accept?',
        answer: 'We accept payments via bank transfer, credit card, and PayPal. For academy courses, we also offer installment plans.',
        category: 'Payment'
    },
    {
        id: 'faq-t-1',
        question: 'Do you provide ongoing support after a project is completed?',
        answer: 'Yes, we offer various support and maintenance packages to ensure your application remains secure, up-to-date, and running smoothly.',
        category: 'Technical Support'
    }
]
