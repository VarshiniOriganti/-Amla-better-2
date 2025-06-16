
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 left-0 right-0 w-full z-50 bg-white shadow-md py-3 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-alma-red">Alma Better</span>
            </Link>
            {/* Home Button */}
            <Link to="/" className="ml-4">
              <Button variant="ghost">Home</Button>
            </Link>

            {/* Course Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Courses <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white w-48">
                <DropdownMenuItem>
                  <Link to="/courses/certification" className="w-full">Certification</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/courses/masters-degree" className="w-full">Master's Degree</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Placements Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Placements <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white w-48">
                <DropdownMenuItem>
                  <Link to="/placements/success-stories" className="w-full">Success Stories</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/placements/placements" className="w-full">Placements</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Masterclass */}
            <Link to="/masterclass">
              <Button variant="ghost">Masterclass</Button>
            </Link>

            {/* Practice Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Practice <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white w-48">
                <DropdownMenuItem>
                  <Link to="/practice/tutorials" className="w-full">Tutorials</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/practice/articles" className="w-full">Articles</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/practice/coding-problems" className="w-full">Coding Problems</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/practice/quizzes" className="w-full">Quizzes</Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Link to="/practice/online-compilers" className="w-full">Online Compilers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/practice/cheat-sheet" className="w-full">Cheat Sheet</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Hire From Us */}
            <Link to="/hire-from-us">
              <Button variant="ghost">Hire From Us</Button>
            </Link>

            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  About Us <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white w-48">
                <DropdownMenuItem>
                  <Link to="/about-us/log" className="w-full">Log</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/about-us/in-the-news" className="w-full">In the News</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sign In */}
            <Link to="/sign-in">
              <Button variant="outline" className="border-alma-red text-alma-red hover:bg-alma-red hover:text-white transition-all">Sign In</Button>
            </Link>
          </div>

          {/* Mobile Menu Button - To be expanded with a mobile menu implementation */}
          <div className="md:hidden">
            <Button variant="ghost">Menu</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
