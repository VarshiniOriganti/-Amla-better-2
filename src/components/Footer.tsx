
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-alma-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Alma Better</h3>
            <p className="text-gray-400 mb-4">
              Leading tech education platform with guaranteed job opportunities. Learn from industry experts and become job-ready.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
              <a href="#" className="text-gray-400 hover:text-alma-red" aria-label="Facebook">FB</a>
              <a href="#" className="text-gray-400 hover:text-alma-red" aria-label="Twitter">TW</a>
              <a href="#" className="text-gray-400 hover:text-alma-red" aria-label="Instagram">IG</a>
              <a href="#" className="text-gray-400 hover:text-alma-red" aria-label="LinkedIn">LI</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses/certification" className="text-gray-400 hover:text-alma-red">
                  Certification Programs
                </Link>
              </li>
              <li>
                <Link to="/courses/masters-degree" className="text-gray-400 hover:text-alma-red">
                  Master's Degree
                </Link>
              </li>
              <li>
                <Link to="/masterclass" className="text-gray-400 hover:text-alma-red">
                  Masterclass
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us/log" className="text-gray-400 hover:text-alma-red">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/placements/success-stories" className="text-gray-400 hover:text-alma-red">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/hire-from-us" className="text-gray-400 hover:text-alma-red">
                  Hire From Us
                </Link>
              </li>
              <li>
                <Link to="/practice/tutorials" className="text-gray-400 hover:text-alma-red">
                  Learning Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Email: info@almabetter.com
              </li>
              <li className="text-gray-400">
                Phone: +91 1234567890
              </li>
              <li className="text-gray-400">
                Bengaluru, Karnataka, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Alma Better. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-alma-red text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-alma-red text-sm">
                Terms of Service
              </Link>
              <Link to="/refund-policy" className="text-gray-400 hover:text-alma-red text-sm">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
