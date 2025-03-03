import Image from 'next/image';
import Link from 'next/link';
import { 
  FacebookIcon, 
  TwitterIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  MapPinIcon, 
  PhoneIcon, 
  MailIcon 
} from 'lucide-react';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon = ({ href, icon }: SocialIconProps) => (
  <a 
    href={href} 
    className="text-primary hover:text-primary-dark transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center md:items-start justify-center md:justify-start space-x-3">
              <Image 
                src="/csi_logo.png" 
                alt="CSI Logo" 
                width={60} 
                height={60} 
                className="bg-white rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold mb-1 text-primary">CSI SRMIST</h3>
                <p className="text-sm text-primary font-medium">Delhi-NCR Campus</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Empowering technology enthusiasts and fostering innovation since 1955.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/#about" className="text-gray-600 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/#faculty" className="text-gray-600 hover:text-primary transition-colors">Faculty</Link></li>
              <li><Link href="/#events" className="text-gray-600 hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/team" className="text-gray-600 hover:text-primary transition-colors">Team</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  SRMIST, Delhi-NCR Campus, Delhi-Meerut Road, Modinagar, Ghaziabad, Uttar Pradesh 201204
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 text-primary mr-2" />
                <a href="tel:+911234567890" className="text-gray-600 text-sm hover:text-primary transition-colors">
                  +91 1234567890
                </a>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 text-primary mr-2" />
                <a href="mailto:csi@srmist.edu.in" className="text-gray-600 text-sm hover:text-primary transition-colors">
                  csi@srmist.edu.in
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <SocialIcon href="#" icon={<FacebookIcon className="w-6 h-6" />} />
              <SocialIcon href="#" icon={<TwitterIcon className="w-6 h-6" />} />
              <SocialIcon href="#" icon={<LinkedinIcon className="w-6 h-6" />} />
              <SocialIcon href="#" icon={<InstagramIcon className="w-6 h-6" />} />
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Stay updated with our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                />
                <button className="px-4 py-2 text-sm text-white bg-primary hover:bg-primary-dark rounded-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <p className="text-sm text-gray-600 mb-2 md:mb-0">
                © {new Date().getFullYear()} Computer Society of India - SRMIST Delhi-NCR Campus.
              </p>
              <div className="flex space-x-6 md:ml-6">
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Made by ❤️ </span>
              <Link 
                href="/coreTeam" 
                className="text-sm text-primary hover:text-primary-dark underline transition-colors"
              >
                <b>Dev Team</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}