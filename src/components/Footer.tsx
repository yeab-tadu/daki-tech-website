import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/">
              <Logo className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-foreground/80">
              Empowering Businesses with Smart Digital Solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground/60 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-headline font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-foreground/80 hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-foreground/80 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-headline font-semibold text-foreground">Explore</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/services" className="text-sm text-foreground/80 hover:text-primary">Services</Link></li>
              <li><Link href="/academy" className="text-sm text-foreground/80 hover:text-primary">Academy</Link></li>
              <li><Link href="/portfolio" className="text-sm text-foreground/80 hover:text-primary">Portfolio</Link></li>
              <li><Link href="/faq" className="text-sm text-foreground/80 hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-headline font-semibold text-foreground">Stay Updated</h3>
            <p className="mt-4 text-sm text-foreground/80">Subscribe to our newsletter for the latest tech insights and company news.</p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} DakiTechs. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
